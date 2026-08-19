import React from "react";

import Hero             from "./components/Hero";
import About            from "./components/About";
import HowItWorks       from "./components/HowItWorks";
import WhyChoose        from "./components/WhyChoose";
import Features         from "./components/Features";

import FAQ              from "./components/FAQ";
import CTA              from "./components/CTA";

/**
 * Turfzy Landing Page
 * Redesigned for SaaS clean aesthetic.
 */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <WhyChoose />
      <Features />

      <FAQ />
      <CTA />
    </>
  );
}
