"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface FootballProps {
  className?: string;
  x?: MotionValue<number> | number;
  rotation?: MotionValue<number> | number;
  scale?: MotionValue<number> | number;
  style?: React.CSSProperties;
}

export default function Football({
  className = "",
  x = 0,
  rotation = 0,
  scale = 1,
  style,
}: FootballProps) {
  return (
    <motion.div
      style={{
        x,
        rotate: rotation,
        scale,
        ...style,
      }}
      className={`relative w-16 h-16 sm:w-20 sm:h-20 pointer-events-none select-none ${className}`}
    >
      {/* ── Football 3D Sphere Vector with Realistic Lighting & Shading ── */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_12px_20px_rgba(0,0,0,0.5)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 3D Sphere Spherical Radial Lighting */}
          <radialGradient
            id="ballLight"
            cx="32%"
            cy="28%"
            r="68%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#f3f4f6" />
            <stop offset="70%" stopColor="#d1d5db" />
            <stop offset="92%" stopColor="#4b5563" />
            <stop offset="100%" stopColor="#1f2937" />
          </radialGradient>

          {/* Pentagon Patch Gradient */}
          <radialGradient
            id="patchGrad"
            cx="35%"
            cy="35%"
            r="65%"
          >
            <stop offset="0%" stopColor="#374151" />
            <stop offset="70%" stopColor="#111827" />
            <stop offset="100%" stopColor="#030712" />
          </radialGradient>
        </defs>

        {/* Base Sphere */}
        <circle cx="50" cy="50" r="46" fill="url(#ballLight)" />

        {/* Classic Hexagon / Pentagon Leather Panels & Seams */}
        {/* Center Pentagon */}
        <polygon
          points="50,34 63,44 58,59 42,59 37,44"
          fill="url(#patchGrad)"
          stroke="#111827"
          strokeWidth="1.5"
        />

        {/* Top Patch */}
        <polygon
          points="50,14 58,22 42,22"
          fill="url(#patchGrad)"
          stroke="#111827"
          strokeWidth="1.5"
        />
        {/* Top Right Patch */}
        <polygon
          points="78,28 72,40 84,46"
          fill="url(#patchGrad)"
          stroke="#111827"
          strokeWidth="1.5"
        />
        {/* Bottom Right Patch */}
        <polygon
          points="76,70 66,74 72,86"
          fill="url(#patchGrad)"
          stroke="#111827"
          strokeWidth="1.5"
        />
        {/* Bottom Left Patch */}
        <polygon
          points="24,70 34,74 28,86"
          fill="url(#patchGrad)"
          stroke="#111827"
          strokeWidth="1.5"
        />
        {/* Top Left Patch */}
        <polygon
          points="22,28 28,40 16,46"
          fill="url(#patchGrad)"
          stroke="#111827"
          strokeWidth="1.5"
        />

        {/* Seam Stitching Lines */}
        <path
          d="M50 34 L50 22 M63 44 L72 40 M58 59 L66 74 M42 59 L34 74 M37 44 L28 40"
          stroke="#1f2937"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Glossy Specular Light Reflection */}
        <ellipse
          cx="38"
          cy="28"
          rx="14"
          ry="8"
          transform="rotate(-25 38 28)"
          fill="white"
          opacity="0.35"
        />
      </svg>

      {/* Ground Ambient Contact Shadow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-3 bg-black/40 blur-sm rounded-full -z-10" />
    </motion.div>
  );
}
