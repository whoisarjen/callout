"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Megaphone, AlertCircle } from "lucide-react";
import { Suspense } from "react";

const errorMessages: Record<string, string> = {
  access_denied: "Sign-in was cancelled.",
  oauth_failed: "Google sign-in failed. Please try again.",
  invalid_state: "Sign-in session expired. Please try again.",
  missing_params: "Something went wrong. Please try again.",
};

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const errorMessage = error ? errorMessages[error] || "An error occurred." : null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
              <Megaphone className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">callout</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-center mb-2">Welcome back</h1>
          <p className="text-neutral-400 text-center mb-8">
            Sign in to manage your time off
          </p>

          {/* Error message */}
          {errorMessage && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{errorMessage}</span>
            </div>
          )}

          {/* Google sign in button */}
          <a
            href="/api/auth/google"
            className="flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-900 font-medium rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <GoogleIcon className="w-5 h-5" />
            Continue with Google
          </a>

          <p className="text-neutral-500 text-xs text-center mt-6">
            By signing in, you agree to our terms of service and privacy policy.
          </p>
        </div>

        {/* Back link */}
        <p className="text-center mt-6">
          <Link
            href="/"
            className="text-neutral-400 hover:text-white transition-colors text-sm"
          >
            &larr; Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-neutral-950">
        <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center animate-pulse">
          <Megaphone className="w-6 h-6 text-white" />
        </div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
