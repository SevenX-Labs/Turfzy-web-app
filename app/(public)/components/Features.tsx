"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import {
  Search, Activity, Filter, Heart, History, Lock, QrCode, BellRing, Receipt,
  LayoutGrid, CalendarDays, LayoutDashboard, Scan, TrendingUp, Wrench, Users, BarChart3, Star,
  Store, Wallet, Smartphone, Monitor, Sparkles
} from "lucide-react";
import { FEATURE_CLUSTERS_PLAYER, FEATURE_CLUSTERS_OWNER } from "../constants";

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Search, Activity, Filter, Heart, History, Lock, QrCode, BellRing, Receipt,
  LayoutGrid, CalendarDays, LayoutDashboard, Scan, TrendingUp, Wrench, Users, BarChart3, Star,
  Store, Wallet
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"players" | "owners">("players");

  const isPlayers = activeTab === "players";
  const clusters = isPlayers ? FEATURE_CLUSTERS_PLAYER : FEATURE_CLUSTERS_OWNER;

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
              ? "Explore the full suite of player tools engineered to make finding venues, coordinating with your squad, and stepping onto the pitch completely frictionless."
              : "A comprehensive operating system built to automate court bookings, streamline peak-hour check-ins, and give you deep visibility into venue revenue."}
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

        {/* ── Grouped Feature Clusters ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="flex flex-col gap-14"
          >
            {clusters.map((cluster) => (
              <div key={cluster.category} className="flex flex-col gap-6">
                {/* Cluster Header & Intro Sentence */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-gray-200/80 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#7ED321]" />
                    <h3 className="text-xl md:text-2xl font-bold text-[#151515] tracking-tight">
                      {cluster.category}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[#5C5C5C] font-medium max-w-xl">
                    {cluster.tagline}
                  </p>
                </div>

                {/* Cluster Cards Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${cluster.items.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-6`}>
                  {cluster.items.map((item) => {
                    const Icon = ICONS[item.icon] ?? Search;
                    return (
                      <motion.div
                        key={item.title}
                        variants={itemVariants}
                        className="group relative overflow-hidden rounded-[28px] p-7 md:p-8 bg-white border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(126,211,33,0.08)] hover:-translate-y-1 hover:border-[#7ED321]/40 transition-all duration-400 flex flex-col justify-between"
                      >
                        {/* Icon Container */}
                        <div className="relative z-10 flex items-start mb-6">
                          <div className="w-12 h-12 rounded-[16px] bg-gradient-to-b from-[#7ED321]/15 to-[#7ED321]/5 border border-[#7ED321]/20 text-[#5a9c14] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#7ED321] group-hover:text-white transition-all duration-400 shadow-sm">
                            <Icon size={22} strokeWidth={2.2} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h4 className="font-bold text-lg md:text-xl text-[#151515] group-hover:text-[#5a9c14] transition-colors duration-300 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[#5C5C5C] leading-relaxed font-medium">
                            {item.description}
                          </p>
                        </div>

                        {/* Bottom Highlight */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7ED321] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 