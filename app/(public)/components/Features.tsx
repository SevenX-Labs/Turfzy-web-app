"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Users, CreditCard, Bell, Activity, 
  QrCode, ScanLine, Key, CheckCircle2, 
  Flame, Trophy, CalendarDays, AlertTriangle,
  Medal, ListOrdered, Crown, Search, Clock
} from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      id: "split",
      title: "Split Booking Payments",
      badge: "Split & Play",
      icon: <CreditCard size={24} className="text-[#59A608]" />,
      tagline: "Split the Cost, Double the Fun.",
      description: "Eliminate the awkwardness of chasing friends for money. Split court bookings instantly before you step onto the turf.",
      bullets: [
        { icon: <Search size={14} />, text: "Add players directly using their usernames." },
        { icon: <Users size={14} />, text: "Split equally or customize exact amounts." },
        { icon: <Bell size={14} />, text: "Instant push notifications for settlements." },
        { icon: <Activity size={14} />, text: "Live status tracking of paid vs pending." },
      ],
      ui: (
        <div className="mt-6 w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col gap-3 relative overflow-hidden">
          <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg border border-gray-100">
            <span className="text-xs font-bold text-gray-700">Total: ₹1,200</span>
            <span className="text-[10px] font-bold text-lime-600 bg-lime-100 px-2 py-0.5 rounded">Paid: ₹600</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-700">A</div>
            <span className="text-xs font-semibold text-gray-700">Pending: ₹600</span>
          </div>
        </div>
      )
    },
    {
      id: "qr",
      title: "Contactless QR Check-in",
      badge: "Scan & Play",
      icon: <ScanLine size={24} className="text-blue-500" />,
      tagline: "Breeze Past the Desk. Tap, Scan, and Play.",
      description: "Breeze past the front desk. Scan your booking QR code and unlock the pitch in seconds.",
      bullets: [
        { icon: <Clock size={14} />, text: "QR code unlocks 10 minutes before slot starts." },
        { icon: <ScanLine size={14} />, text: "Ultra-fast instant check-in at the venue." },
        { icon: <Key size={14} />, text: "Secure 4-digit PIN fallback for bad connections." },
        { icon: <CheckCircle2 size={14} />, text: "Real-time attendance & instant XP release." },
      ],
      ui: (
        <div className="mt-6 w-full bg-[#0f1f14] rounded-xl p-4 shadow-sm border border-gray-800 flex items-center justify-center gap-4 relative overflow-hidden">
          <div className="w-16 h-16 bg-white rounded-lg p-1 relative">
            <QrCode size={56} className="text-gray-900" />
            <div className="absolute top-0 left-0 w-full h-0.5 bg-lime-400 shadow-[0_0_8px_#a3e635] animate-[scan_2s_ease-in-out_infinite]" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-white">Unlocks in 04:23</span>
            <span className="text-[10px] text-gray-400 bg-gray-800 px-2 py-1 rounded">PIN: ****</span>
          </div>
        </div>
      )
    },
    {
      id: "streaks",
      title: "Player Play Streaks",
      badge: "Keep the Heat",
      icon: <Flame size={24} className="text-orange-500" />,
      tagline: "Play. Earn. Repeat. Fuel Your Fitness.",
      description: "Turn your weekly sports sessions into a habit. Build your play streak and stay motivated.",
      bullets: [
        { icon: <CalendarDays size={14} />, text: "Play within 5 days to increase your streak." },
        { icon: <Trophy size={14} />, text: "Earn +30 XP automatically for completed slots." },
        { icon: <AlertTriangle size={14} />, text: "No-show penalties: -30 points and streak reset." },
        { icon: <Bell size={14} />, text: "Nudge alerts before your streak freezes." },
      ],
      ui: (
        <div className="mt-6 w-full bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 shadow-sm border border-orange-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flame size={32} className="text-orange-500 drop-shadow-md" fill="#f97316" />
            <div className="flex flex-col">
              <span className="text-sm font-black text-gray-900">7 Day Streak!</span>
              <span className="text-[10px] font-bold text-orange-600">3 days left to keep alive</span>
            </div>
          </div>
          <span className="text-xs font-black text-lime-600 bg-white px-2 py-1 rounded-md shadow-sm">+30 XP</span>
        </div>
      )
    },
    {
      id: "leaderboards",
      title: "Interactive Leaderboards",
      badge: "Climb the Ranks",
      icon: <Crown size={24} className="text-yellow-500" />,
      tagline: "Earn Bragging Rights. Rise to the Top.",
      description: "Claim bragging rights in your local sports community. See where you rank against the best.",
      bullets: [
        { icon: <ListOrdered size={14} />, text: "Filter by points, matches played, or hours." },
        { icon: <Crown size={14} />, text: "Interactive Top 10 showcasing elite players." },
        { icon: <Medal size={14} />, text: "Live nudges calculating points to reach Top 3." },
        { icon: <Trophy size={14} />, text: "Weekly title rewards to build your reputation." },
      ],
      ui: (
        <div className="mt-6 w-full bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex flex-col gap-2">
          <div className="flex items-center justify-between bg-blue-50 p-2 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-700">#4</span>
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-bold">You</div>
              <span className="text-xs font-bold text-gray-900">Your Rank</span>
            </div>
            <span className="text-xs font-bold text-blue-700">695 XP</span>
          </div>
          <p className="text-[10px] font-semibold text-gray-500 text-center">15 points to reach Top 3!</p>
        </div>
      )
    }
  ];

  return (
    <section className="bg-gray-50 py-24" id="features">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-clash"
          >
            Built for the modern <br /> <span className="text-[#59A608]">sports community</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            Experience next-level features designed to make organizing, playing, and competing easier than ever before.
          </motion.p>
        </div>

        {/* 2x2 Grid of Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 w-full">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 20 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }} 
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                  {feature.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  {feature.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-clash">{feature.title}</h3>
              <p className="text-sm font-semibold text-[#59A608] mb-3">{feature.tagline}</p>
              <p className="text-sm text-gray-600 mb-6">{feature.description}</p>
              
              <div className="flex flex-col gap-3 mb-6 flex-grow">
                {feature.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 text-gray-400">
                      {bullet.icon}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{bullet.text}</p>
                  </div>
                ))}
              </div>

              {/* Graphic Mockup Area */}
              <div className="mt-auto pt-6 border-t border-gray-50">
                {feature.ui}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
