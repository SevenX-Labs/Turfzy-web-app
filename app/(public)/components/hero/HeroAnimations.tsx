"use client";

/**
 * HeroAnimations
 * ─────────────────────────────────────────────────────────────────
 * Centralises the stagger orchestration for the hero content column.
 *
 * Usage
 * ─────
 *   <HeroAnimations className="...">
 *     <motion.div variants={heroChildVariants}>Badge</motion.div>
 *     <motion.h1  variants={heroChildVariants}>Headline</motion.h1>
 *     ...
 *   </HeroAnimations>
 *
 * When `prefersReduced` is true the container enters `"visible"` state
 * immediately with no stagger — content is always readable.
 *
 * Animation spec
 * ──────────────
 *   Container:  staggerChildren 0.12s, delayChildren 0.05s
 *   Child:      opacity 0→1, y 30→0, duration 0.8s
 *   Easing:     cubic-bezier(0.25, 0.1, 0.25, 1) — snappy out
 */

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

// ── Exported variants (used by individual child elements in Hero.tsx) ─────────

export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren:   0.05,
    },
  },
};

export const heroChildVariants: Variants = {
  hidden: {
    opacity: 0,
    y:       30,
  },
  visible: {
    opacity: 1,
    y:       0,
    transition: {
      duration: 0.8,
      ease:     [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

// ── Props ─────────────────────────────────────────────────────────────────────

interface HeroAnimationsProps {
  children:   React.ReactNode;
  className?: string;
  style?:     React.CSSProperties;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function HeroAnimations({ children, className = "", style }: HeroAnimationsProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      variants={heroContainerVariants}
      /**
       * Skip the "hidden" initial state when the user prefers
       * reduced motion — jump straight to "visible".
       */
      initial={prefersReduced ? "visible" : "hidden"}
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
