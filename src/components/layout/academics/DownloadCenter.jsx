"use client";

import React from "react";
import { FiDownload, FiFileText } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

const downloads = [
  { titleEn: "Class Routine", titleBn: "ক্লাস রুটিন", size: "2.4 MB" },
  {
    titleEn: "Academic Calendar",
    titleBn: "একাডেমিক ক্যালেন্ডার",
    size: "1.2 MB",
  },
  { titleEn: "Admission Form", titleBn: "ভর্তি ফরম", size: "800 KB" },
  { titleEn: "Rules & Policies", titleBn: "নিয়মাবলী", size: "1.5 MB" },
];

export default function DownloadCenter() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title={lang === "en" ? "Download Center" : "ডাউনলোড সেন্টার"}
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {downloads.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col justify-between hover:border-primary transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <FiFileText size={20} />
                </div>
                <h3 className="font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                  {lang === "en" ? item.titleEn : item.titleBn}
                </h3>
                <p className="text-xs text-neutral-400">{item.size}</p>
              </div>

              <button className="mt-6 flex items-center gap-2 text-sm font-bold text-primary group-hover:underline">
                <FiDownload size={16} />
                {lang === "en" ? "Download" : "ডাউনলোড"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
