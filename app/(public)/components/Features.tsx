"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Users, CreditCard, Bell, Activity, 
  QrCode, ScanLine, Flame, Trophy, 
  Medal, ListOrdered, Crown, Zap,
  ArrowUpRight
} from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <section className="bg-[#FAFAFA] py-24 md:py-32 relative overflow-hidden" id="features">
      
      {/* Premium Ambient Background Blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* ── Header Section ── */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
          >
            <Zap size={14} className="text-lime-500 fill-lime-500" />
            <span className="text-[11px] font-bold text-gray-800 tracking-[0.2em] uppercase">Premium Features</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-clash tracking-tight leading-[1.1]"
          >
            Built for the modern <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">
              sports community.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Experience next-level features designed to make organizing, playing, and competing easier and more fun than ever before.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(340px,auto)]"
        >
          
          {/* 1. Split Booking (Spans 2 columns) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(89,166,8,0.08)] hover:border-lime-100 transition-all duration-500 p-8 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1 space-y-4 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-lime-100 to-lime-50 rounded-2xl flex items-center justify-center mb-6 text-lime-600 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner">
                <CreditCard size={26} strokeWidth={2.5} />
              </div>
              <p className="text-lime-600 font-bold text-[11px] uppercase tracking-[0.2em]">Split & Play</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-clash tracking-tight">
                Split Bookings Instantly
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Eliminate the awkwardness of chasing friends for money. Split court bookings before you even step onto the turf.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  { icon: <Users size={16} />, text: "Split equally or customize amounts." },
                  { icon: <Bell size={16} />, text: "Instant push notifications for friends." },
                  { icon: <Activity size={16} />, text: "Live status tracking of payments." },
                ].map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                    <div className="text-lime-500 bg-lime-50 p-1.5 rounded-lg">{bullet.icon}</div>
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Split Booking UI Widget */}
            <div className="flex-1 w-full flex justify-center items-center relative z-10 h-full min-h-[250px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/20 to-transparent rounded-full blur-[80px]" />
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-[280px] bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-white relative z-10"
              >
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <span className="text-sm font-extrabold text-gray-900">Total: ₹1,200</span>
                  <span className="text-[10px] font-bold text-lime-700 bg-lime-100 px-3 py-1.5 rounded-full uppercase tracking-wider">Paid: ₹600</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">Y</div>
                      <span className="text-sm font-bold text-gray-900">You</span>
                    </div>
                    <span className="text-sm font-bold text-lime-600">₹600</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-red-100 shadow-sm relative overflow-hidden group/pending">
                    <div className="absolute inset-0 bg-red-50/50 translate-x-[-100%] group-hover/pending:translate-x-0 transition-transform duration-500" />
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-400 to-red-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">A</div>
                      <span className="text-sm font-bold text-gray-900">Alex</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-end">
                      <span className="text-sm font-bold text-gray-900">₹600</span>
                      <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Pending</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 2. Contactless QR Check-in (1 column, Dark Theme) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-[#0a0f07] border border-gray-800 shadow-xl p-8 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-lime-500/20 transition-colors duration-700" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 text-white backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                <ScanLine size={26} strokeWidth={2} className="text-lime-400" />
              </div>
              <p className="text-lime-400 font-bold text-[11px] uppercase tracking-[0.2em] mb-2">Scan & Play</p>
              <h3 className="text-2xl font-bold text-white font-clash mb-3">Contactless Check-in</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Breeze past the front desk. Scan your booking QR code and unlock the pitch instantly.
              </p>
            </div>

            {/* QR Scanner UI Widget */}
            <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 relative z-10 flex items-center gap-5 group-hover:-translate-y-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform duration-500">
              <div className="relative w-16 h-16 bg-white rounded-xl p-2 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <QrCode size={48} className="text-black" />
                {/* Animated Scanner Laser */}
                <motion.div 
                  animate={{ y: [-4, 52, -4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-[2px] bg-lime-500 shadow-[0_0_10px_#84cc16]" 
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Access Status</span>
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" /> Ready
                </span>
                <span className="text-[11px] text-gray-400 font-mono bg-black/50 px-2 py-0.5 rounded border border-white/10 w-fit mt-1">
                  PIN: 4921
                </span>
              </div>
            </div>
          </motion.div>

          {/* 3. Player Streaks (1 column, Vibrant Theme) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-orange-50 border border-orange-100 shadow-[0_4px_20px_rgba(249,115,22,0.04)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.12)] transition-all duration-500 p-8 flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <Flame size={26} className="fill-orange-500" strokeWidth={2} />
              </div>
              <p className="text-orange-600 font-bold text-[11px] uppercase tracking-[0.2em] mb-2">Keep the Heat</p>
              <h3 className="text-2xl font-bold text-gray-900 font-clash mb-3">Player Streaks</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Turn your weekly sports sessions into a habit. Build your play streak and stay motivated to earn rewards.
              </p>
            </div>

            {/* Streak UI Widget */}
            <div className="w-full bg-white rounded-2xl p-5 border border-orange-100 shadow-sm relative group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-4">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Flame size={28} className="text-orange-500 fill-orange-500 drop-shadow-md" />
                  </motion.div>
                  <div>
                    <div className="text-xl font-black text-gray-900 leading-none">7 Days</div>
                    <div className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mt-1">Current Streak</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg shadow-sm">
                  +30 XP
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-orange-400 to-red-500 h-full rounded-full" 
                />
              </div>
              <p className="text-[11px] font-semibold text-gray-400 mt-3 text-center">3 days left to keep it alive!</p>
            </div>
          </motion.div>

          {/* 4. Interactive Leaderboards (Spans 2 columns) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(89,166,8,0.08)] hover:border-lime-100 transition-all duration-500 p-8 flex flex-col md:flex-row-reverse gap-8 items-center"
          >
            <div className="flex-1 space-y-4 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl flex items-center justify-center mb-6 text-yellow-600 group-hover:-translate-y-2 transition-transform duration-500 shadow-inner">
                <Crown size={26} className="fill-yellow-500" strokeWidth={2} />
              </div>
              <p className="text-yellow-600 font-bold text-[11px] uppercase tracking-[0.2em]">Climb the Ranks</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-clash tracking-tight">
                Global Leaderboards
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Claim bragging rights in your local sports community. See where you rank against the best and earn weekly title rewards.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  { icon: <ListOrdered size={16} />, text: "Filter by XP, matches played, or win rate." },
                  { icon: <Medal size={16} />, text: "Live points calculation to reach Top 3." },
                  { icon: <Trophy size={16} />, text: "Weekly title rewards to build reputation." },
                ].map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                    <div className="text-yellow-600 bg-yellow-50 p-1.5 rounded-lg">{bullet.icon}</div>
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Leaderboard UI Widget */}
            <div className="flex-1 w-full flex justify-center items-center relative z-10 min-h-[250px]">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-lime-500/5 rounded-full blur-[80px]" />
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[320px] bg-white rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10 flex flex-col gap-2.5"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em]">Global Rank</span>
                  <span className="text-[10px] font-bold text-lime-700 bg-lime-100 px-2.5 py-1 rounded-md uppercase tracking-wider">Season 4</span>
                </div>
                
                {/* Rank 3 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-black text-gray-400 w-4">3</span>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">S</div>
                    <span className="text-sm font-bold text-gray-700">Sam</span>
                  </div>
                  <span className="text-xs font-bold text-gray-500">820 XP</span>
                </div>
                
                {/* Rank 4 (You) */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-white border-2 border-yellow-300 shadow-lg relative scale-[1.02] z-10">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-black text-yellow-600 w-4">4</span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">Y</div>
                    <span className="text-sm font-bold text-gray-900">You</span>
                  </div>
                  <span className="text-sm font-black text-yellow-600">695 XP</span>
                </div>
                
                {/* Rank 5 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-black text-gray-400 w-4">5</span>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">J</div>
                    <span className="text-sm font-bold text-gray-700">John</span>
                  </div>
                  <span className="text-xs font-bold text-gray-500">610 XP</span>
                </div>

                <div className="text-center mt-3 pt-3 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-lime-600 bg-lime-50 px-3 py-1.5 rounded-full inline-flex items-center gap-1">
                    <ArrowUpRight size={12} /> Only 125 XP to reach Top 3!
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}