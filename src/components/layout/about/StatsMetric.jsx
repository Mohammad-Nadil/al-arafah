"use client";

import React, { useRef } from "react";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cleanData = {
  header: {
    badgeEn: "GROWTH & METRICS",
    badgeBn: "আমাদের গৌরবময় অগ্রগতি",
    titleEn: "Al-Arafah By The Numbers",
    titleBn: "পরিসংখ্যানে আমাদের সাফল্য",
  },
  stats: [
    {
      id: 1,
      targetValue: 25,
      suffix: "+",
      labelEn: "Global & Moral Co-Curriculars",
      labelBn: "সহ-শিক্ষা ও নৈতিক কার্যক্রম",
    },
    {
      id: 2,
      targetValue: 35,
      suffix: "+",
      labelEn: "Trained & Certified Educators",
      labelBn: "প্রশিক্ষণপ্রাপ্ত শিক্ষক মণ্ডলী",
    },
    {
      id: 3,
      targetValue: 12,
      prefix: "1:",
      labelEn: "Teacher-Student Ratio",
      labelBn: "শিক্ষক-শিক্ষার্থী অনুপাত",
    },
    {
      id: 4,
      targetValue: 100,
      suffix: "%",
      labelEn: "Multimedia & Lab Integrated",
      labelBn: "মাল্টিমিডিয়া ও ল্যাব সমৃদ্ধ",
    },
  ],
};

export default function StatsMetric() {
  const { lang } = useLanguage();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const counters = gsap.utils.toArray(".metric-number");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"), 10);

        gsap.fromTo(
          counter,
          { textContent: 0 },
          {
            textContent: target,
            duration: 1.8,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="stats-metric"
      className="w-full py-20 bg-background text-foreground transition-colors duration-500 overflow-hidden relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-neutral-200/60 dark:via-neutral-800/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-neutral-200/60 dark:via-neutral-800/40 to-transparent" />

      <Container>
        <SectionHeader
          badge={lang === "en" ? cleanData.header.badgeEn : cleanData.header.badgeBn}
          title={lang === "en" ? cleanData.header.titleEn : cleanData.header.titleBn}
          center={true}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-5xl mx-auto text-center relative z-10 mt-16">
          {cleanData.stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center group relative">
              <div className="text-4xl md:text-5xl font-serif font-black text-neutral-900 dark:text-neutral-50 tracking-tight group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300 flex items-center select-none">
                {stat.prefix && (
                  <span className="mr-0.5 font-serif  opacity-80">{stat.prefix}</span>
                )}
                <span className="metric-number" data-target={stat.targetValue}>
                  0
                </span>
                {stat.suffix && (
                  <span className="ml-0.5 font-serif  opacity-80">{stat.suffix}</span>
                )}
              </div>

              <span className="text-xs md:text-sm font-serif font-medium text-neutral-400 dark:text-neutral-500 mt-3 tracking-wide max-w-[180px] sm:max-w-none transition-colors duration-300 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                {lang === "en" ? stat.labelEn : stat.labelBn}
              </span>

              <div className="absolute -inset-4 bg-gradient-to-b from-primary/[0.02] dark:from-accent/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl -z-10" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}