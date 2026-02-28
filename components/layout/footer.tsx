import Link from "next/link";
import { Github, Megaphone, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                <Megaphone className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">callout</span>
            </Link>
            <div className="hidden sm:block w-px h-4 bg-neutral-800" />
            <p className="text-sm text-neutral-500">
              MIT License &copy; {new Date().getFullYear()}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <Link
              href="https://github.com/whoisarjen/callout"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Link>
            <Link
              href="https://github.com/whoisarjen/callout/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Report Issue
            </Link>
            <span className="flex items-center gap-1.5 text-neutral-500">
              Made with <Heart className="w-3 h-3 text-red-500" /> by{" "}
              <Link
                href="https://github.com/whoisarjen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                whoisarjen
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
