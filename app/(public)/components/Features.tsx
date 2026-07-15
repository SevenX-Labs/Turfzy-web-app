"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Search, Activity, Filter, Heart, History, Lock, QrCode, BellRing, Receipt,
  LayoutGrid, CalendarDays, LayoutDashboard, Scan, TrendingUp, Wrench, Users, BarChart3,
  Smartphone, Monitor,
} from "lucide-react";
import { APP_FEATURES, OWNER_FEATURES } from "../constants";

const PLAYER_ICONS: Record<string, any> = { Search, Activity, Filter, Heart, History, Lock, QrCode, BellRing, Receipt };
const OWNER_ICONS: Record<string, any> = { LayoutGrid, CalendarDays, LayoutDashboard, Scan, TrendingUp, Wrench, Users, BarChart3 };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
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
      className={`relative py-24 md:py-32 overflow-hidden transition-colors duration-700 ${
        isPlayers ? "bg-[#FAFAFA]" : "bg-[#050804]"
      }`}
      id="features"
    >
      {/* ── Dynamic Background ── */}
      {isPlayers ? (
        <>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:4rem_4rem] opacity-[0.15] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none opacity-20">
            <div
              className="w-[200vw] h-[100vh] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"
              style={{ transform: "perspective(1000px) rotateX(75deg) translateY(200px) translateZ(-200px)" }}
            />
          </div>
          <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[150px] pointer-events-none z-0" />
          <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none z-0" />
        </>
      )}

      <div className="max-w-[1200px] mx-auto px-6 relative z-10" ref={ref}>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 flex flex-col items-center"
        >
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold font-clash tracking-tight leading-[1.1] mb-6 transition-colors duration-700 ${
              isPlayers ? "text-gray-900" : "text-white"
            }`}
          >
            {isPlayers ? (
              <>Everything you need <br className="hidden md:block" /> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">book and play.</span></>
            ) : (
              <>Run your turf <br className="hidden md:block" /> like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">pro business.</span></>
            )}
          </h2>

          <p
            className={`text-lg max-w-xl mx-auto font-medium transition-colors duration-700 ${
              isPlayers ? "text-gray-500" : "text-gray-400"
            }`}
          >
            {isPlayers
              ? "Powerful features designed to get you on the pitch faster."
              : "Automate bookings, manage staff, and analyze your revenue."}
          </p>
        </motion.div>

        {/* ── Tab Switcher ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <div
            className={`p-1.5 rounded-2xl flex gap-1 relative border transition-colors duration-700 ${
              isPlayers
                ? "bg-white border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                : "bg-white/5 border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
            }`}
          >
            {([
              { key: "players" as const, label: "For Players", icon: Smartphone },
              { key: "owners" as const, label: "For Owners", icon: Monitor },
            ]).map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex items-center gap-2 px-6 md:px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10 ${
                    isActive
                      ? isPlayers
                        ? "text-white"
                        : "text-[#050804]"
                      : isPlayers
                        ? "text-gray-500 hover:text-gray-900"
                        : "text-gray-400 hover:text-white"
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureTab"
                      className={`absolute inset-0 rounded-xl -z-10 shadow-md ${
                        isPlayers ? "bg-[#151515]" : "bg-lime-400"
                      }`}
                      transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Features Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((feature) => {
              const Icon = icons[feature.icon] ?? Search;

              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className={`group relative overflow-hidden rounded-3xl p-7 flex flex-col items-start transition-all duration-500 border ${
                    isPlayers
                      ? "bg-white border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(89,166,8,0.1)] hover:border-lime-200 hover:-translate-y-1"
                      : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-lime-500/30"
                  }`}
                >
                  {/* Hover gradient */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                      isPlayers
                        ? "bg-gradient-to-br from-lime-500/5 to-transparent"
                        : "bg-gradient-to-br from-lime-500/10 to-transparent"
                    }`}
                  />

                  {/* Neon left border beam (owner mode) */}
                  {!isPlayers && (
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[3px] h-0 bg-lime-400 group-hover:h-full transition-all duration-500 ease-out shadow-[0_0_15px_#84cc16]" />
                  )}

                  {/* Bottom glowing line (player mode) */}
                  {isPlayers && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-emerald-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                  )}

                  <div className="relative z-10 flex flex-col">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 ${
                        isPlayers
                          ? "bg-lime-50 border border-lime-100 text-lime-600 group-hover:scale-110 group-hover:rotate-6"
                          : "bg-white/5 border border-white/10 text-gray-400 group-hover:text-lime-400 group-hover:bg-lime-500/10 group-hover:border-lime-500/30 group-hover:scale-110"
                      }`}
                    >
                      <Icon size={22} strokeWidth={2.5} />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg font-bold font-clash tracking-wide mb-2 transition-colors duration-300 ${
                        isPlayers
                          ? "text-gray-900 group-hover:text-lime-700"
                          : "text-white group-hover:text-lime-50"
                      }`}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed font-medium ${
                        isPlayers
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-300"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Subtle background icon on hover (owner mode) */}
                  {!isPlayers && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/[0.02] group-hover:text-lime-500/[0.05] scale-50 group-hover:scale-150 -rotate-12 group-hover:rotate-0 transition-all duration-700 pointer-events-none z-0">
                      <Icon size={100} strokeWidth={1} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
