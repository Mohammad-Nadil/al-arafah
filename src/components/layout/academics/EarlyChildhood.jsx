"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  FiMessageSquare,
  FiHeart,
  FiPieChart,
  FiGlobe,
  FiActivity,
  FiSmile,
} from "react-icons/fi";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";

export default function EarlyChildhood() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";

  const developmentalAreas = [
    {
      title: {
        en: "Communication & Language",
        bn: "যোগাযোগ ও ভাষা",
      },
      description: {
        en: "Encouraging children to develop language skills, communicate confidently, and enjoy age-appropriate stories and rhymes.",
        bn: "শিশুদের ভাষাগত দক্ষতা ও আত্মবিশ্বাসের সঙ্গে কথা বলার অভ্যাস গড়ে তোলা এবং উপযোগী গল্প ও ছড়া উপভোগে উৎসাহ দেওয়া।",
      },
      icon: <FiMessageSquare />,
    },
    {
      title: {
        en: "Social & Emotional Growth",
        bn: "সামাজিক ও মানসিক বিকাশ",
      },
      description: {
        en: "Helping children develop confidence, kindness, cooperation, self-respect, and positive relationships with others.",
        bn: "শিশুদের আত্মবিশ্বাস, সদাচার, সহযোগিতা, আত্মমর্যাদা ও অন্যদের সঙ্গে সুন্দর সম্পর্ক গড়ে তুলতে সহায়তা করা।",
      },
      icon: <FiHeart />,
    },
    {
      title: {
        en: "Early Numeracy",
        bn: "সংখ্যা ও গণনার প্রাথমিক ধারণা",
      },
      description: {
        en: "Introducing basic number concepts, counting, matching, shapes, and patterns through simple learning activities.",
        bn: "সহজ শিক্ষামূলক কার্যক্রমের মাধ্যমে সংখ্যা, গণনা, মিল খোঁজা, আকৃতি ও নকশা সম্পর্কে প্রাথমিক ধারণা দেওয়া।",
      },
      icon: <FiPieChart />,
    },
    {
      title: {
        en: "Exploring the World",
        bn: "চারপাশের জগৎ সম্পর্কে জানা",
      },
      description: {
        en: "Encouraging curiosity about nature, everyday objects, and the environment through observation and exploration.",
        bn: "পর্যবেক্ষণ ও অনুসন্ধানের মাধ্যমে প্রকৃতি, দৈনন্দিন বস্তু এবং চারপাশের পরিবেশ সম্পর্কে জানার আগ্রহ তৈরি করা।",
      },
      icon: <FiGlobe />,
    },
    {
      title: {
        en: "Physical Development",
        bn: "শারীরিক বিকাশ",
      },
      description: {
        en: "Supporting coordination, movement, and the development of age-appropriate physical skills through suitable activities.",
        bn: "উপযুক্ত কার্যক্রমের মাধ্যমে শিশুদের শরীরের সমন্বয়, চলাফেরা ও বয়সোপযোগী শারীরিক দক্ষতা বিকাশে সহায়তা করা।",
      },
      icon: <FiActivity />,
    },
    {
      title: {
        en: "Creativity & Imagination",
        bn: "সৃজনশীলতা ও কল্পনাশক্তি",
      },
      description: {
        en: "Giving children opportunities to express ideas and imagination through drawing, art, storytelling, and creative play.",
        bn: "আঁকাআঁকি, শিল্পচর্চা, গল্প বলা ও সৃজনশীল খেলার মাধ্যমে শিশুদের চিন্তা ও কল্পনা প্রকাশের সুযোগ দেওয়া।",
      },
      icon: <FiSmile />,
    },
  ];

  return (
    <section
      id="early-childhood"
      className="relative w-full border-t border-shield/30 bg-subtle/30 py-16 md:py-24"
    >
      <Container>
        <SectionHeader
          badge={isEnglish ? "Foundation Years" : "শিশুর বিকাশের ভিত্তি"}
          title={
            isEnglish ? "Early Childhood Education" : "শিশুদের প্রাথমিক শিক্ষা"
          }
          highlightWord={isEnglish ? "Early Childhood" : "প্রাথমিক শিক্ষা"}
          description={
            isEnglish
              ? "Supporting children's early learning, personal growth, communication, and curiosity in their formative years."
              : "শিশুর শৈশবের গুরুত্বপূর্ণ সময়ে প্রাথমিক শিক্ষা, ব্যক্তিগত বিকাশ, যোগাযোগের দক্ষতা ও জানার আগ্রহ গড়ে তুলতে সহায়তা করা।"
          }
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {developmentalAreas.map((item) => (
            <article
              key={item.title.en}
              className="flex flex-col rounded-2xl border border-shield/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-subtle text-base text-primary">
                {item.icon}
              </div>

              <h3 className="mb-2 font-serif text-sm font-semibold text-foreground sm:text-base">
                {item.title[lang] || item.title.en}
              </h3>

              <p className="font-sans text-xs font-light leading-relaxed text-gray-600 sm:text-sm">
                {item.description[lang] || item.description.en}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
