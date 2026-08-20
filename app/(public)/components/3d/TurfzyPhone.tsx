"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";
import { Clock, Users } from "lucide-react";
import PhoneScreenController, { ScreenStep } from "./PhoneScreenController";
import TurfPlatform from "./TurfPlatform";
import Football from "./Football";

interface TurfzyPhoneProps {
  currentStep?: ScreenStep;
  showPlatform?: boolean;
  showFootball?: boolean;
  showBadges?: boolean;
  phoneRotateX?: MotionValue<number> | number;
  phoneRotateY?: MotionValue<number> | number;
  phoneRotateZ?: MotionValue<number> | number;
  phoneScale?: MotionValue<number> | number;
  phoneY?: MotionValue<number> | number;
  phoneX?: MotionValue<number> | number;
  ballX?: MotionValue<number> | number;
  ballRotation?: MotionValue<number> | number;
  badge1X?: MotionValue<number> | number;
  badge1Y?: MotionValue<number> | number;
  badge2X?: MotionValue<number> | number;
  badge2Y?: MotionValue<number> | number;
  badgesOpacity?: MotionValue<number> | number;
  style?: React.CSSProperties;
  className?: string;
}

export default function TurfzyPhone({
  currentStep = "find",
  showPlatform = false,
  showFootball = false,
  showBadges = true,
  phoneRotateX = 2,
  phoneRotateY = -12,
  phoneRotateZ = 2,
  phoneScale = 0.92,
  phoneY = 10,
  phoneX = 0,
  ballX = 0,
  ballRotation = 0,
  badge1X = 0,
  badge1Y = 0,
  badge2X = 0,
  badge2Y = 0,
  badgesOpacity = 1,
  style,
  className = "",
}: TurfzyPhoneProps) {
  return (
    <div
      className={`relative w-full max-w-[210px] sm:max-w-[230px] md:max-w-[245px] lg:max-w-[260px] xl:max-w-[275px] mx-auto py-2 flex flex-col items-center justify-center select-none overflow-visible ${className}`}
      style={{ perspective: 1200, ...style }}
    >
      {/* ── Ambient Radial Stadium Green Glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[300px] h-[340px] sm:h-[380px] bg-gradient-to-tr from-[#7ED321]/22 via-emerald-400/14 to-transparent blur-[55px] -z-20 rounded-full pointer-events-none" />

      {/* ── MAIN 3D ROTATED PHONE CONTAINER ── */}
      <motion.div
        style={{
          rotateX: phoneRotateX,
          rotateY: phoneRotateY,
          rotateZ: phoneRotateZ,
          scale: phoneScale,
          y: phoneY,
          x: phoneX,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full aspect-[9/18.8] select-none cursor-grab active:cursor-grabbing"
      >
        {/* ── 3D PHYSICAL PHONE CHASSIS (Titanium Bevel & Edge Extrusion) ── */}
        <div
          className="relative w-full h-full rounded-[34px] sm:rounded-[38px] p-[2.5px] bg-gradient-to-b from-[#3e3e48] via-[#242428] to-[#141416] transition-shadow duration-300"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: `
              1px 1px 0px #3c3c44,
              2px 2px 0px #303038,
              3px 3px 0px #24242c,
              4px 4px 0px #1a1a20,
              5px 5px 0px #141418,
              6px 6px 0px #0e0e12,
              7px 7px 0px #08080a,
              14px 24px 44px -8px rgba(0,0,0,0.65),
              -4px 14px 32px rgba(0,0,0,0.25),
              0 0 50px rgba(126,211,33,0.16)
            `,
          }}
        >
          {/* Side Hardware Buttons (Right Side 3D extrusion) */}
          <div className="absolute -right-[5px] top-[22%] w-[3px] h-[30px] bg-[#3a3a40] rounded-r-sm shadow-sm pointer-events-none" />
          <div className="absolute -right-[5px] top-[34%] w-[3px] h-[40px] bg-[#3a3a40] rounded-r-sm shadow-sm pointer-events-none" />
          <div className="absolute -right-[5px] top-[48%] w-[3px] h-[40px] bg-[#3a3a40] rounded-r-sm shadow-sm pointer-events-none" />

          {/* Left SIM / Action Button */}
          <div className="absolute -left-[4px] top-[20%] w-[2.5px] h-[22px] bg-[#3a3a40] rounded-l-sm shadow-sm pointer-events-none" />

          {/* Inner Black OLED Bezel */}
          <div className="relative w-full h-full rounded-[32px] sm:rounded-[36px] bg-[#0c0c0e] p-[5px] sm:p-[6px] overflow-hidden border border-white/[0.08] flex flex-col justify-between">
            
            {/* Screen Frame Housing the Interactive Screen Controller */}
            <div className="relative w-full h-full rounded-[26px] sm:rounded-[30px] overflow-hidden bg-black select-none pointer-events-none">
              
              {/* Active Screen Step Controller */}
              <PhoneScreenController currentStep={currentStep} />

              {/* Dynamic Screen Glare Diagonal Highlight */}
              <div
                className="absolute inset-0 w-[200%] h-[200%] pointer-events-none z-20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.02) 30%, transparent 60%)",
                  transform: "rotate(-15deg)",
                  top: "-25%",
                  left: "-25%",
                }}
              />

              {/* Dynamic Island / Camera Notch */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[68px] sm:w-[76px] h-[18px] sm:h-[20px] bg-black rounded-full z-30 flex items-center justify-between px-2 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#111] border border-[#222] flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-[#1c2c3d]/60" />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#0d0d0f]" />
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-white/40 rounded-full z-30" />
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            FLOATING GLASSMORPHISM CARDS (Positioned OUTSIDE 3D Phone)
        ══════════════════════════════════════════════════════════════════ */}
        {showBadges && (
          <>
            {/* ── CARD 1: Outside Left "Slot 8:00 PM Available" ── */}
            <motion.div
              style={{
                x: badge1X,
                y: badge1Y,
                opacity: badgesOpacity,
                transform: "translateZ(45px)",
              }}
              className="absolute -left-14 sm:-left-20 md:-left-24 top-[22%] z-40 bg-white/75 backdrop-blur-2xl border border-white/90 rounded-2xl p-2.5 sm:p-3 shadow-[0_16px_36px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04),0_0_24px_rgba(126,211,33,0.12)] pointer-events-none min-w-[105px] sm:min-w-[115px]"
            >
              <div className="text-[9px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
                <Clock size={11} className="text-[#5da610]" />
                <span>Slot</span>
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-[#111] font-clash leading-tight mt-0.5">
                8:00 PM
              </div>
              <div className="flex items-center gap-1.5 mt-1 pt-1 border-t border-black/[0.06]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED321] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#5da610]" />
                </span>
                <span className="text-[9px] font-bold text-[#5da610] tracking-tight">
                  Available
                </span>
              </div>
            </motion.div>

            {/* ── CARD 2: Outside Right "10+ Players" ── */}
            <motion.div
              style={{
                x: badge2X,
                y: badge2Y,
                opacity: badgesOpacity,
                transform: "translateZ(45px)",
              }}
              className="absolute -right-14 sm:-right-20 md:-right-24 top-[44%] z-40 bg-white/75 backdrop-blur-2xl border border-white/90 rounded-2xl p-2.5 sm:p-3 shadow-[0_16px_36px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04),0_0_24px_rgba(126,211,33,0.12)] pointer-events-none min-w-[115px] sm:min-w-[125px]"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-5 h-5 rounded-full bg-[#7ED321]/20 flex items-center justify-center text-[#4e910e]">
                  <Users size={12} strokeWidth={2.5} />
                </div>
                <div className="text-xs sm:text-[13px] font-extrabold text-[#111] font-clash leading-none tracking-tight">
                  10+ Players
                </div>
              </div>

              {/* Styled Avatar Cluster */}
              <div className="flex items-center -space-x-1.5 mt-1.5 pl-0.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white shadow-sm">
                  S
                </div>
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white shadow-sm">
                  R
                </div>
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-600 to-orange-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white shadow-sm">
                  A
                </div>
                <div className="w-5 h-5 rounded-full bg-[#7ED321] border-2 border-white flex items-center justify-center text-[7px] font-black text-black shadow-sm">
                  +
                </div>
              </div>
            </motion.div>
          </>
        )}

      </motion.div>

      {/* ── 3D TURF PLATFORM UNDERNEATH PHONE ── */}
      {showPlatform && (
        <div className="relative -mt-6 sm:-mt-8 z-[-5] flex flex-col items-center">
          <TurfPlatform />
        </div>
      )}

      {/* ── SUPPORTING 3D FOOTBALL ── */}
      {showFootball && (
        <div className="absolute -bottom-2 -right-4 sm:-right-8 z-30 pointer-events-none">
          <Football x={ballX} rotation={ballRotation} />
        </div>
      )}
    </div>
  );
}
