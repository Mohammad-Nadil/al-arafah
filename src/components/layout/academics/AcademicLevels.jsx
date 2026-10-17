
"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  FiSmile,
  FiBook,
  FiAward,
  FiBookmark,
} from "react-icons/fi";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";

export default function AcademicLevels() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";

  const levels = [
    {
      title: {
        en: "Early Years",
        bn: "শিশুশিক্ষা",
      },
      classes: {
        en: "Play Group - KG-II",
        bn: "প্লে গ্রুপ - কেজি-২",
      },
      description: {
        en: "A nurturing start to education, helping young learners develop communication, confidence, and essential early-learning skills.",
        bn: "যত্নশীল পরিবেশে শিশুদের শিক্ষার সূচনা, যেখানে যোগাযোগ, আত্মবিশ্বাস ও প্রাথমিক শেখার দক্ষতা বিকাশে গুরুত্ব দেওয়া হয়।",
      },
      icon: <FiSmile />,
      accentColor: "from-amber-500/20 to-orange-500/20",
      borderColor: "group-hover:border-amber-400/50",
    },
    {
      title: {
        en: "Primary Education",
        bn: "প্রাথমিক শিক্ষা",
      },
      classes: {
        en: "STD-I - STD-X",
        bn: "স্ট্যান্ডার্ড ১ - স্ট্যান্ডার্ড ১০",
      },
      description: {
        en: "Building a strong academic foundation through English-medium learning, supported by Islamic education and moral development.",
        bn: "ইংরেজি মাধ্যমের পড়াশোনার পাশাপাশি ইসলামী শিক্ষা ও নৈতিক বিকাশের মাধ্যমে শিক্ষার শক্ত ভিত্তি গড়ে তোলা।",
      },
      icon: <FiBook />,
      accentColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "group-hover:border-blue-400/50",
    },
    {
      title: {
        en: "Secondary Education",
        bn: "মাধ্যমিক শিক্ষা",
      },
      classes: {
        en: "A' Level - O' Level",
        bn: "এ' লেভেল - ও' লেভেল",
      },
      description: {
        en: "Preparing students for further academic progress through English-medium studies, Islamic education, and character development.",
        bn: "ইংরেজি মাধ্যমের পড়াশোনা, ইসলামী শিক্ষা ও চারিত্রিক বিকাশের মাধ্যমে শিক্ষার্থীদের পরবর্তী শিক্ষাস্তরের জন্য প্রস্তুত করা।",
      },
      icon: <FiAward />,
      accentColor: "from-emerald-500/20 to-teal-500/20",
      borderColor: "group-hover:border-emerald-400/50",
    },
    {
      title: {
        en: "Hifzul Quran Madrasah",
        bn: "হিফজুল কুরআন মাদরাসা",
      },
      classes: {
        en: "Maktab -  Hifz",
        bn: "মাকতাব - হিফজ",
      },
      description: {
        en: "The junior section is designed for children aged 4–6, with a separate full-time Hifz programme for eligible students aged 7–10.",
        bn: "৪–৬ বছর বয়সী শিশুদের জন্য জুনিয়র বিভাগ এবং উপযুক্ত ৭–১০ বছর বয়সী শিক্ষার্থীদের জন্য পৃথক পূর্ণকালীন হিফজ কার্যক্রম রয়েছে।",
      },
      icon: <FiBookmark />,
      accentColor: "from-purple-500/20 to-indigo-500/20",
      borderColor: "group-hover:border-purple-400/50",
    },
  ];

  return (
    <section
      id="programs"
      className="relative w-full overflow-hidden border-t border-shield/30 bg-subtle/40 py-16 md:py-24"
    >
      <Container>
        <SectionHeader
          badge={isEnglish ? "Academic Structure" : "শিক্ষাব্যবস্থা"}
          title={
            isEnglish
              ? "Explore Our Academic Levels"
              : "আমাদের শিক্ষার স্তরগুলো"
          }
          highlightWord={
            isEnglish ? "Academic Levels" : "শিক্ষার স্তরগুলো"
          }
          description={
            isEnglish
              ? "Explore our English-medium academic pathway alongside Islamic education and dedicated Hifzul Quran programmes."
              : "ইংরেজি মাধ্যমের সাধারণ শিক্ষার পাশাপাশি ইসলামী শিক্ষা ও হিফজুল কুরআন কার্যক্রম সম্পর্কে জানুন।"
          }
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {levels.map((level) => (
            <article
              key={level.title.en}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-shield/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${level.borderColor}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-linear-to-br ${level.accentColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-subtle text-xl text-primary shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                    {level.icon}
                  </div>

                  <span className="rounded-full bg-shield/40 px-3 py-1.5 text-center font-sans text-[10px] font-bold leading-relaxed tracking-wide text-navy">
                    {level.classes[lang] || level.classes.en}
                  </span>
                </div>

                <h3 className="mb-3 font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {level.title[lang] || level.title.en}
                </h3>

                <p className="font-sans text-sm font-light leading-relaxed text-gray-600">
                  {level.description[lang] || level.description.en}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
