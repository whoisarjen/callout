"use client";

import Link from "next/link";
import { ArrowRight, Github, Megaphone, CheckCircle2 } from "lucide-react";

import type { CSSProperties } from "react";

interface IconProps {
  className?: string;
  style?: CSSProperties;
}

// Platform icons as simple components
function SlackIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  );
}

function GoogleCalendarIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.79 9.106H8.421V12.7h2.105v2.09zm4.632 0h-2.106V12.7h2.106v2.09zm-4.632-4.21H8.421V8.49h2.105v2.09zm4.632 0h-2.106V8.49h2.106v2.09zM24 5.684h-5.684V0H22.1c1.05 0 1.9.85 1.9 1.9v3.784z"/>
    </svg>
  );
}

function GitHubIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function TeamsIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.625 8.073c1.688 0 3.057-1.395 3.057-3.117S22.313 1.84 20.625 1.84s-3.057 1.394-3.057 3.116c0 1.723 1.369 3.117 3.057 3.117zM12.99 8.073a3.742 3.742 0 0 0 3.71-3.756A3.742 3.742 0 0 0 12.99.561a3.742 3.742 0 0 0-3.71 3.756 3.742 3.742 0 0 0 3.71 3.756zM17.73 9.003h-.507a4.77 4.77 0 0 1-3.233 1.3 4.77 4.77 0 0 1-3.233-1.3h-.507c-1.688 0-3.057 1.394-3.057 3.116v5.873c0 .862.686 1.558 1.528 1.558h10.538c.843 0 1.528-.696 1.528-1.558V12.12c0-1.722-1.369-3.116-3.057-3.116zm5.952.78h-3.67c.62.87.986 1.942.986 3.105v5.104h3.712c.564 0 1.02-.466 1.02-1.039v-5.131c0-1.126-.917-2.04-2.048-2.04z"/>
    </svg>
  );
}

function GmailIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
    </svg>
  );
}

const platforms = [
  { name: "Slack", icon: SlackIcon, color: "#E01E5A" },
  { name: "Google Calendar", icon: GoogleCalendarIcon, color: "#4285F4" },
  { name: "GitHub", icon: GitHubIcon, color: "#ffffff" },
  { name: "Teams", icon: TeamsIcon, color: "#6264A7" },
  { name: "Gmail", icon: GmailIcon, color: "#EA4335" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Animated broadcast rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-orange-500/10 animate-broadcast" style={{ animationDelay: "0s" }} />
        <div className="absolute inset-0 w-[600px] h-[600px] rounded-full border border-orange-500/10 animate-broadcast" style={{ animationDelay: "0.5s" }} />
        <div className="absolute inset-0 w-[600px] h-[600px] rounded-full border border-orange-500/10 animate-broadcast" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="opacity-0 animate-slide-up mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Open Source & Self-hostable
            </div>
          </div>

          {/* Headline */}
          <h1 className="opacity-0 animate-slide-up delay-100 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1]">
            One place to manage{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              all your time off
            </span>
          </h1>

          {/* Subheadline */}
          <p className="opacity-0 animate-slide-up delay-200 mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Write once, sync everywhere. Declare time off once and automatically sync across Slack, Google Calendar, GitHub, Teams, and more.
          </p>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-slide-up delay-300 flex flex-col sm:flex-row items-center gap-4 mt-10">
            <Link
              href="/login"
              className="group flex items-center gap-2 px-8 py-4 text-base font-medium bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all hover:scale-105 active:scale-95 animate-pulse-glow"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://github.com/whoisarjen/callout"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 text-base font-medium bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-all hover:scale-105 active:scale-95 border border-neutral-700"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </Link>
          </div>

          {/* Trust badges */}
          <div className="opacity-0 animate-slide-up delay-400 flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>MIT License</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Self-hostable</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>No vendor lock-in</span>
            </div>
          </div>

          {/* Platform icons floating */}
          <div className="opacity-0 animate-slide-up delay-500 relative mt-20 w-full max-w-3xl h-32">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
              {/* Central megaphone */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl shadow-orange-500/30">
                <Megaphone className="w-10 h-10 text-white" />
              </div>

              {/* Platform icons orbiting */}
              {platforms.map((platform, i) => {
                const angle = (i * 360) / platforms.length - 90;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius * 0.4;

                return (
                  <div
                    key={platform.name}
                    className="absolute w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center transition-transform hover:scale-110 animate-float"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                    title={platform.name}
                  >
                    <platform.icon className="w-6 h-6" style={{ color: platform.color }} />
                  </div>
                );
              })}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                {platforms.map((platform, i) => {
                  const angle = (i * 360) / platforms.length - 90;
                  const radius = 140;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius * 0.4;

                  return (
                    <line
                      key={platform.name}
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      opacity="0.3"
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  );
}
