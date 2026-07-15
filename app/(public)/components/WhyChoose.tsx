"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Zap, Clock, ShieldCheck, ScanLine, 
  XCircle, RefreshCw, Star, CreditCard,
  Sparkles
} from "lucide-react";
import { WHY_CHOOSE } from "../constants";

const ICONS: Record<string, any> = { 
  Zap, Clock, ShieldCheck, ScanLine, 
  XCircle, RefreshCw, Star, CreditCard 
};

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

export default function WhyChoose() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative bg-[#FAFAF6] py-24 md:py-32 overflow-hidden border-b border-gray-200/50" 
      id="why-turfzy"
    >
      {/* ── Premium Ambient Background ── */}
      {/* Subtle Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      
      {/* Soft Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#7ED321]/10 to-transparent blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-blue-400/5 to-transparent blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          {/* Sleek Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-8">
            <Sparkles size={14} className="text-[#7ED321]" />
            <span className="text-xs font-bold text-[#151515] tracking-widest uppercase">
              The Turfzy Edge
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#151515] tracking-tighter leading-[1.1] mb-6 max-w-3xl text-balance">
            Built Different. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED321] to-[#5a9c14]">
              Built for You.
            </span>
          </h2>
          
          <p className="text-lg text-[#5C5C5C] max-w-xl mx-auto font-medium leading-relaxed text-balance">
            Every feature is meticulously designed with one single goal: to get you on the turf faster, with absolutely zero friction.
          </p>
        </motion.div>

        {/* ── Bento-Style Grid Layout ── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_CHOOSE.map((item, index) => {
            const Icon = ICONS[item.icon] ?? Zap;
            
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative bg-white/70 backdrop-blur-xl rounded-[28px] p-8 border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-[#7ED321]/30 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Subtle Hover Gradient Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7ED321]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-[28px]" />

                {/* Modern Icon Container */}
                <div className="relative w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all duration-300 z-10">
                  <Icon 
                    size={22} 
                    className="text-[#5C5C5C] group-hover:text-[#7ED321] transition-colors duration-300" 
                    strokeWidth={2} 
                  />
                  {/* Micro-interaction ring */}
                  <div className="absolute inset-0 rounded-2xl border border-[#7ED321]/0 group-hover:border-[#7ED321]/20 scale-95 group-hover:scale-110 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#151515] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-[#5C5C5C] text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Glow Line on Hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#7ED321] to-transparent group-hover:w-2/3 transition-all duration-700 opacity-0 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}