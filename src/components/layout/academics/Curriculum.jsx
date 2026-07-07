"use client";

import React from "react";
import { FiBookOpen, FiAward, FiBook, FiBriefcase } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

const curriculum = [
  {
    stage: "Foundation",
    titleEn: "Play to KG",
    titleBn: "প্লে থেকে কেজি",
    icon: <FiBookOpen />,
    descEn: "Focus on early social skills, basic literacy, and numeracy.",
    descBn: "সামাজিক দক্ষতা, প্রাথমিক ভাষা ও গণিত শিক্ষার ভিত্তি।",
  },
  {
    stage: "Primary",
    titleEn: "Class 1 to 5",
    titleBn: "১ম থেকে ৫ম শ্রেণি",
    icon: <FiAward />,
    descEn:
      "NCTB based curriculum with emphasis on language and foundational values.",
    descBn: "এনসিটিবি কারিকুলাম ও মৌলিক শিখন দক্ষতার সমন্বয়।",
  },
  {
    stage: "Secondary",
    titleEn: "Class 6 to 10",
    titleBn: "৬ষ্ঠ থেকে ১০ম শ্রেণি",
    icon: <FiBook />,
    descEn:
      "Science, Humanities, and Business Studies with vocational training.",
    descBn: "বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা শাখা ও বৃত্তিমূলক প্রশিক্ষণ।",
  },
  {
    stage: "College",
    titleEn: "Class 11 to 12",
    titleBn: "একাদশ ও দ্বাদশ শ্রেণি",
    icon: <FiBriefcase />,
    descEn:
      "Preparation for Higher Education with stream-based specialized classes.",
    descBn: "উচ্চশিক্ষার প্রস্তুতি ও শাখাভিত্তিক বিশেষায়িত পাঠদান।",
  },
];

export default function Curriculum() {
  const { lang } = useLanguage();

  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {curriculum.map((item, idx) => (
          <div
            key={idx}
            className="group relative p-4 md:p-5 bg-white dark:bg-neutral-900 border border-primary dark:border-neutral-800 rounded-3xl hover:border-primary transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              {item.icon}
            </div>

            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
              {item.stage}
            </span>
            <h3 className="text-lg font-bold mt-1 mb-3 text-neutral-800 dark:text-neutral-100">
              {lang === "en" ? item.titleEn : item.titleBn}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              {lang === "en" ? item.descEn : item.descBn}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
