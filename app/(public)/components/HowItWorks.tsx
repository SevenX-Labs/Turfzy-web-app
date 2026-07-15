"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  MapPin, Calendar, CheckCircle2, Trophy, 
  Store, Bell, QrCode, Wallet, Sparkles, ArrowRight
} from "lucide-react";
import { HOW_IT_WORKS } from "../constants";

const ICONS: Record<string, any> = { 
  MapPin, Calendar, CheckCircle2, Trophy, 
  Store, Bell, QrCode, Wallet 
};

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
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

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
      className="relative bg-[#FAFAF8] py-16 md:py-24 overflow-hidden"
    >
      {/* ── Rich Background Layers ── */}
      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-lime-400/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-300/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-yellow-200/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] [background-size:4rem_4rem] opacity-[0.15] pointer-events-none" />
      
      {/* Radial Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#a3a3a3_1px,transparent_1px)] [background-size:2rem_2rem] opacity-[0.08] pointer-events-none" />
      
      {/* Decorative Rings */}
      <div className="absolute top-20 right-[10%] w-32 h-32 border-2 border-lime-400/15 rounded-full pointer-events-none" />
      <div className="absolute top-16 right-[8%] w-48 h-48 border border-lime-400/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-24 left-[8%] w-24 h-24 border-2 border-emerald-400/15 rounded-full pointer-events-none" />
      <div className="absolute bottom-16 left-[6%] w-40 h-40 border border-emerald-400/10 rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10" ref={containerRef}>
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] mb-5">
            <Sparkles size={15} className="text-lime-500" />
            <span className="text-[12px] font-bold text-gray-800 tracking-[0.2em] uppercase">
              How It Works
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#151515] font-clash tracking-tight leading-[1.1] mb-4">
            From Search to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">Game On.</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto font-medium leading-relaxed">
            Whether you're booking a pitch or managing a venue, Turfzy makes the entire experience effortless.
          </p>
        </motion.div>

        {/* ── Tab Switcher ── */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-10 md:mb-14"
        >
          <div className="bg-white p-1.5 rounded-2xl flex gap-1 relative border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            {(["players", "owners"] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 md:px-10 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 z-10 capitalize ${
                    isActive ? "text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  For {tab}
                  {isActive && (
                    <motion.div
                      layoutId="howItWorksTab"
                      className="absolute inset-0 bg-[#151515] rounded-xl -z-10 shadow-lg"
                      transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Main Content Grid ── */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          
          {/* Left Side: Interactive Steps */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-3 order-2 lg:order-1"
          >
            {currentSteps.map((step, index) => {
              const isActive = activeStep === index;
              const Icon = ICONS[step.icon] || CheckCircle2;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  className={`group relative w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-500 border overflow-hidden ${
                    isActive 
                      ? "bg-white border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] scale-[1.02]" 
                      : "bg-transparent border-transparent hover:bg-white/60 hover:border-gray-100"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number + Icon */}
                    <div className="relative shrink-0">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? "bg-[#151515] text-lime-400 shadow-lg shadow-black/20 scale-110" 
                          : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                      }`}>
                        <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                      </div>
                      {/* Step Number Badge */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? "bg-lime-400 text-[#151515] shadow-md" 
                          : "bg-gray-200 text-gray-500"
                      }`}>
                        {step.step}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className={`text-base md:text-lg font-bold font-clash tracking-wide mb-1 transition-colors duration-300 ${
                        isActive ? "text-[#151515]" : "text-gray-500 group-hover:text-gray-700"
                      }`}>
                        {step.title}
                      </h3>
                      
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-500 text-base leading-relaxed font-medium mb-3">
                              {step.description}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-lime-600">
                              Learn more <ArrowRight size={14} />
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gray-100 overflow-hidden">
                      <motion.div
                        key={`progress-${activeTab}-${index}`}
                        className="h-full bg-gradient-to-r from-lime-400 to-emerald-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ 
                          duration: isHovering ? 0 : 5, 
                          ease: "linear" 
                        }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Right Side: Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Phone Frame */}
            <div className="relative w-full max-w-[200px] md:max-w-[240px]">
              {/* Glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[450px] bg-lime-300/20 blur-[80px] rounded-full -z-10" />
              
              <div className="rounded-[44px] md:rounded-[52px] border-[10px] md:border-[12px] border-[#151515] bg-[#151515] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden relative aspect-[9/19.5]">
                
                {/* Dynamic Screen Image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeTab}-${activeStep}`}
                    src={APP_SCREENSHOTS[activeTab][activeStep]}
                    alt={`${activeTab} ui step ${activeStep + 1}`}
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover absolute inset-0 z-10 bg-white"
                  />
                </AnimatePresence>


                
                {/* Screen Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-white/5 to-transparent w-full h-[150%] transform -translate-y-1/4 -rotate-12 pointer-events-none z-30 mix-blend-overlay" />
              </div>

              {/* Depth Shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/10 blur-xl rounded-full z-0" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}