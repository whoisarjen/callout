import { cookies } from "next/headers";
import { nanoid } from "nanoid";
import { db } from "@/lib/db";
import { sessions, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

const SESSION_COOKIE_NAME = "callout_session";
const LOGGED_IN_FLAG = "callout_logged_in";
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export function generateSessionToken(): string {
  return nanoid(48);
}

export async function createSession(userId: string): Promise<string> {
  const token = generateSessionToken();
  const now = new Date();
  const expiresAt = new Date(now.getTime() + SESSION_MAX_AGE_MS);

  await db.insert(sessions).values({
    id: nanoid(),
    userId,
    token,
    expiresAt,
    createdAt: now,
  });

  return token;
}

export async function getSessionUser(): Promise<{
  id: string;
  email: string;
  name: string;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
} | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  const session = await db.query.sessions.findFirst({
    where: eq(sessions.token, token),
    with: { user: true },
  });

  if (!session) {
    return null;
  }

  // Check expiration
  if (session.expiresAt < new Date()) {
    // Clean up expired session
    await db.delete(sessions).where(eq(sessions.id, session.id));
    return null;
  }

  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name,
    avatar: session.user.avatar,
    createdAt: session.user.createdAt,
    updatedAt: session.user.updatedAt,
  };
}

export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE_MS / 1000,
    path: "/",
  });

  // Non-httpOnly flag so client JS can detect login state without an API call
  cookieStore.set(LOGGED_IN_FLAG, "1", {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE_MS / 1000,
    path: "/",
  });
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (token) {
    // Delete session from database
    await db.delete(sessions).where(eq(sessions.token, token));
  }

  cookieStore.delete(SESSION_COOKIE_NAME);
  cookieStore.delete(LOGGED_IN_FLAG);
}

export async function requireAuth(): Promise<{
  id: string;
  email: string;
  name: string;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
}> {
  const user = await getSessionUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}

// Find or create user from Google OAuth
export async function findOrCreateUser(googleUser: {
  id: string;
  email: string;
  name: string;
  picture: string;
}): Promise<string> {
  // Try to find by Google ID first
  let user = await db.query.users.findFirst({
    where: eq(users.googleId, googleUser.id),
  });

  if (user) {
    return user.id;
  }

  // Try to find by email
  user = await db.query.users.findFirst({
    where: eq(users.email, googleUser.email),
  });

  if (user) {
    // Link Google account to existing user
    await db
      .update(users)
      .set({
        googleId: googleUser.id,
        avatar: googleUser.picture,
        updatedAt: new Date(),
      })
      .where(eq(users.id, user.id));
    return user.id;
  }

  // Create new user
  const userId = nanoid();
  await db.insert(users).values({
    id: userId,
    email: googleUser.email,
    name: googleUser.name,
    googleId: googleUser.id,
    avatar: googleUser.picture,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return userId;
}
