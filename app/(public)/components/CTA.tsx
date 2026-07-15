"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-[#FAFAFA] py-16 pb-24" id="cta">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
          animate={inView || prefersReduced ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] p-10 lg:p-12 lg:px-16 overflow-hidden relative shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 group"
          style={{
            background: "linear-gradient(145deg, #0d1509 0%, #0a0f07 100%)",
            border: "1px solid rgba(132, 204, 22, 0.15)",
          }}
        >
          {/* Subtle Glow inside the dark container */}
          <div 
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" 
          />
          <div 
            className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-lime-400/5 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/3 pointer-events-none" 
          />

          {/* Grid Pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: "24px 24px"
            }}
          />

          <div className="relative z-10 max-w-lg text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 mb-8"
            >
              <Sparkles size={14} className="text-lime-400" />
              <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Start playing today</span>
            </div>
            
            <h2
              className="text-4xl lg:text-5xl font-black text-white font-clash leading-[1.2] mb-7"
            >
              Ready to elevate <br /> your game?
            </h2>
            
            <p
              className="text-base text-gray-400 max-w-sm mx-auto lg:mx-0 leading-relaxed mb-9"
            >
              Join thousands of players and turf owners making sports easier, faster, and more accessible.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
              <Link 
                href="/find-turf" 
                className="w-full sm:w-auto bg-[#84cc16] hover:bg-[#65a30d] text-[#1a2e05] font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(132,204,22,0.3)] flex items-center justify-center gap-2.5"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <Link 
                href="#owners" 
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center"
              >
                I&apos;m a Turf Owner
              </Link>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-lime-500" />
                <span className="text-sm text-gray-400 font-medium">Free for players</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-lime-500" />
                <span className="text-sm text-gray-400 font-medium">Instant booking</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-auto flex justify-center lg:justify-end">
             {/* Premium Dark Chat UI Mockup */}
             <motion.div 
               className="w-[300px] bg-[#111811] rounded-[24px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"
               animate={prefersReduced ? {} : { y: [0, -8, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             >
                <div className="flex gap-2.5 mb-4 items-end">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 shrink-0 flex items-center justify-center mb-0.5 shadow-md shadow-lime-500/20">
                    <Sparkles size={12} className="text-[#1a2e05]" />
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-bl-sm p-3.5 text-left">
                    <div className="text-[13px] text-gray-300 font-medium leading-relaxed">Any football turfs open right now near me?</div>
                  </div>
                </div>
                
                <div className="flex gap-2.5 items-end justify-end">
                  <div className="bg-gradient-to-br from-[#84cc16] to-[#65a30d] rounded-2xl rounded-br-sm p-4 text-left shadow-lg shadow-lime-500/20 w-[92%]">
                    <div className="text-[13px] text-[#1a2e05] font-bold mb-3">I found 2 turfs open within 5km!</div>
                    
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2.5 flex items-center gap-2.5 shadow-inner hover:scale-[1.02] transition-transform cursor-pointer mb-2">
                       <div className="bg-lime-100 p-1.5 rounded-lg">
                         <MapPin size={18} className="text-lime-600" />
                       </div>
                       <div className="flex-1">
                         <p className="text-[13px] font-bold text-gray-900 leading-tight">City Arena</p>
                         <p className="text-[11px] font-semibold text-lime-600">2 slots open</p>
                       </div>
                       <div className="text-gray-400 text-[10px] font-medium">1.2 km</div>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-2.5 flex items-center gap-2.5 shadow-inner hover:scale-[1.02] transition-transform cursor-pointer">
                       <div className="bg-gray-100 p-1.5 rounded-lg">
                         <MapPin size={18} className="text-gray-500" />
                       </div>
                       <div className="flex-1">
                         <p className="text-[13px] font-bold text-gray-900 leading-tight">Green Field</p>
                         <p className="text-[11px] font-semibold text-lime-700">1 slot open</p>
                       </div>
                       <div className="text-gray-500 text-[10px] font-medium">3.5 km</div>
                    </div>
                  </div>
                </div>
             </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
