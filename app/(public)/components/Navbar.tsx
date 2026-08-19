"use client";

/**
 * Refined 4-Card Mega Navbar — Turfzy
 * ─────────────────────────────────────────────────────────────────
 * High-end UX/UI polish of the existing 4-card dropdown:
 * 1. Consistent internal rhythm: [ICON] -> HEADING -> Primary Link -> Secondary Links
 * 2. 22-24px balanced Clash Display headings with tight line-heights
 * 3. Obvious primary green action link in each card + scannable secondary links
 * 4. Micro-hover states (link highlight, arrow slide, card glow & subtle -2px lift)
 * 5. Distinct navbar button hierarchy (Customer App, Owner App, Contact Us)
 * 6. Accessible keyboard (Escape), click-outside, and clean responsive stacking
 */

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Users,
  Store,
  Compass,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { APP_URLS } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape key to close
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeDropdown = () => {
    setIsOpen(false);
    setIsMobileOpen(false);
  };

  return (
    <header
      ref={navRef}
      className="fixed top-4 md:top-5 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto pointer-events-auto">

        {/* ══════════════════════════════════════════════════════════════════
            1. TOP NAVBAR BAR (Floating Island)
        ══════════════════════════════════════════════════════════════════ */}
        <div
          className={`flex items-center justify-between gap-4 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
            isScrolled || isOpen
              ? "bg-white/95 backdrop-blur-2xl border border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
              : "bg-white/90 backdrop-blur-xl border border-[#E9E9E9]/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          }`}
        >
          {/* Left: Interactive Menu Toggle Squircle (X when open, dash-dash when closed) */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-100/90 hover:bg-gray-200 active:scale-95 border border-black/5 flex items-center justify-center transition-all duration-150 group text-[#151515]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              title={isOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                {isOpen ? (
                  <X size={17} strokeWidth={2.4} className="text-[#111111] transition-transform duration-150" />
                ) : (
                  <div className="flex flex-col gap-1 w-3.5 items-center justify-center">
                    <span className="w-full h-[2px] bg-[#111111] rounded-full transition-all duration-150" />
                    <span className="w-full h-[2px] bg-[#111111] rounded-full transition-all duration-150" />
                  </div>
                )}
              </div>
            </button>
          </div>

          {/* Center: Official Turfzy Logo */}
          <Link
            href="/"
            onClick={closeDropdown}
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <img
              src="/logo copy.png"
              alt="Turfzy"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Right: Contact Us Button */}
          <div className="flex items-center gap-2">
            <a
              href="#cta"
              onClick={closeDropdown}
              className="inline-flex items-center justify-center bg-[#111111] hover:bg-black text-white px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm tracking-tight shadow-sm hover:shadow active:scale-95 transition-all duration-150"
            >
              Contact Us
            </a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-1.5 rounded-full bg-gray-100 text-[#111111] hover:bg-gray-200 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            2. REFINED 4-CARD DROPDOWN PANEL (Floating Directly Below Navbar)
        ══════════════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="mt-2.5 bg-white/98 backdrop-blur-2xl border border-black/[0.08] rounded-[24px] sm:rounded-[28px] p-3.5 sm:p-4 md:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden hidden md:block"
            >
              {/* 4 Equal Dark Cards in a Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3.5">

                {/* ── CARD 1: For Players ── */}
                <div className="bg-[#151518] rounded-[18px] p-5 border border-white/[0.06] hover:border-[#7ED321]/35 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group/card text-left">
                  <div>
                    {/* Small Icon Badge */}
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[#7ED321] flex items-center justify-center mb-3 group-hover/card:bg-[#7ED321]/15 transition-colors">
                      <Users size={16} strokeWidth={2.2} />
                    </div>

                    {/* Heading */}
                    <h3 className="text-[22px] lg:text-[23px] font-extrabold text-white font-clash leading-[1.12] tracking-tight mb-4">
                      For Players
                    </h3>
                  </div>

                  {/* Links List */}
                  <div className="flex flex-col gap-1.5 pt-2 border-t border-white/[0.06]">
                    {/* Primary Highlighted Action */}
                    <a
                      href={APP_URLS.customerWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#7ED321] hover:text-[#90e82e] p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.06] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={14}
                        className="stroke-[2.5] text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>Customer Web App</span>
                    </a>

                    {/* Secondary Link 1 */}
                    <a
                      href="#how-it-works"
                      onClick={closeDropdown}
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-gray-300 hover:text-white p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.05] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={13}
                        className="text-gray-500 group-hover/link:text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>Browse Nearby Turfs</span>
                    </a>

                    {/* Secondary Link 2 */}
                    <a
                      href="#features"
                      onClick={closeDropdown}
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-gray-300 hover:text-white p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.05] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={13}
                        className="text-gray-500 group-hover/link:text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>Live Slot Availability</span>
                    </a>
                  </div>
                </div>

                {/* ── CARD 2: For Turf Owners ── */}
                <div className="bg-[#151518] rounded-[18px] p-5 border border-white/[0.06] hover:border-[#7ED321]/35 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group/card text-left">
                  <div>
                    {/* Small Icon Badge */}
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[#7ED321] flex items-center justify-center mb-3 group-hover/card:bg-[#7ED321]/15 transition-colors">
                      <Store size={16} strokeWidth={2.2} />
                    </div>

                    {/* Heading */}
                    <h3 className="text-[22px] lg:text-[23px] font-extrabold text-white font-clash leading-[1.12] tracking-tight mb-4">
                      For Turf Owners
                    </h3>
                  </div>

                  {/* Links List */}
                  <div className="flex flex-col gap-1.5 pt-2 border-t border-white/[0.06]">
                    {/* Primary Highlighted Action */}
                    <a
                      href={APP_URLS.ownerWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#7ED321] hover:text-[#90e82e] p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.06] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={14}
                        className="stroke-[2.5] text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>Owner Web App</span>
                    </a>

                    {/* Secondary Link 1 */}
                    <a
                      href="#why-turfzy"
                      onClick={closeDropdown}
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-gray-300 hover:text-white p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.05] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={13}
                        className="text-gray-500 group-hover/link:text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>List Your Facility</span>
                    </a>

                    {/* Secondary Link 2 */}
                    <a
                      href="#features"
                      onClick={closeDropdown}
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-gray-300 hover:text-white p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.05] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={13}
                        className="text-gray-500 group-hover/link:text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>Pricing & Check-in Control</span>
                    </a>
                  </div>
                </div>

                {/* ── CARD 3: How It Works ── */}
                <div className="bg-[#151518] rounded-[18px] p-5 border border-white/[0.06] hover:border-[#7ED321]/35 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group/card text-left">
                  <div>
                    {/* Small Icon Badge */}
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[#7ED321] flex items-center justify-center mb-3 group-hover/card:bg-[#7ED321]/15 transition-colors">
                      <Compass size={16} strokeWidth={2.2} />
                    </div>

                    {/* Heading */}
                    <h3 className="text-[22px] lg:text-[23px] font-extrabold text-white font-clash leading-[1.12] tracking-tight mb-4">
                      How It Works
                    </h3>
                  </div>

                  {/* Links List */}
                  <div className="flex flex-col gap-1.5 pt-2 border-t border-white/[0.06]">
                    {/* Primary Highlighted Action */}
                    <a
                      href="#how-it-works"
                      onClick={closeDropdown}
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#7ED321] hover:text-[#90e82e] p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.06] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={14}
                        className="stroke-[2.5] text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>Explore the Process</span>
                    </a>

                    {/* Secondary Link 1 */}
                    <a
                      href="#how-it-works"
                      onClick={closeDropdown}
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-gray-300 hover:text-white p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.05] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={13}
                        className="text-gray-500 group-hover/link:text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>1. Find Nearby Grounds</span>
                    </a>

                    {/* Secondary Link 2 */}
                    <a
                      href="#how-it-works"
                      onClick={closeDropdown}
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-gray-300 hover:text-white p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.05] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={13}
                        className="text-gray-500 group-hover/link:text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>2. Pick Date & Time Slot</span>
                    </a>
                  </div>
                </div>

                {/* ── CARD 4: Features & FAQs ── */}
                <div className="bg-[#151518] rounded-[18px] p-5 border border-white/[0.06] hover:border-[#7ED321]/35 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group/card text-left">
                  <div>
                    {/* Small Icon Badge */}
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[#7ED321] flex items-center justify-center mb-3 group-hover/card:bg-[#7ED321]/15 transition-colors">
                      <Sparkles size={16} strokeWidth={2.2} />
                    </div>

                    {/* Heading */}
                    <h3 className="text-[22px] lg:text-[23px] font-extrabold text-white font-clash leading-[1.12] tracking-tight mb-4">
                      Features & FAQs
                    </h3>
                  </div>

                  {/* Links List */}
                  <div className="flex flex-col gap-1.5 pt-2 border-t border-white/[0.06]">
                    {/* Primary Highlighted Action */}
                    <a
                      href="#features"
                      onClick={closeDropdown}
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#7ED321] hover:text-[#90e82e] p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.06] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={14}
                        className="stroke-[2.5] text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>Explore Features</span>
                    </a>

                    {/* Secondary Link 1 */}
                    <a
                      href="#about"
                      onClick={closeDropdown}
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-gray-300 hover:text-white p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.05] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={13}
                        className="text-gray-500 group-hover/link:text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>Verified Venue Standards</span>
                    </a>

                    {/* Secondary Link 2 */}
                    <a
                      href="#faq"
                      onClick={closeDropdown}
                      className="group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-gray-300 hover:text-white p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.05] transition-all duration-150"
                    >
                      <ArrowUpRight
                        size={13}
                        className="text-gray-500 group-hover/link:text-[#7ED321] transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      />
                      <span>Frequently Asked Questions</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ══════════════════════════════════════════════════════════════════
            3. MOBILE NAVIGATION (Stacked 4-Card Panel)
        ══════════════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2.5 bg-white/98 backdrop-blur-2xl border border-black/[0.08] rounded-[22px] p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] flex flex-col gap-2.5 max-h-[82vh] overflow-y-auto text-left"
            >
              {/* Card 1: For Players */}
              <div className="bg-[#151518] rounded-xl p-4 border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={15} className="text-[#7ED321]" />
                  <span className="text-sm font-extrabold text-white font-clash">
                    For Players
                  </span>
                </div>
                <a
                  href={APP_URLS.customerWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-bold text-[#7ED321] py-1"
                >
                  <span>↗ Launch Customer Web App</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Card 2: For Turf Owners */}
              <div className="bg-[#151518] rounded-xl p-4 border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <Store size={15} className="text-[#7ED321]" />
                  <span className="text-sm font-extrabold text-white font-clash">
                    For Turf Owners
                  </span>
                </div>
                <a
                  href={APP_URLS.ownerWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-bold text-[#7ED321] py-1"
                >
                  <span>↗ Launch Owner Web App</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Card 3: How It Works */}
              <div className="bg-[#151518] rounded-xl p-4 border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <Compass size={15} className="text-[#7ED321]" />
                  <span className="text-sm font-extrabold text-white font-clash">
                    How It Works
                  </span>
                </div>
                <a
                  href="#how-it-works"
                  onClick={closeDropdown}
                  className="flex items-center justify-between text-xs text-gray-300 py-1"
                >
                  <span>Explore 4-Step Process</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Card 4: Features & FAQs */}
              <div className="bg-[#151518] rounded-xl p-4 border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={15} className="text-[#7ED321]" />
                  <span className="text-sm font-extrabold text-white font-clash">
                    Features & FAQs
                  </span>
                </div>
                <a
                  href="#faq"
                  onClick={closeDropdown}
                  className="flex items-center justify-between text-xs text-gray-300 py-1"
                >
                  <span>Questions & Support</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Contact Button */}
              <a
                href="#cta"
                onClick={closeDropdown}
                className="w-full py-2.5 rounded-full bg-[#111111] text-white font-bold text-xs text-center"
              >
                Contact Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}