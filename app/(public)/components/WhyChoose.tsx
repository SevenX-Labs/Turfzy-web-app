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
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function WhyChoose() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Perfectly balanced 4-column layout logic (for 8 items)
  const getColSpan = (index: number) => {
    switch (index) {
      case 0: return "md:col-span-2 lg:col-span-2"; // Row 1 (Left)
      case 1: return "md:col-span-1 lg:col-span-1"; // Row 1
      case 2: return "md:col-span-1 lg:col-span-1"; // Row 1 (Right)
      case 3: return "md:col-span-1 lg:col-span-1"; // Row 2 (Left)
      case 4: return "md:col-span-2 lg:col-span-2"; // Row 2 (Middle)
      case 5: return "md:col-span-1 lg:col-span-1"; // Row 2 (Right)
      case 6: return "md:col-span-1 lg:col-span-2"; // Row 3 (Left half)
      case 7: return "md:col-span-1 lg:col-span-2"; // Row 3 (Right half)
      default: return "md:col-span-1 lg:col-span-1";
    }
  };

  return (
    <section 
      className="relative bg-[#FAFAF6] py-24 md:py-32 overflow-hidden border-b border-gray-200/50" 
      id="why-turfzy"
    >
      {/* ── Ambient Background Elements ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#7ED321]/15 to-transparent rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6 transition-transform hover:scale-105">
            <Sparkles size={14} className="text-[#7ED321]" />
            <span className="text-[11px] font-bold text-[#151515] tracking-widest uppercase">
              The Turfzy Edge
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#151515] tracking-tight leading-[1.1] mb-6 max-w-3xl text-balance">
            Built Different. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED321] to-[#5a9c14]">
              Built for You.
            </span>
          </h2>
          
          <p className="text-lg text-[#5C5C5C] max-w-xl mx-auto font-medium leading-relaxed text-balance">
            Every feature is meticulously designed with one single goal: to get you on the turf faster, with absolutely zero friction.
          </p>
        </motion.div>

        {/* ── Flawless Bento Grid ── */}
        {/* grid-flow-row-dense ensures items pack tightly and leave no gaps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-5 md:gap-6"
        >
          {WHY_CHOOSE.map((item, index) => {
            const Icon = ICONS[item.icon] ?? Zap;
            
            // Theming logic for specific cards to break up the "too white" look
            const isGreenHero = index === 0;
            const isDarkHero = index === 4;
            const isWhite = !isGreenHero && !isDarkHero;
            
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className={`group relative rounded-[28px] p-7 md:p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 ${getColSpan(index)} ${
                  isGreenHero ? "bg-gradient-to-br from-[#7ED321] to-[#5a9c14] shadow-[0_12px_32px_rgba(126,211,33,0.25)] border-none text-white" :
                  isDarkHero ? "bg-[#151515] shadow-xl border-none text-white" :
                  "bg-white border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#7ED321]/30"
                }`}
              >
                {/* Large Background Watermark Icon (Fills empty space elegantly) */}
                <Icon 
                  className={`absolute -bottom-6 -right-6 w-36 h-36 transition-all duration-700 pointer-events-none ${
                    isGreenHero ? "opacity-20 text-white rotate-12 group-hover:scale-110" :
                    isDarkHero ? "opacity-5 text-white -rotate-12 group-hover:scale-110" :
                    "opacity-[0.03] text-black group-hover:opacity-[0.06] group-hover:scale-110 group-hover:-rotate-6"
                  }`} 
                  strokeWidth={1} 
                />

                {/* Content Top: Icon Container */}
                <div className="relative z-10 flex items-start mb-8 md:mb-12">
                  <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center transition-all duration-500 ${
                    isGreenHero ? "bg-white/20 text-white backdrop-blur-sm" :
                    isDarkHero ? "bg-white/10 text-white backdrop-blur-sm" :
                    "bg-gray-50 border border-gray-100 text-[#5C5C5C] group-hover:bg-[#7ED321]/10 group-hover:text-[#63a71b] group-hover:border-[#7ED321]/20"
                  }`}>
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                </div>
                
                {/* Content Bottom: Text */}
                <div className="relative z-10">
                  <h3 className={`font-bold tracking-tight mb-2 transition-colors duration-300 ${
                    isGreenHero || isDarkHero ? "text-white text-xl md:text-2xl" : 
                    "text-[#151515] text-lg md:text-xl group-hover:text-[#7ED321]"
                  }`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed font-medium max-w-[90%] ${
                    isGreenHero ? "text-white/90" :
                    isDarkHero ? "text-gray-400" :
                    "text-[#5C5C5C]"
                  }`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}