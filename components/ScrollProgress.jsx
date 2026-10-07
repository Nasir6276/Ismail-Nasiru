"use client";

import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollProgress() {
  const wrapRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const progressPath = pathRef.current;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = String(pathLength);
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = String(progress);

      if (scroll > 200) {
        wrapRef.current?.classList.add("active-progress");
      } else {
        wrapRef.current?.classList.remove("active-progress");
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="progress-wrap" ref={wrapRef} onClick={handleClick}>
      <FaArrowUp className="progress-arrow" />
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}
