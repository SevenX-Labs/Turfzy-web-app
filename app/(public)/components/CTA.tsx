"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Zap } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#FAFAFA] py-24 pb-40" id="cta">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-[40px] p-12 lg:p-20 overflow-hidden relative shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          {/* Subtle Glow inside the dark container */}
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-lime-500/20 blur-[120px] rounded-full -translate-y-1/2 -z-0" />

          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-black text-white font-clash leading-tight" style={{ marginBottom: '32px' }}>
              Ready to elevate <br /> your game?
            </h2>
            <p className="text-lg text-gray-400 max-w-md mx-auto lg:mx-0" style={{ marginBottom: '48px' }}>
              Join thousands of players and turf owners making sports easier and more accessible.
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <Link href="/find-turf" className="w-full sm:w-auto bg-[#59A608] hover:bg-[#4d9006] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(89,166,8,0.4)] flex items-center justify-center gap-3">
                Get Started <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-auto flex justify-center lg:justify-end">
             {/* Small Chat UI Mockup similar to the reference image */}
             <div className="w-[320px] bg-white rounded-3xl p-6 shadow-xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="flex gap-3 mb-4 items-end">
                  <div className="w-8 h-8 rounded-full bg-lime-100 shrink-0 flex items-center justify-center mb-1">
                    <Zap size={16} className="text-lime-600" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-bl-sm p-4 text-left">
                    <div className="text-sm text-gray-800 font-medium">Any turfs open right now near me?</div>
                  </div>
                </div>
                
                <div className="flex gap-3 items-end justify-end">
                  <div className="bg-lime-500 rounded-2xl rounded-br-sm p-4 text-left shadow-sm">
                    <div className="text-sm text-white font-medium">I found 2 turfs open within 5km!</div>
                    <div className="mt-3 bg-white rounded-xl p-3 flex items-center gap-3">
                       <MapPin size={24} className="text-lime-600" />
                       <div>
                         <p className="text-xs font-bold text-gray-900">City Arena</p>
                         <p className="text-[10px] text-gray-500">2 slots open</p>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
