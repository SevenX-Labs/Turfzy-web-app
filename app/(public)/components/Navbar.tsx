"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Play, Sparkles } from "lucide-react";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileUserType, setMobileUserType] = useState('customer');
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Framer Motion Variants for Mobile Menu
  const mobileMenuVariants = {
    closed: { opacity: 0, scale: 0.98, y: -10 },
    open: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.3, 
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { opacity: 0, scale: 0.98, y: -10, transition: { duration: 0.2 } }
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, x: -15 },
    open: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_2px_10px_rgba(0,0,0,0.02)] py-3" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Logo */}
          <Link href="/" className="group flex items-center gap-1 z-10 text-2xl font-extrabold tracking-tighter text-gray-900 font-clash">
            Turf<span className="text-lime-500">zy</span>
            <motion.div
              className="ml-0.5 text-lime-500"
              whileHover={{ rotate: 180, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Sparkles size={16} />
            </motion.div>
          </Link>

          {/* Center: Links (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredPath === link.href;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Hover Background Pill */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Active Indicator Dot */}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-lime-500 rounded-full" 
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: Auth (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/login/customer" 
              className="group btn-black flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
            >
              Sign In 
              <Play size={12} className="fill-white ml-0.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-[1100] bg-white/95 backdrop-blur-xl flex flex-col p-6 overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center mt-2">
              <Link href="/" onClick={() => setIsMobileOpen(false)} className="text-2xl font-extrabold tracking-tighter text-gray-900 font-clash flex items-center">
                Turf<span className="text-lime-500">zy</span>
                <Sparkles size={16} className="text-lime-500 ml-1.5" />
              </Link>
              <button 
                onClick={() => setIsMobileOpen(false)} 
                className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col gap-6 mt-16 px-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.label} variants={mobileLinkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`text-3xl font-bold tracking-tight transition-colors ${
                        isActive ? "text-lime-500" : "text-gray-900 hover:text-lime-600"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <motion.div variants={mobileLinkVariants} className="mt-auto pb-8 px-4">
              <div className="bg-gray-50 p-1.5 rounded-2xl flex gap-1 mb-6 border border-gray-100">
                <button 
                  onClick={() => setMobileUserType('customer')} 
                  className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                    mobileUserType === 'customer' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Player
                </button>
                <button 
                  onClick={() => setMobileUserType('owner')} 
                  className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                    mobileUserType === 'owner' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Owner
                </button>
              </div>
              <Link 
                href={`/login/${mobileUserType}`} 
                onClick={() => setIsMobileOpen(false)} 
                className="group btn-black w-full flex justify-center items-center gap-2 py-4 rounded-xl text-base font-semibold hover:shadow-lg transition-all"
              >
                Sign In to {mobileUserType === 'customer' ? 'Play' : 'Manage'}
                <Play size={14} className="fill-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}