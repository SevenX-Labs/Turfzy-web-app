"use client";

import React from "react";

interface TurfPlatformProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function TurfPlatform({ className = "", style }: TurfPlatformProps) {
  return (
    <div
      className={`relative w-[280px] sm:w-[320px] md:w-[360px] h-[70px] sm:h-[85px] pointer-events-none select-none ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateX(72deg) rotateZ(-6deg)",
        ...style,
      }}
    >
      {/* ── Soft Ambient Stadium Green Lighting Glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[180%] bg-gradient-to-tr from-[#7ED321]/30 via-emerald-400/20 to-transparent blur-[45px] rounded-full pointer-events-none -z-20" />

      {/* ── 3D Turf Platform Slab Container ── */}
      <div className="relative w-full h-full rounded-[28px] p-[2px] bg-gradient-to-b from-[#7ED321] via-[#5a9c14] to-[#2a4d06] shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_30px_rgba(126,211,33,0.2)]">
        
        {/* Synthetic Grass Top Surface */}
        <div className="relative w-full h-full rounded-[26px] bg-[#3b6e0c] overflow-hidden border border-lime-300/40">
          
          {/* Subtle Grass Grain Pattern */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 50%, transparent 50%)",
              backgroundSize: "8px 8px, 16px 16px",
            }}
          />

          {/* White Turf Field Markings */}
          {/* Center Circle & Penalty Box Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Center Circle */}
            <div className="w-24 h-24 rounded-full border-2 border-white/70 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/80" />
            </div>
            {/* Halfway Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/70" />
            {/* Left Penalty Box Line */}
            <div className="absolute left-3 top-2 bottom-2 w-12 border-r-2 border-t-2 border-b-2 border-white/70 rounded-r-lg" />
            {/* Right Penalty Box Line */}
            <div className="absolute right-3 top-2 bottom-2 w-12 border-l-2 border-t-2 border-b-2 border-white/70 rounded-l-lg" />
          </div>

          {/* Top Lighting Highlight Specular Reflection */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* 3D Slab Thickness / Side Edge Extrusion */}
        <div className="absolute -bottom-[8px] inset-x-0 h-[8px] bg-gradient-to-b from-[#244205] to-[#122202] rounded-b-[28px] border-t border-black/40 shadow-inner" />
      </div>

      {/* Ground Contact Shadow Cast onto Page */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/45 blur-md rounded-full pointer-events-none -z-30" />
    </div>
  );
}
