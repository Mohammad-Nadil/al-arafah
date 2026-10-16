"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";

const cleanData = {
  header: {
    tagEn: "OUR EDUCATIONAL VISION",
    tagBn: "আমাদের শিক্ষার লক্ষ্য",
  },

  title: {
    en: (
      <>
        A Home of <br className="hidden md:block" />
        <span className="font-sans font-light italic text-primary">
          Moral & Modern
        </span>{" "}
        Education.
      </>
    ),
    bn: (
      <>
        নৈতিকতা ও <br />
        <span className="font-sans font-light italic text-primary">
          আধুনিক শিক্ষার
        </span>{" "}
        ঠিকানা।
      </>
    ),
  },

  description: {
    en: "Established in 1998, Al-Arafah Islamic International School & College combines modern English-medium education with Islamic values to nurture knowledgeable, responsible, and morally grounded individuals.",
    bn: "১৯৯৮ সালে প্রতিষ্ঠিত আল-আরাফাহ ইসলামিক ইন্টারন্যাশনাল স্কুল এন্ড কলেজ আধুনিক ইংরেজি মাধ্যমের শিক্ষার সঙ্গে ইসলামী মূল্যবোধের সমন্বয় করে জ্ঞানী, দায়িত্বশীল ও নৈতিকতাসম্পন্ন মানুষ গড়ে তুলতে কাজ করে।",
  },

  tags: {
    en: ["Established in 1998", "Islamic Values", "Modern Education"],
    bn: ["প্রতিষ্ঠিত ১৯৯৮", "ইসলামী মূল্যবোধ", "আধুনিক শিক্ষা"],
  },

  images: [
    {
      src: "/about/about-hero-1.jpg",
      alt: "Al-Arafah Islamic International School & College",
      sizes: "(max-width: 768px) 65vw, (max-width: 1200px) 40vw, 30vw",
      wrapperClass:
        "absolute top-12 left-6 w-[65%] h-[75%] rounded-[2rem] overflow-hidden border border-neutral-200/40 shadow-xl group/main transition-all duration-700 hover:scale-[1.01] hover:-translate-y-1",
      imgClass:
        "object-cover transition-transform duration-1000 group-hover/main:scale-105",
      overlay: (
        <div className="absolute inset-0 bg-neutral-950/10 transition-colors duration-500 group-hover/main:bg-transparent" />
      ),
      priority: true,
    },
    {
      src: "/about/about-hero-2.jpg",
      alt: "Students learning in an Islamic educational environment",
      sizes: "(max-width: 768px) 42vw, (max-width: 1200px) 25vw, 20vw",
      wrapperClass:
        "absolute top-0 right-0 w-[42%] h-[68%] rounded-[2.5rem] overflow-hidden border border-neutral-200/60 shadow-2xl group/secondary transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 z-20",
      imgClass:
        "object-cover transition-transform duration-1000 group-hover/secondary:scale-105",
      overlay: (
        <>
          <div className="absolute inset-0 p-px bg-linear-to-b from-white/20 to-transparent rounded-[2.5rem] pointer-events-none z-30" />
          <div className="absolute inset-0 bg-neutral-950/5" />
        </>
      ),
      priority: false,
    },
    {
      src: "/about/about-hero-3.jpg",
      alt: "Modern learning and character development",
      sizes: "(max-width: 768px) 35vw, (max-width: 1200px) 20vw, 15vw",
      wrapperClass:
        "absolute bottom-0 left-[40%] w-[35%] h-[35%] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-lg group/tertiary transition-all duration-700 hover:scale-[1.05] hover:rotate-1 z-30",
      imgClass: "object-cover transition-transform duration-1000",
      overlay: null,
      priority: false,
    },
  ],
};

const AboutHero = () => {
  const { lang } = useLanguage();

  return (
    <section
      id="about-hero"
      className="w-full py-12 md:py-14 xl:py-16 bg-background transition-colors duration-500 overflow-hidden relative"
    >
      <div className="absolute top-1/4 -right-20 w-100 aspect-square bg-linear-to-br from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none hidden xl:flex" />
      <div className="absolute top-10 left-10 w-32 md:w-40 aspect-square rounded-full bg-primary/5 xl:bg-primary/10 animate-pulse blur-xl " />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative">
          <div className="lg:col-span-6 flex flex-col z-10">
            <div className="flex items-center gap-3 select-none w-fit">
              <span className="text-[11px] font-sans font-black uppercase text-primary ">
                {lang === "en"
                  ? cleanData.header.tagEn
                  : cleanData.header.tagBn}
              </span>
              <div className="w-12 h-px bg-neutral-300 " />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-neutral-900  mt-6 leading-[1.12] tracking-tight">
              {lang === "en" ? cleanData.title.en : cleanData.title.bn}
            </h1>

            <p className="text-base md:text-lg text-neutral-500  font-sans font-light leading-relaxed mt-8 max-w-xl border-l border-neutral-200  pl-6">
              {lang === "en"
                ? cleanData.description.en
                : cleanData.description.bn}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 sm:gap-x-8 gap-y-4 mt-12 text-[8px] xs:text-[10px] sm:text-xs font-sans font-semibold tracking-wider uppercase text-neutral-400 ">
              {cleanData.tags[lang === "en" ? "en" : "bn"].map((tag, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full h-112 md:h-130 mt-10 lg:mt-0 select-none">
            {cleanData.images.map((img, idx) => (
              <div key={idx} className={img.wrapperClass}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={img.priority}
                  className={img.imgClass}
                  sizes={img.sizes}
                />
                {img.overlay}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
