"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Calendar,
  CreditCard,
  Ticket,
  CheckCircle2,
} from "lucide-react";
import TurfzyPhone from "./3d/TurfzyPhone";
import { ScreenStep } from "./3d/PhoneScreenController";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const [activeTab, setActiveTab] = useState<"players" | "owners">("players");
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionInView, setSectionInView] = useState(false);

  // Detect when How It Works section enters/leaves viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-cycle images ONLY when section is visible
  useEffect(() => {
    if (!sectionInView) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, [sectionInView]);

  const STEPS = [
    {
      id: 0,
      number: "01",
      title: "FIND",
      desc: "Discover turfs near you",
      icon: Search,
      key: "find",
    },
    {
      id: 1,
      number: "02",
      title: "CHOOSE",
      desc: "Pick your date, time & turf",
      icon: Calendar,
      key: "choose",
    },
    {
      id: 2,
      number: "03",
      title: "PAY",
      desc: "Pay securely within seconds",
      icon: CreditCard,
      key: "book",
    },
    {
      id: 3,
      number: "04",
      title: "PLAY",
      desc: "Show your pass and enjoy the game",
      icon: Ticket,
      key: "play",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative bg-[#F9FAF6] py-20 md:py-28 border-b border-gray-200/50 overflow-hidden selection:bg-[#7ED321] selection:text-black"
    >
      {/* ── Background Subtle Grid Accent ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(126,211,33,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#7ED321]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        
        {/* ── MAIN 2-COLUMN LAYOUT matching screenshot ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* ══════════════════════════════════════════════════════════════════
              LEFT COLUMN: Title, Description & Tab Switcher
          ══════════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col justify-center pt-4 lg:pt-12"
          >
            {/* Title: "How it works" in green */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7ED321] font-clash tracking-tight leading-[1.08] mb-4">
              How it works
            </h2>

            {/* Subheading / Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-medium">
              From finding the right pitch for your weekend match to keeping your venue fully booked, here is how Turfzy works for players and turf owners.
            </p>

            {/* Tab Switcher Pills */}
            <div className="inline-flex bg-gray-200/60 p-1.5 rounded-2xl w-fit shadow-inner border border-gray-200/50">
              <button
                onClick={() => {
                  setActiveTab("players");
                  setActiveStep(0);
                }}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === "players"
                    ? "bg-white text-[#5da610] shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                For Players
              </button>
              <button
                onClick={() => {
                  setActiveTab("owners");
                  setActiveStep(0);
                }}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === "owners"
                    ? "bg-white text-[#5da610] shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                For Owners
              </button>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT COLUMN: 3D Fanned App Screen Stack & Bottom Timeline
          ══════════════════════════════════════════════════════════════════ */}
          <div
            className="lg:col-span-8 flex flex-col items-center"
          >
            
            {/* ── 3D FANNED CARD STACK CONTAINER ── */}
            <div className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] flex items-center justify-center overflow-visible">
              
              {/* Steady 3D Phone Mockup for How It Works (Fixed in layout, zero bounce) */}
              <div
                id="how-it-works-phone-target"
                className="absolute left-[4%] sm:left-[8%] md:left-[12%] top-1/2 -translate-y-1/2 z-40 w-[195px] sm:w-[215px] md:w-[235px] aspect-[9/18.8]"
              >
                <TurfzyPhone
                  currentStep={STEPS[activeStep].key as ScreenStep}
                  showBadges={false}
                  phoneRotateX={0}
                  phoneRotateY={-4}
                  phoneRotateZ={0}
                  phoneScale={1.0}
                  phoneY={0}
                  phoneX={0}
                />
              </div>

              {/* ── CASCADING BACKGROUND PREVIEW CARDS STACK ── */}
              {[1, 2, 3].map((relIndex) => {
                const cardIndex = (activeStep + relIndex) % 4;
                const xOffset = relIndex * 52; // 52px, 104px, 156px
                const scaleVal = 1 - relIndex * 0.08; // 0.92, 0.84, 0.76
                const opacityVal = Math.max(0.2, 0.85 - relIndex * 0.22);
                const zIndexVal = 25 - relIndex * 5;

                return (
                  <motion.div
                    key={`card-${relIndex}`}
                    initial={false}
                    animate={{
                      x: xOffset,
                      scale: scaleVal,
                      opacity: opacityVal,
                      zIndex: zIndexVal,
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setActiveStep(cardIndex)}
                    className="absolute left-[20%] sm:left-[24%] md:left-[28%] top-1/2 -translate-y-1/2 w-[180px] sm:w-[200px] md:w-[220px] aspect-[9/18.5] bg-[#0c0c0e] rounded-[28px] p-2.5 border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.18)] cursor-pointer overflow-hidden transform-gpu"
                  >
                    {/* FIND preview */}
                    {cardIndex === 0 && (
                      <div className="w-full h-full bg-[#0d0d10] rounded-[20px] overflow-hidden relative">
                        <img
                          src="/WhatsApp Image 2026-07-14 at 14.43.24.jpeg"
                          alt="Turfzy Find"
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                          <div className="text-[10px] text-[#7ED321] font-extrabold">01 FIND</div>
                          <div className="text-[9px] text-white/70">Discover turfs near you</div>
                        </div>
                      </div>
                    )}

                    {/* CHOOSE preview */}
                    {cardIndex === 1 && (
                      <div className="w-full h-full bg-[#111] rounded-[20px] p-2 flex flex-col justify-between text-white text-[10px]">
                        <div className="pt-2">
                          <div className="text-[10px] text-[#7ED321] font-extrabold mb-1">02 CHOOSE</div>
                          <div className="font-bold text-xs">Sahil Turf</div>
                          <div className="text-[9px] text-gray-400">Kothrud, Pune</div>
                        </div>
                        <div className="space-y-1 mt-2">
                          <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-[9px] flex justify-between">
                            <span className="text-gray-400">6:00 PM</span>
                            <span className="text-gray-500">Booked</span>
                          </div>
                          <div className="bg-[#7ED321]/15 border border-[#7ED321] rounded-lg p-1.5 text-[9px] flex justify-between font-bold">
                            <span>8:00 PM</span>
                            <span className="text-[#7ED321]">Open</span>
                          </div>
                        </div>
                        <div className="bg-[#7ED321] text-black font-extrabold py-1 text-center rounded-lg mt-2">
                          Continue →
                        </div>
                      </div>
                    )}

                    {/* PAY preview */}
                    {cardIndex === 2 && (
                      <div className="w-full h-full bg-[#111] rounded-[20px] p-2 text-white flex flex-col justify-between text-[10px]">
                        <div className="pt-2">
                          <div className="text-[10px] text-[#7ED321] font-extrabold mb-1">03 PAY</div>
                          <div className="font-bold text-xs">Instant Checkout</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-2 my-2 space-y-1">
                          <div className="flex justify-between text-gray-400">
                            <span>Venue</span>
                            <span className="font-bold text-white">Sahil Turf</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>Total</span>
                            <span className="font-bold text-[#7ED321]">₹1,000</span>
                          </div>
                        </div>
                        <div className="bg-[#7ED321] text-black font-extrabold py-1.5 text-center rounded-lg">
                          Pay ₹1,000 →
                        </div>
                      </div>
                    )}

                    {/* PLAY preview */}
                    {cardIndex === 3 && (
                      <div className="w-full h-full bg-[#111] rounded-[20px] p-2 text-white flex flex-col justify-between text-[10px] text-center">
                        <div className="pt-2">
                          <div className="text-[10px] text-[#7ED321] font-extrabold mb-1">04 PLAY</div>
                          <div className="w-6 h-6 mx-auto rounded-full bg-[#7ED321]/20 flex items-center justify-center text-[#7ED321] mb-1">
                            <CheckCircle2 size={14} />
                          </div>
                          <div className="font-extrabold text-[#7ED321]">Booking Confirmed</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-2 rounded-lg my-2 font-mono text-[8px] text-gray-300">
                          TFZ-8924-PASS
                        </div>
                        <div className="bg-white/10 text-white font-bold py-1 rounded-lg">
                          Match Pass
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}

            </div>

            {/* ══════════════════════════════════════════════════════════════════
                BOTTOM HORIZONTAL TIMELINE (01 FIND -> 02 CHOOSE -> 03 PAY -> 04 PLAY)
            ══════════════════════════════════════════════════════════════════ */}
            <div className="w-full mt-6 pt-6 border-t border-gray-200/60 relative">
              
              {/* Connecting Horizontal Dashed Line */}
              <div className="absolute top-[38px] left-[10%] right-[10%] h-0.5 border-b-2 border-dashed border-[#7ED321]/40 -z-10" />

              <div className="grid grid-cols-4 gap-2 text-center">
                {STEPS.map((step) => {
                  const isActive = activeStep === step.id;
                  const StepIcon = step.icon;

                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className="flex flex-col items-center text-center transition-all duration-300 cursor-pointer focus:outline-none"
                    >
                      {/* Circle Icon Badge */}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2.5 transition-all duration-300 ${
                          isActive
                            ? "bg-[#7ED321] text-black shadow-[0_0_20px_rgba(126,211,33,0.5)] scale-110"
                            : "bg-white border-2 border-gray-200 text-gray-400"
                        }`}
                      >
                        <StepIcon size={18} strokeWidth={isActive ? 2.5 : 2} />
                      </div>

                      {/* Number & Step Title */}
                      <div className="flex items-center gap-1 mb-0.5">
                        <span
                          className={`text-xs font-black tracking-tight ${
                            isActive ? "text-[#5da610]" : "text-gray-400"
                          }`}
                        >
                          {step.number}
                        </span>
                        <span
                          className={`text-xs font-black tracking-wider uppercase ${
                            isActive ? "text-black" : "text-gray-500"
                          }`}
                        >
                          {step.title}
                        </span>
                      </div>

                      {/* Short Step Subtitle */}
                      <span className="text-[11px] text-gray-500 font-medium leading-tight max-w-[130px] hidden sm:block">
                        {step.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}