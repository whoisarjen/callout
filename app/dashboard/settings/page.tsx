import { getSessionUser } from "@/lib/auth/session";
import { Settings, User, Bell, Palette } from "lucide-react";

export default async function SettingsPage() {
  const user = await getSessionUser();

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Settings className="w-6 h-6 text-orange-400" />
          Settings
        </h1>
        <p className="text-neutral-400">
          Customize your Callout experience.
        </p>
      </div>

      {/* Profile section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-neutral-400" />
          Profile
        </h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-6">
            {user?.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center text-xl font-medium">
                {user?.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <p className="font-medium">{user?.name}</p>
              <p className="text-sm text-neutral-400">{user?.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Display name
              </label>
              <input
                type="text"
                defaultValue={user?.name}
                className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Timezone
              </label>
              <select className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-colors">
                <option>UTC</option>
                <option>America/New_York</option>
                <option>America/Los_Angeles</option>
                <option>Europe/London</option>
                <option>Europe/Warsaw</option>
                <option>Asia/Tokyo</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Defaults section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Palette className="w-5 h-5 text-neutral-400" />
          Defaults
        </h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Default status message
              </label>
              <input
                type="text"
                placeholder="On vacation, back soon!"
                className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <p className="text-xs text-neutral-500 mt-1">
                This message will be used when you don&apos;t specify one.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Default emoji
              </label>
              <div className="flex gap-2">
                {["palm_tree", "beach_umbrella", "airplane", "sleeping", "house"].map((emoji) => (
                  <button
                    key={emoji}
                    className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 hover:border-orange-500 transition-colors flex items-center justify-center text-lg"
                    title={emoji}
                  >
                    {emoji === "palm_tree" && "🌴"}
                    {emoji === "beach_umbrella" && "🏖️"}
                    {emoji === "airplane" && "✈️"}
                    {emoji === "sleeping" && "😴"}
                    {emoji === "house" && "🏠"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notifications section */}
      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Bell className="w-5 h-5 text-neutral-400" />
          Notifications
        </h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium">Sync confirmations</p>
                <p className="text-sm text-neutral-400">
                  Get notified when syncs complete
                </p>
              </div>
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-checked:bg-orange-500 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium">Sync failures</p>
                <p className="text-sm text-neutral-400">
                  Get notified when syncs fail
                </p>
              </div>
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-checked:bg-orange-500 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
            </label>
          </div>
        </div>
      </section>

      {/* Save button */}
      <div className="mt-8">
        <button className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors">
          Save changes
        </button>
      </div>
    </div>
  );
}
