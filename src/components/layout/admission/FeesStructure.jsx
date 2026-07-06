"use client";

import React, { useState } from "react";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiInfo } from "react-icons/fi";

const cleanData = {
  header: {
    badgeEn: "FEES STRUCTURE",
    badgeBn: "বেতন ও ফিস",
    titleEn: "Tuition & Admission Fees Chart",
    titleBn: "ভর্তি ও মাসিক বেতনের চার্ট",
  },
  tabs: {
    en: [
      { id: "pg_kg", label: "PG - KG II" },
      { id: "class_1_3", label: "Class I - III" },
      { id: "class_4_7", label: "Class IV - VII" },
      { id: "class_8_10", label: "Class VIII - X" }
    ],
    bn: [
      { id: "pg_kg", label: "প্লে - কেজি ২" },
      { id: "class_1_3", label: "১ম - ৩য় শ্রেণী" },
      { id: "class_4_7", label: "৪র্থ - ৭ম শ্রেণী" },
      { id: "class_8_10", label: "৮ম - ১০ম শ্রেণী" }
    ],
  },
  labels: {
    sessionEn: "Session Fee",
    sessionBn: "সেশন ফি",
    tuitionEn: "Tuition Fee",
    tuitionBn: "মাসিক বেতন",
    examEn: "Exam Fee",
    examBn: "পরীক্ষা ফি",
    othersEn: "Others",
    othersBn: "অন্যান্য",
    totalEn: "Total",
    totalBn: "মোট"
  },
  note: {
    en: "All fees are non-refundable. Monthly tuition fees must be cleared within the 10th of every month.",
    bn: "সকল ফি অফেরতযোগ্য। প্রতি মাসের ১০ তারিখের মধ্যে মাসিক বেতন পরিশোধ করতে হবে।",
  },
  feesData: {
    pg_kg: [
      {
        id: 1,
        classEn: "Playgroup & Nursery",
        classBn: "প্লেগ্রুপ ও নার্সারি",
        sessionEn: "৳6,000",
        sessionBn: "৳৬,০০০",
        tuitionEn: "৳3,500",
        tuitionBn: "৳৩,৫০০",
        examEn: "৳1,500",
        examBn: "৳১,৫০০",
        othersEn: "৳1,000",
        othersBn: "৳১,০০০",
        totalEn: "৳12,000",
        totalBn: "৳১২,০০০"
      },
      {
        id: 2,
        classEn: "KG I & KG II",
        classBn: "কেজি ১ ও কেজি ২",
        sessionEn: "৳6,500",
        sessionBn: "৳৬,৫০০",
        tuitionEn: "৳4,000",
        tuitionBn: "৳৪,০০০",
        examEn: "৳1,500",
        examBn: "৳১,৫০০",
        othersEn: "৳1,000",
        othersBn: "৳১,০০০",
        totalEn: "৳13,000",
        totalBn: "৳১৩,০০০"
      }
    ],
    class_1_3: [
      {
        id: 1,
        classEn: "Class I - III",
        classBn: "১ম - ৩য় শ্রেণী",
        sessionEn: "৳7,000",
        sessionBn: "৳৭,০০০",
        tuitionEn: "৳4,500",
        tuitionBn: "৳৪,৫০০",
        examEn: "৳2,000",
        examBn: "৳২,০০০",
        othersEn: "৳1,500",
        othersBn: "৳১,৫০০",
        totalEn: "৳15,000",
        totalBn: "৳১৫,০০০"
      }
    ],
    class_4_7: [
      {
        id: 1,
        classEn: "Class IV - VII",
        classBn: "৪র্থ - ৭ম শ্রেণী",
        sessionEn: "৳8,000",
        sessionBn: "৳৮,০০০",
        tuitionEn: "৳5,000",
        tuitionBn: "৳৫,০০০",
        examEn: "৳2,000",
        examBn: "৳২,০০০",
        othersEn: "৳2,000",
        othersBn: "৳২,০০০",
        totalEn: "৳17,000",
        totalBn: "৳১৭,০০০"
      }
    ],
    class_8_10: [
      {
        id: 1,
        classEn: "Class VIII - IX",
        classBn: "৮ম - ৯ম শ্রেণী",
        sessionEn: "৳9,000",
        sessionBn: "৳৯,০০০",
        tuitionEn: "৳6,000",
        tuitionBn: "৳৬,০০০",
        examEn: "৳2,500",
        examBn: "৳২,৫০০",
        othersEn: "৳2,500",
        othersBn: "৳২,৫০০",
        totalEn: "৳20,000",
        totalBn: "৳২০,০০০"
      },
      {
        id: 2,
        classEn: "Class X",
        classBn: "১০ম শ্রেণী",
        sessionEn: "৳9,500",
        sessionBn: "৳৯,৫০০",
        tuitionEn: "৳6,500",
        tuitionBn: "৳৬,৫০০",
        examEn: "৳3,000",
        examBn: "৳৩,০০০",
        othersEn: "৳3,000",
        othersBn: "৳৩,০০০",
        totalEn: "৳22,000",
        totalBn: "৳২২,০০০"
      }
    ]
  },
};

