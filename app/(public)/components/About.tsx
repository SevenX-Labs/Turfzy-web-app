"use client";

/**
 * About Section — Turfzy
 * ─────────────────────────────────────────────────────────────────
 * 100% Fail-Safe 3-Column Layout:
 * - Left Column: Card 01 & Card 02 stacked vertically with clean gap.
 * - Center Column: 3D Phone Target inside green orbital ring path.
 * - Right Column: Card 03 centered vertically.
 * 68px guaranteed clear distance between cards and phone on both sides.
 */

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { APP_URLS } from "../constants";

interface Pillar {
  number: string;
  badge: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: string;
  subtitle: string;
  description: string;
  actionText: string;
  href: string;
  isExternal?: boolean;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    badge: "PLAYER FIRST",
    icon: Target,
    title: "Bring Players Back to Pitch",
    subtitle: "Less calling. Less waiting. More playing.",
    description: "Digital booking replacing scattered calls and manual coordination.",
    actionText: "Explore Player Experience",
    href: APP_URLS.customerWeb,
    isExternal: true,
  },
  {
    number: "02",
    badge: "OWNER SUCCESS",
    icon: TrendingUp,
    title: "Help Venues Run Better",
    subtitle: "Turn empty slots into profit.",
    description: "Digital tools for slot pricing, availability, and bookings.",
    actionText: "Explore Owner Tools",
    href: APP_URLS.ownerWeb,
    isExternal: true,
  },
  {
    number: "03",
    badge: "STANDARDIZED QUALITY",
    icon: ShieldCheck,
    title: "Know What You're Booking",
    subtitle: "Clear info before game day.",
    description: "Full clarity on surface type, floodlighting, amenities, and standards.",
    actionText: "See Venue Standards",
    href: "#why-turfzy",
    isExternal: false,
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-40px" });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-[#FAFAF6] py-10 sm:py-12 md:py-16 overflow-visible border-b border-black/[0.05] selection:bg-[#7ED321] selection:text-black"
    >
      {/* ── Background Subtle Dotted Grid Accent ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(126,211,33,0.18) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Soft Ambient Green Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#7ED321]/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ══════════════════════════════════════════════════════════════════
            1. SECTION HEADER (Clean & Professional)
        ══════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-6 md:mb-8 flex flex-col items-center"
        >
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] shadow-sm mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7ED321]" />
            <span className="text-[10px] font-black text-[#151515] tracking-widest uppercase">
              ABOUT TURFZY
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] font-clash tracking-tight leading-[1.12] mb-2.5">
            Building a better way to play. <br className="hidden sm:block" />
            <span className="text-[#7ED321]">
              For India&apos;s sports community.
            </span>
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#555555] font-medium leading-relaxed max-w-xl">
            Turfzy connects players with sports venues and gives venue owners a simpler way to manage their business.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════════
            2. BULLETPROOF 3-COLUMN FLEX LAYOUT (ZERO CARD OVERLAPS)
        ══════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:flex flex-row items-center justify-between gap-6 max-w-6xl mx-auto my-2 w-full">

          {/* ── LEFT COLUMN: CARD 01 & CARD 02 STACKED VERTICALLY ── */}
          <div className="flex flex-col gap-4 w-[260px] sm:w-[280px] lg:w-[310px] shrink-0 z-30">
            
            {/* CARD 01: PLAYER FIRST */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-black/[0.08] shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(126,211,33,0.14)] hover:border-[#7ED321]/50 transition-all duration-200 group flex items-start gap-3 text-left w-full relative overflow-hidden"
            >
              <div className="w-9 h-9 rounded-full bg-[#7ED321]/15 text-[#4c8413] border border-[#7ED321]/30 flex items-center justify-center shrink-0 group-hover:bg-[#7ED321] group-hover:text-black transition-all duration-200 mt-0.5">
                <Target size={16} strokeWidth={2.2} />
              </div>

              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[9px] font-extrabold text-[#5da610] uppercase tracking-wider">
                    01 · {PILLARS[0].badge}
                  </span>
                  <a href={PILLARS[0].href} target="_blank" rel="noopener noreferrer" className="text-[#5da610] hover:text-black shrink-0">
                    <ArrowRight size={11} className="stroke-[2.5]" />
                  </a>
                </div>
                <h3 className="text-xs font-extrabold text-[#111] font-clash leading-snug mb-0.5 whitespace-normal">
                  {PILLARS[0].title}
                </h3>
                <p className="text-[10px] text-[#555] leading-relaxed whitespace-normal">
                  {PILLARS[0].description}
                </p>
              </div>
            </motion.div>

            {/* CARD 02: OWNER SUCCESS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-black/[0.08] shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(126,211,33,0.14)] hover:border-[#7ED321]/50 transition-all duration-200 group flex items-start gap-3 text-left w-full relative overflow-hidden"
            >
              <div className="w-9 h-9 rounded-full bg-[#7ED321]/15 text-[#4c8413] border border-[#7ED321]/30 flex items-center justify-center shrink-0 group-hover:bg-[#7ED321] group-hover:text-black transition-all duration-200 mt-0.5">
                <TrendingUp size={16} strokeWidth={2.2} />
              </div>

              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[9px] font-extrabold text-[#5da610] uppercase tracking-wider">
                    02 · {PILLARS[1].badge}
                  </span>
                  <a href={PILLARS[1].href} target="_blank" rel="noopener noreferrer" className="text-[#5da610] hover:text-black shrink-0">
                    <ArrowRight size={11} className="stroke-[2.5]" />
                  </a>
                </div>
                <h3 className="text-xs font-extrabold text-[#111] font-clash leading-snug mb-0.5 whitespace-normal">
                  {PILLARS[1].title}
                </h3>
                <p className="text-[10px] text-[#555] leading-relaxed whitespace-normal">
                  {PILLARS[1].description}
                </p>
              </div>
            </motion.div>

          </div>

          {/* ── MIDDLE COLUMN: ORBIT RING & 3D PHONE TARGET SLOT ── */}
          <div className="flex flex-col items-center justify-center relative w-[240px] sm:w-[270px] lg:w-[300px] h-[390px] lg:h-[430px] shrink-0">
            
            {/* Circular Dashed Orbit Ring Path */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] sm:w-[320px] lg:w-[350px] aspect-square rounded-full border border-dashed border-[#7ED321]/40 pointer-events-none flex items-center justify-center">
              <div className="absolute top-[8%] left-[15%] w-3.5 h-3.5 rounded-full bg-[#7ED321] shadow-[0_0_10px_#7ED321] border-2 border-white" />
              <div className="absolute bottom-[8%] left-[15%] w-3.5 h-3.5 rounded-full bg-[#7ED321] shadow-[0_0_10px_#7ED321] border-2 border-white" />
              <div className="absolute top-1/2 right-[1%] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#7ED321] shadow-[0_0_10px_#7ED321] border-2 border-white" />
            </div>

            {/* Target Slot for Single Global 3D Phone */}
            <div
              id="about-phone-target"
              className="w-[165px] sm:w-[180px] lg:w-[195px] aspect-[9/18.8] z-20 pointer-events-none"
            />
          </div>

          {/* ── RIGHT COLUMN: CARD 03 CENTERED VERTICALLY ── */}
          <div className="flex flex-col justify-center w-[260px] sm:w-[280px] lg:w-[310px] shrink-0 z-30">
            
            {/* CARD 03: STANDARDIZED QUALITY */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-black/[0.08] shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(126,211,33,0.14)] hover:border-[#7ED321]/50 transition-all duration-200 group flex items-start gap-3 text-left w-full relative overflow-hidden"
            >
              <div className="w-9 h-9 rounded-full bg-[#7ED321]/15 text-[#4c8413] border border-[#7ED321]/30 flex items-center justify-center shrink-0 group-hover:bg-[#7ED321] group-hover:text-black transition-all duration-200 mt-0.5">
                <ShieldCheck size={16} strokeWidth={2.2} />
              </div>

              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[9px] font-extrabold text-[#5da610] uppercase tracking-wider">
                    03 · {PILLARS[2].badge}
                  </span>
                  <a href={PILLARS[2].href} className="text-[#5da610] hover:text-black shrink-0">
                    <ArrowRight size={11} className="stroke-[2.5]" />
                  </a>
                </div>
                <h3 className="text-xs font-extrabold text-[#111] font-clash leading-snug mb-0.5 whitespace-normal">
                  {PILLARS[2].title}
                </h3>
                <p className="text-[10px] text-[#555] leading-relaxed whitespace-normal">
                  {PILLARS[2].description}
                </p>
              </div>
            </motion.div>

          </div>

        </div>

        {/* MOBILE FALLBACK LAYOUT */}
        <div className="md:hidden flex flex-col items-center gap-3.5 my-4">
          <div className="grid grid-cols-1 gap-3 w-full">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl p-4 border border-black/10 shadow-sm text-left flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[#7ED321]/15 text-[#5da610] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={15} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[9px] font-extrabold text-[#5da610] uppercase tracking-wider block mb-0.5">
                      {pillar.number} · {pillar.badge}
                    </span>
                    <h3 className="text-xs font-extrabold text-[#111] font-clash leading-snug mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-[#555] leading-relaxed mb-2">{pillar.description}</p>
                    <a
                      href={pillar.href}
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#5da610]"
                    >
                      <span>{pillar.actionText}</span>
                      <ArrowRight size={11} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
