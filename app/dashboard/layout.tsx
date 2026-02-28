import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth/session";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSessionUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-neutral-950">
      <DashboardSidebar user={user} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
