"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants";

function TestimonialCard({ 
  name, 
  role, 
  text, 
  avatar, 
  rating, 
  delay 
}: {
  name: string; 
  role: string; 
  text: string; 
  avatar: string; 
  rating: number; 
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(89,166,8,0.08)] hover:border-lime-100 transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Background Watermark Quote */}
      <Quote 
        className="absolute -top-6 -right-6 w-32 h-32 text-gray-50 -rotate-12 transition-colors duration-500 group-hover:text-lime-50" 
        strokeWidth={1}
        fill="currentColor"
      />

      <div className="relative z-10 flex-1">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-100 fill-gray-100"} 
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-base text-gray-600 mb-8 leading-relaxed font-medium">
          &quot;{text}&quot;
        </p>
      </div>

      {/* User Info */}
      <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-gray-50 group-hover:border-lime-50 transition-colors duration-500">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-100 to-lime-200 flex items-center justify-center text-lg font-bold text-lime-700 shadow-inner">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 leading-tight">{name}</h4>
          <p className="text-sm text-gray-500 font-medium">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[#FAFAFA] py-24 md:py-32 overflow-hidden" id="testimonials">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
            <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
            <span className="text-sm font-bold text-gray-700 tracking-wide">
              Trusted by 10,000+ players
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 font-clash tracking-tight leading-[1.1]">
            What the community <br className="hidden md:block" /> 
            is saying about <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">Turfzy.</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}