"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const LINE_DURATION = 2;
const LINE_EASE = "power2.inOut";
const SPLIT_DURATION = 0.9;
const SPLIT_EASE = "power3.inOut";
const TEXT_FADE_DURATION = 0.3;

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const lineRef = useRef(null);
  const siteNameRef = useRef(null);
  const firstWordRef = useRef(null);
  const secondWordRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  useLayoutEffect(() => {
    const line = lineRef.current;
    const siteName = siteNameRef.current;
    const firstWord = firstWordRef.current;
    const secondWord = secondWordRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    if (
      !line ||
      !siteName ||
      !firstWord ||
      !secondWord ||
      !leftPanel ||
      !rightPanel
    )
      return;

    // Position the line exactly in the gap between the two words,
    // recalculated on resize so it stays centered on mobile too.
    const positionLine = () => {
      const firstRect = firstWord.getBoundingClientRect();
      const secondRect = secondWord.getBoundingClientRect();
      const midpoint = (firstRect.right + secondRect.left) / 2;
      line.style.left = `${midpoint}px`;
    };

    positionLine();
    window.addEventListener("resize", positionLine);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const tl = gsap.timeline({
      onComplete: () => {
        window.removeEventListener("resize", positionLine);
        setHidden(true);
      },
    });

    if (prefersReducedMotion) {
      tl.to(leftPanel, { xPercent: -100, duration: 0.4, ease: "none" }, 0).to(
        rightPanel,
        { xPercent: 100, duration: 0.4, ease: "none" },
        0,
      );
      return () => {
        window.removeEventListener("resize", positionLine);
        tl.kill();
      };
    }

    // The line draws itself upward from the bottom-center of the screen.
    tl.to(line, { scaleY: 1, duration: LINE_DURATION, ease: LINE_EASE });

    // The site name fades out just before the split begins.
    tl.to(
      siteName,
      { opacity: 0, duration: TEXT_FADE_DURATION, ease: "power2.out" },
      ">-0.1",
    );

    // The line fades as the two halves peel apart from the center,
    // revealing the page underneath.
    tl.to(line, { opacity: 0, duration: 0.2, ease: "none" }, "<");
    tl.to(
      leftPanel,
      { xPercent: -100, duration: SPLIT_DURATION, ease: SPLIT_EASE },
      "<",
    );
    tl.to(
      rightPanel,
      { xPercent: 100, duration: SPLIT_DURATION, ease: SPLIT_EASE },
      "<",
    );

    return () => {
      window.removeEventListener("resize", positionLine);
      tl.kill();
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="preloader overflow-hidden">
      <div
        ref={leftPanelRef}
        className="preloader-panel preloader-panel-left"
      />
      <div
        ref={rightPanelRef}
        className="preloader-panel preloader-panel-right"
      />
      <div ref={siteNameRef} className="site-name">
        <span>
          <span ref={firstWordRef}>Ismail</span>{" "}
          <span ref={secondWordRef}>Nasiru</span>
        </span>
      </div>
      <div ref={lineRef} className="preloader-line" />
    </div>
  );
}
