"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, ShieldCheck, Lock, Activity, Tag, Sparkles } from "lucide-react";
import { WHY_CHOOSE } from "../constants";

const ICONS: Record<string, any> = { Zap, ShieldCheck, Lock, Activity, Tag, Sparkles };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function WhyChoose() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "var(--color-bg)" }} className="section-padding" id="why-turfzy">
      <div className="layout-wrapper" ref={ref}>
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ textAlign: "center", marginBottom: "var(--spacing-64)" }}
          >
            <span className="badge-subtle" style={{ marginBottom: "var(--spacing-16)" }}>Why Turfzy</span>
            <h2 className="h2" style={{ maxWidth: "700px", margin: "0 auto" }}>
              Built Different. <span className="gradient-text">Built for You.</span>
            </h2>
            <p className="p-body" style={{ maxWidth: "500px", margin: "var(--spacing-16) auto 0" }}>
              Every feature is designed with one goal: get you on the turf faster, with zero friction.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--spacing-24)" }}
            className="why-grid"
          >
            {WHY_CHOOSE.map((item) => {
              const Icon = ICONS[item.icon] ?? Zap;
              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  className="glass-card"
                  style={{ display: "flex", flexDirection: "column", padding: "var(--spacing-40) var(--spacing-32)" }}
                >
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(163,255,18,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "var(--spacing-24)",
                  }}>
                    <Icon size={24} style={{ color: "var(--color-black)" }} />
                  </div>
                  <h3 className="h3" style={{ fontSize: "20px", marginBottom: "var(--spacing-16)" }}>
                    {item.title}
                  </h3>
                  <p className="p-body" style={{ fontSize: "15px" }}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
