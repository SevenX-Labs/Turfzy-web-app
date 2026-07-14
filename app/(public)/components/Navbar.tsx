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

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-1 z-10 text-2xl font-extrabold tracking-tighter text-gray-900 font-clash">
            Turf<span className="text-lime-500">zy</span>
            <Sparkles size={16} className="text-lime-500 ml-1" />
          </Link>

          {/* Center: Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative group py-1 text-sm font-semibold transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
                >
                  {link.label}
                  {/* Animated Underline */}
                  <span 
                    className={`absolute left-0 -bottom-1 w-full h-[2px] bg-lime-500 rounded-full transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} 
                  />
                </Link>
              );
            })}
          </div>

          {/* Right: Auth */}
          <div className="hidden md:flex items-center gap-4">
            {/* Sign In Button */}
            <Link href="/login/customer" className="btn-black flex items-center gap-2 px-6 py-3 h-auto text-sm">
              Sign In <Play size={12} className="fill-white ml-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden p-2 text-gray-900"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1100] bg-white flex flex-col p-6"
          >
            <div className="flex justify-between items-center mt-2">
              <Link href="/" onClick={() => setIsMobileOpen(false)} className="text-2xl font-extrabold tracking-tighter text-gray-900 font-clash">
                Turf<span className="text-lime-500">zy</span>
              </Link>
              <button onClick={() => setIsMobileOpen(false)} className="p-2 text-gray-900">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col gap-6 mt-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl font-bold text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pb-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button onClick={() => setMobileUserType('customer')} className={`py-3 rounded-xl text-sm font-bold ${mobileUserType === 'customer' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'}`}>Player</button>
                <button onClick={() => setMobileUserType('owner')} className={`py-3 rounded-xl text-sm font-bold ${mobileUserType === 'owner' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'}`}>Owner</button>
              </div>
              <div className="flex flex-col gap-3">
                <Link href={`/login/${mobileUserType}`} onClick={() => setIsMobileOpen(false)} className="btn-black w-full flex justify-center items-center py-4 text-sm font-semibold">
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}