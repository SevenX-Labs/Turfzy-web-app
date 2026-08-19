"use client";

import React from "react";

export default function TurfzyAppMockup() {
  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="relative w-full max-w-[195px] sm:max-w-[210px] md:max-w-[225px] lg:max-w-[235px] xl:max-w-[245px] mx-auto flex items-center justify-center select-none"
    >
      {/* ── Soft Ambient Glow behind phone ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[320px] bg-gradient-to-tr from-[#7ED321]/22 via-emerald-400/15 to-transparent blur-[50px] -z-10 rounded-full pointer-events-none" />

      {/* ── REALISTIC PHONE CHASSIS (Hosting Real App Screenshot) ── */}
      <div
        onContextMenu={(e) => e.preventDefault()}
        className="relative w-full aspect-[9/19.5] rounded-[30px] sm:rounded-[34px] border-[6px] sm:border-[8px] border-[#151515] bg-[#151515] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.22),0_8px_24px_rgba(126,211,33,0.15)] overflow-hidden select-none pointer-events-none"
      >
        {/* Screen Glare Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent w-full h-[150%] transform -translate-y-1/4 -rotate-12 pointer-events-none z-20" />

        {/* Real Turfzy App Screenshot */}
        <img
          src="/WhatsApp Image 2026-07-14 at 14.43.24.jpeg"
          alt="Turfzy sports turf booking app showing available football slot"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="w-full h-full object-cover block absolute inset-0 z-10 bg-white pointer-events-none select-none"
        />

        {/* iPhone Dynamic Island Mockup */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[28%] h-3.5 bg-[#151515] rounded-full z-20 pointer-events-none" />
      </div>

      {/* Ground Contact Shadow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[75%] h-3 bg-black/15 blur-lg rounded-full pointer-events-none -z-10" />
    </div>
  );
}
