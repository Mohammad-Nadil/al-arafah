"use client";

import React from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiBookOpen, FiAward, FiHome, FiCheckCircle } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export default function IslamicHifzSection() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";

  const content = {
    faithBadge: {
      en: "Faith & Values",
      bn: "ঈমান ও মূল্যবোধ",
    },
    title: {
      en: "Islamic Education & Hifzul Quran",
      bn: "ইসলামী শিক্ষা ও হিফজুল কুরআন",
    },
    highlight: {
      en: "Islamic Education",
      bn: "ইসলামী শিক্ষা",
    },
    description: {
      en: "Promoting Islamic knowledge, Quranic learning, good character, and values inspired by the Holy Quran and Sunnah.",
      bn: "পবিত্র কুরআন ও সুন্নাহর আলোকে ইসলামী জ্ঞান, কুরআন শিক্ষা, উত্তম চরিত্র ও নৈতিক মূল্যবোধ গড়ে তোলার প্রয়াস।",
    },

    islamicBadge: {
      en: "Islamic Learning",
      bn: "ইসলামী শিক্ষাচর্চা",
    },
    islamicTitle: {
      en: "Islamic Education & Values",
      bn: "ইসলামী শিক্ষা ও মূল্যবোধ",
    },
    islamicDescription: {
      en: "Alongside academic studies, the institution emphasizes Islamic teachings, manners, and moral development to help students lead responsible lives guided by faith.",
      bn: "সাধারণ শিক্ষার পাশাপাশি শিক্ষার্থীদের ঈমানি চেতনায় দায়িত্বশীল জীবন গঠনে ইসলামী শিক্ষা, আদব-আখলাক ও নৈতিক বিকাশে গুরুত্ব দেওয়া হয়।",
    },
    islamicPoints: [
      {
        en: "Encouraging Islamic values, good manners, and daily Sunnah practices.",
        bn: "ইসলামী মূল্যবোধ, উত্তম আদব-আখলাক ও দৈনন্দিন সুন্নাহর অনুশীলনে উৎসাহ দেওয়া।",
      },
      {
        en: "A supervised Salah break and practical religious guidance.",
        bn: "শিক্ষকদের তত্ত্বাবধানে সালাত আদায়ের বিরতি ও ব্যবহারিক ধর্মীয় দিকনির্দেশনা।",
      },
    ],

    hifzBadge: {
      en: "Tahfiz Programme",
      bn: "তাহফিজ কার্যক্রম",
    },
    hifzTitle: {
      en: "Hifzul Quran Section",
      bn: "হিফজুল কুরআন বিভাগ",
    },
    hifzDescription: {
      en: "Al-Arafah Tahfizul Quran Madrasah offers a Junior Section for children aged 4–6, with a programme spanning Nursery to Standard I over approximately 3–4 years. Full-time Hifz is intended for students aged 7–10, subject to the school's admission criteria.",
      bn: "আল-আরাফাহ তাহফিজুল কুরআন মাদরাসায় ৪–৬ বছর বয়সী শিশুদের জন্য জুনিয়র বিভাগ রয়েছে। এ বিভাগের মেয়াদ আনুমানিক ৩–৪ বছর, নার্সারি থেকে স্ট্যান্ডার্ড ১ পর্যন্ত। ৭–১০ বছর বয়সী শিক্ষার্থীদের জন্য পূর্ণকালীন হিফজের ব্যবস্থাও রয়েছে; ভর্তির শর্ত প্রতিষ্ঠান থেকে নিশ্চিত করতে হবে।",
    },

    hostelTitle: {
      en: "Residential Facility",
      bn: "আবাসিক সুবিধা",
    },
    hostelDescription: {
      en: "According to the prospectus, residential facilities are intended only for eligible full-time Hifz students. Please contact the school to confirm current availability and admission requirements.",
      bn: "প্রসপেক্টাস অনুযায়ী, আবাসিক সুবিধা শুধু যোগ্য পূর্ণকালীন হিফজ শিক্ষার্থীদের জন্য। বর্তমানে এ সুবিধা চালু আছে কি না এবং ভর্তির শর্ত জানতে প্রতিষ্ঠানের সঙ্গে যোগাযোগ করুন।",
    },
  };

  const t = (key) => content[key][lang] || content[key].en;

  return (
    <section
      id="islamic-hifz"
      className="relative w-full border-t border-shield/30 bg-subtle/50 py-16 md:py-24"
    >
      <Container>
        <SectionHeader
          badge={t("faithBadge")}
          title={t("title")}
          highlightWord={t("highlight")}
          description={t("description")}
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Islamic Education */}
          <article className="flex flex-col justify-between rounded-2xl border border-shield/60 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-xl text-navy">
                <FiBookOpen />
              </div>

              <span className="rounded-full bg-shield/40 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-navy">
                {t("islamicBadge")}
              </span>

              <h3 className="mb-4 mt-3 font-serif text-xl font-semibold text-navy">
                {t("islamicTitle")}
              </h3>

              <p className="mb-6 font-sans text-xs font-light leading-relaxed text-gray-600 sm:text-sm">
                {t("islamicDescription")}
              </p>

              <ul className="space-y-3 font-sans text-xs text-gray-700 sm:text-sm">
                {content.islamicPoints.map((point) => (
                  <li key={point.en} className="flex items-start gap-2.5">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-navy" />
                    <span>{point[lang] || point.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Hifzul Quran */}
          <article className="flex flex-col justify-between rounded-2xl border border-shield/60 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-xl text-navy">
                <FiAward />
              </div>

              <span className="rounded-full bg-shield/40 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-navy">
                {t("hifzBadge")}
              </span>

              <h3 className="mb-4 mt-3 font-serif text-xl font-semibold text-navy">
                {t("hifzTitle")}
              </h3>

              <p className="mb-6 font-sans text-xs font-light leading-relaxed text-gray-600 sm:text-sm">
                {t("hifzDescription")}
              </p>

              <div className="space-y-2 rounded-xl border border-shield/50 bg-subtle/50 p-4">
                <div className="flex items-center gap-2 font-sans text-xs font-semibold text-navy">
                  <FiHome className="shrink-0" />
                  <span>{t("hostelTitle")}</span>
                </div>

                <p className="font-sans text-[11px] leading-relaxed text-gray-600 sm:text-xs">
                  {t("hostelDescription")}
                </p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
