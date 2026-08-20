"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring, useReducedMotion, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TurfzyPhone from "./TurfzyPhone";
import { ScreenStep } from "./PhoneScreenController";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Turfzy3DExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for smooth 3D interpolation
  const phoneRotateX = useMotionValue(2);
  const phoneRotateY = useMotionValue(-10);
  const phoneRotateZ = useMotionValue(2);
  const phoneScale = useMotionValue(0.92);
  const phoneY = useMotionValue(0);
  const phoneX = useMotionValue(0);
  // Start hidden so refreshes at lower sections (FAQ, CTA, etc.) never flash the 3D phone mockup.
  const phoneOpacity = useMotionValue(0);

  const badge1X = useMotionValue(0);
  const badge1Y = useMotionValue(0);
  const badge2X = useMotionValue(0);
  const badge2Y = useMotionValue(0);
  const badgesOpacity = useMotionValue(1);

  const [currentStep, setCurrentStep] = useState<ScreenStep>("find");

  // Spring physics configs for fluid 60fps responsiveness
  const springConfig = { damping: 100, stiffness: 300, mass: 1 };
  const smoothRotateX = useSpring(phoneRotateX, springConfig);
  const smoothRotateY = useSpring(phoneRotateY, springConfig);
  const smoothRotateZ = useSpring(phoneRotateZ, springConfig);
  const smoothScale = useSpring(phoneScale, springConfig);
  
  // Use raw motion values for X/Y so it sticks perfectly to targets on scroll without physics lag!
  const smoothY = phoneY;
  const smoothX = phoneX;
  
  const smoothOpacity = useSpring(phoneOpacity, { damping: 100, stiffness: 500, mass: 0.1 });

  const smoothBadge1X = useSpring(badge1X, springConfig);
  const smoothBadge1Y = useSpring(badge1Y, springConfig);
  const smoothBadge2X = useSpring(badge2X, springConfig);
  const smoothBadge2Y = useSpring(badge2Y, springConfig);
  const smoothBadgesOpacity = useSpring(badgesOpacity, { damping: 100, stiffness: 500, mass: 0.1 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (prefersReduced || isMobile) return;

    const ctx = gsap.context(() => {
      const updatePhonePosition = () => {
        const heroTarget = document.getElementById("hero-phone-target");
        const aboutTarget = document.getElementById("about-phone-target");
        const aboutSection = document.getElementById("about");
        
        const windowCenterX = window.innerWidth / 2;
        const windowCenterY = window.innerHeight / 2;

        if (!heroTarget || !aboutSection) {
          phoneOpacity.set(0);
          return;
        }

        const heroRect = heroTarget.getBoundingClientRect();
        const heroCenterX = heroRect.left + heroRect.width / 2 - windowCenterX;
        const heroCenterY = heroRect.top + heroRect.height / 2 - windowCenterY;

        let aboutCenterX = 0;
        let aboutCenterY = 0;

        if (aboutTarget) {
          const abRect = aboutTarget.getBoundingClientRect();
          aboutCenterX = abRect.left + abRect.width / 2 - windowCenterX;
          aboutCenterY = abRect.top + abRect.height / 2 - windowCenterY;
        }

        const aboutRect = aboutSection.getBoundingClientRect();
        const vh = window.innerHeight;

        // ── ZONE 1: HERO (About not yet in view, scrolled above it) ──
        if (aboutRect.top > vh * 0.6) {
          phoneX.set(heroCenterX);
          phoneY.set(heroCenterY);
          phoneScale.set(0.95);
          phoneRotateY.set(-10);
          phoneRotateX.set(2);
          phoneRotateZ.set(2);
          phoneOpacity.set(1);
          badgesOpacity.set(1);
          setCurrentStep("find");
          return;
        }

        // ── ZONE 2: HERO → ABOUT TRANSITION (About entering from bottom) ──
        if (aboutRect.top > 0 && aboutRect.top <= vh * 0.6) {
          const progress = Math.max(0, Math.min(1,
            (vh * 0.6 - aboutRect.top) / (vh * 0.6)
          ));

          const targetX = aboutTarget ? aboutCenterX : 0;
          const targetY = aboutTarget ? aboutCenterY : 0;

          phoneX.set(heroCenterX + (targetX - heroCenterX) * progress);
          phoneY.set(heroCenterY + (targetY - heroCenterY) * progress);
          phoneRotateY.set(-10 * (1 - progress));
          phoneRotateX.set(2 * (1 - progress));
          phoneRotateZ.set(2 * (1 - progress));
          phoneScale.set(0.95 + (0.70 - 0.95) * progress);
          phoneOpacity.set(1);
          badgesOpacity.set(Math.max(0, 1 - progress * 1.8));
          setCurrentStep("find");
          return;
        }

        // ── ZONE 3: ABOUT SECTION FULLY IN VIEW ──
        if (aboutRect.top <= 0 && aboutRect.bottom >= vh * 0.3) {
          const targetX = aboutTarget ? aboutCenterX : 0;
          const targetY = aboutTarget ? aboutCenterY : 0;

          phoneX.set(targetX);
          phoneY.set(targetY);
          phoneRotateY.set(0);
          phoneRotateX.set(0);
          phoneRotateZ.set(0);
          phoneScale.set(0.70);
          phoneOpacity.set(1);
          badgesOpacity.set(0);
          setCurrentStep("find");
          return;
        }

        // ── ZONE 4: PAST ABOUT — HIDDEN ──
        phoneOpacity.set(0);
        badgesOpacity.set(0);
      };

      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: updatePhonePosition,
        onRefresh: updatePhonePosition,
      });

      // Initial position update
      updatePhonePosition();
      // Second tick to ensure positions match layout after fonts/DOM paint
      requestAnimationFrame(updatePhonePosition);
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReduced, isMobile]);

  if (prefersReduced || isMobile) {
    return null;
  }

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-20 overflow-visible flex items-center justify-center select-none"
      style={{ opacity: smoothOpacity }}
    >
      <TurfzyPhone
        currentStep={currentStep}
        phoneRotateX={smoothRotateX}
        phoneRotateY={smoothRotateY}
        phoneRotateZ={smoothRotateZ}
        phoneScale={smoothScale}
        phoneY={smoothY}
        phoneX={smoothX}
        badge1X={smoothBadge1X}
        badge1Y={smoothBadge1Y}
        badge2X={smoothBadge2X}
        badge2Y={smoothBadge2Y}
        badgesOpacity={smoothBadgesOpacity}
      />
    </motion.div>
  );
}
