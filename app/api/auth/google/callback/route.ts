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
      "https://callout.whoisarjen.com/api/auth/google/callback";

    // Exchange code for user info
    let googleUser;
    try {
      googleUser = await exchangeCodeForUser(code, redirectUri);
    } catch (e) {
      console.error("Token exchange failed:", e);
      redirect("/login?error=token_exchange_failed");
    }

    // Find or create user
    let userId;
    try {
      userId = await findOrCreateUser({
        id: googleUser.id,
        email: googleUser.email,
        name: googleUser.name,
        picture: googleUser.picture,
      });
    } catch (e) {
      console.error("User creation failed:", e);
      redirect("/login?error=user_creation_failed");
    }

    // Create session
    let token;
    try {
      token = await createSession(userId);
    } catch (e) {
      console.error("Session creation failed:", e);
      redirect("/login?error=session_creation_failed");
    }

    // Set session cookie
    await setSessionCookie(token);

    // Redirect to dashboard
    redirect("/dashboard");
  } catch (error) {
    console.error("OAuth callback error:", error);
    redirect("/login?error=oauth_failed");
  }
}
