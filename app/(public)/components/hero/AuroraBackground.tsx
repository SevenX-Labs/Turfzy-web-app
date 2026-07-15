"use client";

/**
 * AuroraBackground — Premium Mesh Gradient
 * ─────────────────────────────────────────────────────────────────
 * Achieves a buttery-smooth, Vercel/Stripe-tier animated mesh gradient.
 * Uses solid shapes + extreme blur + mix-blend-mode for perfect color mixing.
 */

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AuroraBackground() {
  const prefersReduced = useReducedMotion();

  // Premium color palette based around your brand lime (#59A608)
  const blobs = [
    {
      color: "#59A608", // Brand Lime
      className: "w-[45vw] h-[45vw] top-[-10%] left-[-10%]",
      animation: {
        x: ["0%", "15%", "-5%", "0%"],
        y: ["0%", "10%", "20%", "0%"],
        scale: [1, 1.1, 0.9, 1],
        rotate: [0, 90, 180, 360],
      },
      duration: 25,
    },
    {
      color: "#10B981", // Emerald Green for depth
      className: "w-[40vw] h-[40vw] top-[10%] right-[-5%]",
      animation: {
        x: ["0%", "-20%", "10%", "0%"],
        y: ["0%", "-15%", "10%", "0%"],
        scale: [1, 1.2, 0.85, 1],
        rotate: [360, 180, 90, 0],
      },
      duration: 30,
    },
    {
      color: "#84CC16", // Bright Lime for highlights
      className: "w-[50vw] h-[50vw] bottom-[-20%] left-[15%]",
      animation: {
        x: ["0%", "25%", "-15%", "0%"],
        y: ["0%", "-25%", "5%", "0%"],
        scale: [1, 0.9, 1.15, 1],
        rotate: [0, -90, -180, -360],
      },
      duration: 28,
    },
    {
      color: "#FEF08A", // Soft yellow/warm accent to make the greens pop
      className: "w-[35vw] h-[35vw] top-[30%] left-[40%]",
      animation: {
        x: ["0%", "-15%", "25%", "0%"],
        y: ["0%", "20%", "-15%", "0%"],
        scale: [0.8, 1.2, 0.9, 0.8],
        rotate: [0, 120, 240, 360],
      },
      duration: 35,
    },
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#FAFAFA]"
      style={{ zIndex: -5 }}
    >
      {/* 
        The blur wrapper: applying the blur to a container rather than individual 
        elements often performs better and creates a smoother blend.
      */}
      <div className="absolute inset-0 blur-[120px] md:blur-[160px] saturate-150 opacity-60">
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-[100%] mix-blend-multiply opacity-70 ${blob.className}`}
            style={{
              backgroundColor: blob.color,
              willChange: "transform",
              transform: "translateZ(0)", // Force GPU acceleration
            }}
            animate={
              prefersReduced
                ? {}
                : {
                    x: blob.animation.x,
                    y: blob.animation.y,
                    scale: blob.animation.scale,
                    rotate: blob.animation.rotate,
                  }
            }
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* 
        Subtle noise overlay to prevent color banding (a common issue with smooth gradients)
        This makes it look incredibly premium on high-res displays. 
      */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}