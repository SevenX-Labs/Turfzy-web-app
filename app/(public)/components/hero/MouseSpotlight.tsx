"use client";

/**
 * MouseSpotlight
 * ─────────────────────────────────────────────────────────────────
 * Smooth interactive radial gradient following the cursor.
 *
 * Design decisions:
 *  • Accepts the Hero's existing mouseX/mouseY MotionValues as props
 *    so both the 3D-tilt effect and the spotlight share a single
 *    onMouseMove handler without re-rendering.
 *  • Adds spring smoothing (stiffness 150, damping 22) inside this
 *    component for the spotlight — slightly softer than the raw values
 *    but still snappy enough to feel responsive.
 *  • Only activates on pointer:fine (desktop) devices via a media query
 *    check on mount — touch screens never waste resources on this.
 *  • visibility: hidden until the section has received its first
 *    mousemove event (avoids a centred blob on load).
 *  • Respects prefers-reduced-motion (skips spring, opacity → 0).
 */

import React, { useEffect, useState } from "react";
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from "framer-motion";

// ── Props ─────────────────────────────────────────────────────────────────────

interface MouseSpotlightProps {
  /** Raw mouseX MotionValue from the parent Hero section */
  mouseX: MotionValue<number>;
  /** Raw mouseY MotionValue from the parent Hero section */
  mouseY: MotionValue<number>;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function MouseSpotlight({ mouseX, mouseY }: MouseSpotlightProps) {
  const prefersReduced = useReducedMotion();

  /* Only render on fine-pointer (mouse) devices */
  const [isPointerFine, setIsPointerFine] = useState(false);
  /* Start invisible — becomes visible on first mouse move */
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    // Delay state update slightly to avoid synchronous setState inside effect warning
    setTimeout(() => {
      setIsPointerFine(mq.matches);
    }, 0);

    /* Mark active on first mouse-move so spotlight isn't centred on load */
    const onFirstMove = () => {
      setActive(true);
      window.removeEventListener("mousemove", onFirstMove);
    };
    window.addEventListener("mousemove", onFirstMove, { passive: true });
    return () => window.removeEventListener("mousemove", onFirstMove);
  }, []);

  /* Spring-smoothed position — responsive but never jittery */
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 22 });

  /**
   * 300px soft radial spotlight at 8% green tint — blends naturally
   * with the aurora blobs underneath.
   */
  const background = useMotionTemplate`radial-gradient(
    300px circle at ${smoothX}px ${smoothY}px,
    rgba(132, 204, 22, 0.08),
    transparent 80%
  )`;

  /* Don't render on touch/tablet or when reduced motion is preferred */
  if (!isPointerFine || prefersReduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      style={{
        background,
        zIndex: 2,
        willChange: "background",
        visibility: active ? "visible" : "hidden",
      }}
    />
  );
}
