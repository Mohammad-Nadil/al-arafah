"use client";

import React from "react";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import { FiBookOpen, FiAward, FiCpu } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";

const cleanData = {
  header: {
    badgeEn: "OUR THREE PILLARS",
    badgeBn: "আমাদের তিনটি মূল স্তম্ভ",
    titleEn: "The Foundation of Excellence",
    titleBn: "অনন্য শ্রেষ্ঠত্বের মজবুত বুনিয়াদ",
  },
  pillars: [
    {
      icon: <FiAward className="w-6 h-6" />,
      titleEn: "Cambridge Curriculum",
      titleBn: "কেমব্রিজ কারিকুলাম",
      descEn: "World-class academic excellence delivering global standards of critical thinking, deep analytical skills, and internationally recognized qualification.",
      descBn: "বিশ্বমানের পাঠ্যক্রম যা শিক্ষার্থীদের মাঝে জটিল চিন্তাভাবনা, গভীর বিশ্লেষণাত্মক দক্ষতা এবং আন্তর্জাতিকভাবে স্বীকৃত যোগ্যতার বিকাশ ঘটায়।",
      tag: "ACADEMIC",
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      titleEn: "Hifzul Quran & Tarbiyah",
      titleBn: "হিফজুল কুরআন ও তারবিয়াহ",
      descEn: "Nurturing deep spiritual guidance through structured Quran memorization alongside core moral values and authentic prophetic character building.",
      descBn: "পবিত্র কুরআন হিফজের পাশাপাশি ইসলামিক নৈতিক মূল্যবোধ এবং খাঁটি সুন্নাহর আলোকে চারিত্রিক ও আধ্যাত্মিক পরিশুদ্ধি গঠন।",
      tag: "SPIRITUAL",
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      titleEn: "Future Tech & Robotics",
      titleBn: "ফিউচার টেক ও রোবোটিক্স",
      descEn: "Empowering young minds with next-generation coding, robotics, STEM integration, and advanced problem-solving tools for tomorrow.",
      descBn: "আগামী দিনের চ্যালেঞ্জ মোকাবেলায় নতুন প্রজন্মকে কোডিং, রোবোটিক্স, স্টেম (STEM) শিক্ষা এবং উন্নত সমস্যা-সমাধানের দক্ষতায় দক্ষ করে তোলা।",
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
              className="relative flex flex-col justify-between p-4 overflow-hidden transition-all duration-300 border shadow-sm md:p-6 xl:p-8 group rounded-xl md:rounded-2xl xl:rounded-3xl bg-transparent dark:bg-background border-neutral-400 dark:border-neutral-600 hover:shadow-xl hover:bg-linear-to-br from-accent/30 to-transparent"
            >
              <div>
                <span className="text-[10px] font-sans font-bold tracking-widest text-neutral-400 dark:text-neutral-500 block mb-6">
                  {pillar.tag}
                </span>

                <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-neutral-200/60 dark:border-neutral-800/60 text-primary dark:text-accent group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-background group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/10">
                  {pillar.icon}
                </div>

                <h3 className="mt-6 font-serif text-xl font-bold tracking-tight transition-colors duration-300 md:text-2xl text-neutral-900 dark:text-neutral-100 group-hover:text-primary dark:group-hover:text-accent">
                  {lang === "en" ? pillar.titleEn : pillar.titleBn}
                </h3>

                <p className="mt-4 font-sans text-sm font-light leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {lang === "en" ? pillar.descEn : pillar.descBn}
                </p>
              </div>

              <div className="w-0 h-0.5 bg-primary dark:bg-accent absolute bottom-0 left-0 group-hover:w-full duration-300 transition-all rounded-full" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CorePillars;