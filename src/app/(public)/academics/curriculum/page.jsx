"use client";

import React from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiBook, FiClock, FiUsers, FiAward, FiInfo, FiGlobe } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext"; // এটি নিশ্চিত করুন

const curriculum = [
  {
    stage: "Foundation",
    titleEn: "Play to KG",
    titleBn: "প্লে থেকে কেজি",
    time: "8:00 AM - 12:30 PM",
    classSizeEn: "20 Students/Class",
    classSizeBn: "২০ জন/ক্লাস",
    subjectsEn: ["Islamic Manners (Adab)", "Bengali & English Literacy", "Foundational Math", "Arts & Creativity"],
    subjectsBn: ["ইসলামিক আদব", "বাংলা ও ইংরেজি", "প্রাথমিক গণিত", "আর্টস ও ক্রাফটস"],
    gradingEn: "Continuous Assessment (No formal exams)",
    gradingBn: "ধারাবাহিক মূল্যায়ন (কোনো আনুষ্ঠানিক পরীক্ষা নেই)",
    methodEn: "Play-based learning focusing on psychological growth and socialization.",
    methodBn: "খেলাধুলার মাধ্যমে শিক্ষা প্রদান, যা মানসিক বৃদ্ধি ও সামাজিকীকরণকে গুরুত্ব দেয়।"
  },
  {
    stage: "Primary",
    titleEn: "Class 1 to 5",
    titleBn: "১ম থেকে ৫ম শ্রেণি",
    time: "8:00 AM - 2:00 PM",
    classSizeEn: "30 Students/Class",
    classSizeBn: "৩০ জন/ক্লাস",
    subjectsEn: ["NCTB Core Subjects", "Quran Tilawat & Tajweed", "Physical Education", "General Knowledge"],
    subjectsBn: ["এনসিটিবি কারিকুলাম", "কুরআন তিলাওয়াত ও তাজবীদ", "শারীরিক শিক্ষা", "সাধারণ জ্ঞান"],
    gradingEn: "Termly exams with project-based evaluation",
    gradingBn: "টার্মভিত্তিক পরীক্ষা ও প্রজেক্ট-ভিত্তিক মূল্যায়ন",
    methodEn: "Activity-based learning combined with moral character formation.",
    methodBn: "কার্যভিত্তিক শিক্ষা এবং চারিত্রিক গঠনের সমন্বয়।"
  },
  {
    stage: "Secondary",
    titleEn: "Class 6 to 10",
    titleBn: "৬ষ্ঠ থেকে ১০ম শ্রেণি",
    time: "8:00 AM - 3:00 PM",
    classSizeEn: "35 Students/Class",
    classSizeBn: "৩৫ জন/ক্লাস",
    subjectsEn: ["NCTB National Curriculum", "Advanced Arabic", "Science & ICT", "Mathematics & Higher Math"],
    subjectsBn: ["এনসিটিবি কারিকুলাম", "উন্নত আরবি", "বিজ্ঞান ও আইসিটি", "গণিত ও উচ্চতর গণিত"],
    gradingEn: "Formal CT, Half-Yearly, and Final Board Preparation",
    gradingBn: "সিটি পরীক্ষা, অর্ধবার্ষিক ও চূড়ান্ত বোর্ড প্রস্তুতি",
    methodEn: "Academic excellence with intensive exam preparation and moral discipline.",
    methodBn: "গভীর একাডেমিক প্রস্তুতি এবং নৈতিক শৃঙ্খলার মাধ্যমে শ্রেষ্ঠত্ব অর্জন।"
  }
];

export default function CurriculumPage() {
  // context থেকে lang এবং setLang বের করে আনলাম
  const { lang, setLang } = useLanguage(); 

  return (
    <main className="py-12 md:py-14 xl:py-16 bg-background">
      <Container>
        <SectionHeader 
          badge={lang === "en" ? "ACADEMICS" : "একাডেমিক"} 
          title={lang === "en" ? "Detailed Curriculum Overview" : "বিস্তারিত কারিকুলাম"} 
          center={true} 
        />
        
        <div className="max-w-4xl mx-auto mt-12 space-y-10">
          {curriculum.map((item, idx) => (
            <div key={idx} className="bg-card border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 md:p-6 xl:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">{item.stage}</span>
                  <h2 className="text-3xl font-bold mt-1">{lang === "en" ? item.titleEn : item.titleBn}</h2>
                </div>
                <div className="flex flex-col xs:flex-row gap-2 xs:gap-x-6 text-sm text-neutral-500">
                  <div className="flex items-center gap-2"><FiClock /> {item.time}</div>
                  <div className="flex items-center gap-2"><FiUsers /> {lang === "en" ? item.classSizeEn : item.classSizeBn}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <FiBook className="text-primary" /> {lang === "en" ? "Core Subjects" : "বিষয়সমূহ"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(lang === "en" ? item.subjectsEn : item.subjectsBn).map((sub, i) => (
                      <span key={i} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-400">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <FiAward className="text-primary" /> {lang === "en" ? "Evaluation" : "মূল্যায়ন"}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{lang === "en" ? item.gradingEn : item.gradingBn}</p>
                  
                  <h4 className="font-bold text-neutral-800 dark:text-neutral-100 flex items-center gap-2 mt-4">
                    <FiInfo className="text-primary" /> {lang === "en" ? "Teaching Style" : "পদ্ধতি"}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">{lang === "en" ? item.methodEn : item.methodBn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}