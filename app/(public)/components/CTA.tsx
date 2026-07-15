"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100" id="cta">
      <div className="max-w-[1200px] mx-auto px-6 relative" ref={ref}>
        
        {/* Background Subtle Pattern */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 bg-[#111111] rounded-[40px] overflow-hidden"
        >
          {/* Green accent line top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-400" />
          
          <div className="px-6 py-20 md:py-28 lg:py-32 flex flex-col items-center justify-center text-center relative z-10">
            
            {/* Text Content */}
            <div className="max-w-3xl flex flex-col items-center justify-center gap-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-clash tracking-tight leading-[1.1]">
                Ready to elevate your game?
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl leading-relaxed">
                Join the platform designed to make booking turfs and managing venues entirely effortless.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
                <Link 
                  href="/find-turf" 
                  className="w-full sm:w-auto bg-lime-500 hover:bg-lime-400 text-black font-bold text-[15px] px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(132,204,22,0.2)]"
                >
                  Get Started
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#owners" 
                  className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-[15px] px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center"
                >
                  I'm a Turf Owner
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-medium mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-lime-500/20 flex items-center justify-center">
                    <Check size={12} className="text-lime-500" />
                  </div>
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-lime-500/20 flex items-center justify-center">
                    <Check size={12} className="text-lime-500" />
                  </div>
                  Instant booking
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
