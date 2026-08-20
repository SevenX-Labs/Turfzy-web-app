"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { Clock, Users } from "lucide-react";

export default function TurfzyAppMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Mouse interaction for realistic 3D parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 26, stiffness: 130 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  const smoothScroll = useSpring(scrollY, { damping: 28, stiffness: 100 });

  // ── CRAZY 3D SCROLL & MOUSE COMPOSITE TRANSFORMS ──
  // Base 3D isometric angle + mouse interaction + dynamic scroll revolution
  const rotateX = useTransform(
    [smoothMouseY, smoothScroll],
    ([latestMouseY, latestScroll]) => {
      const mouseOffset = (latestMouseY as number) * -5;
      const scrollOffset = Math.min((latestScroll as number) * 0.012, 6);
      return 6 + mouseOffset + scrollOffset;
    }
  );

  const rotateY = useTransform(
    [smoothMouseX, smoothScroll],
    ([latestMouseX, latestScroll]) => {
      const mouseOffset = (latestMouseX as number) * 6;
      const scrollOffset = Math.min((latestScroll as number) * 0.015, 8);
      return -12 + mouseOffset + scrollOffset;
    }
  );

  const rotateZ = useTransform(
    [smoothMouseX, smoothScroll],
    ([latestMouseX, latestScroll]) => {
      const mouseOffset = (latestMouseX as number) * 2;
      const scrollOffset = Math.min((latestScroll as number) * -0.005, -2);
      return -4 + mouseOffset + scrollOffset;
    }
  );

  const phoneY = useTransform(smoothScroll, [0, 600], [0, 40]);
  const phoneScale = useTransform(smoothScroll, [0, 300, 600], [1, 1.02, 0.98]);

  // Floating badges 3D explosion & parallax detachment during scroll
  const badge1X = useTransform(
    [smoothMouseX, smoothScroll],
    ([mX, s]) => (mX as number) * -12 - (s as number) * 0.1
  );
  const badge1Y = useTransform(
    [smoothMouseY, smoothScroll],
    ([mY, s]) => (mY as number) * -10 - (s as number) * 0.08
  );
  const badge1Opacity = useTransform(smoothScroll, [0, 380], [1, 0.2]);

  const badge2X = useTransform(
    [smoothMouseX, smoothScroll],
    ([mX, s]) => (mX as number) * 14 + (s as number) * 0.14
  );
  const badge2Y = useTransform(
    [smoothMouseY, smoothScroll],
    ([mY, s]) => (mY as number) * -8 + (s as number) * 0.05
  );
  const badge2Opacity = useTransform(smoothScroll, [0, 380], [1, 0.2]);

  // Screen glare moves dynamically with scroll
  const glareTranslate = useTransform(smoothScroll, [0, 500], [-30, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onContextMenu={(e) => e.preventDefault()}
      className="relative w-full max-w-[195px] sm:max-w-[210px] md:max-w-[225px] lg:max-w-[240px] xl:max-w-[250px] mx-auto py-2 flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* ── Ambient Under-Glow & Atmosphere ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[260px] h-[300px] sm:h-[340px] bg-gradient-to-tr from-[#7ED321]/24 via-emerald-400/16 to-transparent blur-[55px] -z-20 rounded-full pointer-events-none" />

      {/* ── MAIN 3D ROTATED PHONE CONTAINER ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          rotateZ,
          y: phoneY,
          scale: phoneScale,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
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
          {/* Side Hardware Buttons (Simulated 3D side buttons on the right side) */}
          <div className="absolute -right-[5px] top-[22%] w-[3px] h-[30px] bg-[#3a3a40] rounded-r-sm shadow-sm pointer-events-none" />
          <div className="absolute -right-[5px] top-[34%] w-[3px] h-[40px] bg-[#3a3a40] rounded-r-sm shadow-sm pointer-events-none" />
          <div className="absolute -right-[5px] top-[48%] w-[3px] h-[40px] bg-[#3a3a40] rounded-r-sm shadow-sm pointer-events-none" />

          {/* Left SIM / Action Button */}
          <div className="absolute -left-[4px] top-[20%] w-[2.5px] h-[22px] bg-[#3a3a40] rounded-l-sm shadow-sm pointer-events-none" />

          {/* Inner Black OLED Bezel */}
          <div className="relative w-full h-full rounded-[32px] sm:rounded-[36px] bg-[#0c0c0e] p-[5px] sm:p-[6px] overflow-hidden border border-white/[0.08] flex flex-col justify-between">

            {/* ── Screen Frame Housing the Screenshot ── */}
            <div className="relative w-full h-full rounded-[25px] sm:rounded-[28px] overflow-hidden bg-black select-none pointer-events-none">
              
              {/* Actual Real Turfzy App Screenshot */}
              <img
                src="/WhatsApp Image 2026-07-14 at 14.43.24.jpeg"
                alt="Turfzy App Ground Booking Preview"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full object-cover object-top block absolute inset-0 bg-[#09090b] pointer-events-none select-none"
              />

              {/* Dynamic Screen Glare Diagonal Highlight that moves on scroll */}
              <motion.div
                className="absolute inset-0 w-[200%] h-[200%] pointer-events-none z-20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 30%, transparent 60%)",
                  transform: "rotate(-15deg)",
                  top: glareTranslate,
                  left: glareTranslate,
                }}
              />

              {/* Dynamic Island / Camera Notch */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[68px] sm:w-[76px] h-[18px] sm:h-[20px] bg-black rounded-full z-30 flex items-center justify-between px-2 shadow-sm">
                {/* Camera lens dot */}
                <div className="w-2 h-2 rounded-full bg-[#111] border border-[#222] flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-[#1c2c3d]/60" />
                </div>
                {/* Sensor indicator */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#0d0d0f]" />
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-white/40 rounded-full z-30" />
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            FLOATING GLASSMORPHISM CARDS (Layered around 3D Phone)
        ══════════════════════════════════════════════════════════════════ */}

        {/* ── CARD 1: Top-Left "Slot 8:00 PM Available" ── */}
        <motion.div
          style={{
            x: badge1X,
            y: badge1Y,
            opacity: badge1Opacity,
            transform: "translateZ(36px)",
          }}
          className="absolute -left-4 sm:-left-6 top-[20%] z-30 bg-white/95 backdrop-blur-xl border border-black/[0.08] rounded-2xl p-2 sm:p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.1),0_0_15px_rgba(126,211,33,0.12)] pointer-events-none"
        >
          <div className="text-[9px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
            <Clock size={11} className="text-[#5da610]" />
            <span>Slot</span>
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-[#111] font-clash leading-tight mt-0.5">
            8:00 PM
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED321] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#5da610]" />
            </span>
            <span className="text-[9px] font-bold text-[#5da610] tracking-tight">
              Available
            </span>
          </div>
        </motion.div>

        {/* ── CARD 2: Right "10+ Players" ── */}
        <motion.div
          style={{
            x: badge2X,
            y: badge2Y,
            opacity: badge2Opacity,
            transform: "translateZ(36px)",
          }}
          className="absolute -right-4 sm:-right-6 top-[44%] z-30 bg-white/95 backdrop-blur-xl border border-black/[0.08] rounded-2xl p-2 sm:p-2.5 shadow-[0_14px_30px_rgba(0,0,0,0.1),0_0_20px_rgba(126,211,33,0.12)] pointer-events-none min-w-[110px] sm:min-w-[120px]"
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

      </motion.div>

      {/* ── Ground Contact Perspective Shadow ── */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-7 bg-black/30 blur-lg rounded-full pointer-events-none -z-10"
        style={{
          transform: "rotateX(70deg) scale(1.1)",
        }}
      />
    </div>
  );
}



