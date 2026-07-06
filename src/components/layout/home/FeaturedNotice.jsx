"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiCalendar, FiArrowRight, FiFileText } from "react-icons/fi";
import Button from "@/components/ui/Button";

const cleanData = {
  header: {
    badgeEn: "Announcements",
    badgeBn: "ঘোষণা ও নোটিশ",
    titleEn: "Latest Announcements & Featured Notice",
    titleBn: "সর্বশেষ ঘোষণা এবং গুরুত্বপূর্ণ নোটিশ",
    highlightWordEn: "Notice",
    highlightWordBn: "নোটিশ",
    descEn: "Stay updated with the latest academic schedules, admission updates, and important announcements from Al-Arafah International.",
    descBn: "আল-আরাফাহ ইন্টারন্যাশনালের সর্বশেষ একাডেমিক সময়সূচী, ভর্তির আপডেট এবং গুরুত্বপূর্ণ ঘোষণার সাথে সর্বদা আপডেট থাকুন।"
  },
  notices: [
    {
      id: 1,
      tagEn: "Admission",
      tagBn: "ভর্তী",
      date: "05 July, 2026",
      titleEn: "Admission Open for Cambridge Curriculum & Hifz Track: Session 2026-2027",
      titleBn: "কেমব্রিজ কারিকুলাম ও হিফজ ট্র্যাকে ভর্তি চলছে: সেশন ২০২৬-২০২৭",
      descEn: "Collect admission forms from the main campus office or apply online through our official portal.",
      descBn: "প্রধান ক্যাম্পাস অফিস থেকে ভর্তি ফরম সংগ্রহ করুন অথবা আমাদের অফিসিয়াল পোর্টালের মাধ্যমে অনলাইনে আবেদন করুন।"
    },
    {
      id: 2,
      tagEn: "Academic",
      tagBn: "একাডেমিক",
      date: "28 June, 2026",
      titleEn: "Publishing of First Term Examination Routine & Syllabus",
      titleBn: "প্রথম সাময়িক পরীক্ষার রুটিন ও সিলেবাস প্রকাশ"
    },
    {
      id: 3,
      tagEn: "Event",
      tagBn: "ইভেন্ট",
      date: "15 June, 2026",
      titleEn: "Annual Quran Recitation Competition and Islamic Cultural Tarbiyah 2026",
      titleBn: "বার্ষিক কুরআন তিলাওয়াত প্রতিযোগিতা এবং ইসলামিক সাংস্কৃতিক তারবিয়াহ ২০২৬"
    },
    {
      id: 4,
      tagEn: "Notice",
      tagBn: "নোটিশ",
      date: "10 June, 2026",
      titleEn: "Summer Vacation and Eid-ul-Adha Holidays Declaration Notice",
      titleBn: "গ্রীষ্মকালীন ছুটি ও ঈদুল আজহার ছুটি ঘোষণার নোটিশ"
    }
  ],
  buttons: {
    viewAllEn: "View All Announcements",
    viewAllBn: "সকল নোটিশ ও ঘোষণা দেখুন"
  }
};

export default function FeaturedNotice() {
  const { lang } = useLanguage();

  const mainNotice = cleanData.notices[0];
  const listNotices = cleanData.notices.slice(1);

  return (
    <section
      id="featured-notices"
      className="w-full py-20 md:py-28 transition-colors duration-500 overflow-hidden"
    >
      <Container>
        <SectionHeader
          badge={lang === "en" ? cleanData.header.badgeEn : cleanData.header.badgeBn}
          title={lang === "en" ? cleanData.header.titleEn : cleanData.header.titleBn}
          highlightWord={lang === "en" ? cleanData.header.highlightWordEn : cleanData.header.highlightWordBn}
          description={lang === "en" ? cleanData.header.descEn : cleanData.header.descBn}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 md:mt-16">
          <div className="lg:col-span-7 group relative p-6 md:p-10 rounded-2xl bg-transparent dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-800 hover:border-accent hover:bg-gradient-to-br from-accent/30 to-transparent transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between select-none will-change-transform">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase bg-foreground text-accent dark:bg-accent dark:text-background">
                  {lang === "en" ? mainNotice.tagEn : mainNotice.tagBn}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500 font-sans">
                  <FiCalendar className="w-3.5 h-3.5 text-accent" />
                  {mainNotice.date}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-foreground dark:group-hover:text-accent transition-colors duration-300 leading-snug">
                {lang === "en" ? mainNotice.titleEn : mainNotice.titleBn}
              </h3>

              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-sans font-light leading-relaxed mt-4">
                {lang === "en" ? mainNotice.descEn : mainNotice.descBn}
              </p>
            </div>

            <div>
              <Button
                label="Read More"
                borderColor="#737373"
                flairColor="#ffbe0b"
                textColor="#737373"
                textHoverColor="#032d22"
                rightIcon={<FiArrowRight />}
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="space-y-3">
              {listNotices.map((item) => (
                <div
                  key={item.id}
                  className="group flex gap-5 p-4 rounded-xl bg-transparent dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-800 hover:border-accent hover:bg-gradient-to-br from-accent/30 to-transparent transition-all duration-300 cursor-pointer select-none"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-foreground/5 dark:bg-white/5 text-neutral-500 dark:text-neutral-400 flex items-center justify-center text-lg transition-all duration-300 group-hover:bg-foreground group-hover:text-accent dark:group-hover:bg-accent dark:group-hover:text-background">
                    <FiFileText className="w-4 h-4" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-sans font-medium text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
                      {item.date}
                    </span>
                    <h4 className="text-sm md:text-base font-sans font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-foreground dark:group-hover:text-accent transition-colors duration-300 line-clamp-1 leading-snug">
                      {lang === "en" ? item.titleEn : item.titleBn}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-2 py-3.5 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl text-xs md:text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:text-foreground dark:hover:text-accent hover:border-foreground dark:hover:border-accent transition-all duration-300 cursor-pointer text-center bg-transparent select-none">
              {lang === "en" ? cleanData.buttons.viewAllEn : cleanData.buttons.viewAllBn}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}