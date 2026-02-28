"use client";

import Link from "next/link";
import { ArrowRight, Megaphone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Animated icon */}
        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 mb-8 animate-float">
          <Megaphone className="w-10 h-10 text-white" />
          {/* Broadcast rings */}
          <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/50 animate-broadcast" />
          <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/30 animate-broadcast" style={{ animationDelay: "0.5s" }} />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          Ready to take time off{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            the easy way?
          </span>
        </h2>

        <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
          Stop updating five different platforms. Connect your accounts once,
          and let Callout handle the rest.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/login"
            className="group flex items-center gap-2 px-8 py-4 text-base font-medium bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all hover:scale-105 active:scale-95"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="text-sm text-neutral-500">
            Free forever for personal use
          </p>
        </div>
      </div>
    </section>
  );
}
