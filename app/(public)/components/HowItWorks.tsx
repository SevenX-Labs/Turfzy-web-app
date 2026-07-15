"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Calendar, CheckCircle2, Trophy, 
  Store, Bell, QrCode, Wallet 
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
      className="bg-[#FAFAF6] py-16 md:py-24 border-y border-gray-200/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-bold text-[#7ED321] tracking-wider uppercase mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#151515] tracking-tight leading-tight mb-4">
            From search to <span className="text-[#7ED321]">game on.</span>
          </h2>
          <p className="text-[#5C5C5C] max-w-lg mx-auto text-base md:text-lg">
            Whether you're booking a pitch or managing a venue, Turfzy makes the entire experience effortless.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-200/60 p-1.5 rounded-xl flex gap-1 shadow-inner">
            {(["players", "owners"] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors z-10 capitalize ${
                    isActive ? "text-[#151515]" : "text-[#5C5C5C] hover:text-[#151515]"
                  }`}
                >
                  For {tab}
                  {isActive && (
                    <motion.div
                      layoutId="howItWorksTabIndicator"
                      className="absolute inset-0 bg-white rounded-lg -z-10 shadow-sm border border-gray-100"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          
          {/* Mobile: Device shows on top. Desktop: Right side */}
          <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[240px] md:max-w-[280px]">
              {/* Clean iPhone Mockup Frame */}
              <div className="rounded-[40px] md:rounded-[48px] border-[10px] md:border-[12px] border-[#151515] bg-[#151515] shadow-2xl overflow-hidden relative aspect-[9/19.5]">
                
                {/* Dynamic Screen Image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeTab}-${activeStep}`}
                    src={APP_SCREENSHOTS[activeTab][activeStep]}
                    alt={`${activeTab} ui step ${activeStep + 1}`}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover absolute inset-0 z-10 bg-white"
                  />
                </AnimatePresence>

                {/* iPhone Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-6 bg-[#151515] rounded-full z-20" />
              </div>
            </div>
          </div>

          {/* Left Side: Interactive Steps List */}
          <div className="lg:col-span-6 lg:col-start-1 flex flex-col gap-3 order-2 lg:order-1">
            {currentSteps.map((step, index) => {
              const isActive = activeStep === index;
              const Icon = ICONS[step.icon] || CheckCircle2;

              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`relative w-full text-left p-5 rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isActive 
                      ? "bg-white border-gray-200 shadow-md" 
                      : "bg-transparent border-transparent hover:bg-black/5"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isActive ? "bg-[#7ED321]/15 text-[#63A71A]" : "bg-gray-200 text-gray-500"
                    }`}>
                      <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 pb-1">
                      <h3 className={`text-base md:text-lg font-bold mb-1 transition-colors ${
                        isActive ? "text-[#151515]" : "text-[#5C5C5C]"
                      }`}>
                        {step.title}
                      </h3>
                      
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[#5C5C5C] text-sm leading-relaxed"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Sleek Progress Indicator */}
                  {isActive && (
                    <motion.div
                      key={`progress-${activeTab}-${index}`}
                      className="absolute bottom-0 left-0 h-1 bg-[#7ED321]"
                      initial={{ width: "0%" }}
                      animate={{ width: isHovering ? "100%" : "100%" }}
                      transition={{ 
                        duration: isHovering ? 0 : 5, 
                        ease: "linear" 
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}