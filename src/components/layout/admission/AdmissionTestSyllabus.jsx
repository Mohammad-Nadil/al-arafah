
"use client";

import React, { useState } from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  FiBookOpen,
  FiCheckCircle,
  FiAlertCircle,
  FiUsers,
  FiInfo,
} from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export default function AdmissionTestSyllabus() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("play");

  const content = {
    badge: {
      en: "Evaluation & Criteria",
      bn: "মূল্যায়ন ও যোগ্যতা",
    },
    title: {
      en: "Admission Test & Syllabus",
      bn: "ভর্তি পরীক্ষা ও পাঠ্যসূচি",
    },
    highlightWord: {
      en: "Syllabus",
      bn: "পাঠ্যসূচি",
    },
    description: {
      en: "Learn about admission assessments and how to confirm the applicable requirements for your child's intended level.",
      bn: "ভর্তি মূল্যায়ন সম্পর্কে জানুন এবং আপনার সন্তানের কাঙ্ক্ষিত শ্রেণির জন্য প্রযোজ্য শর্ত ও পাঠ্যসূচি নিশ্চিত করুন।",
    },
    tabs: [
      { id: "play", label: { en: "Play Group", bn: "প্লে গ্রুপ" } },
      { id: "nursery", label: { en: "Nursery - Kindergarten", bn: "নার্সারি - কিন্দারগার্টেন" } },
      { id: "primary", label: { en: "Primary (Std I - Std-X)", bn: "প্রাইমারি (স্ট্যান্ডার্ড I - স্ট্যান্ডার্ড X)" } },
    ],
    assessmentTitle: {
      en: "Admission Assessment",
      bn: "ভর্তি মূল্যায়ন",
    },
    assessmentSubtitle: {
      en: "Requirements depend on the intended level",
      bn: "কাঙ্ক্ষিত শ্রেণি অনুযায়ী শর্ত প্রযোজ্য",
    },
    assessmentDescription: {
      en: "The school prospectus mentions an admission test. Contact the school office to confirm the current assessment format, date and requirements for your child's intended level.",
      bn: "প্রতিষ্ঠানের প্রসপেক্টাসে ভর্তি পরীক্ষার কথা উল্লেখ রয়েছে। আপনার সন্তানের কাঙ্ক্ষিত শ্রেণির জন্য বর্তমান পরীক্ষার পদ্ধতি, তারিখ ও শর্ত জানতে প্রতিষ্ঠানের অফিসে যোগাযোগ করুন।",
    },
    playNoteTitle: {
      en: "Play Group Admission",
      bn: "প্লে গ্রুপে ভর্তি",
    },
    playNote: {
      en: "The available prospectus information does not confirm whether Play Group admission requires a written test or an oral interaction. Please check the current procedure with the school.",
      bn: "প্রাপ্ত প্রসপেক্টাসের তথ্যে প্লে গ্রুপে লিখিত পরীক্ষা নাকি মৌখিক কথোপকথনের মাধ্যমে ভর্তি নেওয়া হয়, তা নিশ্চিত করা নেই। বর্তমান পদ্ধতি প্রতিষ্ঠানের কাছ থেকে জেনে নিন।",
    },
    syllabusTitle: {
      en: "Class-wise Syllabus",
      bn: "শ্রেণিভিত্তিক পাঠ্যসূচি",
    },
    syllabusDescription: {
      en: "The official admission-test syllabus for each class has not been confirmed in the available prospectus information.",
      bn: "প্রাপ্ত প্রসপেক্টাসের তথ্যে প্রতিটি শ্রেণির ভর্তি পরীক্ষার নির্দিষ্ট পাঠ্যসূচি নিশ্চিত করা নেই।",
    },
    confirmTitle: {
      en: "What to Confirm with the School",
      bn: "প্রতিষ্ঠান থেকে যে তথ্যগুলো জেনে নেবে",
    },
    confirmItems: [
      {
        en: "Subjects and syllabus for the intended class",
        bn: "কাঙ্ক্ষিত শ্রেণির বিষয় ও পাঠ্যসূচি",
      },
      {
        en: "Assessment format and examination date",
        bn: "পরীক্ষার পদ্ধতি ও তারিখ",
      },
      {
        en: "Required documents and admission instructions",
        bn: "প্রয়োজনীয় কাগজপত্র ও ভর্তি-সংক্রান্ত নির্দেশনা",
      },
    ],
    footerNote: {
      en: "For the latest admission-test information, contact Al-Arafah Islamic International School & College directly.",
      bn: "ভর্তি পরীক্ষা সম্পর্কে সর্বশেষ তথ্যের জন্য সরাসরি আল-আরাফাহ ইসলামিক ইন্টাঃ স্কুল এন্ড কলেজে যোগাযোগ করুন।",
    },
  };

  const t = (key) => content[key][lang] || content[key].en;

  const activeTabLabel =
    content.tabs.find((tab) => tab.id === activeTab)?.label[lang] ||
    content.tabs[0].label.en;

  return (
    <section
      id="test"
      className="relative w-full border-b border-shield/40 bg-background py-16 md:py-24"
    >
      <Container>
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          highlightWord={t("highlightWord")}
          description={t("description")}
          align="center"
        />

        {/* Level Tabs */}
        <div className="no-scrollbar mb-8 flex items-center justify-start gap-2 overflow-x-auto pb-3 sm:justify-center">
          {content.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`shrink-0 cursor-pointer rounded-full px-5 py-2.5 font-sans text-xs font-medium transition-all duration-200 sm:text-sm ${
                activeTab === tab.id
                  ? "bg-navy text-white shadow-md"
                  : "border border-shield/50 bg-subtle/60 text-gray-600 hover:bg-subtle hover:text-foreground"
              }`}
            >
              {tab.label[lang] || tab.label.en}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Selected Level */}
          <div className="space-y-6 rounded-2xl border border-shield/70 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-subtle text-lg text-primary">
                {activeTab === "play" ? <FiUsers /> : <FiBookOpen />}
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {activeTabLabel}
                </h3>
                <p className="font-sans text-xs text-gray-500">
                  {t("assessmentSubtitle")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-emerald-200/80 bg-emerald-50/60 p-4 font-sans text-xs leading-relaxed text-emerald-900 sm:text-sm">
              <FiCheckCircle className="mt-0.5 shrink-0 text-base text-emerald-600" />
              <div>
                <p className="mb-1 font-semibold">
                  {t("assessmentTitle")}
                </p>
                {t("assessmentDescription")}
              </div>
            </div>

            {activeTab === "play" && (
              <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-4 font-sans text-xs leading-relaxed text-amber-900 sm:text-sm">
                <FiAlertCircle className="mt-0.5 shrink-0 text-base text-amber-600" />
                <div>
                  <p className="mb-1 font-semibold">
                    {t("playNoteTitle")}
                  </p>
                  {t("playNote")}
                </div>
              </div>
            )}

            {/* Syllabus Information */}
            <div className="rounded-xl border border-shield/50 bg-subtle/40 p-4 sm:p-5">
              <div className="mb-2 flex items-center gap-2">
                <FiBookOpen className="shrink-0 text-primary" />
                <h4 className="font-serif text-sm font-semibold text-navy sm:text-base">
                  {t("syllabusTitle")}
                </h4>
              </div>

              <p className="font-sans text-xs leading-relaxed text-gray-600 sm:text-sm">
                {t("syllabusDescription")}
              </p>
            </div>

            {/* Information to Confirm */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 font-serif text-sm font-semibold text-foreground sm:text-base">
                <FiInfo className="shrink-0 text-primary" />
                {t("confirmTitle")}
              </h4>

              <ul className="space-y-2 font-sans text-xs text-gray-600 sm:text-sm">
                {content.confirmItems.map((item) => (
                  <li key={item.en} className="flex items-start gap-2">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-primary" />
                    <span>{item[lang] || item.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* General Note */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-shield/60 bg-subtle/60 p-4">
            <FiInfo className="mt-0.5 shrink-0 text-base text-primary" />
            <p className="font-sans text-xs leading-relaxed text-gray-600">
              {t("footerNote")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
