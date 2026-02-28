import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BeambackWidget } from "@/components/BeambackWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Callout - One place to manage all your time off",
  description:
    "Write once, sync everywhere. Declare time off once and automatically sync across Slack, Google Calendar, GitHub, Teams, and more.",
  metadataBase: new URL("https://callout.whoisarjen.com"),
  openGraph: {
    title: "Callout - One place to manage all your time off",
    description:
      "Write once, sync everywhere. Declare time off once and automatically sync across Slack, Google Calendar, GitHub, Teams, and more.",
    url: "https://callout.whoisarjen.com",
    siteName: "Callout",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Callout - One place to manage all your time off",
    description:
      "Write once, sync everywhere. Declare time off once and automatically sync across all your platforms.",
  },
  keywords: [
    "time off",
    "vacation",
    "PTO",
    "out of office",
    "slack status",
    "google calendar",
    "github status",
    "automation",
    "open source",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BeambackWidget />
      </body>
    </html>
  );
}
