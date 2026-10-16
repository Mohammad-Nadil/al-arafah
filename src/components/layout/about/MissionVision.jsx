"use client";

import React from "react";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiTarget, FiEye } from "react-icons/fi";


const cleanData = {
  header: {
    badgeEn: "PURPOSE & DIRECTION",
    badgeBn: "লক্ষ্য ও দিকনির্দেশনা",
    titleEn: "Our Mission & Vision",
    titleBn: "আমাদের লক্ষ্য ও ভবিষ্যৎ ভাবনা",
  },
  items: [
    {
      id: 1,
      icon: <FiTarget className="w-6 h-6" />,
      titleEn: "Our Mission",
      titleBn: "আমাদের লক্ষ্য",
      descEn:
        "To provide modern English-medium education alongside Islamic teachings, the values of the Holy Quran and Sunnah, and moral development. We aim to help students gain knowledge, build good character, and develop the skills needed for a responsible and honorable life.",
      descBn:
        "আধুনিক ইংরেজি মাধ্যমের শিক্ষার পাশাপাশি পবিত্র কুরআন ও সুন্নাহর শিক্ষা এবং নৈতিক মূল্যবোধ চর্চার সুযোগ তৈরি করা আমাদের লক্ষ্য। শিক্ষার্থীদের জ্ঞান অর্জন, উত্তম চরিত্র গঠন এবং দায়িত্বশীল ও সম্মানজনক জীবন গড়ার প্রয়োজনীয় দক্ষতা অর্জনে সহায়তা করাই আমাদের উদ্দেশ্য।",
    },
    {
      id: 2,
      icon: <FiEye className="w-6 h-6" />,
      titleEn: "Our Vision",
      titleBn: "আমাদের ভবিষ্যৎ ভাবনা",
      descEn:
        "To nurture knowledgeable, morally grounded, and responsible individuals through a balanced combination of modern education and Islamic values, preparing them to contribute positively to their families, communities, and society.",
      descBn:
        "আধুনিক শিক্ষা ও ইসলামী মূল্যবোধের সমন্বয়ে জ্ঞানী, নৈতিকতাসম্পন্ন ও দায়িত্বশীল মানুষ গড়ে তোলা আমাদের ভবিষ্যৎ ভাবনা। আমরা চাই, শিক্ষার্থীরা নিজেদের পরিবার, সমাজ ও দেশের কল্যাণে ইতিবাচক ভূমিকা রাখুক।",
    },
  ],
};


export default function MissionVision() {
  const { lang } = useLanguage();

  return (
    <section
      id="mission-vision"
      className="relative w-full py-12 md:py-14 xl:py-16 overflow-hidden transition-colors duration-500 bg-background text-foreground"
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none top-1/2 left-1/2 w-150 aspect-square bg-gradient-to-br from-primary/5 via-accent/5 to-transparent blur-3xl" />

      <Container>
        <SectionHeader
          badge={lang === "en" ? cleanData.header.badgeEn : cleanData.header.badgeBn}
          title={lang === "en" ? cleanData.header.titleEn : cleanData.header.titleBn}
          center={true}
        />

        <div className="relative z-10 grid max-w-5xl grid-cols-1 gap-8 mx-auto mt-16 md:grid-cols-2 lg:gap-12">
          {cleanData.items.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between p-4 transition-all duration-700 border shadow-sm group bg-background-subtle border-primary/40  rounded-xl md:rounded-4xl md:p-6 hover:shadow-2xl hover:border-neutral-300  hover:-translate-y-2"
            >
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-8 transition-transform duration-500 rounded-2xl bg-primary/10  text-primary  group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 ">
                  {lang === "en" ? item.titleEn : item.titleBn}
                </h3>

                <p className="mt-4 font-sans text-sm font-light leading-relaxed md:text-base text-neutral-500 ">
                  {lang === "en" ? item.descEn : item.descBn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}