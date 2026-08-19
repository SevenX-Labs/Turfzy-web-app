import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turfzy — Book Sports Turfs & Game Slots Online",
  description:
    "Find football turfs, box cricket grounds, badminton courts, and sports venues near you. Check availability and book your game online with Turfzy.",
  keywords: [
    "sports turf booking",
    "turf booking",
    "sports turf",
    "football turf",
    "box cricket",
    "badminton courts",
    "sports venues",
    "turf near me",
    "online turf booking",
    "turf availability",
    "sports venue booking",
    "Turfzy",
  ],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/logo.png"],
    apple: [{ url: "/logo.png" }],
  },
  openGraph: {
    title: "Turfzy — Book Sports Turfs & Game Slots Online",
    description:
      "Find football turfs, box cricket grounds, badminton courts, and sports venues near you. Check availability and book your game online with Turfzy.",
    type: "website",
    locale: "en_IN",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        {/* Clash Display font from Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
