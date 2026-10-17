
"use client";

import React from "react";
import Container from "@/components/public/Container";
import Button from "@/components/ui/Button";
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiPhoneCall,
  FiArrowRight,
  FiInfo,
} from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export default function AdmissionOverview({ isAdmissionOpen = null }) {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";

  const content = {
    badge: {
      en: "Session & Admission Overview",
      bn: "শিক্ষাবর্ষ ও ভর্তি-সংক্রান্ত তথ্য",
    },
    titleStart: { en: "Join", bn: "যুক্ত হোন" },
    titleEnd: {
      en: "Educational Family",
      bn: "শিক্ষা পরিবারের সঙ্গে",
    },
    description: {
      en: "Admissions normally take place between December and January each year. Depending on seat availability and suitability, applications may also be accepted at other times of the academic year. Our aim is to combine English-medium education with Islamic values.",
      bn: "সাধারণত প্রতি বছর ডিসেম্বর থেকে জানুয়ারি মাসে ভর্তি কার্যক্রম অনুষ্ঠিত হয়। আসন খালি থাকা ও শিক্ষার্থীর উপযুক্ততার ভিত্তিতে শিক্ষাবর্ষের অন্য সময়েও ভর্তি নেওয়া হতে পারে। আমাদের লক্ষ্য ইংরেজি মাধ্যমের শিক্ষার সঙ্গে ইসলামী মূল্যবোধের সমন্বয় করা।",
    },
    apply: { en: "Admission Process", bn: "ভর্তি প্রক্রিয়া" },
    contact: { en: "Contact Office", bn: "অফিসে যোগাযোগ" },
    hifzTitle: {
      en: "Tahfizul Quran Section Criteria",
      bn: "তাহফিজুল কুরআন বিভাগের যোগ্যতা",
    },
    hifzDescription: {
      en: "The Junior Hifz section is intended for children aged 4–6, while full-time Hifz is intended for ages 7–10. Hostel facilities are limited to eligible full-time Hifz students; please contact the school to confirm current availability.",
      bn: "জুনিয়র হিফজ বিভাগ ৪–৬ বছর বয়সী শিশুদের জন্য এবং পূর্ণকালীন হিফজ বিভাগ ৭–১০ বছর বয়সীদের জন্য। আবাসিক সুবিধা যোগ্য পূর্ণকালীন হিফজ শিক্ষার্থীদের জন্য প্রযোজ্য। বর্তমানে এ সুবিধা চালু আছে কি না, তা প্রতিষ্ঠানে যোগাযোগ করে নিশ্চিত করুন।",
    },
    statusTitle: { en: "Admission Status", bn: "ভর্তির বর্তমান অবস্থা" },
    statusOpen: { en: "Applications Open", bn: "ভর্তি চলছে" },
    statusDependent: { en: "Seat Dependent", bn: "আসন খালি থাকা সাপেক্ষে" },
    statusContact: {
      en: "Please Contact School",
      bn: "প্রতিষ্ঠানে যোগাযোগ করুন",
    },
    regularTitle: {
      en: "Regular Session Period",
      bn: "নিয়মিত ভর্তি সময়",
    },
    regularValue: { en: "December – January", bn: "ডিসেম্বর – জানুয়ারি" },
    midTitle: {
      en: "Mid-Session Applications",
      bn: "শিক্ষাবর্ষের মাঝামাঝি ভর্তি",
    },
    midValue: {
      en: "Subject to seat availability and suitability",
      bn: "আসন খালি থাকা ও শিক্ষার্থীর উপযুক্ততার ভিত্তিতে",
    },
    formTitle: { en: "Admission Form Fee", bn: "ভর্তি ফরমের মূল্য" },
    formValue: {
      en: "Tk. 300 (Non-refundable)",
      bn: "৩০০ টাকা (ফেরতযোগ্য নয়)",
    },
    bottomNote: {
      en: "Contact the school office for current admission information, form collection and submission details.",
      bn: "বর্তমান ভর্তি-সংক্রান্ত তথ্য এবং ফরম সংগ্রহ ও জমা দেওয়ার নিয়ম জানতে প্রতিষ্ঠানের অফিসে যোগাযোগ করুন।",
    },
  };

  const t = (key) => content[key][lang] || content[key].en;

  const status =
    isAdmissionOpen === true
      ? "open"
      : isAdmissionOpen === false
        ? "dependent"
        : "unknown";

  return (
    <section
      id="overview"
      className="relative w-full overflow-hidden border-b border-shield/40 bg-background py-12 md:py-16"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Side: Overview */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-shield/60 bg-subtle px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
              <FiCalendar className="text-sm" />
              <span>{t("badge")}</span>
            </div>

            <h1 className="mb-4 font-serif text-2xl font-medium leading-tight tracking-wide text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              {t("titleStart")}{" "}
              <span className="font-semibold text-accent">Al-Arafah</span>{" "}
              {t("titleEnd")}
            </h1>

            <div className="mb-4 h-0.5 w-14 rounded-full bg-accent" />

            <p className="mb-6 font-sans text-xs font-light leading-relaxed text-gray-600 sm:text-sm md:text-base">
              {t("description")}
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-3.5">
              <Button
                label={t("apply")}
                href="/admission"
                bgColor="var(--navy)"
                borderColor="var(--navy)"
                flairColor="var(--primary)"
                textColor="#ffffff"
                size="md"
                rightIcon={<FiArrowRight />}
              />

              <Button
                label={t("contact")}
                href="/contact"
                bgColor="transparent"
                borderColor="var(--shield)"
                flairColor="var(--subtle)"
                textColor="var(--navy)"
                textHoverColor="var(--navy)"
                size="md"
                leftIcon={<FiPhoneCall />}
              />
            </div>

            {/* Hifzul Quran Note */}
            <div className="flex w-full items-start gap-3 rounded-xl border border-shield/60 bg-subtle/60 p-4">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-base text-navy">
                <FiInfo />
              </div>

              <div className="font-sans text-xs leading-relaxed text-gray-700">
                <span className="mb-0.5 block font-serif text-sm font-semibold text-navy">
                  {t("hifzTitle")}
                </span>
                {t("hifzDescription")}
              </div>
            </div>
          </div>

          {/* Right Side: Admission Information */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative flex w-full max-w-md flex-col justify-between overflow-hidden rounded-2xl border border-shield/80 bg-white p-6 shadow-md sm:p-8">
              <div>
                <div className="mb-6 flex items-center justify-between gap-3 border-b border-shield/40 pb-4">
                  <span className="font-serif text-xs font-semibold uppercase tracking-wider text-foreground">
                    {t("statusTitle")}
                  </span>

                  {status === "open" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-sans text-xs font-bold text-emerald-700">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                      {t("statusOpen")}
                    </span>
                  ) : status === "dependent" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-sans text-xs font-bold text-amber-700">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      {t("statusDependent")}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-shield bg-subtle px-3 py-1 font-sans text-xs font-bold text-foreground">
                      <FiInfo />
                      {t("statusContact")}
                    </span>
                  )}
                </div>

                <div className="space-y-4 font-sans text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <FiCalendar className="mt-0.5 shrink-0 text-base text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">
                        {t("regularTitle")}
                      </p>
                      <p className="font-light text-gray-500">
                        {t("regularValue")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiClock className="mt-0.5 shrink-0 text-base text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">
                        {t("midTitle")}
                      </p>
                      <p className="font-light text-gray-500">
                        {t("midValue")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-base text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">
                        {t("formTitle")}
                      </p>
                      <p className="font-light text-gray-500">
                        {t("formValue")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-shield/40 pt-4 font-sans text-[11px] leading-normal text-gray-500 sm:text-xs">
                {t("bottomNote")}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
