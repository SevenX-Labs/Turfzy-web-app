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
    top:      "14%",
    left:     "3.5%",
    color:    "#65a30d",
    bgColor:  "rgba(132,204,22,0.12)",
    floatY:   [0, -12, 0],
    rotateKF: [-4, 4, -4],
    duration: 7,
    delay:    0,
  },
  {
    Icon:     Trophy,
    iconSize: 20,
    top:      "42%",
    left:     "5%",
    color:    "#374151",
    bgColor:  "rgba(55,65,81,0.07)",
    floatY:   [0, -10, 0],
    rotateKF: [3, -3, 3],
    duration: 9,
    delay:    1.5,
  },
  {
    Icon:     Users,
    iconSize: 20,
    top:      "68%",
    left:     "3%",
    color:    "#65a30d",
    bgColor:  "rgba(132,204,22,0.10)",
    floatY:   [0, -14, 0],
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
    color:    "#374151",
    bgColor:  "rgba(55,65,81,0.07)",
    floatY:   [0, -11, 0],
    rotateKF: [3, -3, 3],
    duration: 8,
    delay:    0.8,
  },
  {
    Icon:     MapPin,
    iconSize: 22,
    top:      "48%",
    right:    "3.5%",
    color:    "#65a30d",
    bgColor:  "rgba(132,204,22,0.12)",
    floatY:   [0, -13, 0],
    rotateKF: [-4, 2, -4],
    duration: 10,
    delay:    2.2,
  },
  {
    Icon:     Target,
    iconSize: 18,
    top:      "68%",
    right:    "5%",
    color:    "#16a34a",
    bgColor:  "rgba(34,197,94,0.10)",
    floatY:   [0, -9, 0],
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
      className="pointer-events-none absolute inset-0 hidden lg:block"
      style={{ zIndex: 5 }}
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
            {/* Pill chip — clearly visible but not distracting */}
            <div
              style={{
                display:      "flex",
                alignItems:   "center",
                justifyContent: "center",
                width:        "44px",
                height:       "44px",
                borderRadius: "14px",
                background:   cfg.bgColor,
                border:       `1px solid ${cfg.color}30`,
                color:        cfg.color,
                boxShadow:    `0 4px 16px ${cfg.color}18`,
                backdropFilter: "blur(6px)",
              }}
            >
              <cfg.Icon size={cfg.iconSize} strokeWidth={1.8} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
