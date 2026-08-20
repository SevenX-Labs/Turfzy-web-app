"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  QrCode,
  Star,
  Zap,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export type ScreenStep = "find" | "choose" | "book" | "play" | "manage";

interface PhoneScreenControllerProps {
  currentStep?: ScreenStep;
}

export default function PhoneScreenController({
  currentStep = "find",
}: PhoneScreenControllerProps) {
  return (
    <div className="relative w-full h-full bg-[#0a0a0c] text-white overflow-hidden select-none font-sans">
      
      {/* ══════════════════════════════════════════════════════════════════
          1. DISCOVERY / FIND SCREEN (Step 1: Find)
      ══════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={false}
        animate={{
          opacity: currentStep === "find" ? 1 : 0,
          scale: currentStep === "find" ? 1 : 0.96,
          y: currentStep === "find" ? 0 : 8,
          pointerEvents: currentStep === "find" ? "auto" : "none",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full bg-[#0d0d10] flex flex-col justify-between"
      >
        <img
          src="/WhatsApp Image 2026-07-14 at 14.43.24.jpeg"
          alt="Find sports turfs on Turfzy"
          draggable={false}
          className="w-full h-full object-contain object-top block absolute inset-0 bg-[#09090b]"
        />
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════════
          2. DETAILS / CHOOSE SCREEN (Step 2: Choose)
      ══════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={false}
        animate={{
          opacity: currentStep === "choose" ? 1 : 0,
          scale: currentStep === "choose" ? 1 : 0.96,
          y: currentStep === "choose" ? 0 : 8,
          pointerEvents: currentStep === "choose" ? "auto" : "none",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full bg-[#0d0d10] p-3 flex flex-col justify-between"
      >
        {/* Top Header */}
        <div className="pt-6">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
            <span className="font-bold text-white text-sm">Sahil Turf Arena</span>
            <span className="bg-[#7ED321]/20 text-[#7ED321] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Star size={10} fill="#7ED321" /> 4.9
            </span>
          </div>
          <div className="text-[11px] text-gray-400 flex items-center gap-1 mb-3">
            <MapPin size={11} className="text-[#7ED321]" /> Kothrud, Pune · 5v5 Turf
          </div>

          {/* Date Selector Row */}
          <div className="text-[11px] font-bold text-gray-300 mb-1.5 flex items-center gap-1">
            <Calendar size={11} className="text-[#7ED321]" /> Select Date
          </div>
          <div className="grid grid-cols-4 gap-1.5 mb-3">
            <div className="bg-[#7ED321] text-black rounded-lg p-1.5 text-center font-bold">
              <div className="text-[9px] uppercase">Today</div>
              <div className="text-xs">20</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-center text-gray-400">
              <div className="text-[9px] uppercase">Fri</div>
              <div className="text-xs font-bold text-white">21</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-center text-gray-400">
              <div className="text-[9px] uppercase">Sat</div>
              <div className="text-xs font-bold text-white">22</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-center text-gray-400">
              <div className="text-[9px] uppercase">Sun</div>
              <div className="text-xs font-bold text-white">23</div>
            </div>
          </div>

          {/* Time Slots Grid */}
          <div className="text-[11px] font-bold text-gray-300 mb-1.5 flex items-center gap-1">
            <Clock size={11} className="text-[#7ED321]" /> Available Slots
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-gray-400 flex justify-between items-center">
              <span>6:00 PM</span>
              <span className="text-[9px] text-gray-500">Booked</span>
            </div>
            <div className="bg-[#7ED321]/15 border-2 border-[#7ED321] rounded-lg p-2 text-white flex justify-between items-center font-bold">
              <span>8:00 PM</span>
              <span className="text-[9px] text-[#7ED321]">Open</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-white flex justify-between items-center">
              <span>9:00 PM</span>
              <span className="text-[9px] text-[#7ED321]">Open</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-white flex justify-between items-center">
              <span>10:00 PM</span>
              <span className="text-[9px] text-[#7ED321]">Open</span>
            </div>
          </div>
        </div>

        {/* Bottom Booking Button */}
        <div className="pt-2 pb-1 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[9px] text-gray-400">Selected Slot</div>
            <div className="text-sm font-bold text-white">₹1,000</div>
          </div>
          <button className="bg-[#7ED321] text-black font-extrabold text-xs px-4 py-2 rounded-xl">
            Continue →
          </button>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════════
          3. CHECKOUT / BOOK SCREEN (Step 3: Book)
      ══════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={false}
        animate={{
          opacity: currentStep === "book" ? 1 : 0,
          scale: currentStep === "book" ? 1 : 0.96,
          y: currentStep === "book" ? 0 : 8,
          pointerEvents: currentStep === "book" ? "auto" : "none",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full bg-[#0d0d10] p-3 flex flex-col justify-between"
      >
        {/* Header */}
        <div className="pt-6">
          <div className="text-center mb-3">
            <div className="w-9 h-9 mx-auto rounded-full bg-[#7ED321]/20 border border-[#7ED321]/40 flex items-center justify-center text-[#7ED321] mb-1.5">
              <Zap size={18} />
            </div>
            <h4 className="text-sm font-extrabold text-white">Instant Checkout</h4>
            <p className="text-[10px] text-gray-400">Zero booking fee · Direct turf lock</p>
          </div>

          {/* Booking Summary Box */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 mb-3 text-[11px] space-y-1.5">
            <div className="flex justify-between text-gray-300">
              <span>Venue</span>
              <span className="font-bold text-white">Sahil Turf Arena</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Date & Time</span>
              <span className="font-bold text-[#7ED321]">Today, 8:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Court</span>
              <span className="text-white">Pitch A (Floodlit)</span>
            </div>
            <div className="border-t border-white/10 pt-1.5 flex justify-between font-bold text-white text-xs">
              <span>Total Amount</span>
              <span className="text-[#7ED321]">₹1,000</span>
            </div>
          </div>

          {/* Payment Badges */}
          <div className="text-[10px] text-gray-400 mb-1 font-bold">Fast UPI Payment</div>
          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-bold">
            <div className="bg-white/5 border border-white/15 p-1.5 rounded-lg text-white">GPay</div>
            <div className="bg-white/5 border border-white/15 p-1.5 rounded-lg text-white">PhonePe</div>
            <div className="bg-white/5 border border-white/15 p-1.5 rounded-lg text-white">Paytm</div>
          </div>
        </div>

        {/* Confirm Button */}
        <button className="w-full bg-[#7ED321] text-black font-extrabold text-xs py-2.5 rounded-xl shadow-[0_0_15px_rgba(126,211,33,0.3)]">
          Pay ₹1,000 & Confirm
        </button>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════════
          4. DIGITAL MATCH PASS SCREEN (Step 4: Play)
      ══════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={false}
        animate={{
          opacity: currentStep === "play" ? 1 : 0,
          scale: currentStep === "play" ? 1 : 0.96,
          y: currentStep === "play" ? 0 : 8,
          pointerEvents: currentStep === "play" ? "auto" : "none",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full bg-[#0d0d10] p-3 flex flex-col justify-between"
      >
        <div className="pt-6">
          <div className="flex items-center justify-center gap-1 text-[#7ED321] text-xs font-bold mb-2">
            <CheckCircle2 size={15} /> Booking Confirmed!
          </div>

          {/* Match Pass Ticket Card */}
          <div className="bg-white rounded-2xl p-3 text-black shadow-lg">
            <div className="flex justify-between items-start border-b border-gray-100 pb-2 mb-2">
              <div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Match Pass</div>
                <div className="text-xs font-extrabold text-gray-900">Sahil Turf Arena</div>
              </div>
              <div className="bg-[#7ED321] text-black font-extrabold text-[9px] px-2 py-0.5 rounded-full">
                ACTIVE
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px] mb-2.5">
              <div>
                <div className="text-gray-400">Date</div>
                <div className="font-bold text-gray-800">Today, 20 Aug</div>
              </div>
              <div>
                <div className="text-gray-400">Time</div>
                <div className="font-bold text-gray-800">8:00 - 9:00 PM</div>
              </div>
            </div>

            {/* Simulated QR Code for Gate Entry */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2 flex flex-col items-center justify-center">
              <QrCode size={48} className="text-gray-900 mb-1" />
              <span className="text-[9px] font-mono font-bold text-gray-500">TFZ-8924-PASS</span>
            </div>
          </div>
        </div>

        <div className="text-center text-[10px] text-gray-400 pb-1">
          Show this pass at venue entrance
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════════
          5. OWNER DASHBOARD / MANAGE SCREEN (Step 5: Manage)
      ══════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={false}
        animate={{
          opacity: currentStep === "manage" ? 1 : 0,
          scale: currentStep === "manage" ? 1 : 0.96,
          y: currentStep === "manage" ? 0 : 8,
          pointerEvents: currentStep === "manage" ? "auto" : "none",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full bg-[#0d0d10] p-3 flex flex-col justify-between"
      >
        <div className="pt-6">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
            <div>
              <span className="font-bold text-white text-xs block">Sahil Arena Admin</span>
              <span className="text-[9px] text-[#7ED321]">Venue Control Center</span>
            </div>
            <span className="bg-[#7ED321]/20 text-[#7ED321] text-[9px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1">
              LIVE
            </span>
          </div>

          {/* Revenue Card */}
          <div className="bg-gradient-to-br from-[#7ED321]/20 via-white/5 to-white/5 border border-[#7ED321]/30 rounded-xl p-2.5 mb-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] text-gray-300 font-bold uppercase">Today&apos;s Revenue</span>
              <TrendingUp size={12} className="text-[#7ED321]" />
            </div>
            <div className="text-base font-extrabold text-white font-clash">₹14,500</div>
            <div className="text-[9px] text-emerald-400 mt-0.5 flex items-center gap-1">
              <span>↑ +18% vs yesterday</span>
            </div>
          </div>

          {/* Schedule Matrix Summary */}
          <div className="text-[10px] font-bold text-gray-300 mb-1 flex items-center justify-between">
            <span className="flex items-center gap-1"><Calendar size={10} className="text-[#7ED321]" /> Today&apos;s Slots</span>
            <span className="text-[9px] text-[#7ED321]">12/16 Booked</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[10px] mb-2">
            <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex justify-between items-center">
              <span>6 PM - Pitch A</span>
              <span className="text-[8px] bg-emerald-500/20 text-emerald-400 font-bold px-1 rounded">Booked</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex justify-between items-center">
              <span>8 PM - Pitch A</span>
              <span className="text-[8px] bg-emerald-500/20 text-emerald-400 font-bold px-1 rounded">Booked</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex justify-between items-center">
              <span>9 PM - Pitch B</span>
              <span className="text-[8px] bg-amber-500/20 text-amber-400 font-bold px-1 rounded">Blocked</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex justify-between items-center">
              <span>10 PM - Pitch A</span>
              <span className="text-[8px] bg-[#7ED321]/20 text-[#7ED321] font-bold px-1 rounded">Open</span>
            </div>
          </div>
        </div>

        <div className="pt-2 pb-1 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1 text-[9px] text-gray-400">
            <BarChart3 size={11} className="text-[#7ED321]" />
            <span>Peak Hours: 7-10 PM</span>
          </div>
          <button className="bg-[#7ED321] text-black font-extrabold text-[10px] px-3 py-1.5 rounded-lg">
            Dashboard →
          </button>
        </div>
      </motion.div>

    </div>
  );
}
