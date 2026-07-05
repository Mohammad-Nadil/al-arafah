"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";

// 🏆 লাক্সারি ইসলামিক আইকন ইমপোর্ট
import { RiDoubleQuotesL } from "react-icons/ri";
import { FiAward, FiHeart, FiClock } from "react-icons/fi";

const HIFZ_STEPS = [
  {
    id: 1,
    icon: <FiClock />,
    timeEn: "Phase 01: Foundation",
    timeBn: "ধাপ ০১: নাজেরা ও বুনিয়াদ",
    titleEn: "Nazera & Makhraj Perfection",
    titleBn: "নাজেরা ও নিখুঁত মাখরাজ",
    descEn: "Focusing on accurate pronunciation, Tajweed rules, and building retention stamina before memorization.",
    descBn: "হিফজ শুরুর পূর্বে সঠিক উচ্চারণ, তাজবীদ নিয়ম এবং স্মৃতিশক্তি ধরে রাখার সক্ষমতা বৃদ্ধির ওপর পূর্ণ মনোযোগ।"
  },
  {
    id: 2,
    icon: <FiHeart />,
    timeEn: "Phase 02: Memorization",
    timeBn: "ধাপ ০২: হিফজ পর্ব",
    titleEn: "Customized Daily Memorization",
    titleBn: "ব্যক্তিগত হিফজ পরিকল্পনা",
    descEn: "Individual track pacing guided by expert Huffaz, ensuring smooth daily Sabak submission.",
    descBn: "অভিজ্ঞ হাফেজদের তত্ত্বাবধানে শিক্ষার্থীর নিজস্ব মেধা অনুযায়ী দৈনিক সবক প্রদানের সুপরিকল্পিত ব্যবস্থা।"
  },
  {
    id: 3,
    icon: <FiAward />,
    timeEn: "Phase 03: Preservation",
    timeBn: "ধাপ ০৩: রিভিশন ও ইয়াদ",
    titleEn: "Sabki & Amfta Rigorous Revision",
    titleBn: "সবকী ও আমফতা রিভিশন",
    descEn: "Strong emphasis on long-term retention through systematic daily review cycles (Yad).",
    descBn: "পদ্ধতিগত দৈনিক রিভিশন সাইকেলের (ইয়াদ) মাধ্যমে দীর্ঘমেয়াদে সম্পূর্ণ কুরআন মনে রাখার কঠোর অনুশীলন।"
  }
];

