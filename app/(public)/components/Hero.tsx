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
import { Play, Zap, Clock, Trophy, Target, Flame, Medal, Flag } from "lucide-react";

/* ── Interaction / animation helpers ── */
import CTAButton from "./hero/CTAButton";
import HeroAnimations, { heroChildVariants } from "./hero/HeroAnimations";

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

  // Parallax layers (different depths)
  const x1 = useTransform(mouseX, [0, windowDimensions.width], [30, -30]);
  const y1 = useTransform(mouseY, [0, windowDimensions.height], [30, -30]);
  const springX1 = useSpring(x1, { stiffness: 100, damping: 30 });
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  const x2 = useTransform(mouseX, [0, windowDimensions.width], [-40, 40]);
  const y2 = useTransform(mouseY, [0, windowDimensions.height], [-40, 40]);
  const springX2 = useSpring(x2, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  const x3 = useTransform(mouseX, [0, windowDimensions.width], [20, -20]);
  const y3 = useTransform(mouseY, [0, windowDimensions.height], [-20, 20]);
  const springX3 = useSpring(x3, { stiffness: 80, damping: 40 });
  const springY3 = useSpring(y3, { stiffness: 80, damping: 40 });

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-4 md:pt-40 md:pb-6 overflow-hidden bg-[#FAFAF6] flex flex-col items-center group"
    >
      {/* ══════════════════════════════════════════════════════════════════
          BACKGROUND LAYERS (Alive, Balanced & Deep)
      ══════════════════════════════════════════════════════════════════ */}

      {/* 1. Fluid Ambient Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden blur-[100px] saturate-[1.1] opacity-80 z-0">
        <motion.div
          animate={{
            x: ["0%", "10%", "-5%", "0%"],
            y: ["0%", "-10%", "10%", "0%"],
            scale: [1, 1.15, 0.9, 1],
            rotate: [0, 90, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[55vw] h-[45vw] bg-[#7ED321]/20 rounded-[100%_80%_100%_90%]"
        />
        <motion.div
          animate={{
            x: ["0%", "-15%", "5%", "0%"],
            y: ["0%", "10%", "-15%", "0%"],
            scale: [1, 0.9, 1.1, 1],
            rotate: [360, 180, 90, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[55vw] bg-emerald-400/15 rounded-[80%_100%_90%_100%]"
        />
        <motion.div
          animate={{
            x: ["0%", "10%", "-10%", "0%"],
            y: ["0%", "10%", "-5%", "0%"],
            scale: [0.95, 1.1, 0.9, 0.95]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[30%] w-[45vw] h-[45vw] bg-yellow-300/10 rounded-full"
        />
      </div>

      {/* 2. Alive Blueprint Grid */}
      <motion.div
        className="absolute inset-[-100px] pointer-events-none opacity-50 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(126,211,33,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(126,211,33,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
        animate={{ x: [0, -40], y: [0, -40] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />


      {/* ══════════════════════════════════════════════════════════════════
          HERO CONTENT
      ══════════════════════════════════════════════════════════════════ */}
      <HeroAnimations className="max-w-[1000px] mx-auto px-6 w-full relative flex flex-col gap-8 items-center text-center" style={{ zIndex: 20 }}>

        {/* ── Badge ── */}
        <motion.div
          variants={heroChildVariants}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#7ED321] shadow-[0_8px_20px_rgba(126,211,33,0.25)] hover:shadow-[0_12px_25px_rgba(126,211,33,0.35)] transition-shadow duration-300 bg-clip-padding backdrop-filter backdrop-blur-md border border-lime-400/50"
        >
          <div className="bg-white/20 p-1 rounded-full flex items-center justify-center">
            <Zap size={14} className="text-white fill-white" />
          </div>
          <span className="text-sm font-bold text-white tracking-wider uppercase mt-0.5 pr-2">
            The Future of Turf Booking
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h1
          variants={heroChildVariants}
          className="text-5xl md:text-6xl lg:text-[76px] font-extrabold text-[#151515] tracking-tight leading-[1.05] font-clash"
        >
          Transform your game{" "}
          <br className="hidden md:block" />
          with Turfzy.
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          variants={heroChildVariants}
          className="text-lg md:text-xl text-[#5C5C5C] font-medium max-w-2xl bg-white/60 backdrop-blur-md py-3 px-6 rounded-2xl border border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
        >
          Discover verified turfs, see live slot availability, and book your
          game in seconds. Your ultimate sports companion.
        </motion.p>

        {/* ── CTA ── */}
        <motion.div variants={heroChildVariants}>
          <CTAButton href="/find-turf">
            Get Started Now{" "}
            <Play size={14} className="fill-white ml-1" />
          </CTAButton>
        </motion.div>

        {/* ── 3D Phone Mockup Container ── */}
        <motion.div
          variants={heroChildVariants}
          className="relative w-full max-w-[900px] mb-32 flex justify-center [perspective:1200px]"
        >
          {/* Floating stat card 1 — top-left (Parallax) */}
          <motion.div
            style={{ x: springX1, y: springY1 }}
            className="absolute -left-4 md:-left-12 top-10 md:top-20 z-20 hidden sm:block"
          >
            <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-white/60 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#7ED321]/15 rounded-full flex items-center justify-center shadow-inner">
                <Clock size={20} className="text-[#63a71b]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Fastest Booking
                </p>
                <p className="text-lg font-black text-[#151515]">Under 60 Secs</p>
              </div>
            </div>
          </motion.div>

          {/* Floating stat card 2 — bottom-right (Parallax) */}
          <motion.div
            style={{ x: springX2, y: springY2 }}
            className="absolute -right-4 md:-right-12 bottom-20 md:bottom-32 z-20 hidden sm:block"
          >
            <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-white/60 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#7ED321]/15 rounded-full flex items-center justify-center shadow-inner">
                <Zap size={20} className="text-[#63a71b]" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#151515]">Instant Booking</p>
                <p className="text-[10px] font-bold text-[#5a9c14] bg-[#7ED321]/20 px-2 py-0.5 rounded uppercase tracking-wider inline-block mt-0.5">
                  Live Slots
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phone mockup (3D Tilt) */}
          <motion.div
            className="relative w-full max-w-[280px] z-10 flex flex-col"
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="rounded-[44px] md:rounded-[48px] border-[10px] md:border-[12px] border-[#151515] bg-[#151515] shadow-[0_40px_100px_-20px_rgba(126,211,33,0.3)] overflow-hidden relative aspect-[9/19.5]">
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
          </motion.div>

          {/* Soft Glow disc directly behind phone to separate it from background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[450px] bg-white/80 blur-[80px] -z-10 rounded-full" />
        </motion.div>

      </HeroAnimations>
    </section>
  );
}