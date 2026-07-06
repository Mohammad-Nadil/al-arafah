"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";

const cleanData = {
  header: {
    badgeEn: "CAMPUS LIFE",
    badgeBn: "ক্যাম্পাস সুযোগ-সুবিধা",
    titleEn: "World-Class Infrastructure",
    titleBn: "আধুনিক ও আন্তর্জাতিক মানের ক্যাম্পাস",
  },
  facilities: [
    {
      id: 1,
      titleEn: "Smart IT & Computer Lab",
      titleBn: "স্মার্ট আইটি ও কম্পিউটার ল্যাব",
      descEn: "Modern, fully-equipped computer labs designed to build early tech skills and digital literacy for the future.",
      descBn: "শিক্ষার্থীদের প্রযুক্তিগত দক্ষতা এবং ডিজিটাল লিটারেসি বৃদ্ধির জন্য আধুনিক পিসি ও ইন্টারনেট সমৃদ্ধ আইটি ল্যাব।",
      image: "/facility/facility-it.jpg",
      tag: "TECHNOLOGY"
    },
    {
      id: 2,
      titleEn: "Academic & Islamic Library",
      titleBn: "একাডেমিক ও ইসলামিক লাইব্রেরি",
      descEn: "A quiet, resource-rich environment featuring Cambridge reference books, storybooks, and authentic Islamic literature.",
      descBn: "কেমব্রিজ রেফারেন্স বুক, গল্পের বই এবং বিশুদ্ধ ইসলামিক কিতাব সমৃদ্ধ একটি শান্ত ও জ্ঞানচর্চার উপযুক্ত পরিবেশ।",
      image: "/facility/facility-library.jpg",
      tag: "KNOWLEDGE"
    },
    {
      id: 3,
      titleEn: "Multimedia Classrooms",
      titleBn: "মাল্টিমিডিয়া ক্লাসরুম",
      descEn: "Spacious, well-ventilated classrooms integrated with smart projectors to ensure interactive and engaging learning.",
      descBn: "শিক্ষার্থীদের মনোযোগ ধরে রাখতে স্মার্ট প্রজেক্টর ও মাল্টিমিডিয়া সুবিধা সম্পন্ন প্রশস্ত ও আরামদায়ক ক্লাসরুম।",
      image: "/facility/facility-classroom.jpg",
      tag: "ENVIRONMENT"
    },
    {
      id: 4,
      titleEn: "Dedicated Hifz Center",
      titleBn: "ডিকেটেড হিফজ সেন্টার",
      descEn: "A peaceful and disciplined sanctuary focused purely on accurate Quranic memorization and core moral upbringing.",
      descBn: "বিশুদ্ধ কুরআন হিফজ এবং উন্নত চরিত্র গঠনের লক্ষ্যে তৈরি সম্পূর্ণ কোলাহলমুক্ত ও সুশৃঙ্খল একটি পরিবেশ।",
      image: "/facility/facility-hifz.jpg",
      tag: "SPIRITUALITY"
    }
  ]
};

export default function CampusFacilities() {
  const { lang } = useLanguage();

  return (
    <section 
      id="campus-facilities" 
      className="relative w-full py-20 overflow-hidden transition-colors duration-500 md:py-28 bg-subtle text-foreground"
    >
      <Container>
        <SectionHeader
          badge={lang === "en" ? cleanData.header.badgeEn : cleanData.header.badgeBn}
          title={lang === "en" ? cleanData.header.titleEn : cleanData.header.titleBn}
          center={true}
        />

        <div className="relative z-10 grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
          {cleanData.facilities.map((fac) => (
            <div
              key={fac.id}
              className="relative overflow-hidden transition-all duration-700 border shadow-sm cursor-pointer group aspect-video rounded-xl xl:rounded-4xl border-neutral-200/50 dark:border-neutral-800/40 hover:shadow-2xl"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-1000 bg-neutral-200 dark:bg-neutral-900 md:group-hover:scale-105">
                <Image
                  src={fac.image} 
                  alt={fac.titleEn}
                  fill
                  sizes="(max-w: 768px) 100vw, (max-w: 1200px) 50vw, 45vw"
                  className="object-cover opacity-90 dark:opacity-70 contrast-[1.01]"
                />
              </div>

              <div className="absolute inset-0 transition-opacity duration-500 bg-linear-to-t from-neutral-950/95 via-neutral-950/60 to-neutral-950/20 dark:from-neutral-950/95 dark:via-neutral-950/70 dark:to-transparent md:via-neutral-950/40 md:to-neutral-950/10 md:group-hover:opacity-95" />

              <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[9px] sm:text-[10px] font-sans font-black tracking-widest text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 select-none">
                {fac.tag}
              </span>

              <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-5 sm:p-8 transition-transform duration-500 transform md:group-hover:-translate-y-1 select-none">
                <h3 className="font-serif text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
                  {lang === "en" ? fac.titleEn : fac.titleBn}
                </h3>
                <p className="mt-2 sm:mt-3 overflow-hidden font-sans text-xs sm:text-sm font-light leading-relaxed transition-all duration-700 ease-in-out text-white/80 md:text-white/70 opacity-100 max-h-28 md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-24">
                  {lang === "en" ? fac.descEn : fac.descBn}
                </p>
              </div>

              <div 
                className="absolute inset-0 rounded-xl xl:rounded-4xl p-0.5 bg-linear-to-br from-white/20 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" 
                style={{ 
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', 
                  WebkitMaskComposite: 'xor', 
                  maskComposite: 'exclude' 
                }} 
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}