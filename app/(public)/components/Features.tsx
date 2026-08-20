"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Search, Activity, Filter, Heart, QrCode, Star,
  Lock, Receipt, History, BellRing,
  Store, LayoutGrid, Wrench, CalendarDays, TrendingUp,
  BarChart3, Wallet, Smartphone, Monitor, Sparkles
} from "lucide-react";
import TurfzyPhone from "./3d/TurfzyPhone";

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Search, Activity, Filter, Heart, QrCode, Star,
  Lock, Receipt, History, BellRing,
  Store, LayoutGrid, Wrench, CalendarDays, TrendingUp,
  BarChart3, Wallet
};

const PLAYER_FEATURES = [
  { icon: "Search", label: "DISCOVERY", title: "Nearby Turf Finder", description: "Search box cricket, football, and badminton courts near you instantly." },
  { icon: "Activity", label: "LIVE SYNC", title: "Instant Availability", description: "Calendars update the moment a slot is taken — always see true openings." },
  { icon: "Filter", label: "FILTERING", title: "Smart Court Filters", description: "Sort by sport, price, floodlights, evening slots, and court dimensions." },
  { icon: "Lock", label: "PAYMENTS", title: "Secure Checkout", description: "Encrypted UPI, card, and net banking checkout with auto-refund tracking." },
  { icon: "QrCode", label: "CHECK-IN", title: "Digital Gate Ticket", description: "Show your mobile QR code at the gate — no paper slips needed." },
  { icon: "BellRing", label: "ALERTS", title: "Kick-Off Reminders", description: "WhatsApp and push notifications so your squad never misses kick-off." },
];

const OWNER_FEATURES = [
  { icon: "Store", label: "PROFILE", title: "Venue Profile", description: "Showcase turf photos, pitch specs, parking, and ground rules to players." },
  { icon: "LayoutGrid", label: "COURTS", title: "Multi-Court Control", description: "Manage multiple pitches and arenas from a single master dashboard." },
  { icon: "CalendarDays", label: "SCHEDULE", title: "Schedule Matrix", description: "View booked, open, and blocked slots across days and weeks at a glance." },
  { icon: "TrendingUp", label: "PRICING", title: "Peak & Off-Peak Rates", description: "Set weekday, evening floodlight, and weekend pricing independently." },
  { icon: "BarChart3", label: "ANALYTICS", title: "Revenue Analytics", description: "Track daily earnings, peak hours, and occupancy trends on one screen." },
  { icon: "Wallet", label: "PAYOUTS", title: "Instant Payouts", description: "Auto-settle booking revenue directly to your registered bank account." },
];

interface FeatureCardProps {
  icon: string;
  label: string;
  title: string;
  description: string;
  side: "left" | "right";
  index: number;
  inView: boolean;
}

