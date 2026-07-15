"use client";

/**
 * AnimatedGrid — v3 (Premium Blueprint Edition)
 * ─────────────────────────────────────────────────────────────────
 * Highly polished, Vercel-grade grid background.
 * Features a major grid, a minor sub-grid, intersection dots, 
 * and a mathematically perfect seamless infinite scroll.
 */

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedGrid() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      /* Expand the container so the infinite scroll translation never clips the edges */
      className="pointer-events-none absolute inset-[-100px]"
      style={{
        backgroundImage: [
          // 1. Major Grid lines (100px spacing, slightly more visible)
          "linear-gradient(to right, rgba(89,166,8,0.12) 1px, transparent 1px)",
          "linear-gradient(to bottom, rgba(89,166,8,0.12) 1px, transparent 1px)",
          
          // 2. Minor Grid subdivisions (20px spacing, very faint)
          "linear-gradient(to right, rgba(89,166,8,0.04) 1px, transparent 1px)",
          "linear-gradient(to bottom, rgba(89,166,8,0.04) 1px, transparent 1px)",
          
          // 3. Dot Matrix at intersections (20px spacing, slightly glowing)
          "radial-gradient(circle, rgba(89,166,8,0.25) 1px, transparent 1px)"
        ].join(", "),
        
        backgroundSize: [
          "100px 100px", // Major X
          "100px 100px", // Major Y
          "20px 20px",   // Minor X
          "20px 20px",   // Minor Y
          "20px 20px"    // Dots
        ].join(", "),
        
        backgroundPosition: "center center",
        
        /* 
         * Refined Radial Fade 
         * Keeps the center clear while smoothly blending out the hard edges
         */
        maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 15%, rgba(0,0,0,0.4) 50%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 15%, rgba(0,0,0,0.4) 50%, transparent 100%)",
        
        zIndex: 0,
        willChange: "transform",
      }}
      animate={
        prefersReduced ? {} : {
          // Seamless loop: Moves exactly the width of one major grid block (100px)
          x: [0, -100],
          y: [0, -100],
        }
      }
      transition={{
        duration: 30, // Smooth, slow ambient drift
        ease: "linear",
        repeat: Infinity, // Loops perfectly due to the 100px interval matching the backgroundSize
      }}
    />
  );
}