export default function FeesStructure() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("pg_kg");

  return (
    <section
      id="fees-structure"
      className="w-full py-16 bg-subtle dark:bg-subtle/40 text-foreground transition-colors duration-500"
    >
      <Container>
        <SectionHeader
          badge={
            lang === "en" ? cleanData.header.badgeEn : cleanData.header.badgeBn
          }
          title={
            lang === "en" ? cleanData.header.titleEn : cleanData.header.titleBn
          }
          center={true}
        />

        <div className="flex flex-wrap justify-center items-center gap-2 mt-12 bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-xl max-w-2xl mx-auto border border-neutral-200/40 dark:border-neutral-800/40">
          {(lang === "en" ? cleanData.tabs.en : cleanData.tabs.bn).map(
            (tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-30 py-2.5 text-xs font-sans font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-xs dark:bg-accent dark:text-background"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {tab.label}
              </button>
            ),
          )}
        </div>

        {/* 📱 Mobile Layout: Beautiful Stacked Cards (Hidden on MD up) */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:hidden">
          {cleanData.feesData[activeTab].map((row) => (
            <div 
              key={row.id} 
              className="border border-neutral-300 dark:border-neutral-700 rounded-2xl bg-background overflow-hidden shadow-xs"
            >
              <div className="bg-primary/10 dark:bg-neutral-900 px-5 py-4 border-b border-neutral-300 dark:border-neutral-700">
                <h4 className="font-sans font-bold text-base text-neutral-900 dark:text-neutral-100">
                  {lang === "en" ? row.classEn : row.classBn}
                </h4>
              </div>
              
              <div className="p-5 space-y-3 text-sm font-sans">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 dark:text-neutral-400 font-light">{lang === "en" ? cleanData.labels.sessionEn : cleanData.labels.sessionBn}</span>
                  <span className="text-neutral-800 dark:text-neutral-200 font-medium">{lang === "en" ? row.sessionEn : row.sessionBn}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 dark:text-neutral-400 font-light">{lang === "en" ? cleanData.labels.tuitionEn : cleanData.labels.tuitionBn}</span>
                  <span className="text-neutral-800 dark:text-neutral-200 font-medium">{lang === "en" ? row.tuitionEn : row.tuitionBn}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 dark:text-neutral-400 font-light">{lang === "en" ? cleanData.labels.examEn : cleanData.labels.examBn}</span>
                  <span className="text-neutral-800 dark:text-neutral-200 font-medium">{lang === "en" ? row.examEn : row.examBn}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 dark:text-neutral-400 font-light">{lang === "en" ? cleanData.labels.othersEn : cleanData.labels.othersBn}</span>
                  <span className="text-neutral-800 dark:text-neutral-200 font-medium">{lang === "en" ? row.othersEn : row.othersBn}</span>
                </div>
                <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
                  <span className="text-neutral-900 dark:text-neutral-100 font-bold">{lang === "en" ? cleanData.labels.totalEn : cleanData.labels.totalBn}</span>
                  <span className="text-primary dark:text-accent font-bold text-base">{lang === "en" ? row.totalEn : row.totalBn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 💻 Desktop Layout: Premium Clean Table (Hidden on Mobile) */}
        <div className="hidden md:block mt-8 overflow-hidden border border-neutral-300 dark:border-neutral-700 rounded-2xl bg-background shadow-xs max-w-4xl mx-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary/10 dark:bg-neutral-900 text-xs font-sans font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 border-b border-neutral-300 dark:border-neutral-700">
                <th className="px-6 py-5">
                  {lang === "en" ? "Class" : "শ্রেণী"}
                </th>
                <th className="px-6 py-5">
                  {lang === "en" ? cleanData.labels.sessionEn : cleanData.labels.sessionBn}
                </th>
                <th className="px-6 py-5">
                  {lang === "en" ? cleanData.labels.tuitionEn : cleanData.labels.tuitionBn}
                </th>
                <th className="px-6 py-5">
                  {lang === "en" ? cleanData.labels.examEn : cleanData.labels.examBn}
                </th>
                <th className="px-6 py-5">
                  {lang === "en" ? cleanData.labels.othersEn : cleanData.labels.othersBn}
                </th>
                <th className="px-6 py-5">
                  {lang === "en" ? cleanData.labels.totalEn : cleanData.labels.totalBn}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-300 dark:divide-neutral-700 text-sm font-sans font-light text-neutral-700 dark:text-neutral-300">
              {cleanData.feesData[activeTab].map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/20 transition-colors"
                >
                  <td className="px-6 py-5 font-medium text-neutral-900 dark:text-neutral-100">
                    {lang === "en" ? row.classEn : row.classBn}
                  </td>
                  <td className="px-6 py-5 text-neutral-600 dark:text-neutral-400">
                    {lang === "en" ? row.sessionEn : row.sessionBn}
                  </td>
                  <td className="px-6 py-5 text-neutral-600 dark:text-neutral-400">
                    {lang === "en" ? row.tuitionEn : row.tuitionBn}
                  </td>
                  <td className="px-6 py-5 text-neutral-600 dark:text-neutral-400">
                    {lang === "en" ? row.examEn : row.examBn}
                  </td>
                  <td className="px-6 py-5 text-neutral-600 dark:text-neutral-400">
                    {lang === "en" ? row.othersEn : row.othersBn}
                  </td>
                  <td className="px-6 py-5 font-semibold text-primary dark:text-accent">
                    {lang === "en" ? row.totalEn : row.totalBn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-start gap-3 p-4 bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 rounded-xl max-w-4xl mx-auto mt-6">
          <FiInfo className="w-5 h-5 text-primary dark:text-accent shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm font-sans font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
            {lang === "en" ? cleanData.note.en : cleanData.note.bn}
          </p>
        </div>
      </Container>
    </section>
  );
}