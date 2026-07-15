"use client";

/**
 * CTAButton
 * ─────────────────────────────────────────────────────────────────
 * Enhanced primary call-to-action button wrapping the existing
 * `btn-black` design token with:
 *
 *  Idle:   Subtle `hero-cta-glow` CSS breathing animation (defined in
 *          globals.css).  Pure CSS keyframe on box-shadow — no JS loop,
 *          no layout cost.
 *
 *  Hover:  Scale 1.05 via Framer Motion whileHover on the wrapper.
 *          The shadow expands instantly via CSS hover on the Link.
 *
 *  Tap:    Scale 0.97 via Framer Motion whileTap.
 *
 *  Motion: Spring physics (stiffness 400, damping 25) for a crisp,
 *          physical feel.  No lag.
 *
 * Respects prefers-reduced-motion — all Framer scale effects are
 * disabled; the CSS glow animation is controlled by
 * `@media (prefers-reduced-motion: reduce)` in globals.css.
 */

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

// ── Props ─────────────────────────────────────────────────────────────────────

interface CTAButtonProps {
  href:       string;
  children:   React.ReactNode;
  className?: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function CTAButton({ href, children, className = "" }: CTAButtonProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="inline-block"
      style={{ borderRadius: "9999px" }}
      whileHover={prefersReduced ? {} : { scale: 1.05 }}
      whileTap={prefersReduced  ? {} : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Link
        href={href}
        className={`btn-black hero-cta-glow flex items-center gap-2 px-8 py-4 h-auto text-base ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
