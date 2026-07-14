"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Clock, Shield, MapPin, CloudSun, Star, ArrowRight, BarChart2, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Features() {
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: true, margin: "-100px" });

  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: true, margin: "-100px" });

  const ref3 = useRef(null);
  const inView3 = useInView(ref3, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-24 overflow-hidden" id="features">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* BLOCK 1: Left Text, Right UI */}
        <div ref={ref1} className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-clash leading-tight">
              Smart booking solution for <br /> seamless sports.
            </h2>
            
            <div className="flex flex-col gap-8 mt-10">
              <div className="flex gap-4">
                <div className="mt-1 bg-lime-100 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <User size={20} className="text-lime-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Customizable Profiles</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Create your player profile, track your favorite turfs, and manage your past and upcoming bookings with ease.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-gray-100 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-gray-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Instant Availability</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">See live slot availability across multiple turfs instantly, eliminating the need for back-and-forth phone calls.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-gray-100 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <Shield size={20} className="text-gray-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Secure Payments</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Pay securely online using UPI, cards, or net banking with our end-to-end encrypted payment gateway.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={inView1 ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative bg-gray-50 rounded-[32px] p-8 h-[500px] border border-gray-100 flex items-center justify-center"
          >
            {/* The UI Mockup (Card overlapping another card) */}
            <div className="relative w-full max-w-sm">
              <div className="bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-6 z-10 relative">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900">City Arena</h3>
                  <span className="text-xs bg-lime-100 text-lime-700 px-2 py-1 rounded-md font-bold">Football</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-sm font-semibold text-gray-700">18:00 - 19:00</span>
                    <button className="bg-lime-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">Book</button>
                  </div>
                  <div className="flex justify-between items-center bg-gray-100 p-3 rounded-xl border border-gray-200 opacity-60">
                    <span className="text-sm font-semibold text-gray-500 line-through">19:00 - 20:00</span>
                    <span className="text-xs font-bold text-gray-500 px-4 py-1.5">Booked</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-sm font-semibold text-gray-700">20:00 - 21:00</span>
                    <button className="bg-lime-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">Book</button>
                  </div>
                </div>

                <div className="w-full bg-gray-900 text-white text-center py-3 rounded-xl text-sm font-bold shadow-md cursor-pointer">
                  View Full Schedule
                </div>
              </div>

              {/* Overlapping smaller card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20">
                 <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center">
                    <CheckCircle2 className="text-lime-600" size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 font-semibold">Status</p>
                   <p className="text-sm font-bold text-gray-900">Slot Confirmed!</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BLOCK 2: Center Text, 3 Cards Grid */}
        <div ref={ref2} className="mb-40 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-clash">
              Personalized player experience <br /> and recommendations.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 w-full">
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <MapPin size={24} className="text-lime-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nearby Turfs</h3>
              <p className="text-sm text-gray-600 mb-8">Automatically discover the best rated turfs within a 10km radius of your current location.</p>
              
              <div className="mt-auto w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col gap-2 relative overflow-hidden">
                 {/* Fake UI */}
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-lime-100" />
                   <div className="h-2 w-24 bg-gray-200 rounded-full" />
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gray-100" />
                   <div className="h-2 w-16 bg-gray-200 rounded-full" />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <CloudSun size={24} className="text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Weather Updates</h3>
              <p className="text-sm text-gray-600 mb-8">Get live weather forecasts for your booking time to avoid unexpected rain or heat waves.</p>
              
              <div className="mt-auto w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col gap-3">
                 <div className="flex justify-between items-center">
                   <CloudSun size={20} className="text-gray-400" />
                   <span className="text-lg font-bold text-gray-900">28°C</span>
                 </div>
                 <div className="h-1.5 w-full bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full" />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Star size={24} className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Verified Reviews</h3>
              <p className="text-sm text-gray-600 mb-8">Read authentic reviews from other players about turf quality, lighting, and amenities.</p>
              
              <div className="mt-auto w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-2">
                 <div className="flex -space-x-1">
                   <Star size={16} className="text-yellow-400 fill-yellow-400" /><Star size={16} className="text-yellow-400 fill-yellow-400" /><Star size={16} className="text-yellow-400 fill-yellow-400" />
                 </div>
                 <div className="h-2 w-16 bg-gray-200 rounded-full ml-2" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* BLOCK 3: Left UI, Right Text */}
        <div ref={ref3} className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            animate={inView3 ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative bg-lime-50/50 rounded-[32px] p-8 h-[500px] border border-lime-100 flex items-center justify-center order-2 lg:order-1"
          >
            {/* The UI Mockup (Analytics Chart) */}
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-6 relative">
               <div className="flex justify-between items-center mb-8">
                 <div>
                   <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Total Revenue</p>
                   <p className="text-2xl font-bold text-gray-900 font-clash">₹1,24,500</p>
                 </div>
                 <div className="bg-lime-100 text-lime-700 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                   <TrendingUp size={12} /> +14%
                 </div>
               </div>

               {/* Bar Chart CSS Mockup */}
               <div className="flex items-end gap-2 h-40 mt-4 mb-4">
                 {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                   <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                     <div 
                       className={`w-full rounded-t-sm transition-all duration-300 ${i === 5 ? 'bg-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.4)]' : 'bg-gray-100 group-hover:bg-gray-200'}`} 
                       style={{ height: `${h}%` }} 
                     />
                   </div>
                 ))}
               </div>
               <div className="flex justify-between text-[10px] font-bold text-gray-400 px-1">
                 <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-clash leading-tight">
              Advanced analytics & <br /> business insights.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              The Turfzy Owner Dashboard provides comprehensive analytics to help you understand your business. Track revenue, monitor peak hours, and analyze customer retention.
            </p>
            <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-lime-600 transition-colors">
              Get Started Now <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
