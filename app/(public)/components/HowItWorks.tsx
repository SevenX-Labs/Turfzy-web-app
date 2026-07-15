"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  MapPin, Calendar, CheckCircle2, Trophy, 
  Store, Bell, QrCode, Wallet, ArrowRight, Layers
} from "lucide-react";
import { HOW_IT_WORKS } from "../constants";

const ICONS: Record<string, any> = { 
  MapPin, Calendar, CheckCircle2, Trophy, 
  Store, Bell, QrCode, Wallet 
};

// Placeholder paths - keep your existing ones
const APP_SCREENSHOTS = {
  players: [
    "/WhatsApp Image 2026-07-14 at 14.43.24.jpeg",
    "/WhatsApp Image 2026-07-14 at 14.43.24.jpeg",
    "/WhatsApp Image 2026-07-14 at 14.43.24.jpeg",
    "/WhatsApp Image 2026-07-14 at 14.43.24.jpeg",
  ],
  owners: [
    "/app-ui-mockup.png",
    "/app-ui-mockup.png",
    "/app-ui-mockup.png",
    "/app-ui-mockup.png",
  ]
};

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const [activeTab, setActiveTab] = useState<"players" | "owners">("players");
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const currentSteps = HOW_IT_WORKS[activeTab];

  // Auto-cycle through steps every 5 seconds
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % currentSteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab, currentSteps.length, isHovering]);

  // Reset step when tab changes
  useEffect(() => {
    setActiveStep(0);
  }, [activeTab]);

  return (
    <section 
      id="how-it-works" 
      className="relative bg-[#FAFAF6] py-24 md:py-32 border-b border-gray-200/50 overflow-hidden"
    >
      {/* ── Premium Alive Background ── */}
      {/* 1. Fluid Mesh Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none blur-[90px] opacity-70">
        <motion.div
          animate={{ 
            x: ["0%", "15%", "-5%", "0%"], 
            y: ["0%", "-10%", "15%", "0%"], 
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 180, 360, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-[#7ED321]/20 rounded-full"
        />
        <motion.div
          animate={{ 
            x: ["0%", "-15%", "5%", "0%"], 
            y: ["0%", "10%", "-15%", "0%"], 
            scale: [1, 0.9, 1.1, 1],
            rotate: [360, 180, 90, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-emerald-400/20 rounded-full"
        />
      </div>

      {/* 2. Alive Blueprint Grid (Full width) */}
      <motion.div 
        className="absolute inset-[-50px] pointer-events-none opacity-50 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(132, 204, 34, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(132, 204, 34, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
        animate={{ x: [0, -40], y: [0, -40] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={containerRef}>
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 flex flex-col items-center gap-8"
        >
          {/* Sleek Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <Layers size={14} className="text-[#7ED321]" />
            <span className="text-[11px] font-bold text-[#151515] tracking-widest uppercase">
              The Process
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-[#7ED321] tracking-tight leading-[1.1]">
            How it works
          </h2>

          <p className="text-lg md:text-xl text-[#5C5C5C] max-w-2xl mx-auto font-medium leading-relaxed text-balance">
            From discovering the perfect pitch to managing your venue effortlessly, see how Turfzy removes the friction from every step.
          </p>
        </motion.div>

        {/* ── Tab Switcher ── */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-20"
        >
          <div className="bg-gray-200/50 p-1.5 rounded-[16px] flex gap-1 relative shadow-inner">
            {(["players", "owners"] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-10 py-3 rounded-[12px] text-base font-semibold transition-colors duration-300 z-10 capitalize ${
                    isActive ? "text-[#151515]" : "text-[#5C5C5C] hover:text-[#151515]"
                  }`}
                >
                  For {tab}
                  {isActive && (
                    <motion.div
                      layoutId="howItWorksTab"
                      className="absolute inset-0 bg-white rounded-[12px] -z-10 shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-100"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Main Content Grid ── */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          
          {/* Left Side: Phone Mockup */}
          <div className="lg:col-span-5 lg:col-start-2 order-1 flex justify-center perspective-[1000px]">
            <div className="relative w-full max-w-[260px] md:max-w-[280px]">
              
              {/* Premium Phone Frame */}
              <div className="rounded-[44px] md:rounded-[48px] border-[10px] md:border-[12px] border-[#151515] bg-[#151515] shadow-2xl overflow-hidden relative aspect-[9/19.5]">
                
                {/* Dynamic Screen Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${activeStep}`}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-full absolute inset-0 z-10 bg-white"
                  >
                    <Image
                      src={APP_SCREENSHOTS[activeTab][activeStep]}
                      alt={`${activeTab} ui step ${activeStep + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Minimal base shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/15 blur-xl rounded-full z-0" />
            </div>
          </div>

          {/* Right Side: Interactive Steps List */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-2 order-2">
            {currentSteps.map((step, index) => {
              const isActive = activeStep === index;
              const Icon = ICONS[step.icon] || CheckCircle2;

              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`group relative w-full text-left p-6 rounded-2xl transition-all duration-300 border-none overflow-hidden ${
                    isActive 
                      ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]" 
                      : "bg-transparent hover:bg-black/[0.02]"
                  }`}
                >
                  {/* SaaS-Style Vertical Progress Indicator */}
                  {isActive && (
                    <motion.div
                      key={`progress-${activeTab}-${index}`}
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#7ED321]"
                      initial={{ height: "0%" }}
                      animate={{ height: isHovering ? "100%" : "100%" }}
                      transition={{ 
                        duration: isHovering ? 0 : 5, 
                        ease: "linear" 
                      }}
                    />
                  )}

                  <div className="flex items-start gap-5">
                    {/* Icon Container */}
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isActive 
                        ? "bg-[#7ED321]/10 text-[#68b01a]" 
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                    }`}>
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pt-0.5">
                      <h3 className={`text-lg font-bold tracking-tight mb-1.5 transition-colors duration-300 ${
                        isActive ? "text-[#151515]" : "text-[#5C5C5C] group-hover:text-[#151515]"
                      }`}>
                        {step.title}
                      </h3>
                      
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-[#5C5C5C] text-sm leading-relaxed mb-3">
                              {step.description}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#151515] uppercase tracking-wider group-hover:text-[#7ED321] transition-colors">
                              Learn more <ArrowRight size={12} />
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}