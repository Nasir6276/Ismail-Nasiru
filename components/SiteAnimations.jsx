"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SiteAnimations() {
  useEffect(() => {
    let checkCounters = () => {};
    let observer;

    const ctx = gsap.context(() => {
      // ---- split-text / reveal-type effects (gsapAnimate.js) ----
      document.querySelectorAll(".reveal-type").forEach((el) => {
        const split = new SplitText(el, { type: "words, chars" });
        gsap.from(split.chars, {
          scrollTrigger: { trigger: el, start: "top 80%", end: "top 20%", scrub: true },
          opacity: 0.2,
          stagger: 0.1,
        });
      });

      document.querySelectorAll(".split-text").forEach((el) => {
        const target = el.querySelector("p, a") || el;
        const split = new SplitText(target, {
          type: "words, chars",
          lineThreshold: 0.5,
          linesClass: "split-line",
        });
        let splitSet = split.chars;
        gsap.set(target, { perspective: 400 });

        const settings = {
          scrollTrigger: { trigger: target, start: "top 86%", toggleActions: "play none none reverse" },
          duration: 0.9,
          stagger: 0.02,
          ease: "power3.out",
        };

        const has = (cls) => el.classList.contains(cls);

        if (has("split-lines-transform") || has("split-lines-rotation-x")) {
          split.split({ type: "lines", lineThreshold: 0.5, linesClass: "split-line" });
          splitSet = split.lines;
          settings.opacity = 0;
          settings.stagger = 0.5;
          if (has("split-lines-rotation-x")) {
            settings.rotationX = -120;
            settings.transformOrigin = "top center -50";
          } else {
            settings.yPercent = 100;
            settings.autoAlpha = 0;
          }
          gsap.from(splitSet, settings);
        } else if (has("effect-blur-fade")) {
          split.split({ type: "words" });
          splitSet = split.words;
          gsap.fromTo(
            splitSet,
            { opacity: 0, filter: "blur(10px)", y: 20 },
            {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 1,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: target, start: "top 86%", toggleActions: "play none none reverse" },
            }
          );
        } else {
          if (has("effect-fade")) settings.opacity = 0;
          if (has("effect-up")) {
            settings.opacity = 0;
            settings.y = 80;
          }
          gsap.from(splitSet, settings);
        }
      });

      // ---- scale-img on scroll ----
      document.querySelectorAll(".scale-img").forEach((item) => {
        gsap.to(item, {
          scale: 1,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", toggleActions: "play reverse play reverse" },
        });
        const img = item.querySelector("img");
        if (img) {
          gsap.set(img, { scale: 1.3 });
          gsap.to(img, {
            scale: 1,
            duration: 1,
            scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", toggleActions: "play reverse play reverse" },
          });
        }
      });

      // ---- tf-animate-1..4 reveal on intersection ----
      const animateEls = document.querySelectorAll(".tf-animate-1, .tf-animate-2, .tf-animate-3, .tf-animate-4");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = parseFloat(entry.target.getAttribute("data-delay")) || 0;
              setTimeout(() => entry.target.classList.add("active-animate"), delay * 1000);
            }
          });
        },
        { threshold: 0.1 }
      );
      animateEls.forEach((el) => observer.observe(el));

      // ---- counters ----
      const counterItems = document.querySelectorAll(".counter-item");
      const animatedCounters = new WeakSet();
      checkCounters = () => {
        counterItems.forEach((item) => {
          if (animatedCounters.has(item)) return;
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            item.querySelectorAll(".numberCount").forEach((el) => {
              const countTo = parseInt(el.getAttribute("data-count"), 10) || 0;
              const duration = (parseInt(el.getAttribute("data-duration"), 10) || 2000) / 1000;
              const counter = { val: 0 };
              gsap.to(counter, {
                val: countTo,
                duration,
                ease: "power1.out",
                onUpdate: () => {
                  el.textContent = String(Math.floor(counter.val)).padStart(2, "0");
                },
              });
            });
            animatedCounters.add(item);
          }
        });
      };
      checkCounters();
      window.addEventListener("scroll", checkCounters, { passive: true });

      // ---- button hover fill effect ----
      document.querySelectorAll(".btn-hover-animation-fill").forEach((btn) => {
        btn.style.setProperty("--button-width", `${btn.offsetWidth}px`);
        const moveFx = (e) => {
          const rect = btn.getBoundingClientRect();
          const bg = btn.querySelector(".bg-effect");
          if (bg) {
            bg.style.top = `${e.clientY - rect.top}px`;
            bg.style.left = `${e.clientX - rect.left}px`;
          }
        };
        btn.addEventListener("mouseenter", moveFx);
        btn.addEventListener("mouseout", moveFx);
      });

      ScrollTrigger.refresh();
    });

    return () => {
      window.removeEventListener("scroll", checkCounters);
      observer?.disconnect();
      ctx.revert();
    };
  }, []);

  return null;
}
