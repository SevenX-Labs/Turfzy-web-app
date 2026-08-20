"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

/* ── Official Google Play Store Vector Icon ── */
function GooglePlayBadgeSvg({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <path
        d="M325.3 234.3L104.6 13l280.8 160.5c18.5 10.6 18.5 35 0 45.6L325.3 234.3z"
        fill="#EA4335"
      />
      <path
        d="M47 34.3C40.6 40.8 37 50.8 37 63.8v384.4c0 13 3.6 23 10 29.5l1.6 1.6L270.1 257.8v-3.6L48.6 32.7 47 34.3z"
        fill="#34A853"
      />
      <path
        d="M325.3 277.7l60.1 35.3c18.5 10.6 18.5 35 0 45.6L104.6 499l220.7-221.3z"
        fill="#FBBC04"
      />
      <path
        d="M47 477.7c6.5 6.5 16.5 10.1 28.5 10.1 6.5 0 13.5-1.5 20-5.2l290-165.7-60.2-60.2L47 477.7z"
        fill="#4285F4"
      />
    </svg>
  );
}

export default function DownloadApp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="download-app"
      ref={containerRef}
      className="relative py-20 sm:py-24 md:py-28 bg-[#FAFAF6] overflow-hidden border-t border-black/[0.05] selection:bg-[#7ED321] selection:text-black"
    >
      {/* ══════════════════════════════════════════════════════════════════
          BACKGROUND DYNAMIC GREEN EFFECTS & TURF BLUEPRINT MESH
      ══════════════════════════════════════════════════════════════════ */}
      
      {/* 1. Animated Fluid Green Mesh Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden saturate-[1.3]">
        <motion.div
          animate={{
            x: ["0%", "8%", "-6%", "0%"],
            y: ["0%", "-6%", "8%", "0%"],
            scale: [1, 1.12, 0.94, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/6 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#7ED321]/22 via-emerald-400/18 to-transparent rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: ["0%", "-10%", "6%", "0%"],
            y: ["0%", "8%", "-8%", "0%"],
            scale: [1, 0.92, 1.15, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/6 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-bl from-lime-300/25 via-[#7ED321]/20 to-transparent rounded-full blur-[110px]"
        />
      </div>

      {/* 2. Blueprint Turf Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(126,211,33,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(126,211,33,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 35%, transparent 100%)",
        }}
      />

      <div className="max-w-[1140px] mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Main Card Container — Premium Glassmorphic White & Stadium Green Accent */}
        <div className="bg-gradient-to-br from-white via-[#FAFAF6] to-lime-50/50 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-14 border border-[#7ED321]/25 shadow-[0_20px_60px_rgba(126,211,33,0.12),0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
          
          {/* Top Glowing Neon Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#7ED321] to-transparent shadow-[0_0_15px_#7ED321]" />

          {/* Abstract Turf Pitch Vector Overlay inside Card */}
          <div className="absolute inset-0 pointer-events-none opacity-15 flex items-center justify-center">
            <svg viewBox="0 0 800 400" className="w-full h-full stroke-[#7ED321]" fill="none" strokeWidth="1.5">
              <circle cx="400" cy="200" r="120" strokeDasharray="4 4" />
              <line x1="400" y1="0" x2="400" y2="400" strokeDasharray="4 4" />
              <rect x="0" y="80" width="160" height="240" rx="8" />
              <rect x="640" y="80" width="160" height="240" rx="8" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

            {/* ══════════════════════════════════════════════════════════════════
                LEFT COLUMN: TEXT CONTENT & PLAY STORE DOWNLOAD CTA
            ══════════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col items-start text-left gap-3.5 sm:gap-4"
            >
              {/* Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7ED321]/30 shadow-[0_2px_10px_rgba(126,211,33,0.12)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED321] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5da610]" />
                </span>
                <span className="text-xs font-extrabold text-[#111111] tracking-wider uppercase font-sans">
                  AVAILABLE ON PLAY STORE
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-extrabold text-[#111111] font-clash tracking-tight leading-[1.1]">
                Download Turfzy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#3a6809] to-[#7ED321]">
                  on Google Play Store
                </span>
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-[#4a4a4a] font-normal leading-relaxed max-w-lg">
                Get the official Turfzy app on your Android device. Discover nearby sports venues, check real-time court availability, book time slots, and access your digital match QR passes anywhere.
              </p>

              {/* Play Store Action CTA */}
              <div className="pt-2">
                {/* Official Google Play Store Button */}
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3.5 bg-black hover:bg-[#1a1a1a] text-white px-7 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2),0_0_20px_rgba(126,211,33,0.2)] hover:shadow-[0_14px_38px_rgba(0,0,0,0.3)] transition-all duration-200 active:scale-[0.98] border border-black"
                >
                  <GooglePlayBadgeSvg className="w-8 h-8 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest leading-none">
                      GET IT ON
                    </span>
                    <span className="text-lg sm:text-xl font-extrabold text-white font-clash leading-tight mt-0.5">
                      Google Play
                    </span>
                  </div>
                  <ArrowUpRight size={18} className="text-gray-400 group-hover:text-[#7ED321] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-2" />
                </a>
              </div>

              {/* Trust & Key Features Line */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#555555] pt-3 border-t border-black/[0.06] w-full mt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#5da610]" />
                  <span>Instant Booking</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#5da610]" />
                  <span>Digital QR Pass</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#5da610]" />
                  <span>Zero Member Fee</span>
                </div>
              </div>

            </motion.div>


            {/* ══════════════════════════════════════════════════════════════════
                RIGHT COLUMN: MOBILE MOCKUP WITH ONLY WHITE BG & LOGO
            ══════════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center items-center relative"
            >
              {/* Vibrant Green Spotlight Radial Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7ED321]/35 via-emerald-400/20 to-transparent blur-[55px] rounded-full pointer-events-none" />

              {/* 3D Physical Phone Chassis */}
              <div
                className="relative w-full max-w-[250px] sm:max-w-[270px] aspect-[9/18.8] rounded-[38px] p-[2.5px] bg-gradient-to-b from-[#3a3a42] via-[#222226] to-[#121215] select-none"
                style={{
                  boxShadow: `
                    0 20px 50px rgba(0,0,0,0.15),
                    0 4px 15px rgba(0,0,0,0.08),
                    0 0 45px rgba(126,211,33,0.25)
                  `,
                }}
              >
                {/* Physical Side Buttons */}
                <div className="absolute -right-[4px] top-[24%] w-[3px] h-[30px] bg-[#3a3a42] rounded-r-sm" />
                <div className="absolute -right-[4px] top-[36%] w-[3px] h-[38px] bg-[#3a3a42] rounded-r-sm" />

                {/* Inner Black OLED Bezel */}
                <div className="relative w-full h-full rounded-[35px] bg-[#0c0c0e] p-[5px] overflow-hidden border border-white/10 flex flex-col">
                  
                  {/* ── CLEAN WHITE BACKGROUND SCREEN (ONLY LOGO & BRANDING) ── */}
                  <div className="relative w-full h-full rounded-[30px] bg-white text-gray-900 overflow-hidden flex flex-col justify-between items-center p-6 select-none shadow-inner">
                    
                    {/* Top Camera Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[68px] h-[16px] bg-black rounded-full z-30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1c2c3d]" />
                    </div>

                    {/* Top Empty Spacer */}
                    <div className="w-full pt-4 flex justify-between items-center text-[9px] font-bold text-gray-400">
                      <span>9:41</span>
                      <span className="text-[#5da610]">5G</span>
                    </div>

                    {/* ── CENTER LOGO & BRAND DISPLAY (ONLY LOGO & TURFZY) ── */}
                    <div className="flex flex-col items-center justify-center my-auto gap-3 text-center">
                      {/* Logo Container */}
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white p-3 border border-gray-100 shadow-[0_12px_35px_rgba(126,211,33,0.2)] flex items-center justify-center relative"
                      >
                        <Image
                          src="/logo.png"
                          alt="Turfzy Logo"
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                          priority
                        />
                      </motion.div>

                      {/* Brand Text */}
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#111111] font-clash tracking-tight leading-none">
                          TURFZY
                        </span>
                        <span className="text-[10px] font-extrabold text-[#5da610] uppercase tracking-widest bg-lime-50 px-2.5 py-0.5 rounded-full border border-lime-200 mt-1 flex items-center gap-1">
                          <Sparkles size={10} className="text-[#5da610]" />
                          Play Store App
                        </span>
                      </div>
                    </div>

                    {/* Bottom Indicator Bar */}
                    <div className="w-full flex flex-col items-center gap-2 pb-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400">
                        <ShieldCheck size={12} className="text-[#5da610]" />
                        <span>Official Google Play App</span>
                      </div>
                      <div className="w-20 h-1 bg-gray-300 rounded-full" />
                    </div>

                  </div>

                </div>

                {/* Floating "Available on Play Store" Pill Tag */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3.5 -right-3.5 sm:-right-5 bg-white text-[#111111] font-extrabold text-[10px] sm:text-xs px-3 py-1.5 rounded-full shadow-[0_8px_25px_rgba(126,211,33,0.2)] border border-[#7ED321]/40 flex items-center gap-1.5 z-40 pointer-events-none"
                >
                  <GooglePlayBadgeSvg className="w-4 h-4" />
                  <span>Play Store App</span>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
