"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "../constants";

function AnimatedCounter({ value, suffix, duration = 2.2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / 1000 / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(eased * value);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Trusted() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "var(--color-bg)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "var(--spacing-80) 0" }}>
      <div className="layout-wrapper">
        <div className="layout-container" ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--spacing-24)" }}
            className="stats-grid"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={cardVariants} className="glass-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <span
                  className="font-clash"
                  style={{ fontSize: "56px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--color-black)", lineHeight: 1, marginBottom: "var(--spacing-8)", display: "block" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-gray-500)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
