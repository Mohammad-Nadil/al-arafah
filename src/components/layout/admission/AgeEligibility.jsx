
"use client";

import React from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiUsers, FiInfo } from "react-icons/fi";
import { classEquivalenceData } from "../../../../temp/classes";
import { useLanguage } from "@/context/LanguageContext";

export default function AgeEligibility() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";

  const content = {
    badge: {
      en: "Age Criteria",
      bn: "বয়সের নির্দেশিকা",
    },
    title: {
      en: "Age & Class Equivalence",
      bn: "বয়স ও শ্রেণির সমতুল্যতা",
    },
    highlightWord: {
      en: "Age & Class",
      bn: "বয়স ও শ্রেণি",
    },
    description: {
      en: "A general guide to age-based class placement, with British and American curriculum equivalents for reference.",
      bn: "শিক্ষার্থীর বয়স অনুযায়ী শ্রেণি নির্ধারণের একটি সাধারণ নির্দেশিকা। পাশাপাশি তুলনার জন্য ব্রিটিশ ও আমেরিকান শিক্ষাব্যবস্থার সমতুল্য স্তর দেখানো হয়েছে।",
    },
    notice: {
      en: "Age is calculated from the beginning of the academic session (January). Final class placement should be confirmed with the school after checking official documents and assessing the student's readiness.",
      bn: "শিক্ষাবর্ষের শুরুতে (জানুয়ারি) শিক্ষার্থীর বয়স হিসাব করা হয়। প্রয়োজনীয় কাগজপত্র যাচাই ও শিক্ষার্থীর উপযুক্ততা বিবেচনার পর চূড়ান্ত শ্রেণি প্রতিষ্ঠানের সঙ্গে নিশ্চিত করে নিতে হবে।",
    },
    ageGroup: {
      en: "Age Group",
      bn: "বয়স",
    },
    schoolStandard: {
      en: "Al-Arafah Standard",
      bn: "আল-আরাফাহ শ্রেণি",
    },
    british: {
      en: "British Equivalent",
      bn: "ব্রিটিশ সমতুল্য",
    },
    usa: {
      en: "USA Equivalent",
      bn: "আমেরিকান সমতুল্য",
    },
    years: {
      en: "Years",
      bn: "বছর",
    },
    age: {
      en: "Age",
      bn: "বয়স",
    },
  };

  const t = (key) => content[key][lang] || content[key].en;

  return (
    <section
      id="eligibility"
      className="relative w-full border-b border-shield/40 bg-background py-16 md:py-24"
    >
      <Container>
        {/* Section Header */}
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          highlightWord={t("highlightWord")}
          description={t("description")}
          align="center"
        />

        {/* Notice */}
        <div className="mx-auto mb-10 flex max-w-4xl items-start gap-3 rounded-xl border border-shield/60 bg-subtle/60 p-4">
          <FiInfo className="mt-0.5 shrink-0 text-base text-primary" />
          <p className="font-sans text-xs leading-relaxed text-gray-600 sm:text-sm">
            {t("notice")}
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mx-auto hidden max-w-5xl overflow-hidden rounded-2xl border border-shield/70 bg-white shadow-sm md:block">
          <table className="w-full border-collapse text-left font-sans">
            <thead>
              <tr className="border-b border-navy bg-navy text-xs font-semibold uppercase tracking-wider text-white">
                <th className="w-1/5 px-6 py-4">{t("ageGroup")}</th>

                <th className="w-2/5 px-6 py-4">
                  <div className="flex items-center gap-1.5 text-accent">
                    <FiUsers className="text-sm" />
                    <span>{t("schoolStandard")}</span>
                  </div>
                </th>

                <th className="w-1/5 px-6 py-4 text-gray-300">
                  {t("british")}
                </th>

                <th className="w-1/5 px-6 py-4 text-gray-300">
                  {t("usa")}
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-shield/40 font-light text-gray-700">
              {classEquivalenceData.map((row, index) => (
                <tr
                  key={`${row.age}-${row.alArafah}-${index}`}
                  className={`text-xs transition-colors hover:bg-subtle/50 sm:text-sm ${
                    index % 2 === 0 ? "bg-white" : "bg-subtle/20"
                  }`}
                >
                  <td className="px-6 py-3.5 font-semibold text-navy">
                    {row.age} {t("years")}
                  </td>

                  <td className="px-6 py-3.5 font-medium text-foreground">
                    {row.alArafah}
                  </td>

                  <td className="px-6 py-3.5 text-gray-500">
                    {row.british}
                  </td>

                  <td className="px-6 py-3.5 text-gray-500">
                    {row.usa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
          {classEquivalenceData.map((row, index) => (
            <div
              key={`${row.age}-${row.alArafah}-${index}`}
              className="flex flex-col justify-between rounded-xl border border-shield/70 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-shield/40 pb-3">
                <span className="rounded-md bg-subtle px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-navy">
                  {t("age")}: {row.age} {t("years")}
                </span>

                <span className="text-right font-serif text-xs font-semibold text-primary">
                  {row.alArafah}
                </span>
              </div>

              <div className="space-y-2 font-sans text-xs text-gray-600">
                <div className="flex items-start justify-between gap-3">
                  <span className="shrink-0 text-gray-400">
                    {t("british")}:
                  </span>
                  <span className="text-right font-medium text-gray-700">
                    {row.british}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <span className="shrink-0 text-gray-400">
                    {t("usa")}:
                  </span>
                  <span className="text-right font-medium text-gray-700">
                    {row.usa}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
