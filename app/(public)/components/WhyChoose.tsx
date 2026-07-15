"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Zap, Clock, ShieldCheck, ScanLine, 
  XCircle, RefreshCw, Star, CreditCard 
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
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function WhyChoose() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative bg-[#FAFAFA] py-24 md:py-32 overflow-hidden" 
      id="why-turfzy"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:4rem_4rem] opacity-[0.25] pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-lime-400 opacity-20 blur-[100px]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10" ref={ref}>
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 hover:border-lime-200 hover:bg-lime-50/50 transition-colors cursor-default">
            <Star size={14} className="text-lime-500 fill-lime-500" />
            <span className="text-[11px] font-bold text-gray-800 tracking-[0.2em] uppercase">
              The Turfzy Advantage
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 font-clash tracking-tight leading-[1.1] mb-6">
            Built Different. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">
              Built for You.
            </span>
          </h2>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Every feature is meticulously designed with one single goal: to get you on the turf faster, with absolutely zero friction.
          </p>
        </motion.div>

        {/* ── Modern Grid Layout ── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {WHY_CHOOSE.map((item, index) => {
            const Icon = ICONS[item.icon] ?? Zap;
            
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:border-lime-400 hover:shadow-[0_20px_40px_-15px_rgba(132,204,22,0.15)] transition-all duration-300 ease-out overflow-hidden flex flex-col"
              >
                {/* Hover Gradient Splash */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-lime-400/10 blur-3xl group-hover:bg-lime-400/20 transition-all duration-500" />

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-lime-50 group-hover:border-lime-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                  <Icon 
                    size={24} 
                    className="text-gray-600 group-hover:text-lime-600 transition-colors duration-300" 
                    strokeWidth={2} 
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 font-clash tracking-wide mb-3 group-hover:text-lime-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed font-medium">
                  {item.description}
                </p>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}