import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/**
 * Public layout — wraps all public-facing pages with Navbar + Footer.
 * Uses native simple system cursor without artificial lag or trailing circles.
 */
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </>
  );
}
