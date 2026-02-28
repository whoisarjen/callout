import { getSessionUser } from "@/lib/auth/session";
import { CalendarDays, Palmtree, Plus, Clock } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const user = await getSessionUser();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {user?.name.split(" ")[0]}
        </h1>
        <p className="text-neutral-400">
          Manage your time off and keep everyone in the loop.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button className="flex items-center gap-4 p-6 bg-orange-500 hover:bg-orange-600 rounded-2xl transition-colors text-left group">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <Palmtree className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Take today off</h3>
            <p className="text-sm text-orange-100">
              Quick action for immediate time off
            </p>
          </div>
        </button>

        <button className="flex items-center gap-4 p-6 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl transition-colors text-left">
          <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center">
            <Plus className="w-6 h-6 text-neutral-400" />
          </div>
          <div>
            <h3 className="font-semibold">Schedule time off</h3>
            <p className="text-sm text-neutral-400">
              Plan your vacation in advance
            </p>
          </div>
        </button>
      </div>

      {/* Calendar placeholder */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-orange-400" />
            <h2 className="font-semibold">February 2026</h2>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors">
              &larr; Prev
            </button>
            <button className="px-3 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors">
              Next &rarr;
            </button>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="py-2 text-neutral-500 font-medium"
            >
              {day}
            </div>
          ))}
          {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
            <button
              key={day}
              className={`py-3 rounded-lg transition-colors ${
                day === 28
                  ? "bg-orange-500 text-white"
                  : "hover:bg-neutral-800 text-neutral-300"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming time off */}
      <div className="mt-8">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-neutral-400" />
          Upcoming time off
        </h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
          <p className="text-neutral-400 mb-4">
            No upcoming time off scheduled.
          </p>
          <button className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
            Schedule your first time off &rarr;
          </button>
        </div>
      </div>

      {/* Integrations status */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Connected integrations</h2>
          <Link
            href="/dashboard/integrations"
            className="text-sm text-orange-400 hover:text-orange-300 transition-colors"
          >
            Manage &rarr;
          </Link>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
          <p className="text-neutral-400 mb-4">
            No integrations connected yet.
          </p>
          <Link
            href="/dashboard/integrations"
            className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
          >
            Connect your first integration &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
