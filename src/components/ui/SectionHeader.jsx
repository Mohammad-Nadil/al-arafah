"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionHeader({
  badge,
  title,
  highlightWord,
  description,
  align = "center",
  className = "",
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: containerRef },
  );

  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) return title;

    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-accent font-semibold">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  const isCenter = align === "center";

  return (
    <div
      ref={containerRef}
      className={`w-full flex flex-col mb-10 md:mb-14 ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      } max-w-3xl ${className}`}
    >
      {badge && (
        <span className="text-accent text-xs md:text-sm font-bold uppercase  mb-2 font-sans">
          {badge}
        </span>
      )}

      <h2 className="text-2xl xs:text-[27px] sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary leading-tight tracking-wide">
        {renderTitle()}
      </h2>

      <div
        className={`h-[2px] w-16 bg-accent mt-4 mb-4 rounded-full transition-all duration-300 ${
          isCenter ? "mx-auto" : ""
        }`}
      />

      {description && (
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300/90 font-light leading-relaxed max-w-2xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
