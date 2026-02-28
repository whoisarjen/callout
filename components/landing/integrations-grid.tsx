"use client";

import { Webhook, CheckCircle2 } from "lucide-react";

// Platform icons
function SlackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  );
}

function GoogleCalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.79 9.106H8.421V12.7h2.105v2.09zm4.632 0h-2.106V12.7h2.106v2.09zm-4.632-4.21H8.421V8.49h2.105v2.09zm4.632 0h-2.106V8.49h2.106v2.09zM24 5.684h-5.684V0H22.1c1.05 0 1.9.85 1.9 1.9v3.784z"/>
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function TeamsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.625 8.073c1.688 0 3.057-1.395 3.057-3.117S22.313 1.84 20.625 1.84s-3.057 1.394-3.057 3.116c0 1.723 1.369 3.117 3.057 3.117zM12.99 8.073a3.742 3.742 0 0 0 3.71-3.756A3.742 3.742 0 0 0 12.99.561a3.742 3.742 0 0 0-3.71 3.756 3.742 3.742 0 0 0 3.71 3.756zM17.73 9.003h-.507a4.77 4.77 0 0 1-3.233 1.3 4.77 4.77 0 0 1-3.233-1.3h-.507c-1.688 0-3.057 1.394-3.057 3.116v5.873c0 .862.686 1.558 1.528 1.558h10.538c.843 0 1.528-.696 1.528-1.558V12.12c0-1.722-1.369-3.116-3.057-3.116zm5.952.78h-3.67c.62.87.986 1.942.986 3.105v5.104h3.712c.564 0 1.02-.466 1.02-1.039v-5.131c0-1.126-.917-2.04-2.048-2.04z"/>
    </svg>
  );
}

function GmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
    </svg>
  );
}

const integrations = [
  {
    name: "Slack",
    description: "Set your status with a custom emoji and message. Post to your team's #out-of-office channel automatically.",
    icon: SlackIcon,
    color: "#E01E5A",
    features: ["Status update", "Channel posting", "DND mode"],
  },
  {
    name: "Google Calendar",
    description: "Create out-of-office events that automatically decline meeting invitations during your time off.",
    icon: GoogleCalendarIcon,
    color: "#4285F4",
    features: ["OOO events", "Auto-decline", "Busy status"],
  },
  {
    name: "GitHub",
    description: "Set your GitHub status to let collaborators know you're away from your keyboard.",
    icon: GitHubIcon,
    color: "#ffffff",
    features: ["Profile status", "Custom emoji", "Limited availability"],
  },
  {
    name: "Microsoft Teams",
    description: "Update your presence status and set an out-of-office message for your colleagues.",
    icon: TeamsIcon,
    color: "#6264A7",
    features: ["Presence status", "OOO message", "Calendar sync"],
  },
  {
    name: "Gmail",
    description: "Enable vacation responder with a custom message so people know when you'll be back.",
    icon: GmailIcon,
    color: "#EA4335",
    features: ["Auto-reply", "Custom message", "Date range"],
  },
  {
    name: "Webhooks",
    description: "Connect any tool with our webhook support. Build custom integrations for your unique workflow.",
    icon: Webhook,
    color: "#f97316",
    features: ["Custom payload", "Any endpoint", "Event triggers"],
    isCustom: true,
  },
];

export function IntegrationsGrid() {
  return (
    <section id="integrations" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-orange-500 font-medium mb-4 tracking-wide uppercase text-sm">
            Integrations
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            All your tools,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              one click
            </span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            Connect the platforms you use every day. When you take time off,
            they all update together.
          </p>
        </div>

        {/* Integration cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                style={{
                  backgroundColor: `${integration.color}15`,
                  border: `1px solid ${integration.color}30`,
                }}
              >
                <integration.icon
                  className="w-7 h-7"
                  style={{ color: integration.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                {integration.name}
                {integration.isCustom && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    Extensible
                  </span>
                )}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                {integration.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {integration.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1 text-xs text-neutral-500 bg-neutral-800/50 px-2 py-1 rounded"
                  >
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${integration.color}08, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <p className="text-center text-neutral-500 text-sm mt-12">
          More integrations coming soon. Have a request?{" "}
          <a
            href="https://github.com/whoisarjen/callout/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            Let us know
          </a>
        </p>
      </div>
    </section>
  );
}
