"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, Globe, ExternalLink, Play, ArrowUpRight, MapPin } from "lucide-react";
import { FOOTER_LINKS } from "../constants";

const SOCIAL_LINKS = [
  { icon: X,           href: "https://twitter.com/turfzy",          label: "X (Twitter)" },
  { icon: Globe,       href: "https://instagram.com/turfzy",        label: "Instagram"   },
  { icon: ExternalLink,href: "https://linkedin.com/company/turfzy", label: "LinkedIn"    },
  { icon: Play,        href: "https://youtube.com/@turfzy",         label: "YouTube"     },
] as const;

const COLUMNS = [
  { heading: "Product", links: FOOTER_LINKS.product  },
  { heading: "Company", links: FOOTER_LINKS.company  },
  { heading: "Legal",   links: FOOTER_LINKS.legal    },
  { heading: "Support", links: FOOTER_LINKS.support  },
] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #0e1a0a 0%, #111c0d 40%, #0d1209 100%)",
        borderTop: "1px solid rgba(163,255,18,0.12)",
      }}
    >
      {/* Subtle top glow strip */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
          width: "60%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(163,255,18,0.5) 50%, transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 64px 0",
          position: "relative",
        }}
        className="footer-inner"
      >
        {/* ── Top section: brand + columns ───────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "64px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
          className="footer-grid"
        >
          {/* ── Brand column ── */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Logo */}
            <Link
              href="/"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "28px",
                fontWeight: 800,
                color: "#ffffff",
                textDecoration: "none",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              Turf<span style={{ color: "#A3FF12" }}>zy</span>
            </Link>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.5)",
                maxWidth: "240px",
                margin: 0,
              }}
            >
              Discover, book, and play at verified sports turfs near you — built for players and owners alike.
            </p>

            {/* Location pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(163,255,18,0.08)",
                border: "1px solid rgba(163,255,18,0.2)",
                borderRadius: "999px",
                padding: "6px 14px",
                width: "fit-content",
              }}
            >
              <MapPin size={13} style={{ color: "#A3FF12" }} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#A3FF12",
                  letterSpacing: "0.04em",
                }}
              >
                15+ Cities in India
              </span>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(163,255,18,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(163,255,18,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#A3FF12";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Link columns ── */}
          {COLUMNS.map((col) => (
            <motion.div key={col.heading} variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Download app banner ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            padding: "28px 36px",
            margin: "40px 0",
            background: "rgba(163,255,18,0.06)",
            border: "1px solid rgba(163,255,18,0.18)",
            borderRadius: "20px",
          }}
          className="footer-banner"
        >
          <div>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
                margin: "0 0 4px",
                letterSpacing: "-0.01em",
              }}
            >
              Turfzy is live on Android 🎉
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                margin: 0,
              }}
            >
              iOS app coming soon — join the waitlist today.
            </p>
          </div>
          <a
            href="#download"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#A3FF12",
              color: "#0d1209",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              padding: "12px 24px",
              borderRadius: "999px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(163,255,18,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Download App <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* ── Bottom bar ──────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "24px 0 32px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
          className="footer-bottom"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.3)",
              margin: 0,
            }}
          >
            © {year} Turfzy Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {[
              { label: "Privacy Policy",   href: "/privacy" },
              { label: "Terms of Service", href: "/terms"   },
              { label: "Cookie Policy",    href: "/cookies" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-inner {
            padding: 64px 40px 0 !important;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 768px) {
          .footer-inner {
            padding: 48px 20px 0 !important;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
          .footer-banner {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 24px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
