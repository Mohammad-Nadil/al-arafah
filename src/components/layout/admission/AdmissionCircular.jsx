"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiCheckCircle, FiAlertCircle, FiInfo } from "react-icons/fi";

const cleanData = {
  header: {
    badgeEn: "ADMISSION NOTICE",
    badgeBn: "ভর্তি বিজ্ঞপ্তি",
    titleEn: "Admission Circular 2026 - 2027",
    titleBn: "ভর্তি বিজ্ঞপ্তি ২০২৬ - ২০২৭",
  },
  imageSrc: "/banner/banner1.jpg",
  infoCards: [
    {
      id: 1,
      icon: "info",
      titleEn: "Academic Session",
      titleBn: "শিক্ষাবর্ষ",
      valueEn: "2026 - 2027",
      valueBn: "২০২৬ - ২০২৭",
    },
    {
      id: 2,
      icon: "check",
      titleEn: "Curriculum",
      titleBn: "কারিকুলাম",
      valueEn: "Cambridge & National (English Version)",
      valueBn: "কেমব্রিজ ও জাতীয় (ইংলিশ ভার্সন)",
    },
    {
      id: 3,
      icon: "alert",
      titleEn: "Medium",
      titleBn: "মাধ্যম",
      valueEn: "Pure English Medium",
      valueBn: "সম্পূর্ণ ইংলিশ মিডিয়াম",
    }
  ],
  eligibility: {
    titleEn: "Age Eligibility & Criteria",
    titleBn: "বয়সের যোগ্যতা ও শর্তাবলী",
    classes: [
      { id: 1, nameEn: "Playgroup", nameBn: "প্লেগ্রুপ", ageEn: "3.5+ Years", ageBn: "৩.৫+ বছর" },
      { id: 2, nameEn: "Nursery", nameBn: "নার্সারি", ageEn: "4.5+ Years", ageBn: "৪.৫+ বছর" },
      { id: 3, nameEn: "Kindergarten", nameBn: "কেজি", ageEn: "5.5+ Years", ageBn: "৫.৫+ বছর" },
      { id: 4, nameEn: "Class 1 - 5", nameBn: "১ম - ৫ম শ্রেণী", ageEn: "6.5+ Years / Transfer", ageBn: "৬.৫+ বছর / টিসি" },
      { id: 5, nameEn: "Class 6 - 9", nameBn: "৬ষ্ঠ - ৯ম শ্রেণী", ageEn: "Transfer Certificate", ageBn: "ছাড়পত্র ও পূর্ববর্তী রেজাল্ট" },
    ]
  },
  rules: {
    titleEn: "General Rules & Regulations",
    titleBn: "সাধারণ নিয়ম ও নীতিমালা",
    items: [
      { id: 1, en: "Students must strictly follow Islamic moral codes and uniform dress guidelines.", bn: "শিক্ষার্থীদের অবশ্যই ইসলামিক নৈতিক কোড এবং নির্ধারিত ইউনিফর্ম বিধি মেনে চলতে হবে।" },
      { id: 2, en: "Admission is subject to clearing the written assessment and viva oral interview.", bn: "লিখিত মূল্যায়ন পরীক্ষা এবং মৌখিক সাক্ষাৎকারে উত্তীর্ণ হওয়ার ওপর ভর্তি নির্ভর করবে।" },
      { id: 3, en: "90% attendance is mandatory for all students to qualify for final terminal exams.", bn: "চূড়ান্ত পরীক্ষায় অংশগ্রহণের জন্য সকল শিক্ষার্থীর ৯০% উপস্থিতি বাধ্যতামুলক।" },
      { id: 4, en: "Parents must attend scheduled monthly parent-teacher meetings (PTM).", bn: "অভিভাবকদের অবশ্যই নির্ধারিত মাসিক অভিভাবক-শিক্ষক সভায় (PTM) উপস্থিত থাকতে হবে।" }
    ]
  }
};

export default function AdmissionCircular() {
  const { lang } = useLanguage();

  return (
    <section id="admission-circular" className="w-full py-12 md:py-14 xl:py-16 bg-background text-foreground transition-colors duration-500">
      <Container>
        <SectionHeader
          badge={lang === "en" ? cleanData.header.badgeEn : cleanData.header.badgeBn}
          title={lang === "en" ? cleanData.header.titleEn : cleanData.header.titleBn}
          center={true}
        />

        <div className="relative w-full h-64 md:h-96 mt-12 rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={cleanData.imageSrc}
            alt={cleanData.header.titleEn}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {cleanData.infoCards.map((card) => (
            <div key={card.id} className="flex items-center gap-4 p-3 sm:p-5 bg-background border border-neutral-400 dark:border-neutral-600 rounded-xl shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center shrink-0">
                {card.icon === "info" && <FiInfo className="w-5 h-5 text-primary dark:text-accent" />}
                {card.icon === "check" && <FiCheckCircle className="w-5 h-5 text-primary dark:text-accent" />}
                {card.icon === "alert" && <FiAlertCircle className="w-5 h-5 text-primary dark:text-accent" />}
              </div>
              <div>
                <h4 className="text-xs font-sans font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                  {lang === "en" ? card.titleEn : card.titleBn}
                </h4>
                <p className="text-sm md:text-base font-sans font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">
                  {lang === "en" ? card.valueEn : card.valueBn}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="border border-neutral-400 dark:border-neutral-600 rounded-2xl p-3 md:p-8 bg-background">
            <h3 className="font-serif text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 border-l-4 border-primary dark:border-accent pl-4 mb-6">
              {lang === "en" ? cleanData.eligibility.titleEn : cleanData.eligibility.titleBn}
            </h3>
            <div className="overflow-hidden border border-neutral-200/40 dark:border-neutral-800/40 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-100 dark:bg-neutral-900 text-xs font-sans font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 border-b border-neutral-400 dark:border-neutral-600">
                    <th className="px-6 py-4">{lang === "en" ? "Class" : "শ্রেণী"}</th>
                    <th className="px-6 py-4">{lang === "en" ? "Age Requirement" : "বয়সের সময়সীমা"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200/40 dark:divide-neutral-800/40 text-sm font-sans font-light text-neutral-700 dark:text-neutral-300">
                  {cleanData.eligibility.classes.map((item) => (
                    <tr key={item.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">
                        {lang === "en" ? item.nameEn : item.nameBn}
                      </td>
                      <td className="px-6 py-4">
                        {lang === "en" ? item.ageEn : item.ageBn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border border-neutral-400 dark:border-neutral-600 rounded-2xl p-6 md:p-8 bg-background">
            <h3 className="font-serif text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 border-l-4 border-primary dark:border-accent pl-4 mb-6">
              {lang === "en" ? cleanData.rules.titleEn : cleanData.rules.titleBn}
            </h3>
            <ul className="flex flex-col gap-5">
              {cleanData.rules.items.map((rule) => (
                <li key={rule.id} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary dark:bg-accent" />
                  </div>
                  <p className="text-sm font-sans font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {lang === "en" ? rule.en : rule.bn}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}