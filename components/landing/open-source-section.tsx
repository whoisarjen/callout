"use client";

import Link from "next/link";
import { Star, GitFork, Heart, Terminal } from "lucide-react";

export function OpenSourceSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-6">
              <Heart className="w-4 h-4" />
              Open Source
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Built in public,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                for the community
              </span>
            </h2>

            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Callout is MIT licensed and completely open source. Run it on
              your own infrastructure, customize it to your needs, or
              contribute to make it better for everyone.
            </p>

            {/* Stats/badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="https://github.com/whoisarjen/callout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 hover:border-neutral-600 transition-colors text-sm"
              >
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Star on GitHub</span>
              </Link>

              <Link
                href="https://github.com/whoisarjen/callout/fork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 hover:border-neutral-600 transition-colors text-sm"
              >
                <GitFork className="w-4 h-4 text-neutral-400" />
                <span>Fork</span>
              </Link>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "No vendor lock-in - your data stays yours",
                "Self-host on your own infrastructure",
                "Customize and extend to fit your workflow",
                "Active community and regular updates",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code snippet */}
          <div className="relative">
            {/* Terminal window */}
            <div className="code-block rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-neutral-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 ml-4 text-neutral-500 text-xs">
                  <Terminal className="w-3.5 h-3.5" />
                  Terminal
                </div>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="text-neutral-500"># Clone the repository</div>
                <div className="mt-1">
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-neutral-200">git clone</span>{" "}
                  <span className="text-orange-400">https://github.com/whoisarjen/callout.git</span>
                </div>

                <div className="text-neutral-500 mt-4"># Install dependencies</div>
                <div className="mt-1">
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-neutral-200">cd callout && npm install</span>
                </div>

                <div className="text-neutral-500 mt-4"># Set up environment variables</div>
                <div className="mt-1">
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-neutral-200">cp .env.example .env</span>
                </div>

                <div className="text-neutral-500 mt-4"># Initialize the database</div>
                <div className="mt-1">
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-neutral-200">npm run db:push</span>
                </div>

                <div className="text-neutral-500 mt-4"># Start the development server</div>
                <div className="mt-1">
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-neutral-200">npm run dev</span>
                </div>

                <div className="mt-4 text-green-400">
                  Ready at http://localhost:3000
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-orange-500/10 border border-orange-500/20 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
