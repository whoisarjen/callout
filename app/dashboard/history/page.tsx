import { History, CheckCircle2, XCircle, Clock } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <History className="w-6 h-6 text-orange-400" />
          Sync History
        </h1>
        <p className="text-neutral-400">
          View the history of all sync operations.
        </p>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
        <div className="p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-neutral-500" />
          </div>
          <h3 className="font-semibold mb-2">No sync history yet</h3>
          <p className="text-neutral-400 text-sm max-w-md mx-auto">
            When you schedule time off, all sync operations will appear here so
            you can track what&apos;s happening across your integrations.
          </p>
        </div>
      </div>

      {/* Example of what it would look like with data */}
      <div className="mt-8 opacity-50">
        <h2 className="text-sm font-medium text-neutral-500 mb-4">
          Preview of sync history
        </h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-4">
                  Platform
                </th>
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-4">
                  Action
                </th>
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-4">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-4">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-800">
                <td className="px-6 py-4 text-sm">Slack</td>
                <td className="px-6 py-4 text-sm text-neutral-400">
                  Status updated
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Success
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-neutral-500">
                  2 min ago
                </td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="px-6 py-4 text-sm">Google Calendar</td>
                <td className="px-6 py-4 text-sm text-neutral-400">
                  Event created
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Success
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-neutral-500">
                  2 min ago
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">GitHub</td>
                <td className="px-6 py-4 text-sm text-neutral-400">
                  Status update failed
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded-full">
                    <XCircle className="w-3 h-3" />
                    Failed
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-neutral-500">
                  5 min ago
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
