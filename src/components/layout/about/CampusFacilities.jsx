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
      className="w-full py-20 md:py-28 bg-[var(--background-subtle)] transition-colors duration-500 relative overflow-hidden"
    >
      <Container>
        {/* 🎯 তোমার কাস্টম গ্লোবাল সেকশন হেডার */}
        <SectionHeader
          badge={lang === "en" ? "CAMPUS LIFE" : "ক্যাম্পাস সুযোগ-সুবিধা"}
          title={lang === "en" ? "World-Class Infrastructure" : "আধুনিক ও আন্তর্জাতিক মানের ক্যাম্পাস"}
          center={true}
        />

        {/* 🎴 ৪-কলাম এডিটোনিয়াল সিনেমাটিক গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 relative z-10">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="group relative h-[300px] md:h-[380px] rounded-[2rem] overflow-hidden border border-neutral-200/50 dark:border-neutral-800/40 shadow-xs hover:shadow-2xl transition-all duration-700 cursor-pointer"
            >
              {/* 📸 ব্যাকগ্রাউন্ড ইমেজ উইথ প্রিমিয়াম জুম ইফেক্ট */}
              <div className="absolute inset-0 w-full h-full bg-neutral-200 dark:bg-neutral-900 transition-transform duration-1000 group-hover:scale-105">
                <Image
                  src={fac.image} // 🎯 পিন্টারেস্ট থেকে লাক্সারি ৪টি ছবি নামিয়ে পাথ বসাবে ভাই
                  alt={fac.title.en}
                  fill
                  className="object-cover opacity-90 dark:opacity-70 contrast-[1.01] mix-blend-normal"
                  sizes="(max-w: 768px) 100vw, 50vw"
                />
              </div>

              {/* 🌌 সিনেমাটিক ডার্ক ওভারলে গ্রেডিয়েন্ট */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/10 dark:from-neutral-950/95 dark:via-neutral-950/50 dark:to-transparent transition-opacity duration-500 group-hover:opacity-95" />

              {/* ⚡ টপ-রাইট মিনিমাল ট্যাগ */}
              <span className="absolute top-6 right-6 text-[10px] font-sans font-black tracking-widest text-white/60 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {fac.tag}
              </span>

              {/* 📝 নিচে পজিশন করা টেক্সট কন্টেন্ট (হোভার করলে স্মুথলি স্লাইড হবে) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                {/* ফেসিলিটি টাইটেল */}
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
                  {lang === "en" ? fac.title.en : fac.title.bn}
                </h3>
                
                {/* ফেসিলিটি ডেসক্রিপশন (হোভার করলে অপাসিটি ১ হবে এবং চমৎকার রিলিজ হবে) */}
                <p className="text-sm font-sans font-light text-white/70 mt-3 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-700 ease-in-out overflow-hidden">
                  {lang === "en" ? fac.desc.en : fac.desc.bn}
                </p>
              </div>

              {/* ✨ চারপাশের সূক্ষ্ম গ্লসি লিনিয়ার হোভার বর্ডার */}
              <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" 
                   style={{ WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} 
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}