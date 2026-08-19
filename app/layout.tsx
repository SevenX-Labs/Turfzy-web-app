import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turfzy – Book Sports Turfs in Seconds",
  description:
    "Turfzy is the fastest way to discover nearby sports turfs, book available slots instantly, and pay securely online. Available across 15+ cities in India.",
  keywords: ["sports turf booking", "cricket ground booking", "football turf", "Turfzy", "book turf online"],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/logo.png"],
    apple: [
      { url: "/logo.png" },
    ],
  },
  openGraph: {
    title: "Turfzy – Book Sports Turfs in Seconds",
    description: "Discover nearby sports turfs, book instantly, pay securely.",
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
