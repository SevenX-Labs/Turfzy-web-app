"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles, Target, Users, ShieldCheck,
  TrendingUp, Award, CheckCircle2, ArrowRight
} from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "50,000+", label: "Match Hours Played", sub: "Across football & cricket" },
  { value: "100+", label: "Inspected Grounds", sub: "Top-grade artificial turf" },
  { value: "99.8%", label: "Slot Accuracy Rate", sub: "Zero double-booking risk" },
  { value: "4.9 ★", label: "Player Satisfaction", sub: "From local sports squads" },
];

const PILLARS = [
  {
    icon: Target,
    badge: "Player First",
    title: "Bringing Players Back to the Pitch",
    description:
      "We replace messy WhatsApp chats, endless phone calls, and manual registers with a 60-second booking experience and live slot schedules.",
    highlight: "Book in 60s",
  },
  {
    icon: TrendingUp,
    badge: "Owner Success",
    title: "Fueling Sports Entrepreneurs",
    description:
      "We provide turf owners with high-speed digital check-ins, dynamic pricing controls, and automated weekly bank payouts that eliminate empty courts.",
    highlight: "Automated Payouts",
  },
  {
    icon: ShieldCheck,
    badge: "Standardized Quality",
    title: "Ground-Checked Venues",
    description:
      "Every facility listed is checked for turf grass density, shock absorption, adequate floodlights, and safe amenities for evening games.",
    highlight: "Quality Inspected",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative bg-[#FAFAF6] py-24 md:py-32 overflow-hidden border-b border-gray-200/50"
    >
      {/* ── Background Ambient Glows ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#7ED321]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6 transition-transform hover:scale-105">
            <Sparkles size={14} className="text-[#7ED321]" />
            <span className="text-[11px] font-bold text-[#151515] tracking-widest uppercase">
              About Turfzy
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#151515] tracking-tight leading-[1.1] mb-6 max-w-3xl text-balance">
            Building the digital home for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED321] to-[#5a9c14]">
              India's sports community.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#5C5C5C] max-w-2xl mx-auto font-medium leading-relaxed text-balance">
            Turfzy is bridging the gap between passionate players and premium local venues. From late-night 5-a-side football to weekend box cricket leagues, we make playing effortless.
          </p>
        </motion.div>

        {/* ── Core Value Pillars (3 Cards) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative rounded-[28px] p-8 bg-white border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(126,211,33,0.08)] hover:-translate-y-1 hover:border-[#7ED321]/40 transition-all duration-400 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon & Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[16px] bg-[#7ED321]/15 border border-[#7ED321]/20 text-[#5a9c14] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#7ED321] group-hover:text-white transition-all duration-400 shadow-sm">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <span className="text-[11px] font-bold text-[#559414] bg-[#7ED321]/10 border border-[#7ED321]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#151515] group-hover:text-[#5a9c14] transition-colors duration-300 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#5C5C5C] leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500">
                  <span className="text-[#151515] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#7ED321]" />
                    {pillar.highlight}
                  </span>
                  <span className="text-gray-400 group-hover:text-[#7ED321] group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Impact Numbers Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-[32px] bg-[#151515] text-white p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle green line on top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7ED321] to-transparent" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center relative z-10">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300 font-clash mb-1">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base font-bold text-white mb-0.5">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-400 font-medium">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
