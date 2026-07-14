"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, CalendarCheck, Zap, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS } from "../constants";

const ICONS: Record<string, React.ElementType> = { Search, Calendar: CalendarCheck, Zap };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "#ffffff" }} className="section-padding" id="how-it-works">
      <div className="layout-wrapper">
        <div className="layout-container" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ textAlign: "center", marginBottom: "var(--spacing-64)" }}
          >
            <span className="badge-subtle" style={{ marginBottom: "var(--spacing-16)" }}>Simple Process</span>
            <h2 className="h2" style={{ maxWidth: "600px", margin: "0 auto" }}>
              From Search to <span className="gradient-text">Game On</span>
            </h2>
            <p className="p-body" style={{ maxWidth: "480px", margin: "var(--spacing-16) auto 0" }}>
              Three steps. No phone calls, no guesswork, no waiting.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--spacing-24)", position: "relative" }}
            className="how-grid"
          >
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = ICONS[step.icon];
              return (
                <motion.div
                  key={step.step}
                  variants={cardVariants}
                  className="glass-card"
                  style={{ position: "relative", zIndex: 10, padding: "var(--spacing-40) var(--spacing-32)" }}
                >
                  {/* Top row: icon + step number */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--spacing-32)" }}>
                    <div style={{
                      width: "64px", height: "64px", borderRadius: "var(--radius-lg)",
                      backgroundColor: "rgba(163,255,18,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {Icon && <Icon size={28} style={{ color: "var(--color-black)" }} />}
                    </div>
                    <span className="font-clash" style={{ fontSize: "64px", fontWeight: 700, color: "#F0F0EC", lineHeight: 1, userSelect: "none", letterSpacing: "-0.04em" }}>
                      {step.step}
                    </span>
                  </div>

                  <h3 className="h3" style={{ fontSize: "24px", marginBottom: "var(--spacing-16)" }}>
                    {step.title}
                  </h3>
                  <p className="p-body" style={{ fontSize: "16px" }}>{step.description}</p>

                  {/* Arrow connector */}
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div style={{
                      position: "absolute", right: "-24px", top: "72px", zIndex: 20,
                      width: "48px", height: "48px", borderRadius: "var(--radius-full)",
                      backgroundColor: "#ffffff", border: "1px solid var(--color-border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "var(--shadow-soft)",
                    }} className="how-arrow">
                      <ArrowRight size={20} style={{ color: "var(--color-primary)" }} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 900px) {
          .how-grid { grid-template-columns: 1fr !important; }
          .how-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
