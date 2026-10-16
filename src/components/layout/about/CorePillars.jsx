"use client";

import React from "react";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import { FiBookOpen, FiAward, FiCpu } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";


const cleanData = {
  header: {
    badgeEn: "OUR THREE PILLARS",
    badgeBn: "আমাদের তিনটি মূল ভিত্তি",
    titleEn: "The Foundation of Our Education",
    titleBn: "আমাদের শিক্ষার মূল ভিত্তি",
  },
  pillars: [
    {
      icon: <FiAward className="w-6 h-6" />,
      titleEn: "Modern English-Medium Education",
      titleBn: "আধুনিক ইংরেজি মাধ্যমের শিক্ষা",
      descEn:
        "Providing English-medium education from Play Group to O' Level, with a focus on academic learning, computer education, and the development of useful knowledge and skills.",
      descBn:
        "প্লে গ্রুপ থেকে ও লেভেল পর্যন্ত ইংরেজি মাধ্যমে শিক্ষার সুযোগ, পাশাপাশি কম্পিউটার শিক্ষা এবং প্রয়োজনীয় জ্ঞান ও দক্ষতা অর্জনের ওপর গুরুত্ব দেওয়া হয়।",
      tag: "ACADEMIC",
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      titleEn: "Islamic Values & Hifzul Quran",
      titleBn: "ইসলামী মূল্যবোধ ও হিফজুল কুরআন",
      descEn:
        "Integrating Islamic teachings and moral values into education, with a dedicated Hifzul Quran section to support Quran memorization and character development.",
      descBn:
        "শিক্ষার সঙ্গে ইসলামী শিক্ষা ও নৈতিক মূল্যবোধের সমন্বয় করা হয়। পাশাপাশি হিফজুল কুরআন বিভাগে কুরআন মুখস্থ করা ও উত্তম চরিত্র গঠনের সুযোগ রয়েছে।",
      tag: "ISLAMIC VALUES",
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      titleEn: "Technology & Practical Learning",
      titleBn: "প্রযুক্তি ও ব্যবহারিক শিক্ষা",
      descEn:
        "Supporting learning through computer education, separate science and computer labs, and DigiClass multimedia resources with interactive demonstrations and educational activities.",
      descBn:
        "কম্পিউটার শিক্ষা, পৃথক বিজ্ঞান ও কম্পিউটার ল্যাব এবং DigiClass-এর মাল্টিমিডিয়া উপকরণের মাধ্যমে শিক্ষার্থীদের শেখার অভিজ্ঞতাকে আরও কার্যকর করা হয়।",
      tag: "INNOVATION",
    },
  ],
};


const CorePillars = () => {
  const { lang } = useLanguage();

  return (
    <section
      id="core-pillars"
      className="relative w-full py-20 overflow-hidden transition-colors md:py-28 bg-subtle  text-foreground"
    >
      <Container>
        <SectionHeader
          badge={lang === "en" ? cleanData.header.badgeEn : cleanData.header.badgeBn}
          title={lang === "en" ? cleanData.header.titleEn : cleanData.header.titleBn}
          center={true}
        />

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3 mt-12 md:mt-16">
          {cleanData.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between p-4 overflow-hidden transition-all duration-300 border shadow-sm md:p-6  group rounded-xl md:rounded-2xl xl:rounded-3xl bg-transparent  border-neutral-400  hover:shadow-xl hover:bg-linear-to-br from-accent/30 to-transparent"
            >
              <div>
                <span className="text-[10px] font-sans font-bold tracking-widest text-neutral-400  block mb-6">
                  {pillar.tag}
                </span>

                <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-2xl bg-neutral-100  border-neutral-200/60  text-primary  group-hover:bg-neutral-900 group-hover:text-white   group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/10">
                  {pillar.icon}
                </div>

                <h3 className="mt-6 font-serif text-xl font-bold tracking-tight transition-colors duration-300 md:text-2xl text-neutral-900  group-hover:text-primary ">
                  {lang === "en" ? pillar.titleEn : pillar.titleBn}
                </h3>

                <p className="mt-4 font-sans text-sm font-light leading-relaxed text-neutral-500 ">
                  {lang === "en" ? pillar.descEn : pillar.descBn}
                </p>
              </div>

              <div className="w-0 h-0.5 bg-primary  absolute bottom-0 left-0 group-hover:w-full duration-300 transition-all rounded-full" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CorePillars;