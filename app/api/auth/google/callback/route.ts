import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { exchangeCodeForUser } from "@/lib/auth/google-oauth";
import {
  createSession,
  setSessionCookie,
  findOrCreateUser,
} from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  // Handle errors from Google
  if (error) {
    redirect(`/login?error=${error === "access_denied" ? "access_denied" : "oauth_failed"}`);
  }

  // Validate required parameters
  if (!code || !state) {
    redirect("/login?error=missing_params");
  }

  // Validate state (CSRF protection)
  const cookieStore = await cookies();
  const storedState = cookieStore.get("oauth_state")?.value;

  if (!storedState || storedState !== state) {
    redirect("/login?error=invalid_state");
  }

  // Clear the state cookie
  cookieStore.delete("oauth_state");

  try {
    // Get the redirect URI
    const redirectUri =
      process.env.GOOGLE_REDIRECT_URI ||
      `${url.origin}/api/auth/google/callback`;

    // Exchange code for user info
    const googleUser = await exchangeCodeForUser(code, redirectUri);

    // Find or create user
    const userId = await findOrCreateUser({
      id: googleUser.id,
      email: googleUser.email,
      name: googleUser.name,
      picture: googleUser.picture,
    });

    // Create session
    const token = await createSession(userId);

    // Set session cookie
    await setSessionCookie(token);

    // Redirect to dashboard
    redirect("/dashboard");
  } catch (error) {
    console.error("OAuth callback error:", error);
    redirect("/login?error=oauth_failed");
  }
}
