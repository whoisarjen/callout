import { Link2, CheckCircle2, Plus } from "lucide-react";
import type { CSSProperties } from "react";

interface IconProps {
  className?: string;
  style?: CSSProperties;
}

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

const integrations = [
  {
    id: "slack",
    name: "Slack",
    description: "Update your status and post to channels",
    icon: SlackIcon,
    color: "#E01E5A",
    connected: false,
  },
  {
    id: "google_calendar",
    name: "Google Calendar",
    description: "Create out-of-office events",
    icon: GoogleCalendarIcon,
    color: "#4285F4",
    connected: false,
  },
  {
    id: "github",
    name: "GitHub",
    description: "Set your profile status",
    icon: GitHubIcon,
    color: "#ffffff",
    connected: false,
  },
];

export default function IntegrationsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Link2 className="w-6 h-6 text-orange-400" />
          Integrations
        </h1>
        <p className="text-neutral-400">
          Connect your accounts to sync time off automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${integration.color}15`,
                  border: `1px solid ${integration.color}30`,
                }}
              >
                <integration.icon
                  className="w-6 h-6"
                  style={{ color: integration.color }}
                />
              </div>
              {integration.connected && (
                <span className="flex items-center gap-1 text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  Connected
                </span>
              )}
            </div>

            <h3 className="font-semibold mb-1">{integration.name}</h3>
            <p className="text-sm text-neutral-400 mb-4">
              {integration.description}
            </p>

            <button
              className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${
                integration.connected
                  ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              {integration.connected ? "Manage" : "Connect"}
            </button>
          </div>
        ))}

        {/* Add webhook card */}
        <div className="bg-neutral-900 border border-dashed border-neutral-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-4">
            <Plus className="w-6 h-6 text-neutral-400" />
          </div>
          <h3 className="font-semibold mb-1">Custom Webhook</h3>
          <p className="text-sm text-neutral-400 mb-4">
            Connect any tool with webhooks
          </p>
          <button className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
            Add webhook &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
