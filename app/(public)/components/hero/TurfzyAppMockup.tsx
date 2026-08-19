"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, Clock } from "lucide-react";

export default function TurfzyAppMockup() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse interaction for realistic 3D parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D Rotation transforms around base isometric bend
  // Base angle: rotateX(14deg) rotateY(-18deg) rotateZ(6deg)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [19, 9]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-24, -12]);
  const rotateZ = useTransform(smoothMouseX, [-0.5, 0.5], [4, 8]);

  // Floating badges parallax offsets
  const badge1X = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const badge1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  const badge2X = useTransform(smoothMouseX, [-0.5, 0.5], [10, -10]);
  const badge2Y = useTransform(smoothMouseY, [-0.5, 0.5], [-6, 6]);

  const badge3X = useTransform(smoothMouseX, [-0.5, 0.5], [8, -8]);
  const badge3Y = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);

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
      className="relative w-full max-w-[170px] sm:max-w-[185px] md:max-w-[195px] lg:max-w-[205px] xl:max-w-[215px] mx-auto py-2 flex items-center justify-center select-none"
      style={{ perspective: 1100 }}
    >
      {/* ── Ambient Under-Glow & Atmosphere ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[260px] h-[300px] sm:h-[360px] bg-gradient-to-tr from-[#7ED321]/24 via-emerald-400/16 to-transparent blur-[50px] -z-20 rounded-full pointer-events-none" />

      {/* ── MAIN 3D ROTATED PHONE CONTAINER ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          rotateZ,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -8, 0],
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
          className="relative w-full h-full rounded-[32px] sm:rounded-[36px] p-[2px] bg-gradient-to-b from-[#3a3a42] via-[#222226] to-[#121215] transition-shadow duration-300"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: `
              1px 1px 0px #383840,
              2px 2px 0px #2a2a30,
              3px 3px 0px #222226,
              4px 4px 0px #1a1a1d,
              5px 5px 0px #151517,
              6px 6px 0px #101012,
              10px 18px 36px -6px rgba(0,0,0,0.7),
              -8px 20px 45px rgba(0,0,0,0.3),
              0 0 40px rgba(126,211,33,0.15)
            `,
          }}
        >
          {/* Side Hardware Buttons (Simulated 3D side buttons on the right side) */}
          <div className="absolute -right-[5px] top-[24%] w-[3px] h-[26px] bg-[#3a3a40] rounded-r-sm shadow-sm pointer-events-none" />
          <div className="absolute -right-[5px] top-[34%] w-[3px] h-[36px] bg-[#3a3a40] rounded-r-sm shadow-sm pointer-events-none" />
          <div className="absolute -right-[5px] top-[46%] w-[3px] h-[36px] bg-[#3a3a40] rounded-r-sm shadow-sm pointer-events-none" />

          {/* Left SIM / Action Button */}
          <div className="absolute -left-[4px] top-[20%] w-[2.5px] h-[20px] bg-[#3a3a40] rounded-l-sm shadow-sm pointer-events-none" />

          {/* Inner Black OLED Bezel */}
          <div className="relative w-full h-full rounded-[30px] sm:rounded-[34px] bg-[#0c0c0e] p-[5px] sm:p-[6px] overflow-hidden border border-white/[0.08] flex flex-col justify-between">

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

              {/* Dynamic Screen Glare Diagonal Highlight */}
              <div
                className="absolute inset-0 w-[200%] h-[200%] pointer-events-none z-20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.02) 30%, transparent 60%)",
                  transform: "translate(-30%, -30%) rotate(-15deg)",
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
            transform: "translateZ(35px)",
          }}
          className="absolute -left-5 sm:-left-7 top-[16%] z-30 bg-[#141417]/92 backdrop-blur-xl border border-white/[0.12] rounded-xl p-2 sm:p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.5),0_0_15px_rgba(126,211,33,0.12)] pointer-events-none"
        >
          <div className="text-[9px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
            <Clock size={10} className="text-[#7ED321]" />
            <span>Slot</span>
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-white font-clash leading-tight mt-0.5">
            8:00 PM
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED321] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7ED321]" />
            </span>
            <span className="text-[9px] font-bold text-[#7ED321] tracking-tight">
              Available
            </span>
          </div>
        </motion.div>

        {/* ── CARD 2: Right "Booking Confirmed" ── */}
        <motion.div
          style={{
            x: badge2X,
            y: badge2Y,
            transform: "translateZ(30px)",
          }}
          className="absolute -right-3 sm:-right-6 top-[44%] z-30 bg-[#141417]/92 backdrop-blur-xl border border-white/[0.12] rounded-xl p-2 sm:p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.5),0_0_15px_rgba(126,211,33,0.12)] pointer-events-none min-w-[110px] sm:min-w-[125px]"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-[#7ED321]/20 border border-[#7ED321]/50 flex items-center justify-center text-[#7ED321]">
              <Check size={11} strokeWidth={3} />
            </div>
            <div>
              <div className="text-[8px] font-semibold text-gray-400 leading-none">Booking</div>
              <div className="text-[11px] sm:text-xs font-extrabold text-white leading-tight mt-0.5">
                Confirmed
              </div>
            </div>
          </div>
          <div className="text-[9px] font-medium text-gray-300 mt-1 pt-1 border-t border-white/[0.08] flex items-center justify-between">
            <span>Today</span>
            <span className="text-[#7ED321] font-bold">8:00 PM</span>
          </div>
        </motion.div>

        {/* ── CARD 3: Bottom-Right "Trusted by 10K+ Players" ── */}
        <motion.div
          style={{
            x: badge3X,
            y: badge3Y,
            transform: "translateZ(40px)",
          }}
          className="absolute -right-2 sm:-right-4 bottom-[8%] z-30 bg-[#141417]/92 backdrop-blur-xl border border-white/[0.12] rounded-xl p-2 sm:p-2.5 shadow-[0_14px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(126,211,33,0.15)] pointer-events-none"
        >
          <div className="flex items-center gap-1 mb-0.5">
            <div className="w-3.5 h-3.5 rounded-full bg-[#7ED321] flex items-center justify-center text-black">
              <Check size={8} strokeWidth={3.5} />
            </div>
            <span className="text-[9px] font-bold text-gray-300">Trusted by</span>
          </div>

          <div className="text-xs sm:text-[13px] font-extrabold text-white font-clash leading-none tracking-tight">
            10K+ Players
          </div>

          {/* Styled Avatar Cluster */}
          <div className="flex items-center -space-x-1 mt-1.5">
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 border border-[#141417] flex items-center justify-center text-[7px] font-bold text-white shadow-sm">
              S
            </div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-400 border border-[#141417] flex items-center justify-center text-[7px] font-bold text-white shadow-sm">
              R
            </div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 border border-[#141417] flex items-center justify-center text-[7px] font-bold text-white shadow-sm">
              A
            </div>
            <div className="w-4 h-4 rounded-full bg-[#7ED321] border border-[#141417] flex items-center justify-center text-[6px] font-black text-black shadow-sm">
              +
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* ── Ground Contact Perspective Shadow ── */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black/30 blur-lg rounded-full pointer-events-none -z-10"
        style={{
          transform: "rotateX(70deg) scale(1.1)",
        }}
      />
    </div>
  );
}


