"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Star, MapPin, CheckCircle2, Search, Calendar, Shield, Zap, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#FAFAFA] flex flex-col items-center">

      {/* Soft background gradient */}
      <div className="absolute top-0 inset-x-0 h-[800px] pointer-events-none overflow-hidden z-0 flex justify-center">
        <div className="absolute top-[-20%] w-[1000px] h-[600px] rounded-[100%] bg-gradient-to-b from-lime-200/30 to-transparent blur-3xl opacity-60" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100"
          style={{ marginBottom: '40px' }}
        >
          {/* Custom Star with Black Stroke */}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>

          <span className="text-sm font-bold text-slate-800 tracking-wider uppercase mt-0.5">Best Turf Booking App in 2024</span>

          <div className="flex gap-0.5 items-center">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" strokeWidth={0} />
            ))}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-gray-900 tracking-tight leading-[1.05] font-clash"
          style={{ marginBottom: '24px' }}
        >
          Transform your game <br className="hidden md:block" />
          with Turfzy.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl"
          style={{ marginBottom: '40px' }}
        >
          Discover verified turfs, see live slot availability, and book your game in seconds. Your ultimate sports companion.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-24"
        >
          <Link href="/find-turf" className="btn-black flex items-center gap-2 px-8 py-4 h-auto text-base">
            Get Started Now <Play size={14} className="fill-white ml-1" />
          </Link>
        </motion.div>

        {/* Large Mockup Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-[800px] mb-32"
        >
          {/* Main Mockup Container (Phone shape) */}
          <div className="relative mx-auto w-full max-w-[340px] aspect-[1/2] bg-white rounded-[40px] shadow-[0_20px_80px_-15px_rgba(0,0,0,0.1)] border-[8px] border-gray-900 overflow-hidden z-10 flex flex-col">
            {/* Top Notch/Dynamic Island */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20 pt-2">
              <div className="w-24 h-5 bg-gray-900 rounded-full" />
            </div>

            {/* App Header */}
            <div className="pt-10 pb-4 px-5 bg-white border-b border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center">
                  <MapPin size={16} className="text-lime-600" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase">Location</div>
                  <div className="text-xs font-bold text-gray-800">Bandra, Mumbai</div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Search size={16} className="text-gray-500" />
              </div>
            </div>

            {/* App Content */}
            <div className="flex-1 bg-gray-50 p-4 overflow-hidden relative">
              {/* Date strip */}
              <div className="flex gap-2 mb-6 overflow-hidden">
                {['Mon 12', 'Tue 13', 'Wed 14'].map((d, i) => (
                  <div key={d} className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 ${i === 1 ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 shadow-sm'}`}>
                    {d}
                  </div>
                ))}
              </div>

              {/* Chat-like Assistant Message */}
              <div className="flex gap-3 mb-6 items-end">
                <div className="w-6 h-6 rounded-full bg-lime-100 shrink-0 flex items-center justify-center mb-1">
                  <Zap size={12} className="text-lime-600" />
                </div>
                <div className="bg-white rounded-2xl rounded-bl-sm p-3 shadow-sm border border-gray-100 text-left relative">
                  <div className="text-xs text-gray-800 font-medium">Found 3 premium slots available tonight at <strong>City Arena</strong>. Want to book 7:00 PM?</div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-3 mb-6 items-end justify-end">
                <div className="bg-lime-500 rounded-2xl rounded-br-sm p-3 shadow-sm text-left relative">
                  <div className="text-xs text-white font-medium">Yes, book the 7:00 PM slot for Football.</div>
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-200 shrink-0 overflow-hidden mb-1">
                  <img src="https://i.pravatar.cc/100?img=33" alt="user" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Confirmation Card */}
              <div className="bg-white rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-gray-100 text-left mt-4 mx-4 absolute bottom-6 inset-x-0">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 size={24} className="text-lime-500" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">Booking Confirmed</div>
                    <div className="text-[10px] text-gray-500">City Arena · Today, 7:00 PM</div>
                  </div>
                </div>
                <button className="w-full py-2 bg-gray-50 rounded-xl text-xs font-bold text-gray-900 border border-gray-200">
                  View Details
                </button>
              </div>

            </div>
          </div>

          {/* Subtle glow behind the phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-lime-400/20 blur-[100px] -z-10 rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}