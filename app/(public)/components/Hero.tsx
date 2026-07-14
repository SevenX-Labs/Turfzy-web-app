"use client";

import React, { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Play, Star, MapPin, CheckCircle2, Search, Zap, Clock, Users } from "lucide-react";
import LightRays from "./LightRays";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // 3D Tilt calculation (Magnetic effect)
  const rotateX = useTransform(mouseY, [0, windowDimensions.height], [12, -12]);
  const rotateY = useTransform(mouseX, [0, windowDimensions.width], [-12, 12]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  // Floating elements parallax (Opposite movement to mouse)
  const x1 = useTransform(mouseX, [0, windowDimensions.width], [40, -40]);
  const y1 = useTransform(mouseY, [0, windowDimensions.height], [40, -40]);
  const springX1 = useSpring(x1, { stiffness: 100, damping: 30 });
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  const x2 = useTransform(mouseX, [0, windowDimensions.width], [-50, 50]);
  const y2 = useTransform(mouseY, [0, windowDimensions.height], [-50, 50]);
  const springX2 = useSpring(x2, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#FAFAFA] flex flex-col items-center group"
    >

      {/* Light Rays Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none" style={{ width: '100%', height: '100%' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays opacity-50"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      {/* Interactive Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(89, 166, 8, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Interactive Grid Pattern Reveal */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #59A608 1px, transparent 1px),
            linear-gradient(to bottom, #59A608 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
          WebkitMaskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
        }}
      />

      <div className="max-w-[1000px] mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#59A608] shadow-[0_2px_10px_rgba(0,0,0,0.04)] mb-10"
        >
          {/* Custom Star with White Stroke */}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>

          <span className="text-sm font-bold text-white tracking-wider uppercase mt-0.5">Best Turf Booking App in 2024</span>

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
          className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-gray-900 tracking-tight leading-[1.05] font-clash mb-10"
        >
          Transform your game <br className="hidden md:block" />
          with Turfzy.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mb-14"
        >
          Discover verified turfs, see live slot availability, and book your game in seconds. Your ultimate sports companion.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-32"
        >
          <Link href="/find-turf" className="btn-black flex items-center gap-2 px-8 py-4 h-auto text-base">
            Get Started Now <Play size={14} className="fill-white ml-1" />
          </Link>
        </motion.div>

        {/* 3D Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-[900px] mb-32 flex justify-center"
          style={{ perspective: 1200 }} // Key for 3D depth
        >
          
          {/* Floating Element 1 - Top Left Parallax */}
          <motion.div 
            className="absolute -left-12 top-20 z-20 hidden lg:block"
            style={{ x: springX1, y: springY1 }}
          >
            <div className="bg-white p-4 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center">
                <Clock size={20} className="text-lime-600" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Fastest Booking</p>
                <p className="text-lg font-black text-gray-900">Under 60 Secs</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 2 - Bottom Right Parallax */}
          <motion.div 
            className="absolute -right-12 bottom-32 z-20 hidden lg:block"
            style={{ x: springX2, y: springY2 }}
          >
            <div className="bg-white p-4 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="user" />
                <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="user" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-900 flex items-center justify-center shadow-sm">
                  <Users size={14} className="text-white" />
                </div>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-900">1,200+ Players</p>
                <p className="text-xs font-medium text-lime-600 bg-lime-50 px-2 py-0.5 rounded inline-block">Active Now</p>
              </div>
            </div>
          </motion.div>

          {/* The Phone Mockup (Tilts in 3D) */}
          <motion.div 
            className="relative w-full max-w-[280px] z-10 flex flex-col"
            style={{ 
              rotateX: springRotateX, 
              rotateY: springRotateY,
              transformStyle: "preserve-3d"
            }}
          >
            {/* Realistic Phone Bezel */}
            <div className="rounded-[44px] border-[8px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
              {/* App Screen Image */}
              <img 
                src="/WhatsApp Image 2026-07-14 at 14.43.24.jpeg" 
                alt="Turfzy App Screen" 
                className="w-full h-auto object-contain rounded-[36px] block" 
              />
            </div>
          </motion.div>

          {/* Subtle glow behind the phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-lime-400/20 blur-[100px] -z-10 rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}