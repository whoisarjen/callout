import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { nanoid } from "nanoid";
import { buildGoogleAuthUrl } from "@/lib/auth/google-oauth";

export async function GET(request: Request) {
  const state = nanoid(32);
  const cookieStore = await cookies();

  // Store state in cookie for CSRF protection
  cookieStore.set("oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600, // 10 minutes
    path: "/",
  });

  // Get the redirect URI
  const url = new URL(request.url);
  const redirectUri = `${url.origin}/api/auth/google/callback`;

  const authUrl = buildGoogleAuthUrl(state, redirectUri);

  redirect(authUrl);
}
