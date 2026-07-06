"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader"; // 🎯 তোমার কাস্টম সেকশন হেডার

export default function CampusFacilities() {
  const { lang } = useLanguage();

  // 🏛️ ৪টি প্রিমিয়াম ফেসিলিটি ডাটা
// 🏛️ ৪টি বাস্তবসম্মত অথচ প্রিমিয়াম ফেসিলিটি ডাটা
  const facilities = [
    {
      id: 1,
      title: { en: "Smart IT & Computer Lab", bn: "স্মার্ট আইটি ও কম্পিউটার ল্যাব" },
      desc: { en: "Modern, fully-equipped computer labs designed to build early tech skills and digital literacy for the future.", bn: "শিক্ষার্থীদের প্রযুক্তিগত দক্ষতা এবং ডিজিটাল লিটারেসি বৃদ্ধির জন্য আধুনিক পিসি ও ইন্টারনেট সমৃদ্ধ আইটি ল্যাব।" },
      image: "/facility/facility-it.jpg",
      tag: "TECHNOLOGY"
    },
    {
      id: 2,
      title: { en: "Academic & Islamic Library", bn: "একাডেমিক ও ইসলামিক লাইব্রেরি" },
      desc: { en: "A quiet, resource-rich environment featuring Cambridge reference books, storybooks, and authentic Islamic literature.", bn: "কেমব্রিজ রেফারেন্স বুক, গল্পের বই এবং বিশুদ্ধ ইসলামিক কিতাব সমৃদ্ধ একটি শান্ত ও জ্ঞানচর্চার উপযুক্ত পরিবেশ।" },
      image: "/facility/facility-library.jpg",
      tag: "KNOWLEDGE"
    },
    {
      id: 3,
      title: { en: "Multimedia Classrooms", bn: "মাল্টিমিডিয়া ক্লাসরুম" },
      desc: { en: "Spacious, well-ventilated classrooms integrated with smart projectors to ensure interactive and engaging learning.", bn: "শিক্ষার্থীদের মনোযোগ ধরে রাখতে স্মার্ট প্রজেক্টর ও মাল্টিমিডিয়া সুবিধা সম্পন্ন প্রশস্ত ও আরামদায়ক ক্লাসরুম।" },
      image: "/facility/facility-classroom.jpg",
      tag: "ENVIRONMENT"
    },
    {
      id: 4,
      title: { en: "Dedicated Hifz Center", bn: "ডেডিকেটেড হিফজ সেন্টার" },
      desc: { en: "A peaceful and disciplined sanctuary focused purely on accurate Quranic memorization and core moral upbringing.", bn: "বিশুদ্ধ কুরআন হিফজ এবং উন্নত চরিত্র গঠনের লক্ষ্যে তৈরি সম্পূর্ণ কোলাহলমুক্ত ও সুশৃঙ্খল একটি পরিবেশ।" },
      image: "/facility/facility-hifz.jpg",
      tag: "SPIRITUALITY"
    }
  ];

  return (
    <section 
      id="campus-facilities" 
      className="relative w-full py-20 overflow-hidden transition-colors duration-500 md:py-28 bg-subtle"
    >
      <Container>
        <SectionHeader
          badge={lang === "en" ? "CAMPUS LIFE" : "ক্যাম্পাস সুযোগ-সুবিধা"}
          title={lang === "en" ? "World-Class Infrastructure" : "আধুনিক ও আন্তর্জাতিক মানের ক্যাম্পাস"}
          center={true}
        />

        <div className="relative z-10 grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="relative overflow-hidden transition-all duration-700 border shadow-xs cursor-pointer group aspect-video rounded-xl xl:rounded-4xl border-neutral-200/50 dark:border-neutral-800/40 hover:shadow-2xl"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-1000 bg-neutral-200 dark:bg-neutral-900 group-hover:scale-105">
                <Image
                  src={fac.image} 
                  alt={fac.title.en}
                  fill
                  className="object-cover opacity-90 dark:opacity-70 contrast-[1.01] mix-blend-normal"
                  sizes="(max-w: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute inset-0 transition-opacity duration-500 bg-linear-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/10 dark:from-neutral-950/95 dark:via-neutral-950/50 dark:to-transparent group-hover:opacity-95" />

              <span className="absolute top-6 right-6 text-[10px] font-sans font-black tracking-widest text-black bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {fac.tag}
              </span>

              <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-8 transition-transform duration-500 transform group-hover:-translate-y-1">
                <h3 className="font-serif text-xl font-bold tracking-tight text-white md:text-2xl">
                  {lang === "en" ? fac.title.en : fac.title.bn}
                </h3>
                
                <p className="mt-3 overflow-hidden font-sans text-sm font-light leading-relaxed transition-all duration-700 ease-in-out opacity-0 text-white/70 max-h-0 group-hover:opacity-100 group-hover:max-h-24">
                  {lang === "en" ? fac.desc.en : fac.desc.bn}
                </p>
              </div>

              <div className="absolute inset-0 rounded-4xl p-0.5 bg-linear-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" 
                   style={{ WebkitMask: 'linear-linear(#fff 0 0) padding-box, linear-linear(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} 
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}