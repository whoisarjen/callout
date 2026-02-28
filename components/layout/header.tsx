"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Github, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Megaphone className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-orange-500/50 animate-broadcast opacity-0 group-hover:opacity-100" />
            </div>
            <span className="text-xl font-bold tracking-tight">callout</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#integrations"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Integrations
            </Link>
            <Link
              href="https://github.com/whoisarjen/callout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm text-neutral-300 hover:text-white transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/login"
              className="px-5 py-2.5 text-sm font-medium bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-64 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-neutral-800">
            <Link
              href="#features"
              className="text-neutral-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#integrations"
              className="text-neutral-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link
              href="https://github.com/whoisarjen/callout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Link>
            <div className="flex gap-3 pt-2">
              <Link
                href="/login"
                className="flex-1 px-4 py-2.5 text-sm text-center text-neutral-300 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/login"
                className="flex-1 px-4 py-2.5 text-sm font-medium text-center bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop blur bar */}
      <div className="absolute inset-0 -z-10 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50" />
    </header>
  );
}
