"use client";

import React from "react";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";

// 🏆 প্রফেশনাল ও মডার্ন আইকন ইমপোর্ট
import { FiBookOpen, FiAward, FiCpu } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";

const CorePillars = () => {
  const { lang } = useLanguage();

  // 📊 ৩টি পিলারের রিয়েল ডাটা অবজেক্ট
  const pillars = [
    {
      icon: <FiAward className="w-6 h-6" />,
      title: {
        en: "Cambridge Curriculum",
        bn: "কেমব্রিজ কারিকুলাম",
      },
      desc: {
        en: "World-class academic excellence delivering global standards of critical thinking, deep analytical skills, and internationally recognized qualification.",
        bn: "বিশ্বমানের পাঠ্যক্রম যা শিক্ষার্থীদের মাঝে জটিল চিন্তাভাবনা, গভীর বিশ্লেষণাত্মক দক্ষতা এবং আন্তর্জাতিকভাবে স্বীকৃত যোগ্যতার বিকাশ ঘটায়।",
      },
      tag: "ACADEMIC",
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: {
        en: "Hifzul Quran & Tarbiyah",
        bn: "হিফজুল কুরআন ও তারবিয়াহ",
      },
      desc: {
        en: "Nurturing deep spiritual guidance through structured Quran memorization alongside core moral values and authentic prophetic character building.",
        bn: "পবিত্র কুরআন হিফজের পাশাপাশি ইসলামিক নৈতিক মূল্যবোধ এবং খাঁটি সুন্নাহর আলোকে চারিত্রিক ও আধ্যাত্মিক পরিশুদ্ধি গঠন।",
      },
      tag: "SPIRITUAL",
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: {
        en: "Future Tech & Robotics",
        bn: "ফিউচার টেক ও রোবোটিক্স",
      },
      desc: {
        en: "Empowering young minds with next-generation coding, robotics, STEM integration, and advanced problem-solving tools for tomorrow.",
        bn: "আগামী দিনের চ্যালেঞ্জ মোকাবেলায় নতুন প্রজন্মকে কোডিং, রোবোটিক্স, স্টেম (STEM) শিক্ষা এবং উন্নত সমস্যা-সমাধানের দক্ষতায় দক্ষ করে তোলা।",
      },
      tag: "INNOVATION",
    },
  ];

  return (
    <section
      id="core-pillars"
      className="relative w-full py-20 overflow-hidden transition-colors md:py-28 bg-subtle"
    >

      <Container>
        <SectionHeader
          badge={
            lang === "en" ? "OUR THREE PILLARS" : "আমাদের তিনটি মূল স্তম্ভ"
          }
          title={
            lang === "en"
              ? "The Foundation of Excellence"
              : "অনন্য শ্রেষ্ঠত্বের মজবুত বুনিয়াদ"
          }
          center={true}
        />

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between p-4 overflow-hidden transition-all duration-300 border shadow-xs md:p-6 xl:p-8 group rounded-xl md:rounded-2xl xl:rounded-3xl dark:bg-background border-neutral-400 dark:border-neutral-600 hover:shadow-xl hover:bg-linear-to-br from-accent/30 to-transparent "
            >

              <div>
                <span className="text-[10px] font-sans font-bold tracking-widest text-neutral-400 dark:text-neutral-500 block mb-6">
                  {pillar.tag}
                </span>

                <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-neutral-200/60 dark:border-neutral-800/60 text-primary dark:text-accent group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-background group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/10">
                  {pillar.icon}
                </div>

                <h3 className="mt-6 font-serif text-xl font-bold tracking-tight transition-colors duration-300 md:text-2xl text-neutral-900 dark:text-neutral-100 group-hover:text-primary dark:group-hover:text-accent">
                  {lang === "en" ? pillar.title.en : pillar.title.bn}
                </h3>

                <p className="mt-4 font-sans text-sm font-light leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {lang === "en" ? pillar.desc.en : pillar.desc.bn}
                </p>
              </div>

              <div className="w-0 h-[2px] bg-primary dark:bg-accent absolute bottom-0 left-0 group-hover:w-full duration-300 transition-all  rounded-full" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CorePillars;
