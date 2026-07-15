"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FOOTER_LINKS } from "../constants";

// ── Brand-accurate social SVGs ─────────────────────────────────────────────

const TwitterSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const InstagramSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YoutubeSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const SOCIAL = [
  { label: "Twitter",   href: "https://twitter.com/turfzy",        Icon: TwitterSVG   },
  { label: "Instagram", href: "https://instagram.com/turfzy",        Icon: InstagramSVG },
  { label: "LinkedIn",  href: "https://linkedin.com/company/turfzy", Icon: LinkedInSVG  },
  { label: "YouTube",   href: "https://youtube.com/@turfzy",         Icon: YoutubeSVG   },
] as const;

const COLUMNS = [
  { heading: "Product", links: FOOTER_LINKS.product  },
  { heading: "Company", links: FOOTER_LINKS.company  },
  { heading: "Legal",   links: FOOTER_LINKS.legal    },
  { heading: "Support", links: FOOTER_LINKS.support  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0a0f07] to-[#0d1509] border-t border-white/5">
      
      {/* ── Ambient Deep Glow ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* ── Thin top green accent line ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-lime-500/40 to-transparent pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-[1200px] mx-auto px-6 md:px-12 pt-20 pb-8 relative z-10"
      >
        {/* ── Main grid: brand col + 4 link cols ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand column */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-3xl font-extrabold text-white font-clash tracking-tight"
            >
              Turf<span className="text-lime-500">zy</span>
              <Sparkles size={18} className="text-lime-500 opacity-80 group-hover:opacity-100 transition-opacity" />
            </Link>

            <p className="text-white/40 text-[14px] leading-relaxed max-w-[260px]">
              Book verified sports turfs near you — in seconds, not minutes.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {SOCIAL.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-lime-500 hover:bg-lime-500/10 hover:border-lime-500/30 transition-colors duration-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <motion.div variants={itemVariants} key={col.heading} className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold text-white/30 uppercase tracking-[0.15em]">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8"
        >
          <p className="text-[13px] text-white/30 text-center md:text-left">
            © {year} Turfzy Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {[
              { label: "Privacy",  href: "/privacy" },
              { label: "Terms",    href: "/terms"   },
              { label: "Cookies",  href: "/cookies" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[13px] text-white/30 hover:text-white/70 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}