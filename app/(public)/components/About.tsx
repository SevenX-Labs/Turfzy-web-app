"use client";

/**
 * About Section — Turfzy
 * ─────────────────────────────────────────────────────────────────
 * Refined, high-end sports-tech mission and core pillars:
 * 1. Clean hero header with clear typography hierarchy.
 * 2. Three uniform pillar cards (Player First, Owner Success, Standardized Quality)
 *    with 3D scroll entrance and interactive tilt.
 * 3. Section connector statement: "One platform. Two sides. One goal — more time on the pitch."
 */

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
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
    badge: "Player First",
    icon: Target,
    title: "Bring Players Back to the Pitch",
    subtitle: "Less calling. Less waiting. More playing.",
    description:
      "Turfzy replaces scattered calls, messages, and manual coordination with a simpler digital booking experience.",
    actionText: "Explore Player Experience",
    href: APP_URLS.customerWeb,
    isExternal: true,
  },
  {
    number: "02",
    badge: "Owner Success",
    icon: TrendingUp,
    title: "Help Venues Run Better",
    subtitle: "Turn empty slots into opportunities.",
    description:
      "Give turf owners digital tools for bookings, availability, pricing, and day-to-day venue management.",
    actionText: "Explore Owner Tools",
    href: APP_URLS.ownerWeb,
    isExternal: true,
  },
  {
    number: "03",
    badge: "Standardized Quality",
    icon: ShieldCheck,
    title: "Know What You're Booking",
    subtitle: "Better information before game day.",
    description:
      "Help players understand the venue, playing surface, lighting, amenities, and overall experience before they arrive.",
    actionText: "See Venue Standards",
    href: "#why-turfzy",
    isExternal: false,
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 100 });
  const sectionRotateX = useTransform(smoothProgress, [0, 1], [10, 0]);
  const sectionScale = useTransform(smoothProgress, [0, 1], [0.96, 1]);
  const sectionY = useTransform(smoothProgress, [0, 1], [40, 0]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#FAFAF6] py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden border-b border-black/[0.05]"
    >
      {/* ── 3D Laser Light Bridge from Hero into About ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7ED321]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#7ED321]/10 via-transparent to-transparent blur-2xl pointer-events-none" />

      {/* ── Background Subtle Dotted Grid Accent ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft Ambient Green Halo */}
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-[#7ED321]/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[450px] h-[450px] bg-emerald-400/8 rounded-full blur-[110px] pointer-events-none" />

      <motion.div
        style={{
          rotateX: sectionRotateX,
          scale: sectionScale,
          y: sectionY,
          transformPerspective: 1200,
        }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >

        {/* ══════════════════════════════════════════════════════════════════
            1. SECTION HERO AREA (Clear Hierarchy)
        ══════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14 flex flex-col items-center"
        >
          {/* Small Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.03)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7ED321]" />
            <span className="text-[10px] sm:text-[11px] font-extrabold text-[#151515] tracking-widest uppercase">
              About Turfzy
            </span>
          </div>

          {/* Main Semantic Heading (H2) */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-clash tracking-tight leading-[1.1] mb-4">
            Building a better way to play. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#3a6809] to-[#7ED321]">
              For India&apos;s sports community.
            </span>
          </h2>

          {/* Short Supporting Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[#555555] font-medium leading-relaxed max-w-2xl text-balance">
            Turfzy connects players with local sports venues and gives venue owners a simpler way to manage their business.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════════
            2. THREE VALUE PILLARS (3D Responsive Stacking)
        ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10 sm:mb-12">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 30, rotateX: 12 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  rotateX: 2,
                  rotateY: index === 0 ? 3 : index === 2 ? -3 : 0,
                  transition: { duration: 0.2 },
                }}
                className="group relative rounded-[24px] p-6 sm:p-7 bg-white/95 backdrop-blur-md border border-black/[0.07] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(126,211,33,0.12)] hover:border-[#7ED321]/50 transition-all duration-200 flex flex-col justify-between text-left"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Top Subtle Green Accent Bar */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#7ED321]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div>
                  {/* Top Header Row: Category Badge & Subtle Number */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7ED321]/10 text-[#4c8413] border border-[#7ED321]/20 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider">
                      <span className="font-mono">{pillar.number}</span>
                      <span>·</span>
                      <span>{pillar.badge}</span>
                    </span>

                    <span className="font-mono text-xs font-extrabold text-gray-300 group-hover:text-[#7ED321] transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Icon in Soft-Green Container */}
                  <div className="w-11 h-11 rounded-xl bg-[#7ED321]/12 text-[#467d0e] border border-[#7ED321]/25 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#7ED321] group-hover:text-white transition-all duration-200 shadow-sm">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>

                  {/* Pillar Heading */}
                  <h3 className="text-xl sm:text-[22px] font-extrabold text-[#111111] font-clash leading-tight tracking-tight mb-1.5 group-hover:text-[#3d700d] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Bold Emotional Supporting Line */}
                  <p className="text-xs sm:text-sm font-bold text-[#559414] leading-snug mb-2.5">
                    {pillar.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Card Footer: Contextual Clickable Link */}
                <div className="pt-4 mt-5 border-t border-black/[0.05]">
                  <a
                    href={pillar.href}
                    target={pillar.isExternal ? "_blank" : undefined}
                    rel={pillar.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#111111] group-hover:text-[#42790e] transition-colors"
                  >
                    <span>{pillar.actionText}</span>
                    <ArrowRight
                      size={13}
                      className="stroke-[2.5] text-[#5da610] transition-transform duration-150 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            3. SECTION CONNECTION STATEMENT
        ══════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
          className="text-center pt-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-black/[0.06] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#7ED321] animate-pulse" />
            <p className="text-xs sm:text-sm font-semibold text-[#555555]">
              One platform. Two sides. One goal — more time on the pitch.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

