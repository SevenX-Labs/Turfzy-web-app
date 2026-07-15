"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Search, Activity, Filter, Heart, History, Lock, QrCode, BellRing, Receipt,
  LayoutGrid, CalendarDays, LayoutDashboard, Scan, TrendingUp, Wrench, Users, BarChart3,
  Smartphone, Monitor, Sparkles
} from "lucide-react";
import { APP_FEATURES, OWNER_FEATURES } from "../constants";

const PLAYER_ICONS: Record<string, any> = { Search, Activity, Filter, Heart, History, Lock, QrCode, BellRing, Receipt };
const OWNER_ICONS: Record<string, any> = { LayoutGrid, CalendarDays, LayoutDashboard, Scan, TrendingUp, Wrench, Users, BarChart3 };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

// Creates a seamless bento pattern automatically
const getBentoSpan = (index: number) => {
  const pattern = index % 5;
  // Make the 1st and 4th items wide to break the grid monotony
  if (pattern === 0 || pattern === 3) return "md:col-span-2 lg:col-span-2";
  return "md:col-span-1 lg:col-span-1";
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"players" | "owners">("players");

  const isPlayers = activeTab === "players";
  const features = isPlayers ? APP_FEATURES : OWNER_FEATURES;
  const icons = isPlayers ? PLAYER_ICONS : OWNER_ICONS;

  return (
    <section
      className="relative bg-[#FAFAF6] py-24 md:py-32 overflow-hidden border-b border-gray-200/50"
      id="features"
    >
      {/* ── Premium Ambient Background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#7ED321]/15 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          {/* Sleek Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.04)] mb-6 transition-transform hover:scale-105">
            <Sparkles size={14} className="text-[#7ED321]" />
            <span className="text-[11px] font-bold text-[#151515] tracking-widest uppercase">
              Platform Capabilities
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#151515] tracking-tight leading-[1.1] mb-6 max-w-3xl text-balance">
            {isPlayers ? (
              <>Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED321] to-[#5a9c14]">book and play.</span></>
            ) : (
              <>Run your turf like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED321] to-[#5a9c14]">pro business.</span></>
            )}
          </h2>

          <p className="text-lg md:text-xl text-[#5C5C5C] max-w-2xl mx-auto font-medium leading-relaxed text-balance">
            {isPlayers
              ? "Discover venues, split payments with friends, and hit the pitch faster than ever before with our intuitive platform."
              : "Automate your bookings, track revenue in real-time, and completely eliminate empty slots and double-bookings."}
          </p>
        </motion.div>

        {/* ── Unified Light Tab Switcher ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-gray-200/60 p-1.5 rounded-[16px] flex gap-1 relative shadow-inner">
            {([
              { key: "players" as const, label: "For Players", icon: Smartphone },
              { key: "owners" as const, label: "For Owners", icon: Monitor },
            ]).map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex items-center gap-2 px-8 py-3 rounded-[12px] text-base font-semibold transition-all duration-300 z-10 ${isActive ? "text-[#151515]" : "text-[#5C5C5C] hover:text-[#151515]"
                    }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureTab"
                      className="absolute inset-0 bg-white rounded-[12px] -z-10 shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-100"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Colorful Bento Features Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-6"
          >
            {features.map((feature, index) => {
              const Icon = icons[feature.icon] ?? Search;
              const colSpan = getBentoSpan(index);
              const isWide = colSpan === "md:col-span-2 lg:col-span-2";

              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  // We apply color blocking here: Wide cards get a soft green tint, regular cards get a crisp white/gray gradient
                  className={`group relative overflow-hidden rounded-[32px] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 border ${colSpan} ${isWide
                      ? "bg-gradient-to-br from-[#f4fce8] to-[#ebf9eb] border-[#7ED321]/20 shadow-[0_8px_24px_rgba(126,211,33,0.05)] hover:shadow-[0_20px_40px_rgba(126,211,33,0.12)] hover:-translate-y-1 hover:border-[#7ED321]/40"
                      : "bg-gradient-to-br from-white to-gray-50/80 border-gray-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-[#7ED321]/30"
                    }`}
                >
                  {/* 1. Subtle Interior Texture (Dot Grid that appears on hover) */}
                  <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:20px_20px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />

                  {/* Top Section: Icon & Decorative Elements */}
                  <div className="relative z-10 flex justify-between items-start mb-10">

                    {/* Highly Polished Icon Container */}
                    <div className={`w-14 h-14 rounded-[18px] flex items-center justify-center transition-all duration-500 shadow-sm border ${isWide
                        ? "bg-white border-[#7ED321]/20 text-[#63a71b] group-hover:scale-110 group-hover:bg-[#7ED321] group-hover:text-white"
                        : "bg-gradient-to-b from-white to-gray-50 border-gray-100 text-[#5C5C5C] group-hover:scale-110 group-hover:text-[#63a71b] group-hover:border-[#7ED321]/30"
                      }`}>
                      <Icon size={24} strokeWidth={2} />
                    </div>

                    {/* Background Watermark Icon for wide cards */}
                    {isWide && (
                      <Icon
                        size={140}
                        className="absolute -top-10 -right-6 text-[#7ED321]/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rotate-12 group-hover:rotate-0 pointer-events-none"
                        strokeWidth={1}
                      />
                    )}
                  </div>

                  {/* Bottom Section: Text Content */}
                  <div className="relative z-10 flex flex-col">
                    <h3 className={`font-bold tracking-tight mb-3 text-[#151515] transition-colors duration-300 ${isWide ? "text-2xl md:text-3xl" : "text-xl"}`}>
                      {feature.title}
                    </h3>

                    <p className={`text-[#5C5C5C] leading-relaxed font-medium ${isWide ? "text-base md:text-lg max-w-lg" : "text-sm"}`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated Bottom Highlight Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#7ED321] to-transparent opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-700 ease-out" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 