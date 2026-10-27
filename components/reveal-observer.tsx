"use client";

import { useEffect } from "react";

// Fades in every `.reveal` element the first time it scrolls into view.
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    elements.forEach((el) => {
      // Anything already on screen (or every section, for very tall crawler/screenshot viewports)
      // shows right away instead of waiting on the observer.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add("is-visible");
      else observer.observe(el);
    });
    root.classList.add("reveal-ready");
    return () => observer.disconnect();
  }, []);

  return null;
}
