"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  Link2,
  History,
  Settings,
  Megaphone,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Calendar", icon: CalendarDays },
  { href: "/dashboard/integrations", label: "Integrations", icon: Link2 },
  { href: "/dashboard/history", label: "History", icon: History },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

interface DashboardSidebarProps {
  user: {
    name: string;
    email: string;
    avatar: string | null;
  };
}

export function DashboardSidebar({ user }: DashboardSidebarProps) {
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  };

  return (
    <aside className="w-64 h-screen bg-neutral-900 border-r border-neutral-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-neutral-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center">
            <Megaphone className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold">callout</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors",
                    isActive
                      ? "bg-orange-500/10 text-orange-400"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-neutral-800">
        <div className="flex items-center gap-3 mb-4">
          {user.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-sm font-medium">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user.name}</p>
            <p className="text-xs text-neutral-500 truncate">{user.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
