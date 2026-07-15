"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/* ── Perfectly Drawn SVG Sports Balls ── */

const Football = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full rounded-full">
    <defs>
      <radialGradient id="footGradient" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="70%" stopColor="#e0e0e0" />
        <stop offset="100%" stopColor="#999999" />
      </radialGradient>
      <filter id="footShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.35" />
      </filter>
    </defs>
    <circle cx="12" cy="12" r="11" fill="url(#footGradient)" filter="url(#footShadow)" />
    <path d="M12 6.5 L16 9.5 L14.5 14.5 L9.5 14.5 L8 9.5 Z" fill="#222" opacity="0.9" />
    <line x1="12" y1="6.5" x2="12" y2="1" stroke="#222" strokeWidth="1.2" opacity="0.9" />
    <line x1="16" y1="9.5" x2="21.5" y2="7" stroke="#222" strokeWidth="1.2" opacity="0.9" />
    <line x1="14.5" y1="14.5" x2="18.5" y2="20.5" stroke="#222" strokeWidth="1.2" opacity="0.9" />
    <line x1="9.5" y1="14.5" x2="5.5" y2="20.5" stroke="#222" strokeWidth="1.2" opacity="0.9" />
    <line x1="8" y1="9.5" x2="2.5" y2="7" stroke="#222" strokeWidth="1.2" opacity="0.9" />
  </svg>
);

const CricketBall = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full rounded-full">
    <defs>
      <radialGradient id="cricketGradient" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#ff5252" />
        <stop offset="40%" stopColor="#e53935" />
        <stop offset="85%" stopColor="#b71c1c" />
        <stop offset="100%" stopColor="#7f0000" />
      </radialGradient>
      <filter id="cricShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
      </filter>
    </defs>
    <circle cx="12" cy="12" r="11" fill="url(#cricketGradient)" filter="url(#cricShadow)" />
    <path d="M12 1 Q 15 12 12 23" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="1.5,1.5" opacity="0.9" />
    <path d="M12 1 Q 9 12 12 23" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="1.5,1.5" opacity="0.9" />
  </svg>
);

const TennisBall = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full rounded-full">
    <defs>
      <radialGradient id="tennisGradient" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#eaff80" />
        <stop offset="50%" stopColor="#cddc39" />
        <stop offset="100%" stopColor="#827717" />
      </radialGradient>
      <filter id="tenShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.3" />
      </filter>
    </defs>
    <circle cx="12" cy="12" r="11" fill="url(#tennisGradient)" filter="url(#tenShadow)" />
    <path d="M 4.5 6.5 A 8 8 0 0 0 4.5 17.5" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
    <path d="M 19.5 6.5 A 8 8 0 0 1 19.5 17.5" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
  </svg>
);

const Basketball = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full rounded-full">
    <defs>
      <radialGradient id="basketGradient" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#ffb74d" />
        <stop offset="50%" stopColor="#f57c00" />
        <stop offset="100%" stopColor="#e65100" />
      </radialGradient>
      <filter id="baskShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.35" />
      </filter>
    </defs>
    <circle cx="12" cy="12" r="11" fill="url(#basketGradient)" filter="url(#baskShadow)" />
    <line x1="12" y1="1" x2="12" y2="23" stroke="#3e2723" strokeWidth="1" opacity="0.85" />
    <line x1="1" y1="12" x2="23" y2="12" stroke="#3e2723" strokeWidth="1" opacity="0.85" />
    <path d="M 4.5 6.5 A 8 8 0 0 0 4.5 17.5" fill="none" stroke="#3e2723" strokeWidth="1" opacity="0.85" />
    <path d="M 19.5 6.5 A 8 8 0 0 1 19.5 17.5" fill="none" stroke="#3e2723" strokeWidth="1" opacity="0.85" />
  </svg>
);

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 0);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("[role='button']")) {
        setCursorVariant("button");
      } else if (target.closest("a")) {
        setCursorVariant("link");
      } else if (target.closest(".group") || target.closest(".card") || target.closest(".border")) {
        setCursorVariant("card");
      } else {
        setCursorVariant("default");
      }
    };

    const onMouseOver = (e: MouseEvent) => updateHoverState(e);
    const onMouseUp = (e: MouseEvent) => updateHoverState(e);
    const onMouseDown = () => setCursorVariant("click");
    
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  const renderBall = () => {
    switch(cursorVariant) {
      case "click":  return <CricketBall />;
      case "link":   return <TennisBall />;
      case "button": return <Basketball />;
      case "card":   return <Football />;
      default:       return <CricketBall />; // Cricket ball is now primary
    }
  };

  // Advanced Unique Animations separated from mouse position tracking
  const variants = {
    default: { 
      scale: 1, 
      rotate: 0, 
      x: 0, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 400, damping: 25 }
    },
    card: { 
      scale: 1.2, 
      rotate: 180, 
      y: [0, -3, 0], // Very gentle float up and down
      transition: { 
        y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" as const },
        scale: { type: "spring" as const, stiffness: 400, damping: 20 }
      }
    },
    button: { 
      scale: 1.35, 
      y: [0, -6, 0], // Subtle, smooth authentic basketball bounce
      rotate: [0, 10, -5, 0], 
      transition: { 
        y: { repeat: Infinity, duration: 1, ease: "easeOut" as const },
        rotate: { repeat: Infinity, duration: 1, ease: "easeInOut" as const },
        scale: { type: "spring" as const, stiffness: 400, damping: 15 }
      } 
    },
    link: { 
      scale: 1.25, 
      x: [0, -3, 3, 0], // Gentle wiggle for tennis ping-pong
      rotate: [0, 360], 
      transition: { 
        x: { repeat: Infinity, duration: 1, ease: "easeInOut" as const },
        rotate: { repeat: Infinity, duration: 2, ease: "linear" as const },
        scale: { type: "spring" as const, stiffness: 400, damping: 15 }
      } 
    },
    click: { 
      scale: 0.6, 
      rotate: -45, 
      x: 0, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 800, damping: 10 }
    }
  };

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          body, a, button, input, select, textarea, [role="button"], .group {
            cursor: none !important;
          }
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:flex items-center justify-center"
        style={{
          width: "24px", // Native cursor size
          height: "24px",
          x: mouseX,
          y: mouseY,
          marginLeft: "-12px", // Perfectly centered
          marginTop: "-12px",
        }}
      >
        <motion.div 
          className="w-full h-full flex items-center justify-center origin-center"
          variants={variants}
          animate={cursorVariant}
        >
          {renderBall()}
        </motion.div>
      </motion.div>
    </>
  );
}
