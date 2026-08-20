"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap, Clock, ShieldCheck, ScanLine,
  XCircle, RefreshCw, Star, CreditCard,
  CheckCircle2, ChevronLeft, ChevronRight, Shield
} from "lucide-react";
import { WHY_CHOOSE } from "../constants";

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Zap, Clock, ShieldCheck, ScanLine,
  XCircle, RefreshCw, Star, CreditCard
};

// ── PREMIUM CUSTOM ILLUSTRATIONS ──
function CardGraphic({ icon }: { icon: string }) {
  switch (icon) {
    case "Zap":
      return (
        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#7ED321]/10 to-transparent rounded-[40px] border border-[#7ED321]/20 flex items-center justify-center rotate-12 group-hover:-translate-y-3 group-hover:rotate-6 transition-all duration-700">
          <div className="w-28 h-28 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center justify-center relative overflow-hidden p-3 flex-col gap-2">
            <div className="w-full h-3 bg-gray-100 rounded-full" />
            <div className="w-3/4 h-3 bg-gray-100 rounded-full self-start" />
            <div className="mt-auto w-full h-10 bg-[#7ED321] rounded-xl flex items-center justify-center gap-2 shadow-inner">
               <Zap className="text-white" size={16} fill="white" />
               <span className="w-10 h-2 bg-white/80 rounded-full" />
            </div>
          </div>
        </div>
      );
    case "Clock":
      return (
        <div className="absolute -bottom-4 -left-6 w-44 h-44 flex items-center justify-center group-hover:-translate-y-3 transition-transform duration-700">
          <div className="relative w-32 h-32 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/50 p-3 grid grid-cols-4 gap-1.5">
             {[...Array(16)].map((_, i) => (
                <div key={i} className={`rounded-sm ${i === 6 || i === 7 ? 'bg-[#7ED321]' : 'bg-gray-100'} w-full h-5`} />
             ))}
             <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-white rounded-full shadow-lg border border-[#7ED321]/30 flex items-center justify-center">
                <Clock className="text-[#7ED321]" size={24} />
             </div>
          </div>
        </div>
      );
    case "CreditCard":
      return (
        <div className="absolute -bottom-4 -right-2 w-40 h-40 flex items-center justify-center group-hover:-translate-y-3 transition-transform duration-700">
          <div className="relative">
             <div className="w-32 h-20 bg-[#7ED321]/80 backdrop-blur-md rounded-xl shadow-lg border border-white/40 -rotate-12 absolute -top-12 -left-8 flex flex-col justify-between p-3">
                <div className="w-8 h-5 bg-white/40 rounded-md" />
                <div className="w-16 h-2 bg-white/60 rounded-full" />
             </div>
             <div className="w-32 h-20 bg-gradient-to-br from-[#5a9c14] to-[#467a10] rounded-xl shadow-[0_10px_25px_rgba(90,156,20,0.4)] border border-white/20 rotate-6 flex flex-col justify-between p-3 relative z-10">
                <div className="w-8 h-5 bg-white/30 rounded-md" />
                <div className="flex justify-between items-center w-full">
                   <div className="w-12 h-2 bg-white/50 rounded-full" />
                   <div className="w-6 h-6 rounded-full bg-white/20" />
                </div>
             </div>
             <div className="absolute -bottom-5 -right-5 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-20">
                <Shield className="text-[#7ED321]" size={24} fill="#7ED321" fillOpacity={0.2} />
             </div>
          </div>
        </div>
      );
    case "ShieldCheck":
      return (
         <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-48 flex items-center justify-center group-hover:-translate-y-3 transition-transform duration-700">
          <div className="relative w-36 h-28 bg-gradient-to-b from-green-50/80 to-green-100/50 backdrop-blur-sm rounded-[24px] shadow-inner border border-green-200/50 flex flex-col items-center justify-center overflow-hidden">
             <div className="absolute bottom-0 w-full h-10 bg-green-500/10" />
             <div className="absolute bottom-5 w-20 h-1 bg-white rounded-full" />
             <div className="absolute bottom-2 w-16 h-1 bg-white rounded-full" />
             <div className="relative w-14 h-14 bg-gradient-to-tr from-[#7ED321] to-[#63a71b] rounded-2xl shadow-lg rotate-12 flex items-center justify-center border-2 border-white">
                <CheckCircle2 className="text-white" size={28} />
             </div>
          </div>
        </div>
      );
    case "ScanLine":
      return (
        <div className="absolute -bottom-6 -right-6 w-40 h-40 flex items-center justify-center group-hover:-translate-y-3 transition-transform duration-700">
           <div className="w-32 h-32 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border-2 border-[#7ED321]/30 p-2.5 grid grid-cols-2 gap-1.5 relative overflow-hidden">
              <div className="bg-[#151515] rounded-tl-xl rounded-br-sm rounded-tr-md rounded-bl-md" />
              <div className="bg-[#151515] rounded-tr-xl rounded-bl-sm rounded-tl-md rounded-br-md" />
              <div className="bg-[#151515] rounded-bl-xl rounded-tr-sm rounded-tl-md rounded-br-md" />
              <div className="bg-[#151515] rounded-br-xl rounded-tl-sm rounded-tr-md rounded-bl-md" />
              <motion.div 
                 className="absolute inset-0 w-full h-1 bg-[#7ED321] shadow-[0_0_12px_#7ED321]"
                 animate={{ top: ["0%", "100%", "0%"] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
           </div>
        </div>
      );
    case "XCircle":
      return (
         <div className="absolute -bottom-4 right-0 w-40 h-40 flex items-center justify-center group-hover:-translate-y-3 transition-transform duration-700">
            <div className="w-24 h-36 bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 rounded-xl p-4 flex flex-col gap-3 relative rotate-12">
               <div className="w-full h-4 bg-gray-100 rounded-full" />
               <div className="flex justify-between items-center"><div className="w-10 h-2 bg-gray-100 rounded-full" /><div className="w-5 h-2 bg-gray-100 rounded-full" /></div>
               <div className="flex justify-between items-center"><div className="w-12 h-2 bg-gray-100 rounded-full" /><div className="w-5 h-2 bg-gray-100 rounded-full" /></div>
               <div className="mt-auto w-full h-[1px] bg-gray-200" />
               <div className="flex justify-between items-center"><div className="w-8 h-3 bg-gray-800 rounded-full" /><div className="w-8 h-3 bg-gray-800 rounded-full" /></div>
               
               <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#7ED321]/10 backdrop-blur-md rounded-full flex items-center justify-center border border-[#7ED321]/30 shadow-lg">
                  <span className="text-[#7ED321] font-black text-lg">₹0</span>
               </div>
            </div>
         </div>
      );
    default:
      return (
         <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full flex items-center justify-center opacity-40 group-hover:-translate-y-3 transition-transform duration-700">
            <Star className="text-gray-300 w-24 h-24" />
         </div>
      );
  }
}

export default function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => setActiveIndex((prev) => (prev + 1) % WHY_CHOOSE.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + WHY_CHOOSE.length) % WHY_CHOOSE.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative bg-[#FAFAF6] pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
      id="why-turfzy"
    >
      {/* ── Header ── */}
      <div className="text-center mb-16 md:mb-24 relative z-20 flex flex-col items-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
          <div className="w-2 h-2 rounded-full bg-[#7ED321]" />
          <span className="text-[11px] font-extrabold text-[#111] tracking-widest uppercase">
            WHY TURFZY
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#151515] tracking-tight leading-[1.1] mb-6">
          Built around every <span className="text-[#7ED321]">game you</span> play.
        </h2>

        <p className="text-base md:text-lg text-[#5C5C5C] max-w-xl mx-auto font-medium">
          From finding the right turf to walking in and playing,
          <br className="hidden md:block" /> Turfzy takes care of everything in between.
        </p>
      </div>

      {/* ── Carousel Container ── */}
      <div className="relative w-full max-w-[1440px] mx-auto h-[540px] flex items-center justify-center" ref={containerRef}>
        
        {/* SVG Arched Dashed Line Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
           <svg className="w-[120%] h-full overflow-visible" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <path 
                 d="M -100,280 Q 600,60 1300,280" 
                 fill="none" 
                 stroke="#7ED321" 
                 strokeWidth="1.5" 
                 strokeDasharray="6 6" 
                 opacity="0.5"
              />
              <g transform="translate(150, 200)">
                 <rect width="8" height="8" fill="#7ED321" transform="rotate(45)" filter="url(#glow)" />
              </g>
              <g transform="translate(350, 130)">
                 <rect width="8" height="8" fill="#7ED321" transform="rotate(45)" filter="url(#glow)" />
              </g>
              <g transform="translate(850, 130)">
                 <rect width="8" height="8" fill="#7ED321" transform="rotate(45)" filter="url(#glow)" />
              </g>
              <g transform="translate(1050, 200)">
                 <rect width="8" height="8" fill="#7ED321" transform="rotate(45)" filter="url(#glow)" />
              </g>

              <defs>
                 <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                       <feMergeNode in="blur" />
                       <feMergeNode in="SourceGraphic" />
                    </feMerge>
                 </filter>
              </defs>
           </svg>
        </div>

        {/* Cards */}
        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
          <AnimatePresence initial={false}>
            {WHY_CHOOSE.map((item, index) => {
              const dist = (index - activeIndex + WHY_CHOOSE.length) % WHY_CHOOSE.length;
              const offset = dist > Math.floor(WHY_CHOOSE.length / 2) ? dist - WHY_CHOOSE.length : dist;
              
              if (Math.abs(offset) > 2) return null;

              const isActive = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;

              const Icon = ICONS[item.icon] ?? Zap;
              
              // Refined positions and scales for premium look
              const xPos = offset * 290;
              const scale = isActive ? 1.05 : isAdjacent ? 0.9 : 0.75;
              const yPos = isActive ? -20 : isAdjacent ? 15 : 45; 
              const opacity = isActive ? 1 : isAdjacent ? 0.8 : 0.45;
              const zIndex = 40 - Math.abs(offset);

              const numStr = (index + 1).toString().padStart(2, '0');

              return (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, x: offset > 0 ? 300 : -300 }}
                  animate={{ opacity, x: xPos, scale, y: yPos, zIndex }}
                  exit={{ opacity: 0, x: offset > 0 ? 300 : -300 }}
                  transition={{ type: "spring", stiffness: 220, damping: 28 }}
                  className="absolute cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <div 
                     className={`w-[270px] sm:w-[300px] h-[420px] rounded-[36px] p-7 flex flex-col relative overflow-hidden transition-all duration-500 group
                        ${isActive 
                           ? "bg-white shadow-[0_30px_60px_-15px_rgba(126,211,33,0.25)] border-2 border-[#7ED321] ring-4 ring-[#7ED321]/10" 
                           : "bg-white/70 backdrop-blur-md shadow-lg border border-gray-200"
                        }
                     `}
                  >
                     {/* Header */}
                     <div className="flex justify-between items-start mb-6 relative z-20">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm
                           ${isActive ? "border-none bg-[#7ED321]/10 text-[#5a9c14]" : "border border-gray-100 bg-white text-gray-400"}
                        `}>
                           <Icon size={24} strokeWidth={2.5} />
                        </div>
                        <div className={`px-2.5 py-1 rounded-md text-[11px] font-extrabold transition-all duration-300
                           ${isActive ? "bg-[#7ED321] text-white shadow-md shadow-[#7ED321]/30" : "bg-white border border-gray-100 text-gray-400"}
                        `}>
                           {numStr}
                        </div>
                     </div>

                     {/* Text */}
                     <div className="relative z-20 mt-1">
                        <h3 className={`text-[17px] font-bold mb-2 leading-tight tracking-tight ${isActive ? "text-[#111]" : "text-gray-700"}`}>
                           {item.title}
                        </h3>
                        <p className={`text-[11.5px] leading-[1.6] font-medium ${isActive ? "text-[#555]" : "text-gray-500"}`}>
                           {item.description}
                        </p>
                     </div>

                     {/* Graphic */}
                     {isActive && <CardGraphic icon={item.icon} />}
                     {!isActive && (
                         <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-50" />
                     )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-4 md:left-12 flex items-center z-50">
           <button 
              onClick={prev}
              className="w-12 h-12 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-[#7ED321] hover:scale-110 transition-all hover:bg-[#7ED321] hover:text-white"
           >
              <ChevronLeft size={24} strokeWidth={3} />
           </button>
        </div>
        <div className="absolute inset-y-0 right-4 md:right-12 flex items-center z-50">
           <button 
              onClick={next}
              className="w-12 h-12 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-[#7ED321] hover:scale-110 transition-all hover:bg-[#7ED321] hover:text-white"
           >
              <ChevronRight size={24} strokeWidth={3} />
           </button>
        </div>
      </div>

      {/* ── Pagination Dots ── */}
      <div className="flex justify-center gap-3 mt-6">
        {WHY_CHOOSE.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              activeIndex === i ? "w-8 h-2.5 bg-[#7ED321] shadow-[0_0_10px_rgba(126,211,33,0.5)]" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>



    </section>
  );
}