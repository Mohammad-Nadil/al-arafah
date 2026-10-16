"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";


const cleanData = {
  header: {
    badgeEn: "CAMPUS FACILITIES",
    badgeBn: "আমাদের শিক্ষার সুযোগ-সুবিধা",
    titleEn: "Facilities That Support Learning",
    titleBn: "শেখার উপযোগী পরিবেশ ও সুবিধা",
  },
  facilities: [
    {
      id: 1,
      titleEn: "Computer Learning",
      titleBn: "কম্পিউটার শিক্ষা",
      descEn:
        "Computer education is compulsory from Standard II, helping students develop essential digital knowledge and practical computer skills.",
      descBn:
        "দ্বিতীয় শ্রেণি থেকে কম্পিউটার শিক্ষা বাধ্যতামূলক। এর মাধ্যমে শিক্ষার্থীরা প্রয়োজনীয় ডিজিটাল জ্ঞান ও কম্পিউটার ব্যবহারের দক্ষতা অর্জনের সুযোগ পায়।",
      image: "/facility/facility-it.jpg",
      tag: "TECHNOLOGY",
    },
    {
      id: 2,
      titleEn: "Library & Reading",
      titleBn: "লাইব্রেরি ও পাঠাভ্যাস",
      descEn:
        "Students can explore academic books, reference materials, and leisure reading resources. Teachers and senior students also have access to an Islamic book library maintained by the Foundation.",
      descBn:
        "শিক্ষার্থীদের জন্য রয়েছে পাঠ্যবই, তথ্যসূত্রের বই ও অবসর সময়ে পড়ার উপযোগী বই। এ ছাড়া ফাউন্ডেশন পরিচালিত ইসলামি বইয়ের লাইব্রেরি ব্যবহারের সুযোগ রয়েছে শিক্ষকদের ও জ্যেষ্ঠ শিক্ষার্থীদের।",
      image: "/facility/facility-library.jpg",
      tag: "KNOWLEDGE",
    },
    {
      id: 3,
      titleEn: "DigiClass Learning",
      titleBn: "ডিজিক্লাসে পাঠদান",
      descEn:
        "DigiClass multimedia resources include interactive 3D demonstrations, educational games, rhymes, and e-books to make lessons more engaging.",
      descBn:
        "ডিজিক্লাসের মাধ্যমে ত্রিমাত্রিক উপস্থাপনা, শিক্ষামূলক গেম, ছড়া ও ই-বুক ব্যবহার করে পাঠদানকে আরও আকর্ষণীয় ও সহজবোধ্য করার সুযোগ রয়েছে।",
      image: "/facility/facility-classroom.jpg",
      tag: "DIGITAL LEARNING",
    },
    {
      id: 4,
      titleEn: "Science Laboratory",
      titleBn: "বিজ্ঞানাগার",
      descEn:
        "A separate science laboratory supports practical learning and helps students connect classroom lessons with scientific concepts.",
      descBn:
        "পৃথক বিজ্ঞানাগার ব্যবহারিক শিক্ষায় সহায়তা করে এবং শ্রেণিকক্ষে শেখা বিষয়গুলোর সঙ্গে বৈজ্ঞানিক ধারণার সম্পর্ক বুঝতে শিক্ষার্থীদের সাহায্য করে।",
      image: "/facility/facility-laboratory.jpg",
      tag: "PRACTICAL LEARNING",
    },
    {
      id: 5,
      titleEn: "Hifzul Quran Section",
      titleBn: "হিফজুল কুরআন বিভাগ",
      descEn:
        "A dedicated section provides opportunities for Quran memorization, with a junior programme for younger children and a full-time Hifz pathway for eligible students.",
      descBn:
        "হিফজুল কুরআন বিভাগে ছোট শিশুদের জন্য জুনিয়র কার্যক্রম এবং উপযুক্ত শিক্ষার্থীদের জন্য পূর্ণকালীন হিফজের সুযোগ রয়েছে।",
      image: "/facility/facility-hifz.jpg",
      tag: "QURAN EDUCATION",
    },
    {
      id: 6,
      titleEn: "School Transport",
      titleBn: "স্কুল পরিবহন",
      descEn:
        "School transport operates on designated routes, with experienced drivers and female attendants to support students during their journeys.",
      descBn:
        "নির্ধারিত রুটে স্কুল পরিবহন ব্যবস্থা রয়েছে। যাতায়াতের সময় শিক্ষার্থীদের সহায়তার জন্য অভিজ্ঞ চালক ও নারী সহকারী থাকেন।",
      image: "/facility/facility-transport.jpg",
      tag: "TRANSPORT",
    },
  ],
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

        <div className="relative z-10 grid grid-cols-1 gap-4 mt-16 md:grid-cols-2 xl:grid-cols-3">
          {cleanData.facilities.map((fac) => (
            <div
              key={fac.id}
              className="relative overflow-hidden transition-all duration-700 border shadow-sm cursor-pointer group aspect-video rounded-xl  border-neutral-200/50  hover:shadow-2xl"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-1000 bg-neutral-200  md:group-hover:scale-105">
                <Image
                  src={fac.image} 
                  alt={fac.titleEn}
                  fill
                  sizes="(max-w: 768px) 100vw, (max-w: 1200px) 50vw, 45vw"
                  className="object-cover opacity-90  contrast-[1.01]"
                />
              </div>

              <div className="absolute inset-0 transition-opacity duration-500 bg-linear-to-t from-neutral-950/95 via-neutral-950/60 to-neutral-950/20    md:via-neutral-950/40 md:to-neutral-950/10 md:group-hover:opacity-95" />

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