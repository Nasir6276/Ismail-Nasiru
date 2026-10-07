"use client";

import { useEffect } from "react";
import gsap from "gsap";

const HOVER_SCALE = 2;
const HOVER_DURATION = 0.3;

export default function CustomCursor() {
  useEffect(() => {
    const handleMove = (e) => {
      gsap.set(".cursor2", { x: e.clientX, y: e.clientY });
    };

    // Only plain links, not link-styled buttons (.tf-btn).
    const isHoverableLink = (target) => {
      const link = target.closest("a");
      if (!link) return false;
      return !link.classList.contains("tf-btn");
    };

    const handleOver = (e) => {
      if (isHoverableLink(e.target)) {
        gsap.to(".cursor2", {
          scale: HOVER_SCALE,
          duration: HOVER_DURATION,
          ease: "power2.out",
        });
      }
    };

    const handleOut = (e) => {
      if (isHoverableLink(e.target)) {
        gsap.to(".cursor2", {
          scale: 1,
          duration: HOVER_DURATION,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return <div className="cursor2" />;
}
