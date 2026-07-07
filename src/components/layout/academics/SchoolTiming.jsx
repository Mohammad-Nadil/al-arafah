"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/public/Container";

const shiftData = [
  {
    shiftEn: "Morning Shift",
    shiftBn: "প্রভাতী শাখা",
    timeEn: "08:00 AM - 12:00 PM",
    timeBn: "সকাল ০৮:০০ - দুপুর ১২:০০",
  },
  {
    shiftEn: "Day Shift",
    shiftBn: "দিবা শাখা",
    timeEn: "08:00 AM - 03:30 PM",
    timeBn: "সকাল ০৮:০০ - বিকাল ০৩:৩০",
  },
];

export default function SchoolTiming() {
  const { lang } = useLanguage();

  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          title={lang === "en" ? "Daily Shift Timing" : "প্রতিদিনের সময়সূচী"}
          center={true}
        />
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          {shiftData.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 p-10 bg-white dark:bg-neutral-900 border border-primary dark:border-neutral-800 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-colors pointer-events-none" />

              <h3 className="text-sm font-bold text-primary uppercase mb-4">
                {lang === "en" ? item.shiftEn : item.shiftBn}
              </h3>

              <div className="text-3xl md:text-4xl font-extrabold text-neutral-800 dark:text-neutral-100 tracking-tight">
                {lang === "en" ? item.timeEn : item.timeBn}
              </div>

              <p className="mt-4 text-neutral-500 text-sm">
                {lang === "en"
                  ? "Standard operational hours"
                  : "নিয়মিত কার্যক্রমের সময়"}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
