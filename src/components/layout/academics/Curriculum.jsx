"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiBookOpen, FiLayers } from "react-icons/fi";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";

export default function Curriculum() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";

  const content = {
    intro: {
      en: "The school offers English-medium education from Play Group to O' Level, combining academic learning with Islamic teachings and moral development.",
      bn: "প্রতিষ্ঠানটিতে প্লে গ্রুপ থেকে ও লেভেল পর্যন্ত ইংরেজি মাধ্যমে শিক্ষা দেওয়া হয়। পাশাপাশি রয়েছে ইসলামী শিক্ষা ও নৈতিক মূল্যবোধের চর্চা।",
    },
    approachTitle: {
      en: "English-Medium Education",
      bn: "ইংরেজি মাধ্যমের শিক্ষা",
    },
    approachDescription: {
      en: "The educational approach aims to develop students' knowledge and abilities while nurturing Islamic values inspired by the Holy Quran and Sunnah.",
      bn: "পবিত্র কুরআন ও সুন্নাহর শিক্ষায় অনুপ্রাণিত ইসলামী মূল্যবোধ গড়ে তোলার পাশাপাশি শিক্ষার্থীদের জ্ঞান ও দক্ষতা বিকাশে গুরুত্ব দেওয়া হয়।",
    },
    levelLabel: {
      en: "Play Group to O' Level",
      bn: "প্লে গ্রুপ থেকে ও লেভেল",
    },
    streamsTitle: {
      en: "Study Streams",
      bn: "শিক্ষার বিভাগ",
    },
    streamsDescription: {
      en: "The prospectus mentions Science and Commerce as study streams. Please contact the school to confirm their current availability and applicable classes.",
      bn: "প্রসপেক্টাসে বিজ্ঞান ও বাণিজ্য বিভাগের উল্লেখ রয়েছে। বর্তমানে বিভাগ দুটির কার্যক্রম ও কোন শ্রেণিতে প্রযোজ্য, তা জানতে প্রতিষ্ঠানের সঙ্গে যোগাযোগ করুন।",
    },
    scienceTitle: {
      en: "Science",
      bn: "বিজ্ঞান",
    },
    scienceDescription: {
      en: "Science-related learning",
      bn: "বিজ্ঞানভিত্তিক পড়াশোনা",
    },
    commerceTitle: {
      en: "Commerce",
      bn: "বাণিজ্য",
    },
    commerceDescription: {
      en: "Business-related learning",
      bn: "ব্যবসায়ভিত্তিক পড়াশোনা",
    },
    streamsLabel: {
      en: "Streams Mentioned in the Prospectus",
      bn: "প্রসপেক্টাসে উল্লিখিত বিভাগ",
    },
  };

  const t = (key) => content[key][lang] || content[key].en;

  return (
    <section
      id="curriculum"
      className="relative w-full border-t border-shield/30 bg-background py-16 md:py-24"
    >
      <Container>
        <SectionHeader
          badge={isEnglish ? "Academic Framework" : "শিক্ষাকাঠামো"}
          title={isEnglish ? "Curriculum & Streams" : "পাঠ্যক্রম ও বিভাগ"}
          highlightWord={isEnglish ? "Curriculum" : "পাঠ্যক্রম"}
          description={isEnglish ? content.intro.en : content.intro.bn}
          align="center"
        />

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {/* Curriculum Approach */}
          <div className="flex flex-col justify-between rounded-2xl border border-shield/60 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-subtle text-lg text-primary">
                <FiBookOpen />
              </div>

              <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
                {t("approachTitle")}
              </h3>

              <p className="font-sans text-xs font-light leading-relaxed text-gray-600 sm:text-sm">
                {t("approachDescription")}
              </p>
            </div>

            <div className="mt-6 border-t border-shield/40 pt-4 text-xs font-medium text-primary">
              {t("levelLabel")}
            </div>
          </div>

          {/* Study Streams */}
          <div className="flex flex-col justify-between rounded-2xl border border-shield/60 bg-white p-4 sm:p-6 shadow-sm ">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-subtle text-lg text-primary">
                <FiLayers />
              </div>

              <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
                {t("streamsTitle")}
              </h3>

              <p className="mb-4 font-sans text-xs font-light leading-relaxed text-gray-600 sm:text-sm">
                {t("streamsDescription")}
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-shield/50 bg-subtle/50 p-3">
                  <h4 className="mb-1 font-serif text-xs font-semibold text-foreground">
                    {t("scienceTitle")}
                  </h4>
                  <p className="font-sans text-[11px] text-gray-500">
                    {t("scienceDescription")}
                  </p>
                </div>

                <div className="rounded-xl border border-shield/50 bg-subtle/50 p-3">
                  <h4 className="mb-1 font-serif text-xs font-semibold text-foreground">
                    {t("commerceTitle")}
                  </h4>
                  <p className="font-sans text-[11px] text-gray-500">
                    {t("commerceDescription")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-shield/40 pt-4 text-xs font-medium text-primary">
              {t("streamsLabel")}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
