"use client";

/**
 * FloatingSportsIcons — v2 (clearly visible)
 * Icons with pill/chip backgrounds, high enough opacity to be seen,
 * positioned in gutters so they never overlap content.
 */

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, Trophy, Users, Star, Target } from "lucide-react";

type LucideIcon = React.ComponentType<{
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}>;

interface FloatingIconConfig {
  Icon:      LucideIcon;
  iconSize:  number;
  top:       string;
  left?:     string;
  right?:    string;
  /** Icon colour */
  color:     string;
  /** Pill background colour (rgba) */
  bgColor:   string;
  floatY:    [number, number, number];
  rotateKF:  [number, number, number];
  duration:  number;
  delay:     number;
}

const ICONS: FloatingIconConfig[] = [
  /* ── LEFT ─────────────────────────────────────── */
  {
    Icon:     Star,
    iconSize: 20,
    top:      "15%",
    left:     "3.5%",
    color:    "#5ba30c",
    bgColor:  "rgba(126,211,33,0.12)",
    floatY:   [0, -14, 0],
    rotateKF: [-4, 4, -4],
    duration: 7,
    delay:    0,
  },
  {
    Icon:     Trophy,
    iconSize: 20,
    top:      "44%",
    left:     "4%",
    color:    "#151515",
    bgColor:  "rgba(255,255,255,0.75)",
    floatY:   [0, -12, 0],
    rotateKF: [3, -3, 3],
    duration: 9,
    delay:    1.5,
  },
  {
    Icon:     Users,
    iconSize: 20,
    top:      "72%",
    left:     "3.5%",
    color:    "#5ba30c",
    bgColor:  "rgba(126,211,33,0.12)",
    floatY:   [0, -15, 0],
    rotateKF: [-2, 5, -2],
    duration: 11,
    delay:    3,
  },
  /* ── RIGHT ────────────────────────────────────── */
  {
    Icon:     Calendar,
    iconSize: 20,
    top:      "18%",
    right:    "4%",
    color:    "#151515",
    bgColor:  "rgba(255,255,255,0.75)",
    floatY:   [0, -12, 0],
    rotateKF: [3, -3, 3],
    duration: 8,
    delay:    0.8,
  },
  {
    Icon:     MapPin,
    iconSize: 22,
    top:      "48%",
    right:    "3.5%",
    color:    "#5ba30c",
    bgColor:  "rgba(126,211,33,0.12)",
    floatY:   [0, -14, 0],
    rotateKF: [-4, 2, -4],
    duration: 10,
    delay:    2.2,
  },
  {
    Icon:     Target,
    iconSize: 20,
    top:      "72%",
    right:    "4%",
    color:    "#151515",
    bgColor:  "rgba(255,255,255,0.75)",
    floatY:   [0, -10, 0],
    rotateKF: [2, -5, 2],
    duration: 6.5,
    delay:    4,
  },
];

export default function FloatingSportsIcons() {
  const prefersReduced = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden xl:block overflow-hidden"
      style={{ zIndex: 10 }}
    >
      {ICONS.map((cfg, i) => {
        const posStyle: React.CSSProperties = {
          position:   "absolute",
          top:        cfg.top,
          willChange: "transform",
        };
        if (cfg.left  !== undefined) posStyle.left  = cfg.left;
        if (cfg.right !== undefined) posStyle.right = cfg.right;

        return (
          <motion.div
            key={i}
            style={posStyle}
            animate={
              prefersReduced ? {} : {
                y:      cfg.floatY,
                rotate: cfg.rotateKF,
              }
            }
            transition={{
              duration: cfg.duration,
              delay:    cfg.delay,
              repeat:   Infinity,
              ease:     "easeInOut",
            }}
          >
            {/* Glassmorphic Pill Chip */}
            <div
              className="flex items-center justify-center w-12 h-12 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-white/80 backdrop-blur-md transition-transform duration-300"
              style={{
                background: cfg.bgColor,
                color: cfg.color,
              }}
            >
              <cfg.Icon size={cfg.iconSize} strokeWidth={2} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
