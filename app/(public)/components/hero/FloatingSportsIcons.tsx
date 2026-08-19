"use client";

/**
 * FloatingSportsIcons — Ground Sports Edition
 * ─────────────────────────────────────────────────────────────────
 * Floating glassmorphic ground sports chips placed in the left & right
 * gutters of the hero section.
 * Features Football Turfs, Box Cricket, Tennis Courts, Badminton,
 * Stadium Floodlights & Multi-Sport Arenas.
 */

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  TurfPitchIcon,
  CricketSportIcon,
  FootballSportIcon,
  TennisSportIcon,
  BadmintonSportIcon,
  StadiumFloodlightsIcon,
  BasketballCourtIcon,
  SportIconProps,
} from "./GroundSportsIcons";

interface FloatingSportChipConfig {
  Icon: React.ComponentType<SportIconProps>;
  label: string;
  sublabel: string;
  top: string;
  left?: string;
  right?: string;
  iconColor: string;
  iconBg: string;
  accentBadge: string;
  floatY: [number, number, number];
  rotateKF: [number, number, number];
  duration: number;
  delay: number;
}

const SPORT_CHIPS: FloatingSportChipConfig[] = [
  /* ── LEFT GUTTER ─────────────────────────────────── */
  {
    Icon: TurfPitchIcon,
    label: "Football Turf",
    sublabel: "5v5 & 7v7 Pitch",
    top: "14%",
    left: "2.5%",
    iconColor: "#4e910e",
    iconBg: "rgba(126, 211, 33, 0.16)",
    accentBadge: "FIFA Certified",
    floatY: [0, -14, 0],
    rotateKF: [-3, 3, -3],
    duration: 8,
    delay: 0,
  },
  {
    Icon: CricketSportIcon,
    label: "Box Cricket",
    sublabel: "Astro Turf Pitch",
    top: "44%",
    left: "3.5%",
    iconColor: "#111111",
    iconBg: "rgba(17, 17, 17, 0.07)",
    accentBadge: "Floodlit",
    floatY: [0, -12, 0],
    rotateKF: [3, -3, 3],
    duration: 9.5,
    delay: 1.2,
  },
  {
    Icon: StadiumFloodlightsIcon,
    label: "Night Arena",
    sublabel: "High-Lux LED",
    top: "73%",
    left: "3%",
    iconColor: "#4e910e",
    iconBg: "rgba(126, 211, 33, 0.16)",
    accentBadge: "Open 24/7",
    floatY: [0, -15, 0],
    rotateKF: [-2, 4, -2],
    duration: 10,
    delay: 2.8,
  },

  /* ── RIGHT GUTTER ────────────────────────────────── */
  {
    Icon: TennisSportIcon,
    label: "Tennis & Pickleball",
    sublabel: "Synthetic Court",
    top: "16%",
    right: "3%",
    iconColor: "#111111",
    iconBg: "rgba(17, 17, 17, 0.07)",
    accentBadge: "Pro Surface",
    floatY: [0, -13, 0],
    rotateKF: [3, -3, 3],
    duration: 8.5,
    delay: 0.8,
  },
  {
    Icon: BadmintonSportIcon,
    label: "Badminton Court",
    sublabel: "Wooden / Mat Flooring",
    top: "47%",
    right: "2.5%",
    iconColor: "#4e910e",
    iconBg: "rgba(126, 211, 33, 0.16)",
    accentBadge: "Indoor AC",
    floatY: [0, -14, 0],
    rotateKF: [-3, 3, -3],
    duration: 9,
    delay: 2.1,
  },
  {
    Icon: BasketballCourtIcon,
    label: "Multi-Sport Ground",
    sublabel: "All-Weather Turf",
    top: "74%",
    right: "3.5%",
    iconColor: "#111111",
    iconBg: "rgba(17, 17, 17, 0.07)",
    accentBadge: "Instant Book",
    floatY: [0, -11, 0],
    rotateKF: [2, -4, 2],
    duration: 7.5,
    delay: 3.5,
  },
];

export default function FloatingSportsIcons() {
  const prefersReduced = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden 2xl:block overflow-hidden"
      style={{ zIndex: 10 }}
    >
      {SPORT_CHIPS.map((chip, idx) => {
        const posStyle: React.CSSProperties = {
          position: "absolute",
          top: chip.top,
          willChange: "transform",
        };
        if (chip.left !== undefined) posStyle.left = chip.left;
        if (chip.right !== undefined) posStyle.right = chip.right;

        return (
          <motion.div
            key={idx}
            style={posStyle}
            animate={
              prefersReduced
                ? {}
                : {
                    y: chip.floatY,
                    rotate: chip.rotateKF,
                  }
            }
            transition={{
              duration: chip.duration,
              delay: chip.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glassmorphic Sport Chip */}
            <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/90 shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(126,211,33,0.18)] transition-all duration-300 min-w-[175px]">
              {/* Ground Sport Icon Circle */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-black/[0.04] shadow-inner"
                style={{
                  background: chip.iconBg,
                  color: chip.iconColor,
                }}
              >
                <chip.Icon size={20} strokeWidth={2} color={chip.iconColor} />
              </div>

              {/* Label & Details */}
              <div className="text-left flex flex-col">
                <span className="text-[12px] font-extrabold text-[#111111] leading-tight">
                  {chip.label}
                </span>
                <span className="text-[10px] font-semibold text-gray-500 leading-tight mt-0.5">
                  {chip.sublabel}
                </span>
                <span className="text-[9px] font-bold text-[#4e910e] uppercase tracking-wider mt-0.5">
                  • {chip.accentBadge}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
