"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";

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
            <div className="w-fit px-4 py-1.5 bg-background-subtle border border-primary dark:border-accent rounded-full select-none">
              <span className="text-xs font-sans font-black uppercase tracking-widest text-primary dark:text-accent">
                {lang === "en" ? "OUR STORY" : "আমাদের গল্প"}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mt-6 leading-tight">
              {lang === "en" ? "Building Tomorrow's Leaders" : "আগামী দিনের নেতৃত্ব গড়ার প্রত্যয়"}
            </h2>

            <div className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 font-sans font-light leading-relaxed mt-6 space-y-4">
              <p>
                {lang === "en"
                  ? "Al-Arafah International School and College was established with a vision to provide world-class education rooted in Islamic values. Our founders recognized the need for an institution that doesn't compromise between academic excellence and spiritual development."
                  : "আল-আরাফাহ ইন্টারন্যাশনাল স্কুল অ্যান্ড কলেজ প্রতিষ্ঠা করা হয়েছিল ইসলামিক মূল্যবোধের ভিত্তিতে বিশ্বমানের শিক্ষা প্রদানের এক সুদূরপ্রসারী ভিশন নিয়ে। আমাদের প্রতিষ্ঠাতারা এমন একটি প্রতিষ্ঠানের প্রয়োজনীয়তা গভীরভাবে উপলব্ধি করেছিলেন যা মেধার বিকাশ ও আধ্যাত্মিক উন্নতির মাঝে কোনো আপস করে না।"}
              </p>
              <p>
                {lang === "en"
                  ? "Today, we stand as a premier educational institution offering Cambridge curriculum from play group to A-Levels, while maintaining a strong focus on Quranic education, Islamic studies, and character development."
                  : "আজ, আমরা একটি অন্যতম শীর্ষস্থানীয় শিক্ষাপ্রতিষ্ঠান হিসেবে প্লে-গ্রুপ থেকে শুরু করে এ-লেভেল পর্যন্ত কেমব্রিজ পাঠ্যক্রম সফলভাবে পরিচালনা করছি, যার পাশাপাশি পবিত্র কুরআন শিক্ষা, ইসলামিক স্টাডিজ এবং চরিত্র গঠনের ওপর সর্বোচ্চ গুরুত্ব দেওয়া হয়।"}
              </p>
              <p>
                {lang === "en"
                  ? "Our graduates have gone on to excel in top universities worldwide while remaining steadfast in their Islamic identity and values."
                  : "আমাদের গ্র্যাজুয়েটরা তাদের ইসলামিক স্বকীয়তা ও মূলবোধে অবিচল থেকে আজ বিশ্বজুড়ে নামী-দামী সব বিশ্ববিদ্যালয়ে নিজেদের মেধার স্বাক্ষর রেখে চলেছে।"}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 w-full aspect-4/3 sm:aspect-16/11 relative rounded-[2.5rem] overflow-hidden border border-neutral-200/40 dark:border-neutral-800/40 shadow-xs group">
            <Image
              src="/banner/banner2.jpg" 
              alt="Al-Arafah Campus"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-95 dark:opacity-85"
              sizes="(max-w: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-neutral-950/10 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>
      </Container>
    </section>
  );
}