export default function HifzHighlights() {
  const { lang } = useLanguage();

  return (
    <section
      id="hifz-highlights"
      // 🔄 অল্টারনেট ব্যাকগ্রাউন্ড অনুযায়ী আমরা এখানে var(--background-subtle) ব্যবহার করব
      className="w-full py-20 md:py-28 bg-[var(--background-subtle)] text-[var(--foreground)] transition-colors duration-500 overflow-hidden"
    >
      <Container>
        {/* 🎯 সেকশন হেডার */}
        <SectionHeader
          badge={lang === "en" ? "Divine Tarbiyah" : "দ্বীনি তারবিয়াহ"}
          title={
            lang === "en" 
              ? "Integrated Hifz Program Highlights" 
              : "সমন্বিত হিফজ প্রোগ্রামের প্রধান বৈশিষ্ট্যসমূহ"
          }
          highlightWord={lang === "en" ? "Highlights" : "বৈশিষ্ট্যসমূহ"}
          description={
            lang === "en"
              ? "A meticulously designed pathway enabling students to become global Cambridge scholars while anchoring the Holy Quran deep within their hearts."
              : "একটি সুপরিকল্পিত পথরেখা যা শিক্ষার্থীদের পবিত্র কুরআন বুকে ধারণ করার পাশাপাশি বৈশ্বিক কেমব্রিজ স্কলার হিসেবে গড়ে তুলতে সাহায্য করে।"
          }
          align="center"
        />

        {/* 🕋 মূল লেআউট গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-12 md:mt-20 items-center">
          
          {/* 📜 বাম পাশ: আধ্যাত্মিক বাণী/মোটো (৪ কলাম) */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left">
            <RiDoubleQuotesL className="text-4xl md:text-5xl text-[var(--accent)] mx-auto lg:mx-0 opacity-60 mb-4" />
            <h3 className="text-2xl md:text-3xl font-serif font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
              {lang === "en" 
                ? "Balancing Academic Brilliance with Eternal Light" 
                : "একাডেমিক শ্রেষ্ঠত্ব এবং চিরন্তন আলোর নিখুঁত সমন্বয়"}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-sans font-light leading-relaxed mt-4">
              {lang === "en"
                ? "Our students do not choose between Dunya and Akhirah. They master both under elite mentorship."
                : "আমাদের শিক্ষার্থীরা দুনিয়া বা আখিরাতের কোনো একটিকে বেছে নেয় না; বরং দক্ষ মেন্টরদের অধীনে তারা উভয় জগতেই শ্রেষ্ঠত্ব অর্জন করে।"}
            </p>
          </div>

          {/* 🎴 ডান পাশ: ট্রান্সপারেন্ট টাইমলাইন ও লিনিয়ার বর্ডার কার্ডস (৮ কলাম) */}
          <div className="lg:col-span-8 relative flex flex-col gap-6 md:gap-8">
            {/* টাইমলাইনের পেছনের কানেক্টিং সোজা ডটেড লাইন */}
            <div className="absolute left-8 top-4 bottom-4 w-[1px] border-l border-dashed border-neutral-300 dark:border-neutral-700 hidden md:block" />

            {HIFZ_STEPS.map((step) => (
              <div
                key={step.id}
                // 🎯 তোমার আইডিয়া অনুযায়ী কার্ডগুলো সম্পূর্ণ transparent এবং hover-এ রয়্যাল গ্রিডিয়েন্ট বর্ডার ফুটিয়ে তুলবে
                className="group relative flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl bg-transparent border border-neutral-200/40 dark:border-neutral-800/30 hover:border-transparent transition-all duration-500 select-none"
              >
                {/* ⚡ হোভার করলে চারপাশ দিয়ে ফুটে ওঠা লাক্সারি লিনিয়ার গ্রেডিয়েন্ট বর্ডার ওভারলে */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-[var(--foreground)]/40 via-[var(--accent)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl mask-content" 
                     style={{ WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} 
                />

                {/* 🎨 টাইমলাইন আইকন ডট (যা পেছনের ডটেড লাইনের ওপর নিখুঁত বসবে) */}
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white dark:bg-[#232625] text-[var(--foreground)] dark:text-[var(--accent)] border border-neutral-200/50 dark:border-neutral-700/50 flex items-center justify-center text-xl z-10 transition-all duration-500 shadow-xs group-hover:bg-[var(--foreground)] group-hover:text-[var(--accent)] dark:group-hover:bg-[var(--accent)] dark:group-hover:text-[var(--background)] group-hover:scale-110 md:translate-x-[-4px]">
                  {step.icon}
                </div>

                {/* 📝 টেক্সট কন্টেন্ট এরিয়া */}
                <div className="flex flex-col gap-1">
                  {/* ধাপ/ফেজ ট্যাগ */}
                  <span className="text-[11px] font-sans font-bold tracking-wider uppercase text-[var(--primary)] dark:text-[var(--accent)]">
                    {lang === "en" ? step.timeEn : step.timeBn}
                  </span>
                  
                  {/* টাইটেল */}
                  <h4 className="text-lg md:text-xl font-serif font-medium text-neutral-900 dark:text-neutral-100 transition-colors duration-300 group-hover:text-[var(--foreground)] dark:group-hover:text-[var(--accent)]">
                    {lang === "en" ? step.titleEn : step.titleBn}
                  </h4>
                  
                  {/* ডেসক্রিপশন */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans font-light leading-relaxed mt-2">
                    {lang === "en" ? step.descEn : step.descBn}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}