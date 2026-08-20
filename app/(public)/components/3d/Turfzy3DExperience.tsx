"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "framer-motion";
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

  // Cache the How It Works target position so it doesn't recalculate every scroll frame
  const hwLockedPos = useRef<{ x: number; y: number } | null>(null);
  const lastSection = useRef<string>("hero");

  // Motion values for smooth 3D interpolation
  const phoneRotateX = useMotionValue(2);
  const phoneRotateY = useMotionValue(-10);
  const phoneRotateZ = useMotionValue(2);
  const phoneScale = useMotionValue(0.92);
  const phoneY = useMotionValue(0);
  const phoneX = useMotionValue(0);
  const phoneOpacity = useMotionValue(1);

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
  const smoothY = useSpring(phoneY, springConfig);
  const smoothX = useSpring(phoneX, springConfig);
  const smoothOpacity = useSpring(phoneOpacity, springConfig);

  const smoothBadge1X = useSpring(badge1X, springConfig);
  const smoothBadge1Y = useSpring(badge1Y, springConfig);
  const smoothBadge2X = useSpring(badge2X, springConfig);
  const smoothBadge2Y = useSpring(badge2Y, springConfig);
  const smoothBadgesOpacity = useSpring(badgesOpacity, springConfig);

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
        const howItWorksSection = document.getElementById("how-it-works");

        if (!heroTarget || !aboutSection) return;

        const windowCenterX = window.innerWidth / 2;
        const windowCenterY = window.innerHeight / 2;

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

        // 1. HERO SECTION (Scroll at top - Full Size Phone)
        if (!aboutRect || aboutRect.top > window.innerHeight * 0.75) {
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

        // 2. HERO → ABOUT TRANSITION (Glides into center of About orbital ring, shrinking from 0.95 -> 0.68)
        if (aboutRect.top <= window.innerHeight * 0.75 && aboutRect.top > window.innerHeight * 0.15) {
          // Progress goes 0 -> 1 as aboutRect.top goes from 0.75vh down to 0.15vh
          const rawProgress = (window.innerHeight * 0.75 - aboutRect.top) / (window.innerHeight * 0.60);
          const progress = Math.max(0, Math.min(1, rawProgress));

          const targetX = aboutTarget ? aboutCenterX : 0;
          const targetY = aboutTarget ? aboutCenterY : 0;

          phoneX.set(heroCenterX * (1 - progress) + targetX * progress);
          phoneY.set(heroCenterY * (1 - progress) + targetY * progress);
          phoneRotateY.set(-10 * (1 - progress));
          phoneRotateX.set(2 * (1 - progress));
          phoneRotateZ.set(2 * (1 - progress));
          phoneScale.set(0.95 * (1 - progress) + 0.68 * progress);
          phoneOpacity.set(1);
          badgesOpacity.set(Math.max(0, 1 - progress * 2));
          setCurrentStep("find");
          return;
        }

        // 3. ABOUT SECTION CENTERED (Compact 0.68 Phone locked inside about-phone-target)
        if (aboutRect.top <= window.innerHeight * 0.15 && aboutRect.bottom > window.innerHeight * 0.35) {
          const targetX = aboutTarget ? aboutCenterX : 0;
          const targetY = aboutTarget ? aboutCenterY : 0;

          // Check if phone target is getting too close to top navbar
          let currentOpacity = 1;
          if (aboutTarget) {
            const targetTopInViewport = aboutTarget.getBoundingClientRect().top;
            if (targetTopInViewport < 140) {
              const navFadeProgress = Math.max(0, Math.min(1, (140 - targetTopInViewport) / 80));
              currentOpacity = 1 - navFadeProgress;
            }
          }

          phoneX.set(targetX);
          phoneY.set(targetY);
          phoneRotateY.set(0);
          phoneRotateX.set(0);
          phoneRotateZ.set(0);
          phoneScale.set(0.68);
          phoneOpacity.set(currentOpacity);
          badgesOpacity.set(0);
          setCurrentStep("find");
          return;
        }

        // 4. ABOUT EXIT → HOW IT WORKS (Smooth fade out)
        if (aboutRect.bottom <= window.innerHeight * 0.35) {
          const fadeProgress = Math.max(0, Math.min(1, (window.innerHeight * 0.35 - aboutRect.bottom) / (window.innerHeight * 0.3)));

          const targetX = aboutTarget ? aboutCenterX : 0;
          const targetY = aboutTarget ? aboutCenterY : 0;

          phoneX.set(targetX);
          phoneY.set(targetY + fadeProgress * 40);
          phoneScale.set(0.85 - fadeProgress * 0.2);
          phoneOpacity.set(Math.max(0, 1 - fadeProgress * 1.5));
          badgesOpacity.set(0);
          setCurrentStep("find");
          return;
        }

        // 5. HIDDEN BELOW ABOUT
        phoneOpacity.set(0);
        badgesOpacity.set(0);
      };

      // Create main ScrollTrigger listener for 60fps tracking
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: updatePhonePosition,
        onRefresh: updatePhonePosition,
      });

      // Initial positioning call
      updatePhonePosition();
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReduced, isMobile]);

  if (prefersReduced || isMobile) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-20 overflow-visible flex items-center justify-center select-none"
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
        style={{ opacity: smoothOpacity.get() }}
      />
    </div>
  );
}
