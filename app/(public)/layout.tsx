import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

/**
 * Public layout — wraps all public-facing pages with Navbar + Footer.
 * The Navbar is fixed, so main content has top padding.
 */
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </>
  );
}
