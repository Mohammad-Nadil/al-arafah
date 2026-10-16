"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";


const cleanData = {
  header: {
    tagEn: "OUR STORY",
    tagBn: "আমাদের পরিচয়",
    titleEn: "A Legacy of Moral & Modern Education",
    titleBn: "নৈতিকতা ও আধুনিক শিক্ষার এক পথচলা",
  },

  paragraphs: [
    {
      en: "Established in 1998 under the welfare project of Al-Arafah Islami Bank Foundation, Al-Arafah Islamic International School & College was founded to promote Islamic education alongside internationally recognized modern education.",
      bn: "আল-আরাফাহ ইসলামী ব্যাংক ফাউন্ডেশনের কল্যাণমূলক প্রকল্পের অধীনে ১৯৯৮ সালে আল-আরাফাহ ইসলামিক ইন্টারন্যাশনাল স্কুল এন্ড কলেজ প্রতিষ্ঠিত হয়। ইসলামী শিক্ষার প্রসারের পাশাপাশি আন্তর্জাতিকভাবে স্বীকৃত আধুনিক শিক্ষার সুযোগ তৈরি করাই ছিল এর অন্যতম লক্ষ্য।",
    },
    {
      en: "Our educational vision is to nurture students through an English-medium curriculum enriched with Islamic teachings, the values of the Holy Quran and Sunnah, and the development of moral character. We aim to prepare students with the knowledge and skills needed for a responsible and honorable life.",
      bn: "ইংরেজি মাধ্যমের পাঠ্যক্রমের সঙ্গে ইসলামী শিক্ষা, পবিত্র কুরআন ও সুন্নাহর আদর্শ এবং নৈতিক চরিত্র গঠনের সমন্বয় আমাদের শিক্ষাদর্শনের মূল ভিত্তি। শিক্ষার্থীদের জ্ঞান ও দক্ষতা অর্জনের পাশাপাশি দায়িত্বশীল ও সম্মানজনক জীবন গড়তে প্রস্তুত করাই আমাদের লক্ষ্য।",
    },
    {
      en: "Alongside general education, the institution offers a dedicated Hifzul Quran section, computer education, and co-curricular activities to support students' intellectual, moral, and personal development. The prospectus describes education from Play Group to O' Level, with a gradual progression towards A' Level.",
      bn: "সাধারণ শিক্ষার পাশাপাশি এখানে রয়েছে হিফজুল কুরআন বিভাগ, কম্পিউটার শিক্ষা ও সহশিক্ষামূলক কার্যক্রম, যা শিক্ষার্থীদের জ্ঞান, নৈতিকতা ও ব্যক্তিত্ব বিকাশে সহায়তা করে। প্রসপেক্টাসে প্লে গ্রুপ থেকে ও লেভেল পর্যন্ত শিক্ষার কথা উল্লেখ রয়েছে এবং ধীরে ধীরে এ লেভেলের দিকে এগিয়ে যাওয়ার পরিকল্পনাও তুলে ধরা হয়েছে।",
    },
  ],

  image: {
    src: "/banner/banner2.jpg",
    alt: "Al-Arafah Islamic International School & College",
  },
};


export default function OurStory() {
  const { lang } = useLanguage();

  return (
    <section 
      id="our-story" 
      className="w-full py-20 bg-subtle text-foreground transition-colors duration-500 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <div className="w-fit px-4 py-1.5  border border-primary  rounded-full select-none">
              <span className="text-xs font-sans font-black uppercase tracking-widest text-primary ">
                {lang === "en" ? cleanData.header.tagEn : cleanData.header.tagBn}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900  tracking-tight mt-6 leading-tight">
              {lang === "en" ? cleanData.header.titleEn : cleanData.header.titleBn}
            </h2>

            <div className="text-sm md:text-base text-neutral-500  font-sans font-light leading-relaxed mt-6 space-y-4">
              {cleanData.paragraphs.map((para, idx) => (
                <p key={idx}>{lang === "en" ? para.en : para.bn}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 w-full aspect-4/3 sm:aspect-16/11 xl:aspect-14/11 relative rounded-[2.5rem] overflow-hidden border border-neutral-200/40  shadow-sm group">
            <Image
              src={cleanData.image.src} 
              alt={cleanData.image.alt}
              fill
              sizes="(max-w: 768px) 100vw, (max-w: 1200px) 40vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-95 "
            />
            <div className="absolute inset-0 bg-linear-to-tr from-neutral-950/10 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>
      </Container>
    </section>
  );
}