"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";

const AboutHero = () => {
  const { lang } = useLanguage();

  return (
    <section 
      id="about-hero" 
      className="w-full py-20 bg-background transition-colors duration-500 overflow-hidden relative"
    >
      <div className="absolute top-1/4 -right-20 w-100 aspect-square bg-linear-to-br  from-primary/20 to-transparent rounded-full blur-3xl dark:blur-3xl pointer-events-none hidden xl:flex " />
      <div className="absolute top-10 left-10 w-32 md:w-40 aspect-square rounded-full bg-primary/5 xl:bg-primary/10 animate-pulse blur-xl dark:blur-2xl" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative">
          
          <div className="lg:col-span-6 flex flex-col z-10">
            <div className="flex items-center gap-3 select-none w-fit">
              <span className="text-[11px] font-sans font-black uppercase text-primary dark:text-accent">
                {lang === "en" ? "FOUNDATIONAL VISION" : "মূল বুনিয়াদ"}
              </span>
              <div className="w-12 h-[1px] bg-neutral-300 dark:bg-neutral-700" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-neutral-900 dark:text-neutral-50 mt-6 leading-[1.12] tracking-tight">
              {lang === "en" ? (
                <>
                  Where Divine <br className="hidden md:block" />
                  <span className="font-sans font-light italic text-primary dark:text-accent">Wisdom</span> Meets <br />
                  Global Excellence.
                </>
              ) : (
                <>
                  ঐশী প্রজ্ঞা ও <br />
                  <span className="font-sans font-light italic text-primary dark:text-accent">বৈশ্বিক মেধার</span> <br />
                  অনন্য সমন্বয়।
                </>
              )}
            </h1>

            <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 font-sans font-light leading-relaxed mt-8 max-w-xl border-l border-neutral-200 dark:border-neutral-800 pl-6">
              {lang === "en"
                ? "Al-Arafah crafts a sophisticated paradigm of education—seamlessly weaving elite Cambridge intellectual standards with the spiritual refinement of Quranic Tarbiyah."
                : "আল-আরাফাহ শিক্ষার এক অত্যাধুনিক রূপরেখা তৈরি করে—যেখানে কেমব্রিজের বিশ্বমানের মেধা-চর্চার সাথে পবিত্র কুরআনের তারবিয়াহর আধ্যাত্মিক বিশুদ্ধতা সুনিপুণভাবে মিশে যায়।"}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4  sm:gap-x-8 gap-y-4 mt-12 text-[8px] xs:text-[10px] sm:text-xs font-sans font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Cambridge UK</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Hifzul Quran</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Future Tech</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full h-[450px] md:h-[520px] mt-10 lg:mt-0 select-none">
            
            <div className="absolute top-12 left-6 w-[65%] h-[75%] rounded-[2rem] overflow-hidden border border-neutral-200/40 dark:border-neutral-800/40 shadow-xl group/main transition-all duration-700 hover:scale-[1.01] hover:-translate-y-1">
              <Image
                src="/about/about-hero-1.jpg" 
                alt="Al-Arafah Culture"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover/main:scale-105"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-neutral-950/10 dark:bg-neutral-950/30 transition-colors duration-500 group-hover/main:bg-transparent" />
            </div>

            <div className="absolute top-0 right-0 w-[42%] h-[68%] rounded-[2.5rem] overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60 shadow-2xl group/secondary transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 z-20">
              <div className="absolute inset-0 p-px bg-gradient-to-b from-white/20 to-transparent rounded-[2.5rem] pointer-events-none z-30" />
              <Image
                src="/about/about-hero-2.jpg" 
                alt="Cambridge Excellence"
                fill
                className="object-cover transition-transform duration-1000 group-hover/secondary:scale-105"
                sizes="30vw"
              />
              <div className="absolute inset-0 bg-neutral-950/5 dark:bg-neutral-950/20" />
            </div>

            <div className="absolute bottom-0 left-[40%] w-[35%] h-[35%] rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 shadow-lg group/tertiary transition-all duration-700 hover:scale-[1.05] hover:rotate-1 z-30">
              <Image
                src="/about/about-hero-3.jpg" 
                alt="Tech & Islamic Values"
                fill
                className="object-cover transition-transform duration-1000"
                sizes="20vw"
              />
            </div>

            <div className="absolute -bottom-4 left-12 w-24 h-24 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none opacity-60" />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutHero;