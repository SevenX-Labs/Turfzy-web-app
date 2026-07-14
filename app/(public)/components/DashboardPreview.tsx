"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Smartphone, Monitor } from "lucide-react";

export default function DashboardPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{ backgroundColor: "var(--color-bg-dark)", overflow: "hidden", position: "relative" }}
      className="section-padding"
      id="app-preview"
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px", height: "800px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(163,255,18,0.03) 0%, rgba(163,255,18,0) 70%)",
        pointerEvents: "none",
      }} />

      <div className="layout-wrapper" style={{ position: "relative", zIndex: 10 }}>
        <div className="layout-container" ref={ref}>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "var(--spacing-80)" }}
          >
            <span className="badge-subtle" style={{ display: "inline-flex", alignItems: "center", gap: "var(--spacing-8)", marginBottom: "var(--spacing-16)" }}>
              <Smartphone size={14} /> App Preview
            </span>
            <h2 className="h2" style={{ color: "#ffffff", maxWidth: "600px", margin: "0 auto" }}>
              The App Your Team <span style={{ color: "var(--color-primary)" }}>Will Love</span>
            </h2>
            <p className="p-body" style={{ color: "rgba(255,255,255,0.6)", marginTop: "var(--spacing-16)", maxWidth: "520px", margin: "var(--spacing-16) auto 0" }}>
              A beautifully crafted experience for both players and turf owners.
            </p>
          </motion.div>

          {/* Phone Mockups */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "var(--spacing-64)", marginBottom: "var(--spacing-120)" }} className="phones-row">
            {/* Player App */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: -20 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--spacing-24)" }}
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ position: "relative" }}>
                <Image src="/app-ui-mockup.png" alt="Turfzy Player App" width={220} height={440}
                  style={{ width: "200px", height: "auto", borderRadius: "24px", boxShadow: "0 32px 80px rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.08)" }} />
              </motion.div>
              <div style={{ backgroundColor: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "var(--radius-md)", padding: "12px 24px", textAlign: "center" }}>
                <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "14px" }}>Player App</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginTop: "4px" }}>Find, Book, Play</p>
              </div>
            </motion.div>

            {/* Center hero phone */}
            <motion.div
              initial={{ opacity: 0, y: 56 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--spacing-24)" }}
            >
              <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} style={{ position: "relative" }}>
                <Image src="/hero-phone-hand.png" alt="Turfzy App in Hand" width={320} height={600}
                  style={{ width: "280px", height: "auto", objectFit: "contain", filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))" }} />
                <div style={{ position: "absolute", bottom: "-12px", left: "50%", transform: "translateX(-50%)", width: "120px", height: "24px", background: "rgba(163,255,18,0.25)", filter: "blur(20px)", borderRadius: "50%" }} />
              </motion.div>
              <div style={{ backgroundColor: "rgba(163,255,18,0.08)", border: "1px solid rgba(163,255,18,0.20)", borderRadius: "var(--radius-md)", padding: "12px 24px", textAlign: "center" }}>
                <p style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "14px" }}>Turfzy</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginTop: "4px" }}>Available on Android</p>
              </div>
            </motion.div>

            {/* Owner App */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: 20 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--spacing-24)" }}
            >
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                {/* Inline Owner App UI */}
                <div style={{
                  width: "200px", aspectRatio: "9/19",
                  backgroundColor: "var(--color-bg-dark)", borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
                  overflow: "hidden", display: "flex", flexDirection: "column",
                }}>
                  <div style={{ height: "120px", backgroundColor: "rgba(163,255,18,0.08)", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <Monitor size={32} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div style={{ padding: "var(--spacing-16)", display: "flex", flexDirection: "column", gap: "var(--spacing-16)" }}>
                    {[["Today's Bookings", "24"], ["Revenue", "₹28K"]].map(([lbl, val]) => (
                      <div key={lbl} style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "var(--radius-sm)", padding: "12px" }}>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}>{lbl}</p>
                        <p style={{ color: "var(--color-primary)", fontSize: "24px", fontWeight: 700, marginTop: "4px" }}>{val}</p>
                      </div>
                    ))}
                    <div style={{ backgroundColor: "rgba(163,255,18,0.12)", border: "1px solid rgba(163,255,18,0.25)", borderRadius: "var(--radius-sm)", padding: "12px", textAlign: "center", marginTop: "auto" }}>
                      <p style={{ color: "var(--color-primary)", fontSize: "13px", fontWeight: 600 }}>Manage Slots →</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div style={{ backgroundColor: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "var(--radius-md)", padding: "12px 24px", textAlign: "center" }}>
                <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "14px" }}>Owner App</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginTop: "4px" }}>Manage, Grow, Earn</p>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
            style={{ textAlign: "center", marginBottom: "var(--spacing-64)" }}
            id="owners"
          >
            <span className="badge-subtle" style={{ display: "inline-flex", alignItems: "center", gap: "var(--spacing-8)", marginBottom: "var(--spacing-16)" }}>
              <Monitor size={14} /> Owner Dashboard
            </span>
            <h2 className="h2" style={{ color: "#ffffff", maxWidth: "700px", margin: "0 auto" }}>
              Run Your Turf Like a <span style={{ color: "var(--color-primary)" }}>Pro Business</span>
            </h2>
            <p className="p-body" style={{ color: "rgba(255,255,255,0.6)", marginTop: "var(--spacing-16)", maxWidth: "560px", margin: "var(--spacing-16) auto 0" }}>
              Revenue analytics, booking management, heatmaps, and customer insights — all in one dashboard.
            </p>
          </motion.div>

          {/* Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            style={{ position: "relative", maxWidth: "960px", margin: "0 auto" }}
          >
            <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "70%", height: "50px", background: "rgba(163,255,18,0.18)", filter: "blur(50px)", borderRadius: "50%" }} />
            <Image src="/dashboard-preview.png" alt="Turfzy Owner Dashboard" width={960} height={580}
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius-xl)", boxShadow: "0 48px 100px rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.07)", position: "relative", zIndex: 10 }} />
          </motion.div>

        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .phones-row { flex-direction: column !important; align-items: center !important; gap: var(--spacing-40) !important; }
        }
      `}</style>
    </section>
  );
}
