"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Users, CreditCard, Bell, Activity, 
  QrCode, ScanLine, Key, CheckCircle2, 
  Flame, Trophy, CalendarDays, AlertTriangle,
  Medal, ListOrdered, Crown, Search, Clock, Zap
} from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="bg-gray-50 py-24 md:py-32 relative overflow-hidden" id="features">
      
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#59A608]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#59A608]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
          >
            <Zap size={16} className="text-[#59A608] fill-[#59A608]" />
            <span className="text-xs font-bold text-gray-900 tracking-widest uppercase">Premium Features</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-clash tracking-tight leading-[1.1]"
          >
            Built for the modern <br /> <span className="text-[#59A608]">sports community.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Experience next-level features designed to make organizing, playing, and competing easier and more fun than ever before.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(320px,auto)]"
        >
          
          {/* Feature 1: Split Booking (Spans 2 columns) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(89,166,8,0.1)] transition-all duration-500 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1 space-y-3 relative z-10">
              <div className="w-12 h-12 bg-[#59A608]/10 rounded-2xl flex items-center justify-center mb-4 text-[#59A608] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-clash">Split Booking Payments</h3>
              <p className="text-[#59A608] font-bold text-[11px] uppercase tracking-widest">Split & Play</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Eliminate the awkwardness of chasing friends for money. Split court bookings instantly before you step onto the turf.
              </p>
              <ul className="space-y-2.5 mt-6">
                {[
                  { icon: <Users size={16} />, text: "Split equally or customize exact amounts." },
                  { icon: <Bell size={16} />, text: "Instant push notifications for settlements." },
                  { icon: <Activity size={16} />, text: "Live status tracking of paid vs pending." },
                ].map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <div className="text-[#59A608]">{bullet.icon}</div>
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </div>
            {/* UI Widget */}
            <div className="flex-1 w-full flex justify-center items-center relative z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#59A608]/5 to-transparent rounded-full blur-3xl" />
              <motion.div 
                whileHover={{ y: -10 }}
                className="w-full max-w-[280px] bg-white rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10"
              >
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <span className="text-sm font-extrabold text-gray-900">Total: ₹1,200</span>
                  <span className="text-xs font-bold text-white bg-[#59A608] px-3 py-1 rounded-full shadow-sm shadow-[#59A608]/30">Paid: ₹600</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#59A608] text-white flex items-center justify-center text-xs font-bold shadow-md">Y</div>
                      <span className="text-xs font-bold text-gray-900">You (Paid)</span>
                    </div>
                    <span className="text-xs font-bold text-[#59A608]">₹600</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-red-50 border border-red-100 relative overflow-hidden group/pending">
                    <div className="absolute inset-0 bg-red-100 translate-x-[-100%] group-hover/pending:translate-x-0 transition-transform duration-300" />
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold shadow-md">A</div>
                      <span className="text-xs font-bold text-gray-900">Alex</span>
                    </div>
                    <span className="text-xs font-bold text-red-600 relative z-10">Pending ₹600</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature 2: Contactless QR Check-in (1 column, dark theme) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-[#111111] border border-gray-800 shadow-xl p-6 md:p-8 flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#59A608]/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#59A608]/30 transition-colors duration-500" />
            
            <div className="w-12 h-12 bg-gray-800/50 rounded-2xl flex items-center justify-center mb-4 text-white border border-gray-700 backdrop-blur-md group-hover:scale-110 transition-transform duration-300 relative z-10">
              <ScanLine size={24} />
            </div>
            
            <h3 className="text-xl font-bold text-white font-clash mb-1 relative z-10">Contactless Check-in</h3>
            <p className="text-[#59A608] font-bold text-[11px] uppercase tracking-widest mb-3 relative z-10">Scan & Play</p>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10 pr-2">
              Breeze past the front desk. Scan your booking QR code and unlock the pitch instantly.
            </p>

            {/* UI Widget */}
            <div className="w-full bg-[#1A1A1A] rounded-2xl p-4 border border-gray-800 relative z-10 flex items-center justify-center gap-4 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-white rounded-xl p-1.5 relative shadow-[0_0_20px_rgba(89,166,8,0.2)] overflow-hidden flex-shrink-0">
                <QrCode size={52} className="text-black" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#59A608] shadow-[0_0_12px_#59A608] animate-[scan_2s_ease-in-out_infinite]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Status</span>
                <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#59A608] animate-pulse" /> Ready to Scan
                </span>
                <span className="text-[10px] text-gray-400 bg-gray-800/60 px-2 py-0.5 rounded border border-gray-700 w-fit mt-1">PIN: 4921</span>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Player Streaks (1 column, vibrant) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-orange-50/50 border border-orange-100 shadow-[0_8px_30px_rgba(249,115,22,0.05)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] transition-all duration-500 p-6 md:p-8 flex flex-col"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 text-orange-500 group-hover:rotate-12 transition-transform duration-300">
              <Flame size={24} className="fill-orange-500" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 font-clash mb-1">Player Play Streaks</h3>
            <p className="text-orange-600 font-bold text-[11px] uppercase tracking-widest mb-3">Keep the Heat</p>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow pr-2">
              Turn your weekly sports sessions into a habit. Build your play streak and stay motivated to earn XP.
            </p>

            {/* UI Widget */}
            <div className="w-full bg-white rounded-2xl p-4 md:p-5 border border-orange-100 shadow-sm relative group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Flame size={24} className="text-orange-500 fill-orange-500 drop-shadow-md" />
                  <div>
                    <div className="text-base font-black text-gray-900 leading-none">7 Days</div>
                    <div className="text-[9px] font-bold text-orange-600 uppercase tracking-widest mt-1">Current Streak</div>
                  </div>
                </div>
                <div className="bg-orange-500 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-sm">+30 XP</div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full w-[70%]" />
              </div>
              <p className="text-[10px] font-semibold text-gray-500 text-center mt-3">3 days left to keep alive!</p>
            </div>
          </motion.div>

          {/* Feature 4: Interactive Leaderboards (Spans 2 columns) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(89,166,8,0.1)] transition-all duration-500 p-6 md:p-8 flex flex-col md:flex-row-reverse gap-8 items-center"
          >
            <div className="flex-1 space-y-3 relative z-10">
              <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4 text-yellow-600 group-hover:-translate-y-1 transition-transform duration-300">
                <Crown size={24} className="fill-yellow-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-clash">Interactive Leaderboards</h3>
              <p className="text-yellow-600 font-bold text-[11px] uppercase tracking-widest">Climb the Ranks</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Claim bragging rights in your local sports community. See where you rank against the best and earn weekly title rewards.
              </p>
              <ul className="space-y-2.5 mt-6">
                {[
                  { icon: <ListOrdered size={16} />, text: "Filter by XP, matches played, or win rate." },
                  { icon: <Medal size={16} />, text: "Live nudges calculating points to reach Top 3." },
                  { icon: <Trophy size={16} />, text: "Weekly title rewards to build your reputation." },
                ].map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <div className="text-yellow-600">{bullet.icon}</div>
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </div>
            {/* UI Widget */}
            <div className="flex-1 w-full flex justify-center items-center relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-[#59A608]/5 rounded-full blur-3xl" />
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-[320px] bg-white rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10 flex flex-col gap-3"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Global Rank</span>
                  <span className="text-xs font-bold text-[#59A608] bg-[#59A608]/10 px-2 py-1 rounded-md">Season 4</span>
                </div>
                
                {/* Ranks */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-100 shadow-sm relative">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-gray-400 w-4">3</span>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">S</div>
                    <span className="text-sm font-bold text-gray-700">Sam</span>
                  </div>
                  <span className="text-xs font-bold text-gray-900">820 XP</span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-white border border-yellow-200 shadow-md relative scale-105 z-10 -my-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-yellow-600 w-4">4</span>
                    <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs font-bold shadow-sm ring-2 ring-yellow-200 ring-offset-1">Y</div>
                    <span className="text-sm font-bold text-gray-900">You</span>
                  </div>
                  <span className="text-xs font-black text-yellow-600">695 XP</span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-100 shadow-sm relative">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-gray-400 w-4">5</span>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">J</div>
                    <span className="text-sm font-bold text-gray-700">John</span>
                  </div>
                  <span className="text-xs font-bold text-gray-900">610 XP</span>
                </div>

                <div className="text-center mt-2">
                  <span className="text-[10px] font-bold text-[#59A608] bg-[#59A608]/10 px-3 py-1.5 rounded-full inline-block">Only 125 XP to reach Top 3!</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
