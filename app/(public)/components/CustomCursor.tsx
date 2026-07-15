"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    setIsMounted(true);

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
      } else if (target.closest(".group") || target.closest(".card") || target.closest(".border") || target.closest(".glass-card")) {
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

  const variants = {
    default: { 
      scale: 1,
      backgroundColor: "rgba(132, 204, 22, 1)", // lime-500
      border: "0px solid rgba(132, 204, 22, 0)",
      transition: { type: "spring" as const, stiffness: 400, damping: 25 }
    },
    card: { 
      scale: 2.5,
      backgroundColor: "rgba(132, 204, 22, 0.1)",
      border: "1px solid rgba(132, 204, 22, 0.5)",
      transition: { type: "spring" as const, stiffness: 400, damping: 25 }
    },
    button: { 
      scale: 3.5,
      backgroundColor: "rgba(132, 204, 22, 0.15)",
      border: "1px solid rgba(132, 204, 22, 0.8)",
      transition: { type: "spring" as const, stiffness: 400, damping: 25 }
    },
    link: { 
      scale: 2.5,
      backgroundColor: "rgba(132, 204, 22, 0.15)",
      border: "1px solid rgba(132, 204, 22, 0.8)",
      transition: { type: "spring" as const, stiffness: 400, damping: 25 }
    },
    click: { 
      scale: 0.5,
      backgroundColor: "rgba(132, 204, 22, 1)",
      border: "0px solid rgba(132, 204, 22, 0)",
      transition: { type: "spring" as const, stiffness: 800, damping: 10 }
    }
  };

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          body, a, button, input, select, textarea, [role="button"], .group, .card, .glass-card {
            cursor: none !important;
          }
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:flex rounded-full origin-center"
        style={{
          width: "16px", 
          height: "16px",
          x: mouseX,
          y: mouseY,
          marginLeft: "-8px", 
          marginTop: "-8px",
        }}
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
}
