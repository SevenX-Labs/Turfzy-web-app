"use client";

/**
 * Hero Section — Turfzy
 * ─────────────────────────────────────────────────────────────────
 * Premium, Linear/Vercel-grade hero.
 * Features an "alive" drifting blueprint grid, fluid organic mesh 
 * gradients (perfectly balanced density), 3D parallax tracking,
 * and floating glassmorphic sports icons.
 */

import React, { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Play, Zap, Clock, Trophy, Target, Flame, Medal, Flag, ShieldCheck } from "lucide-react";

/* ── Interaction / animation helpers ── */
import CTAButton from "./hero/CTAButton";
import HeroAnimations, { heroChildVariants } from "./hero/HeroAnimations";
import MouseSpotlight from "./hero/MouseSpotlight";
import FloatingSportsIcons from "./hero/FloatingSportsIcons";

export default function Hero() {
  /* ── Mouse Tracking for Parallax & 3D Tilt ── */
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

  // 3D Tilt for Phone
  const rotateX = useTransform(mouseY, [0, windowDimensions.height], [10, -10]);
  const rotateY = useTransform(mouseX, [0, windowDimensions.width], [-10, 10]);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  // Parallax layers (different depths for 4 floating cards)
  const x1 = useTransform(mouseX, [0, windowDimensions.width], [25, -25]);
  const y1 = useTransform(mouseY, [0, windowDimensions.height], [20, -20]);
  const springX1 = useSpring(x1, { stiffness: 100, damping: 30 });
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  const x2 = useTransform(mouseX, [0, windowDimensions.width], [-30, 30]);
  const y2 = useTransform(mouseY, [0, windowDimensions.height], [-20, 20]);
  const springX2 = useSpring(x2, { stiffness: 110, damping: 28 });
  const springY2 = useSpring(y2, { stiffness: 110, damping: 28 });

  const x3 = useTransform(mouseX, [0, windowDimensions.width], [30, -30]);
  const y3 = useTransform(mouseY, [0, windowDimensions.height], [-15, 15]);
  const springX3 = useSpring(x3, { stiffness: 90, damping: 32 });
  const springY3 = useSpring(y3, { stiffness: 90, damping: 32 });

  const x4 = useTransform(mouseX, [0, windowDimensions.width], [-25, 25]);
  const y4 = useTransform(mouseY, [0, windowDimensions.height], [25, -25]);
  const springX4 = useSpring(x4, { stiffness: 105, damping: 30 });
  const springY4 = useSpring(y4, { stiffness: 105, damping: 30 });

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative pt-24 pb-4 md:pt-28 md:pb-6 overflow-hidden bg-[#FAFAF6] flex flex-col items-center group"
    >
      {/* ══════════════════════════════════════════════════════════════════
          BACKGROUND LAYERS (Alive, Balanced, Interactive & Deep)
      ══════════════════════════════════════════════════════════════════ */}

      {/* 1. Interactive Cursor Spotlight (Flashlight Effect) */}
      <MouseSpotlight mouseX={mouseX} mouseY={mouseY} />

      {/* 2. Floating Sports Icons & Badges in Gutters */}
      <FloatingSportsIcons />

      {/* 3. Fluid Ambient Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden blur-[120px] md:blur-[140px] saturate-[1.2] opacity-80 z-0">
        <motion.div
          animate={{
            x: ["0%", "12%", "-8%", "0%"],
            y: ["0%", "-10%", "12%", "0%"],
            scale: [1, 1.18, 0.92, 1],
            rotate: [0, 90, 180, 360]
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-15%] left-[-8%] w-[60vw] h-[50vw] bg-[#7ED321]/25 rounded-[100%_80%_100%_90%]"
        />
        <motion.div
          animate={{
            x: ["0%", "-15%", "8%", "0%"],
            y: ["0%", "12%", "-12%", "0%"],
            scale: [1, 0.88, 1.15, 1],
            rotate: [360, 180, 90, 0]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-15%] right-[-8%] w-[65vw] h-[55vw] bg-emerald-400/20 rounded-[80%_100%_90%_100%]"
        />
        <motion.div
          animate={{
            x: ["0%", "10%", "-12%", "0%"],
            y: ["0%", "12%", "-6%", "0%"],
            scale: [0.9, 1.15, 0.88, 0.9]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[32%] w-[45vw] h-[45vw] bg-lime-300/15 rounded-full"
        />
        <motion.div
          animate={{
            x: ["0%", "-8%", "10%", "0%"],
            y: ["0%", "-10%", "8%", "0%"],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[10%] w-[35vw] h-[35vw] bg-teal-300/10 rounded-full"
        />
      </div>

      {/* 4. Alive Blueprint Turf Grid with Seamless Infinite Drift */}
      <motion.div
        className="absolute inset-[-100px] pointer-events-none opacity-40 md:opacity-55 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(126,211,33,0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(126,211,33,0.18) 1px, transparent 1px),
            radial-gradient(circle, rgba(126,211,33,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px, 48px 48px, 24px 24px",
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 45%, black 25%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 45%, black 25%, transparent 100%)",
        }}
        animate={{ x: [0, -48], y: [0, -48] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* 5. Subtle Turf Pitch Geometry Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden opacity-30">
        <div className="w-[680px] h-[680px] rounded-full border border-dashed border-[#7ED321]/30 flex items-center justify-center [mask-image:radial-gradient(circle,black_30%,transparent_70%)]">
          <div className="w-[420px] h-[420px] rounded-full border border-[#7ED321]/20" />
          <div className="absolute w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#7ED321]/30 to-transparent" />
        </div>
      </div>

      {/* 6. Subtle Ambient Glowing Sparkle Accents */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[22%] left-[18%] w-2 h-2 rounded-full bg-[#7ED321] shadow-[0_0_12px_#7ED321]"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[22%] w-2.5 h-2.5 rounded-full bg-lime-400 shadow-[0_0_14px_#7ED321]"
        />
        <motion.div
          animate={{ opacity: [0.15, 0.7, 0.15], scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 4.5, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[25%] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10B981]"
        />
      </div>


      {/* ══════════════════════════════════════════════════════════════════
          HERO CONTENT
      ══════════════════════════════════════════════════════════════════ */}
      <HeroAnimations className="max-w-[1000px] mx-auto px-6 w-full relative flex flex-col gap-4 md:gap-5 items-center text-center" style={{ zIndex: 20 }}>

        {/* ── Headline ── */}
        <motion.h1
          variants={heroChildVariants}
          className="text-5xl md:text-6xl lg:text-[74px] font-extrabold text-[#111111] tracking-tight leading-[1.06] font-clash"
        >
          Transform your game{" "}
          <br className="hidden md:block" />
          with Turfzy.
        </motion.h1>

        {/* ── Subtitle (High Contrast Pill) ── */}
        <motion.p
          variants={heroChildVariants}
          className="text-base md:text-lg text-[#262626] font-medium max-w-xl bg-white/90 backdrop-blur-xl py-3 px-6 md:px-7 rounded-2xl border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] leading-relaxed"
        >
          Discover quality turfs, check open game slots, and reserve your pitch in seconds. Built for local sports squads across India.
        </motion.p>

        {/* ── Primary CTA Button ── */}
        <motion.div variants={heroChildVariants} className="pt-1">
          <CTAButton href="/find-turf">
            Get Started Now
            <Play size={15} className="fill-[#111111] text-[#111111] ml-0.5" />
          </CTAButton>
        </motion.div>

        {/* ── 3D Phone Mockup & 4 Symmetrical Floating Cards Container ── */}
        <motion.div
          variants={heroChildVariants}
          className="relative w-full max-w-[900px] mt-4 mb-20 md:mb-28 flex flex-col items-center justify-center [perspective:1200px]"
        >
          {/* ── LEFT CARD 1: Top-Left (Parallax) ── */}
          <motion.div
            style={{ x: springX1, y: springY1 }}
            className="absolute -left-2 md:-left-8 lg:-left-20 top-4 md:top-12 z-20 hidden sm:block"
          >
            <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.06)] border border-white/80 flex items-center gap-3.5 hover:scale-105 transition-all duration-300 min-w-[215px]">
              <div className="w-12 h-12 bg-[#7ED321]/15 rounded-xl flex items-center justify-center shadow-inner shrink-0 border border-[#7ED321]/20">
                <Clock size={20} className="text-[#559414] stroke-[2.2]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
                  Fastest Booking
                </p>
                <p className="text-base font-extrabold text-[#111111] leading-snug mt-0.5">Under 60 Secs</p>
                <p className="text-[10px] font-bold text-[#4c8413] bg-[#7ED321]/15 border border-[#7ED321]/25 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mt-1">
                  Quick Access
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── LEFT CARD 2: Bottom-Left (Parallax) ── */}
          <motion.div
            style={{ x: springX3, y: springY3 }}
            className="absolute -left-2 md:-left-8 lg:-left-20 bottom-8 md:bottom-20 z-20 hidden sm:block"
          >
            <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.06)] border border-white/80 flex items-center gap-3.5 hover:scale-105 transition-all duration-300 min-w-[215px]">
              <div className="w-12 h-12 bg-[#7ED321]/15 rounded-xl flex items-center justify-center shadow-inner shrink-0 border border-[#7ED321]/20">
                <ShieldCheck size={20} className="text-[#559414] stroke-[2.2]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
                  Inspected Pitches
                </p>
                <p className="text-base font-extrabold text-[#111111] leading-snug mt-0.5">Quality Tested</p>
                <p className="text-[10px] font-bold text-[#4c8413] bg-[#7ED321]/15 border border-[#7ED321]/25 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mt-1">
                  Grass & Lights
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT CARD 1: Top-Right (Parallax) ── */}
          <motion.div
            style={{ x: springX2, y: springY2 }}
            className="absolute -right-2 md:-right-8 lg:-right-20 top-4 md:top-12 z-20 hidden sm:block"
          >
            <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.06)] border border-white/80 flex items-center gap-3.5 hover:scale-105 transition-all duration-300 min-w-[215px]">
              <div className="w-12 h-12 bg-[#7ED321]/15 rounded-xl flex items-center justify-center shadow-inner shrink-0 border border-[#7ED321]/20">
                <Zap size={20} className="text-[#559414] stroke-[2.2]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
                  Slot Schedule
                </p>
                <p className="text-base font-extrabold text-[#111111] leading-snug mt-0.5">Live Open Slots</p>
                <p className="text-[10px] font-bold text-[#4c8413] bg-[#7ED321]/15 border border-[#7ED321]/25 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mt-1">
                  Direct Booking
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT CARD 2: Bottom-Right (Parallax) ── */}
          <motion.div
            style={{ x: springX4, y: springY4 }}
            className="absolute -right-2 md:-right-8 lg:-right-20 bottom-8 md:bottom-20 z-20 hidden sm:block"
          >
            <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.06)] border border-white/80 flex items-center gap-3.5 hover:scale-105 transition-all duration-300 min-w-[215px]">
              <div className="w-12 h-12 bg-[#7ED321]/15 rounded-xl flex items-center justify-center shadow-inner shrink-0 border border-[#7ED321]/20">
                <Trophy size={20} className="text-[#559414] stroke-[2.2]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
                  Clear Pricing
                </p>
                <p className="text-base font-extrabold text-[#111111] leading-snug mt-0.5">No Extra Fees</p>
                <p className="text-[10px] font-bold text-[#4c8413] bg-[#7ED321]/15 border border-[#7ED321]/25 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mt-1">
                  Ground Rates
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phone mockup (3D Tilt) */}
          <motion.div
            className="relative w-full max-w-[270px] md:max-w-[280px] z-10 flex flex-col"
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="rounded-[44px] md:rounded-[48px] border-[10px] md:border-[12px] border-[#151515] bg-[#151515] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.25),0_15px_50px_rgba(126,211,33,0.2)] overflow-hidden relative aspect-[9/19.5]">
              {/* Screen Glare Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent w-full h-[150%] transform -translate-y-1/4 -rotate-12 pointer-events-none z-20" />

              <img
                src="/WhatsApp Image 2026-07-14 at 14.43.24.jpeg"
                alt="Turfzy App Screen"
                className="w-full h-full object-cover block absolute inset-0 z-10 bg-white"
              />

              {/* iPhone Dynamic Island Mockup */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-6 bg-[#151515] rounded-full z-20" />
            </div>

            {/* Soft Contact Ground Shadow under phone */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[75%] h-5 bg-black/15 blur-xl rounded-full pointer-events-none" />
          </motion.div>

          {/* Soft Glow disc directly behind phone to separate it from background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[460px] bg-[#7ED321]/15 blur-[90px] -z-10 rounded-full" />

          {/* Mobile 4-card grid view for small screens (Unified symmetry) */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-8 sm:hidden z-20">
            <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex flex-col items-start gap-1 text-left">
              <div className="w-9 h-9 bg-[#7ED321]/15 rounded-xl flex items-center justify-center border border-[#7ED321]/20">
                <Clock size={18} className="text-[#559414] stroke-[2.2]" />
              </div>
              <p className="text-[10px] font-bold text-gray-500 uppercase mt-1 tracking-wider">Fastest</p>
              <p className="text-xs font-black text-[#111111]">Under 60 Secs</p>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex flex-col items-start gap-1 text-left">
              <div className="w-9 h-9 bg-[#7ED321]/15 rounded-xl flex items-center justify-center border border-[#7ED321]/20">
                <Zap size={18} className="text-[#559414] stroke-[2.2]" />
              </div>
              <p className="text-[10px] font-bold text-gray-500 uppercase mt-1 tracking-wider">Schedule</p>
              <p className="text-xs font-black text-[#111111]">Live Slots</p>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex flex-col items-start gap-1 text-left">
              <div className="w-9 h-9 bg-[#7ED321]/15 rounded-xl flex items-center justify-center border border-[#7ED321]/20">
                <ShieldCheck size={18} className="text-[#559414] stroke-[2.2]" />
              </div>
              <p className="text-[10px] font-bold text-gray-500 uppercase mt-1 tracking-wider">Quality</p>
              <p className="text-xs font-black text-[#111111]">Tested Turf</p>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex flex-col items-start gap-1 text-left">
              <div className="w-9 h-9 bg-[#7ED321]/15 rounded-xl flex items-center justify-center border border-[#7ED321]/20">
                <Trophy size={18} className="text-[#559414] stroke-[2.2]" />
              </div>
              <p className="text-[10px] font-bold text-gray-500 uppercase mt-1 tracking-wider">Pricing</p>
              <p className="text-xs font-black text-[#111111]">Ground Rates</p>
            </div>
          </div>
        </motion.div>

      </HeroAnimations>
    </section>
  );
}