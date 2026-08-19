"use client";

/**
 * Hero Section — Turfzy
 * ─────────────────────────────────────────────────────────────────
 * Clean, high-conversion hero section calibrated to fit within a single screen.
 */

import React, { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ── Ground Sports Vector Icons ── */
import { TurfPitchIcon } from "./hero/GroundSportsIcons";

/* ── Interaction / animation helpers ── */
import HeroAnimations, { heroChildVariants } from "./hero/HeroAnimations";
import MouseSpotlight from "./hero/MouseSpotlight";
import FloatingSportsIcons from "./hero/FloatingSportsIcons";
import TurfzyAppMockup from "./hero/TurfzyAppMockup";

export default function Hero() {
  /* ── Mouse Tracking for Parallax ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [windowDimensions, setWindowDimensions] = useState({
    width: 1200,
    height: 800,
  });

  useEffect(() => {
    const update = () =>
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-1rem)] pt-24 pb-6 md:pt-28 md:pb-8 flex flex-col justify-center items-center overflow-hidden bg-[#FAFAF6] group selection:bg-[#7ED321] selection:text-black"
    >
      {/* ══════════════════════════════════════════════════════════════════
          BACKGROUND LAYERS (Pitch Blueprint, Mesh Gradients & Spotlight)
      ══════════════════════════════════════════════════════════════════ */}

      {/* 1. Interactive Cursor Spotlight */}
      <MouseSpotlight mouseX={mouseX} mouseY={mouseY} />

      {/* 2. Floating Ground Sports Badges in Gutters (Desktop only) */}
      <FloatingSportsIcons />

      {/* 3. Fluid Ambient Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden blur-[120px] md:blur-[140px] saturate-[1.25] opacity-80 z-0">
        <motion.div
          animate={{
            x: ["0%", "10%", "-8%", "0%"],
            y: ["0%", "-8%", "10%", "0%"],
            scale: [1, 1.15, 0.95, 1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-15%] left-[-8%] w-[55vw] h-[45vw] bg-[#7ED321]/20 rounded-[100%_80%_100%_90%]"
        />
        <motion.div
          animate={{
            x: ["0%", "-12%", "8%", "0%"],
            y: ["0%", "10%", "-10%", "0%"],
            scale: [1, 0.9, 1.12, 1],
            rotate: [360, 180, 90, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-15%] right-[-8%] w-[60vw] h-[50vw] bg-emerald-400/18 rounded-[80%_100%_90%_100%]"
        />
      </div>

      {/* 4. Subtle Blueprint Turf Grid */}
      <motion.div
        className="absolute inset-[-100px] pointer-events-none opacity-35 md:opacity-45 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(126,211,33,0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(126,211,33,0.16) 1px, transparent 1px),
            radial-gradient(circle, rgba(126,211,33,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px, 48px 48px, 24px 24px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 45%, black 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 45%, black 25%, transparent 100%)",
        }}
        animate={{ x: [0, -48], y: [0, -48] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          HERO MAIN TWO-COLUMN CONTAINER
      ══════════════════════════════════════════════════════════════════ */}
      <div className="max-w-[1140px] mx-auto px-6 w-full relative z-10 my-auto">
        <HeroAnimations className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">

          {/* ── LEFT COLUMN: Text Content & CTAs ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-2.5 sm:gap-3 lg:gap-3.5">

            {/* 1. Category / Network Badge */}
            <motion.div
              variants={heroChildVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#7ED321]/50 transition-all duration-300 group/pill cursor-default"
            >
              {/* Pulsing Green Radar Beacon */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED321] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5da610]" />
              </span>

              <TurfPitchIcon size={13} color="#4e910e" strokeWidth={2.2} />
              <span className="text-[11px] sm:text-xs font-bold text-[#111111] tracking-wide">
                Sports Venue & Turf Booking
              </span>
            </motion.div>

            {/* 2. Main Headline (Single H1) */}
            <motion.h1
              variants={heroChildVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold text-[#111111] tracking-tight leading-[1.08] font-clash"
            >
              Find Your Turf. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#3a6809] to-[#7ED321]">
                Book Your Game.
              </span>
            </motion.h1>

            {/* 3. Supporting Emotional Line */}
            <motion.p
              variants={heroChildVariants}
              className="text-base sm:text-lg lg:text-xl font-bold text-[#559414] tracking-tight"
            >
              Play Without the Hassle.
            </motion.p>

            {/* 4. Short Description */}
            <motion.p
              variants={heroChildVariants}
              className="text-xs sm:text-sm md:text-[15px] text-[#4a4a4a] font-normal leading-relaxed max-w-lg"
            >
              Discover nearby sports venues, check available time slots, and reserve your game in seconds.
            </motion.p>

            {/* 5. Action Buttons (Primary & Secondary CTAs) */}
            <motion.div
              variants={heroChildVariants}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              {/* Primary CTA */}
              <Link
                href="/find-turf"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#7ED321] text-[#111111] font-extrabold text-sm sm:text-base shadow-[0_6px_20px_rgba(126,211,33,0.35)] hover:shadow-[0_10px_28px_rgba(126,211,33,0.48)] hover:bg-[#74c81b] active:scale-[0.98] transition-all duration-200 border border-lime-300/60"
              >
                <span>Find a Turf</span>
                <ArrowRight size={16} className="stroke-[2.5]" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/turf-partner"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-white/95 hover:bg-white text-[#151515] font-bold text-sm sm:text-base border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-black/20 active:scale-[0.98] transition-all duration-200"
              >
                List Your Turf
              </Link>
            </motion.div>

            {/* 6. Trust Indicators Row */}
            <motion.div
              variants={heroChildVariants}
              className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#555555] pt-0.5"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5da610]" />
                Live Availability
              </span>
              <span className="text-gray-300">·</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5da610]" />
                Secure Payments
              </span>
              <span className="text-gray-300">·</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5da610]" />
                Verified Venues
              </span>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN: Prominent Turfzy Product Mockup ── */}
          <motion.div
            variants={heroChildVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end relative w-full pt-1 lg:pt-0"
          >
            <TurfzyAppMockup />
          </motion.div>

        </HeroAnimations>
      </div>
    </section>
  );
}