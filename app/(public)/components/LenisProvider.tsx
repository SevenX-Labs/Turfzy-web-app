"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: false, // We will manually handle requestAnimationFrame with GSAP ticker
      lerp: 0.08,     // Smoothness factor (lower is smoother/slower)
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    lenisRef.current = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Merge Lenis requestAnimationFrame into GSAP's ticker
    // This is crucial for avoiding jitter when GSAP animations are tied to scroll
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);

    // Disable GSAP lag smoothing to prevent desync during heavy frame drops
    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      // Cleanup
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
