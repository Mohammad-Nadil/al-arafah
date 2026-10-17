
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";

const cleanData = {
  breadcrumb: {
    home: {
      en: "Home",
      bn: "হোম",
    },
    academic: {
      en: "Academics",
      bn: "একাডেমিক",
    },
  },
  heading: {
    first: {
      en: "Academic",
      bn: "শিক্ষা",
    },
    highlight: {
      en: "Programs",
      bn: "কার্যক্রম",
    },
  },
  description: {
    en: "Explore our academic programmes, from early childhood education to O' Level, alongside Islamic education, Hifzul Quran, and practical learning opportunities.",
    bn: "শিশুদের প্রাথমিক শিক্ষা থেকে ও লেভেল পর্যন্ত আমাদের শিক্ষাকার্যক্রম সম্পর্কে জানুন। পাশাপাশি রয়েছে ইসলামী শিক্ষা, হিফজুল কুরআন এবং ব্যবহারিক জ্ঞান অর্জনের সুযোগ।",
  },
  graphic: {
    institution: "Al-Arafah ISC",
    title: {
      en: "A Balanced Learning Journey",
      bn: "সমন্বিত শিক্ষার পথচলা",
    },
    footer: {
      en: "Play Group to O' Level · Moral & Modern Education",
      bn: "প্লে গ্রুপ থেকে ও লেভেল · নৈতিকতা ও আধুনিক শিক্ষা",
    },
  },
};

export default function AcademicHero() {
  const containerRef = useRef(null);
  const { lang } = useLanguage();
  const isEnglish = lang === "en";

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="relative flex w-full items-center overflow-hidden border-b border-shield/40 bg-background py-8 md:py-10">
      <Container
        ref={containerRef}
        className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10"
      >
        {/* Left Side */}
        <div className="flex w-full flex-col items-start text-left md:w-3/5">
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="flex items-center gap-2 font-sans text-xs text-gray-500">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-primary"
                >
                  {isEnglish
                    ? cleanData.breadcrumb.home.en
                    : cleanData.breadcrumb.home.bn}
                </Link>
              </li>

              <li className="text-gray-400" aria-hidden="true">
                /
              </li>

              <li
                className="font-medium text-primary"
                aria-current="page"
              >
                {isEnglish
                  ? cleanData.breadcrumb.academic.en
                  : cleanData.breadcrumb.academic.bn}
              </li>
            </ol>
          </nav>

          <h1 className="mb-3 text-2xl font-serif font-medium tracking-wide text-foreground sm:text-3xl md:text-4xl">
            {isEnglish
              ? cleanData.heading.first.en
              : cleanData.heading.first.bn}{" "}
            <span className="font-semibold text-accent">
              {isEnglish
                ? cleanData.heading.highlight.en
                : cleanData.heading.highlight.bn}
            </span>
          </h1>

          <div className="mb-3 h-0.5 w-12 rounded-full bg-accent" />

          <p className="mb-5 max-w-2xl font-sans text-xs font-light leading-relaxed text-gray-600 sm:text-sm md:text-base">
            {isEnglish
              ? cleanData.description.en
              : cleanData.description.bn}
          </p>
        </div>

        {/* Right Side: Brand Graphic */}
        <div className="flex w-full justify-center md:w-2/5 md:justify-end">
          <div className="group relative flex h-40 w-full max-w-sm flex-col justify-between overflow-hidden rounded-xl border border-shield/60 bg-subtle p-5 shadow-sm sm:h-48">
            <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-accent/20" />

            <div className="pointer-events-none absolute top-3 right-3 h-12 w-12 rotate-12 rounded-lg border border-primary/20" />

            <div className="relative z-10">
              <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-primary">
                {cleanData.graphic.institution}
              </span>

              <h3 className="mt-2 font-serif text-base font-medium text-foreground">
                {isEnglish
                  ? cleanData.graphic.title.en
                  : cleanData.graphic.title.bn}
              </h3>
            </div>

            <div className="relative z-10 font-sans text-xs text-gray-500">
              {isEnglish
                ? cleanData.graphic.footer.en
                : cleanData.graphic.footer.bn}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
