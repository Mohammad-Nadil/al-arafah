
"use client";

import React from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import {
  FiRefreshCw,
  FiCheckCircle,
  FiArrowRight,
  FiFileText,
  FiInfo,
} from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export default function ReAdmission() {
  const { lang } = useLanguage();

  const content = {
    badge: {
      en: "Annual Renewal",
      bn: "পুনঃভর্তি",
    },
    title: {
      en: "Re-Admission Policy",
      bn: "পুনঃভর্তি নীতিমালা",
    },
    highlightWord: {
      en: "Re-Admission",
      bn: "পুনঃভর্তি",
    },
    description: {
      en: "Learn about the attendance requirement for existing students seeking re-admission for the next academic session.",
      bn: "পরবর্তী শিক্ষাবর্ষে পুনঃভর্তির ক্ষেত্রে বর্তমান শিক্ষার্থীদের উপস্থিতি-সংক্রান্ত শর্ত জেনে নিন।",
    },
    cardTitle: {
      en: "Attendance Requirement",
      bn: "উপস্থিতির শর্ত",
    },
    cardDescription: {
      en: "A minimum attendance requirement applies to re-admission.",
      bn: "পুনঃভর্তির ক্ষেত্রে ন্যূনতম উপস্থিতির শর্ত প্রযোজ্য।",
    },
    condition: {
      en: "At least 75% attendance is required for re-admission.",
      bn: "পুনঃভর্তির জন্য কমপক্ষে ৭৫% উপস্থিতি থাকতে হবে।",
    },
    note: {
      en: "Contact the school office to confirm any additional current re-admission requirements and the renewal procedure.",
      bn: "পুনঃভর্তির অতিরিক্ত শর্ত ও আবেদনপ্রক্রিয়া জানতে প্রতিষ্ঠানের অফিসে যোগাযোগ করুন।",
    },
    policyInfo: {
      en: "For school rules and policies:",
      bn: "প্রতিষ্ঠানের নিয়ম ও নীতিমালা:",
    },
    policyButton: {
      en: "View School Policies",
      bn: "প্রতিষ্ঠানের নীতিমালা দেখুন",
    },
  };

  const t = (key) => content[key][lang] || content[key].en;

  return (
    <section
      id="readmission"
      className="relative w-full border-b border-shield/40 bg-subtle/30 py-16 md:py-24"
    >
      <Container>
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          highlightWord={t("highlightWord")}
          description={t("description")}
          align="center"
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col justify-between rounded-2xl border border-shield/70 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="mb-4 flex items-center gap-3 border-b border-shield/40 pb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-lg text-navy">
                  <FiRefreshCw />
                </div>

                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground sm:text-lg">
                    {t("cardTitle")}
                  </h3>
                  <p className="font-sans text-xs text-gray-500">
                    {t("cardDescription")}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 py-2 font-sans text-xs text-gray-700 sm:text-sm">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-base text-navy" />
                  <span className="font-light leading-relaxed">
                    {t("condition")}
                  </span>
                </li>
              </ul>

              <div className="mt-4 flex items-start gap-3 rounded-xl border border-shield/60 bg-subtle/60 p-4">
                <FiInfo className="mt-0.5 shrink-0 text-base text-primary" />
                <p className="font-sans text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {t("note")}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-shield/40 pt-5 sm:flex-row">
              <div className="flex items-center gap-2 font-sans text-xs text-gray-500">
                <FiFileText className="shrink-0 text-primary" />
                <span>{t("policyInfo")}</span>
              </div>

              <Button
                label={t("policyButton")}
                href="/academics#rules-policies"
                bgColor="transparent"
                borderColor="var(--navy)"
                flairColor="var(--subtle)"
                textColor="var(--navy)"
                textHoverColor="var(--navy)"
                size="sm"
                className="w-full shrink-0 sm:w-auto"
                rightIcon={<FiArrowRight />}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
