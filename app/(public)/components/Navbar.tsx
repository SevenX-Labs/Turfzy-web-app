"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ArrowRight, Sparkles } from "lucide-react";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileUserType, setMobileUserType] = useState("customer");
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

  // Ultra-smooth spring physics
  const springConfig = { type: "spring" as const, stiffness: 400, damping: 30 };

  const mobileMenuVariants = {
    closed: { opacity: 0, backdropFilter: "blur(0px)" },
    open: {
      opacity: 1,
      backdropFilter: "blur(24px)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const menuCardVariants = {
    closed: { y: "100%", scale: 0.95, opacity: 0 },
    open: {
      y: "0%",
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 35, staggerChildren: 0.08, delayChildren: 0.1 },
    },
    exit: { y: "100%", scale: 0.95, opacity: 0, transition: { duration: 0.3 } },
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, y: 20, rotateX: 20 },
    open: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring" as const, stiffness: 350, damping: 30 } },
  };

  return (
    <>
      {/* Floating Island Desktop Nav */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95vw] md:max-w-max hidden md:block"
      >
        <nav
          className={`flex items-center justify-between gap-8 p-1.5 rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-[#FFFFFF]/60 backdrop-blur-3xl backdrop-saturate-[1.2] border border-[#FFFFFF]/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
              : "bg-[#FFFFFF]/80 backdrop-blur-xl border border-[#E9E9E9]/50 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-1 pl-4 z-10 text-xl font-extrabold tracking-tighter text-[#151515] font-clash">
            Turf<span className="text-[#7ED321]">zy</span>
            <motion.div
              className="text-[#7ED321]"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={springConfig}
            >
              <Sparkles size={14} className="stroke-[2.5]" />
            </motion.div>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-1 relative z-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredPath === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={`relative px-4 py-2 rounded-full text-[13px] font-semibold transition-colors duration-300 ${
                    isActive ? "text-[#151515]" : "text-[#5C5C5C] hover:text-[#151515]"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Liquid Hover Effect */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-[#FAFAF6] rounded-full -z-10"
                      transition={springConfig}
                    />
                  )}

                  {/* Minimalist Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-[#7ED321] rounded-full shadow-[0_0_8px_rgba(126,211,33,0.8)]"
                      transition={springConfig}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Button */}
          <Link
            href="/login/customer"
            className="group relative flex items-center gap-2 bg-[#151515] text-[#FFFFFF] px-5 py-2 rounded-full text-[13px] font-semibold overflow-hidden transition-all hover:shadow-[0_4px_20px_rgba(21,21,21,0.2)]"
          >
            {/* Subtle inner gradient hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Sign In</span>
            <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </nav>
      </motion.div>

      {/* Mobile Top Bar */}
      <div className={`md:hidden fixed top-0 inset-x-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#FFFFFF]/80 backdrop-blur-2xl border-b border-[#E9E9E9]' : 'bg-transparent'} p-4 flex justify-between items-center`}>
         <Link href="/" className="flex items-center gap-1 text-xl font-extrabold tracking-tighter text-[#151515] font-clash">
            Turf<span className="text-[#7ED321]">zy</span>
            <Sparkles size={14} className="text-[#7ED321] stroke-[2.5]" />
          </Link>
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2.5 bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#E9E9E9] text-[#151515] rounded-full active:scale-95 transition-transform"
          >
            <Menu size={18} />
          </button>
      </div>

      {/* 2026 Cinematic Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-[100] bg-[#151515]/20 flex flex-col justify-end overflow-hidden"
          >
            {/* Bottom Sheet Design */}
            <motion.div
              variants={menuCardVariants}
              className="bg-[#FAFAF6] w-full h-[90vh] rounded-t-[2.5rem] p-6 flex flex-col relative shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-[#FFFFFF]"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-10">
                <div className="text-sm font-semibold text-[#5C5C5C] uppercase tracking-widest">Navigation</div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-3 bg-[#FFFFFF] border border-[#E9E9E9] text-[#151515] rounded-full hover:bg-[#E9E9E9]/50 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Staggered Massive Typography Links */}
              <div className="flex-1 flex flex-col gap-4">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.label} variants={mobileLinkVariants} className="perspective-[1000px]">
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`block text-5xl font-bold tracking-tighter transition-colors ${
                          isActive ? "text-[#151515]" : "text-[#151515]/30 hover:text-[#151515]/70"
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <span className="inline-block ml-3 w-3 h-3 mb-2 bg-[#7ED321] rounded-full shadow-[0_0_12px_rgba(126,211,33,0.8)]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Segmented Control & Auth */}
              <motion.div variants={mobileLinkVariants} className="mt-auto pb-4">
                <div className="bg-[#E9E9E9]/40 p-1 rounded-2xl flex mb-4 backdrop-blur-sm">
                  <button
                    onClick={() => setMobileUserType("customer")}
                    className={`flex-1 py-3.5 rounded-xl text-[13px] font-bold tracking-wide uppercase transition-all duration-300 ${
                      mobileUserType === "customer"
                        ? "bg-[#FFFFFF] text-[#151515] shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                        : "text-[#5C5C5C]"
                    }`}
                  >
                    Player
                  </button>
                  <button
                    onClick={() => setMobileUserType("owner")}
                    className={`flex-1 py-3.5 rounded-xl text-[13px] font-bold tracking-wide uppercase transition-all duration-300 ${
                      mobileUserType === "owner"
                        ? "bg-[#FFFFFF] text-[#151515] shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                        : "text-[#5C5C5C]"
                    }`}
                  >
                    Owner
                  </button>
                </div>

                <Link
                  href={`/login/${mobileUserType}`}
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full flex justify-between items-center bg-[#151515] text-[#FFFFFF] p-5 rounded-2xl text-lg font-medium shadow-[0_8px_24px_rgba(21,21,21,0.15)] active:scale-[0.98] transition-transform"
                >
                  <span>Sign In as {mobileUserType === "customer" ? "Player" : "Owner"}</span>
                  <div className="bg-[#FFFFFF]/10 p-2 rounded-full">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}