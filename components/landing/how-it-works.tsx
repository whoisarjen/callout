"use client";

import { Link2, CalendarDays, Palmtree } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Link your accounts once. Slack, Google Calendar, GitHub, Teams - we support all the platforms you use daily.",
    icon: Link2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Schedule",
    description:
      "Create a time-off entry with your dates, message, and emoji. Set it for today or schedule it weeks in advance.",
    icon: CalendarDays,
    color: "from-orange-500 to-amber-500",
  },
  {
    number: "03",
    title: "Relax",
    description:
      "Your status updates automatically across all platforms. When you return, everything reverts back to normal.",
    icon: Palmtree,
    color: "from-green-500 to-emerald-500",
  },
];

export function HowItWorks() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-orange-500 font-medium mb-4 tracking-wide uppercase text-sm">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Three steps to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              freedom
            </span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            Stop wasting time updating multiple platforms. Let Callout handle
            the busywork while you focus on what matters.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-500">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                  />
                </div>

                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <svg
                      className="w-6 h-6 text-neutral-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
