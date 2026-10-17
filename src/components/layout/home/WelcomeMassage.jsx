"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { RiDoubleQuotesL } from "react-icons/ri";



const cleanData = {
  header: {
    badgeEn: "WELCOME TO AL-ARAFAH",
    badgeBn: "আল-আরাফাহতে স্বাগতম",
    titleEn: "Education with Knowledge & Values",
    titleBn: "জ্ঞান ও মূল্যবোধের সমন্বয়ে শিক্ষা",
    highlightWordEn: "Values",
    highlightWordBn: "মূল্যবোধের",
  },
  quote: {
    en: "“A Home of Moral & Modern Education”",
    bn: "“নৈতিকতা ও আধুনিক শিক্ষার ঠিকানা”",
  },
  paragraphs: [
    {
      en: "Established in 1998 under the welfare project of Al-Arafah Islami Bank Foundation, Al-Arafah Islamic International School & College aims to combine modern English-medium education with Islamic teachings and moral values.",
      bn: "আল-আরাফাহ ইসলামী ব্যাংক ফাউন্ডেশনের কল্যাণমূলক প্রকল্পের অধীনে ১৯৯৮ সালে প্রতিষ্ঠিত আল-আরাফাহ ইসলামিক ইন্টারন্যাশনাল স্কুল এন্ড কলেজে আধুনিক ইংরেজি মাধ্যমের শিক্ষার সঙ্গে ইসলামী শিক্ষা ও নৈতিক মূল্যবোধের সমন্বয়ের ওপর গুরুত্ব দেওয়া হয়।",
    },
    {
      en: "From academic learning and computer education to Hifzul Quran and co-curricular activities, we aim to support students in developing knowledge, good character, and the skills needed for a responsible life.",
      bn: "পাঠ্যশিক্ষা ও কম্পিউটার শিক্ষা থেকে শুরু করে হিফজুল কুরআন ও সহশিক্ষামূলক কার্যক্রম—বিভিন্ন উদ্যোগের মাধ্যমে শিক্ষার্থীদের জ্ঞান, উত্তম চরিত্র এবং দায়িত্বশীল জীবন গড়ার প্রয়োজনীয় দক্ষতা বিকাশে আমরা সহায়তা করতে চাই।",
    },
  ],
  author: {
    nameEn: "Al-Arafah Islamic International School & College",
    nameBn: "আল-আরাফাহ ইসলামিক ইন্টারন্যাশনাল স্কুল এন্ড কলেজ",
    roleEn: "Our Educational Commitment",
    roleBn: "আমাদের শিক্ষাদর্শন",
  },
  image: {
    src: "/principal.jpeg",
    badgeVal: "1998",
    badgeLabelEn: "Established",
    badgeLabelBn: "প্রতিষ্ঠিত",
  },
};


export default function WelcomeMassage() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".js-welcome-text-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".js-welcome-img-container",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="welcome-message"
      className="w-full py-20 md:py-28 overflow-hidden bg-background text-foreground"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="js-welcome-text-anim">
              <SectionHeader
                badge={lang === "en" ? cleanData.header.badgeEn : cleanData.header.badgeBn}
                title={lang === "en" ? cleanData.header.titleEn : cleanData.header.titleBn}
                highlightWord={lang === "en" ? cleanData.header.highlightWordEn : cleanData.header.highlightWordBn}
                align="left"
                className="mb-0! md:mb-0!"
              />
            </div>

            <div className="js-welcome-text-anim relative pl-6 border-l-2 border-accent bg-accent/5 py-4 pr-4 rounded-r-xl">
              <RiDoubleQuotesL className="text-accent text-5xl opacity-20 absolute -top-3 left-2" />
              <p className="text-base sm:text-lg font-serif italic text-neutral-700  leading-relaxed">
                {lang === "en" ? cleanData.quote.en : cleanData.quote.bn}
              </p>
            </div>

            <div className="js-welcome-text-anim space-y-4 text-sm sm:text-base text-neutral-600  font-sans leading-relaxed">
              {cleanData.paragraphs.map((para, i) => (
                <p key={i}>{lang === "en" ? para.en : para.bn}</p>
              ))}
            </div>

            <div className="js-welcome-text-anim pt-4 flex items-center gap-4">
              <div className="h-px w-12 bg-neutral-300 " />
              <div>
                <h4 className="font-serif text-base font-semibold text-primary">
                  {lang === "en" ? cleanData.author.nameEn : cleanData.author.nameBn}
                </h4>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mt-0.5 font-sans">
                  {lang === "en" ? cleanData.author.roleEn : cleanData.author.roleBn}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="js-welcome-img-container relative w-full max-w-95">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl pointer-events-none" />

              <div className="absolute inset-0 border border-accent/30 translate-x-4 translate-y-4 rounded md:rounded-4xl rounded-bl-none pointer-events-none z-0 transition-transform duration-500 group-hover:translate-x-2" />

              <div className="relative w-full aspect-4/5 rounded md:rounded-4xl rounded-bl-none overflow-hidden shadow-xl bg-neutral-100  border border-neutral-200/40  z-10">
                <Image
                  src={cleanData.image.src}
                  alt="Principal of Al-Arafah"
                  fill
                  priority
                  sizes="(max-w: 768px) 100vw, (max-w: 1200px) 40vw, 33vw"
                  className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-navy border border-accent/40 text-white px-5 py-3 rounded-xl shadow-lg z-20 text-center font-serif">
                <span className="block text-xl font-bold text-accent leading-none">
                  {cleanData.image.badgeVal}
                </span>
                <span className="text-[10px] uppercase tracking-widest block mt-1 text-gray-300 font-sans">
                  {lang === "en" ? cleanData.image.badgeLabelEn : cleanData.image.badgeLabelBn}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}