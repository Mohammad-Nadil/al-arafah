"use client";

import React from "react";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";

// 🏆 লাক্সারি লিনিয়ার আইকনস
import { FiTarget, FiEye } from "react-icons/fi";

export default function MissionVision() {
  const { lang } = useLanguage();

  // 📊 ডাটা অবজেক্ট অ্যারে - ম্যাপ করার জন্য
  const items = [
    {
      id: 1,
      icon: <FiTarget className="w-6 h-6" />,
      titleEn: "Our Mission",
      titleBn: "আমাদের মিশন",
      descEn:
        "To deliver rigorous Cambridge educational standards embedded deeply within Quranic principles, cultivating critical thinkers who are academically elite, technologically fluent, and morally unshakeable.",
      descBn:
        "কেমব্রিজ পাঠ্যক্রমের সর্বোচ্চ প্রাতিষ্ঠানিক মানদণ্ডকে পবিত্র কুরআনের তারবিয়াহ ও চিরন্তন আদর্শের সাথে সুনিপুণভাবে মিশ্রিত করা; যাতে আমাদের শিক্ষার্থীরা বিশ্বমানের মেধা ও প্রযুক্তিতে দক্ষ হওয়ার পাশাপাশি নৈতিকভাবে অবিচল ও খাঁটি মানুষ হিসেবে গড়ে ওঠে।",
    },
    {
      id: 2,
      icon: <FiEye className="w-6 h-6" />,
      titleEn: "Our Vision",
      titleBn: "আমাদের ভিশন",
      descEn:
        "To become a benchmark global citadel of integrated learning, producing generations of leaders who spearhead scientific, intellectual, and societal advancements while beautifully embodying the Prophetic character.",
      descBn:
        "সমন্বিত আধুনিক ও ইসলামিক শিক্ষার একটি বিশ্বস্ত বৈশ্বিক রোল-মডেল হওয়া; এমন এক নেতৃত্ব তৈরি করা যারা সুন্নাহর আলোয় নিজেদের চরিত্রকে দীক্ষিত করে পৃথিবীর বৈজ্ঞানিক, বুদ্ধিবৃত্তিক এবং সামাজিক অগ্রগতিতে নেতৃত্ব দেবে।",
    },
  ];

  return (
    <section
      id="mission-vision"
      className="relative w-full py-20 overflow-hidden transition-colors duration-500 bg-background text-foreground"
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none top-1/2 left-1/2 w-150 aspect-square bg-linear-to-br from-primary/5 via-accent/5 to-transparent blur-3xl" />

      <Container>
        <SectionHeader
          badge={lang === "en" ? "PURPOSE & COMPASS" : "লক্ষ্য ও দিকনির্দেশনা"}
          title={
            lang === "en"
              ? "Our Mission & Vision"
              : "আমাদের লক্ষ্য ও দূরদর্শী স্বপ্ন"
          }
          center={true}
        />

        <div className="relative z-10 grid max-w-5xl grid-cols-1 gap-8 mx-auto mt-16 md:grid-cols-2 lg:gap-12">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between p-4 transition-all duration-700 border shadow-xs group bg-background-subtle border-primary/40 dark:border-accent/40 rounded-xl md:rounded-4xl md:p-6 hover:shadow-2xl hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-2"
            >
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-8 transition-transform duration-500 rounded-2xl bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                  {lang === "en" ? item.titleEn : item.titleBn}
                </h3>

                <p className="mt-4 font-sans text-sm font-light leading-relaxed md:text-base text-neutral-500 dark:text-neutral-400">
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
