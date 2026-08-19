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
  href: string;
  children: React.ReactNode;
  className?: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function CTAButton({ href, children, className = "" }: CTAButtonProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="inline-block"
      style={{ borderRadius: "9999px" }}
      whileHover={prefersReduced ? {} : { scale: 1.03 }}
      whileTap={prefersReduced ? {} : { scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <Link
        href={href}
        className={`inline-flex items-center justify-center gap-2.5 px-8 md:px-9 py-3.5 md:py-4 rounded-full bg-[#7ED321] text-[#111111] font-extrabold text-base md:text-lg shadow-[0_10px_30px_rgba(126,211,33,0.35)] hover:shadow-[0_16px_40px_rgba(126,211,33,0.48)] hover:bg-[#74c81b] active:scale-[0.98] transition-all duration-200 border border-lime-300/60 ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
