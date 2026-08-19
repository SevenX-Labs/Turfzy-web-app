"use client";

import React from "react";

export default function TurfzyAppMockup() {
  return (
    <div className="relative w-full max-w-[205px] sm:max-w-[220px] md:max-w-[235px] lg:max-w-[245px] xl:max-w-[255px] mx-auto flex items-center justify-center select-none">
      {/* ── Soft Ambient Glow behind phone ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[340px] bg-gradient-to-tr from-[#7ED321]/22 via-emerald-400/15 to-transparent blur-[50px] -z-10 rounded-full pointer-events-none" />

      {/* ── REALISTIC PHONE CHASSIS (Hosting Real App Screenshot) ── */}
      <div className="relative w-full aspect-[9/19.5] rounded-[32px] sm:rounded-[36px] border-[6px] sm:border-[8px] border-[#151515] bg-[#151515] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.22),0_8px_24px_rgba(126,211,33,0.15)] overflow-hidden">
        {/* Screen Glare Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent w-full h-[150%] transform -translate-y-1/4 -rotate-12 pointer-events-none z-20" />

        {/* Real Turfzy App Screenshot */}
        <img
          src="/WhatsApp Image 2026-07-14 at 14.43.24.jpeg"
          alt="Turfzy sports turf booking app showing available football slot"
          className="w-full h-full object-cover block absolute inset-0 z-10 bg-white"
        />

        {/* iPhone Dynamic Island Mockup */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[28%] h-3.5 bg-[#151515] rounded-full z-20" />
      </div>

      {/* Ground Contact Shadow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[75%] h-3 bg-black/15 blur-lg rounded-full pointer-events-none -z-10" />
    </div>
  );
}