function FeatureCard({ icon, label, title, description, side, index, inView }: FeatureCardProps) {
  const Icon = ICONS[icon] ?? Search;

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -25 : 25 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="group relative bg-white/75 backdrop-blur-xl rounded-2xl p-4 border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(126,211,33,0.16)] hover:border-[#7ED321]/60 hover:bg-white/90 transition-all duration-300 flex gap-3 items-start text-left w-full"
    >
      {/* Top hover accent line */}
      <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#7ED321] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      {/* Icon Badge */}
      <div className="w-9 h-9 rounded-xl bg-[#7ED321]/15 border border-[#7ED321]/30 text-[#4c8413] flex items-center justify-center shrink-0 group-hover:bg-[#7ED321] group-hover:text-black transition-all duration-250 mt-0.5 shadow-sm">
        <Icon size={16} strokeWidth={2.2} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <span className="text-[9px] font-extrabold text-[#5da610] uppercase tracking-widest block mb-0.5">
          {label}
        </span>
        <h4 className="text-xs font-extrabold text-[#111] font-clash leading-snug mb-0.5">
          {title}
        </h4>
        <p className="text-[10px] text-[#555] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Sleek Node Dot (ON CARD ONLY) */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          side === "left" ? "-right-2" : "-left-2"
        } w-3.5 h-3.5 rounded-full bg-white border-2 border-[#7ED321] shadow-[0_0_8px_rgba(126,211,33,0.6)] flex items-center justify-center group-hover:scale-125 transition-transform duration-200 z-30`}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#7ED321]" />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [activeTab, setActiveTab] = useState<"players" | "owners">("players");

  const features = activeTab === "players" ? PLAYER_FEATURES : OWNER_FEATURES;
  const leftFeatures = features.slice(0, 3);
  const rightFeatures = features.slice(3, 6);

  return (
    <section
      className="relative bg-[#FAFAF6] py-14 sm:py-16 md:py-20 overflow-hidden border-b border-gray-200/50 selection:bg-[#7ED321] selection:text-black"
      id="features"
    >
      {/* ── Background Accent Grid & Radial Glow ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(126,211,33,0.18) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7ED321]/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>

        {/* ══════════════════════════════════════════════════════════════════
            1. SECTION HEADER
        ══════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-6 md:mb-8 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] shadow-sm mb-3">
            <Sparkles size={13} className="text-[#7ED321]" />
            <span className="text-[10px] font-black text-[#151515] tracking-widest uppercase">
              PLATFORM CAPABILITIES
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] font-clash tracking-tight leading-[1.12] mb-2.5 max-w-2xl">
            {activeTab === "players" ? (
              <>Everything you need to <span className="text-[#7ED321]">book and play.</span></>
            ) : (
              <>Run your turf like a <span className="text-[#7ED321]">pro business.</span></>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-[#555555] max-w-xl mx-auto font-medium leading-relaxed">
            {activeTab === "players"
              ? "A full suite of player tools engineered to make finding grounds and stepping onto the pitch completely frictionless."
              : "A comprehensive operating system to automate venue court bookings, peak-hour check-ins, and revenue growth."
            }
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════════
            2. TAB SWITCHER
        ══════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-8 md:mb-10"
        >
          <div className="bg-black/[0.05] p-1 rounded-2xl flex gap-1 shadow-inner">
            {([
              { key: "players" as const, label: "For Players", icon: Smartphone },
              { key: "owners" as const, label: "For Owners", icon: Monitor },
            ]).map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 z-10 ${
                    isActive ? "text-[#111]" : "text-[#666] hover:text-[#111]"
                  }`}
                >
                  <tab.icon size={15} />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureTab"
                      className="absolute inset-0 bg-white rounded-xl -z-10 shadow-sm border border-black/[0.08]"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════════
            3. FEATURE HUB: ROCK-SOLID STABLE PEDESTAL MOCKUP CARD + CONNECTED RAYS
        ══════════════════════════════════════════════════════════════════ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center max-w-5xl mx-auto relative min-h-[460px]"
          >

            {/* ── LEFT FEATURE CARDS (Glassmorphism + Edge Node) ── */}
            <div className="flex flex-col justify-between h-full gap-5 z-30">
              {leftFeatures.map((feature, i) => (
                <div key={feature.title} className="relative">
                  <FeatureCard {...feature} side="left" index={i} inView={inView} />
                </div>
              ))}
            </div>

            {/* ── CENTER: STABLE FEATURED MOCKUP PEDESTAL CARD ── */}
            <div className="relative flex items-center justify-center w-[250px] sm:w-[270px] lg:w-[290px] shrink-0 h-full">

              {/* ── SVG CONNECTING RAYS & DASHED LINES ── */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
                style={{ width: "100%", height: "100%" }}
              >
                {/* Left Card Nodes -> Center Card Pedestal */}
                {[0, 1, 2].map((i) => {
                  const startYPer = i === 0 ? "15%" : i === 1 ? "50%" : "85%";
                  const endYPer = i === 0 ? "22%" : i === 1 ? "50%" : "78%";
                  return (
                    <g key={`left-line-${i}`}>
                      {/* Smooth Green Dashed Line */}
                      <line
                        x1="-40"
                        y1={startYPer}
                        x2="48"
                        y2={endYPer}
                        stroke="#7ED321"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        opacity="0.55"
                      />
                      {/* Animated Energy Particle Ray along line */}
                      <motion.circle
                        r="3"
                        fill="#7ED321"
                        filter="url(#greenGlow)"
                        animate={{
                          cx: ["-40px", "48px"],
                          cy: [startYPer, endYPer],
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          delay: i * 0.6,
                          duration: 1.6,
                          repeat: Infinity,
                          repeatDelay: 0.8,
                          ease: "easeInOut",
                        }}
                      />
                    </g>
                  );
                })}

                {/* Center Card Pedestal -> Right Card Nodes */}
                {[0, 1, 2].map((i) => {
                  const startYPer = i === 0 ? "22%" : i === 1 ? "50%" : "78%";
                  const endYPer = i === 0 ? "15%" : i === 1 ? "50%" : "85%";
                  return (
                    <g key={`right-line-${i}`}>
                      {/* Smooth Green Dashed Line */}
                      <line
                        x1="calc(100% - 48px)"
                        y1={startYPer}
                        x2="calc(100% + 40px)"
                        y2={endYPer}
                        stroke="#7ED321"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        opacity="0.55"
                      />
                      {/* Animated Energy Particle Ray along line */}
                      <motion.circle
                        r="3"
                        fill="#7ED321"
                        filter="url(#greenGlow)"
                        animate={{
                          cx: ["calc(100% - 48px)", "calc(100% + 40px)"],
                          cy: [startYPer, endYPer],
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          delay: i * 0.6 + 0.3,
                          duration: 1.6,
                          repeat: Infinity,
                          repeatDelay: 0.8,
                          ease: "easeInOut",
                        }}
                      />
                    </g>
                  );
                })}

                {/* SVG Glow Filter */}
                <defs>
                  <filter id="greenGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              {/* ── 3D CENTER MOBILE MOCKUP ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                className="relative z-20 w-full flex items-center justify-center pointer-events-none"
              >
                <div className="relative w-full flex items-center justify-center">
                  <TurfzyPhone 
                    currentStep={activeTab === "players" ? "find" : "manage"} 
                    phoneScale={0.75}
                    phoneRotateX={8}
                    phoneRotateY={-12}
                    showPlatform={false}
                    showFootball={true}
                    showBadges={false}
                  />
                </div>
              </motion.div>

            </div>

            {/* ── RIGHT FEATURE CARDS (Glassmorphism + Edge Node) ── */}
            <div className="flex flex-col justify-between h-full gap-5 z-30">
              {rightFeatures.map((feature, i) => (
                <div key={feature.title} className="relative">
                  <FeatureCard {...feature} side="right" index={i + 3} inView={inView} />
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

        {/* ══════════════════════════════════════════════════════════════════
            4. MOBILE FALLBACK LAYOUT
        ══════════════════════════════════════════════════════════════════ */}
        <div className="md:hidden flex flex-col gap-3.5 my-4">
          {(activeTab === "players" ? PLAYER_FEATURES : OWNER_FEATURES).map((feature, i) => {
            const Icon = ICONS[feature.icon] ?? Search;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-sm flex items-start gap-3 text-left"
              >
                <div className="w-8 h-8 rounded-xl bg-[#7ED321]/15 text-[#4c8413] border border-[#7ED321]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={15} strokeWidth={2.2} />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-[#5da610] uppercase tracking-widest block mb-0.5">
                    {feature.label}
                  </span>
                  <h4 className="text-xs font-extrabold text-[#111] font-clash leading-snug mb-0.5">
                    {feature.title}
                  </h4>
                  <p className="text-[10px] text-[#555] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}