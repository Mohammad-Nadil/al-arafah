"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";

// 🏆 প্রিমিয়াম আইকন ইমপোর্ট
import { FiBookOpen, FiActivity, FiCpu } from "react-icons/fi";
import { MdOutlineMosque } from "react-icons/md";
import { BiDna } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";

const FACILITIES_DATA = [
  {
    id: 1,
    icon: <MdOutlineMosque />,
    titleEn: "Hifzul Quran Pathway",
    titleBn: "হিфজুল কুরআন ট্র্যাক",
    descEn: "Structured Hifz program seamlessly integrated with regular Cambridge academic classes.",
    descBn: "নিয়মিত কেমব্রিজ একাডেমিক ক্লাসের সাথে সমন্বিত সুপরিকল্পিত হিফজ প্রোগ্রাম।"
  },
  {
    id: 2,
    icon: <BiDna />,
    titleEn: "Modern Science Labs",
    titleBn: "আধুনিক বিজ্ঞান ল্যাব",
    descEn: "State-of-the-art physics, chemistry, and biology labs for hands-on practical research.",
    descBn: "হাতে-কলমে ব্যবহারিক গবেষণার জন্য অত্যাধুনিক পদার্থ, রসায়ন এবং জীববিজ্ঞান ল্যাব।"
  },
  {
    id: 3,
    icon: <FiCpu />,
    titleEn: "ICT & Robotics Hub",
    titleBn: "আইসিটি ও রোবোটিক্স হাব",
    descEn: "Advanced computer labs equipping students with next-gen coding and tech skills.",
    descBn: "শিক্ষার্থীদের পরবর্তী প্রজন্মের কোডিং এবং প্রযুক্তিগত দক্ষতায় সমৃদ্ধ করার আধুনিক কম্পিউটার ল্যাব।"
  },
  {
    id: 4,
    icon: <FiBookOpen />,
    titleEn: "Rich Islamic Library",
    titleBn: "সমৃদ্ধ ইসলামিক লাইব্রেরি",
    descEn: "A vast collection of academic textbooks, global literature, and deep divine Islamic research papers.",
    descBn: "একাডেমিক পাঠ্যপুস্তক, বৈশ্বিক সাহিত্য এবং গভীর দ্বীনি গবেষণা পত্রের এক বিশাল সংগ্রহশালা।"
  },
  {
    id: 5,
    icon: <FiActivity />,
    titleEn: "Sports & Martial Arts",
    titleBn: "খেলাধুলা ও মার্শাল আর্ট",
    descEn: "Spacious playground paired with professional self-defense training and physical tarbiyah.",
    descBn: "পেশাদার আত্মرক্ষা প্রশিক্ষণ এবং শারীরিক তারবিয়াহর জন্য প্রশস্ত খেলার মাঠ।"
  },
  {
    id: 6,
    icon: <LuGraduationCap />,
    titleEn: "Cambridge Resource Center",
    titleBn: "কেমব্রিজ রিসোর্স সেন্টার",
    descEn: "Dedicated guidance desk providing world-class international scholarship planning resources.",
    descBn: "বিশ্বমানের আন্তর্জাতিক স্কলারশিপ পরিকল্পনার সংস্থান সরবরাহকারী ডেডিকেটেড গাইডেন্স ডেস্ক।"
  }
];

export default function OurFacilities() {
  const { lang } = useLanguage();

  return (
    <section
      id="our-facilities"
      className="w-full py-20 md:py-28 bg-subtle transition-colors duration-500 overflow-hidden"
    >
      <Container>
        <SectionHeader
          badge={lang === "en" ? "World-Class Infrastructure" : "বিশ্বমানের অবকাঠামো"}
          title={
            lang === "en" 
              ? "Our Premium Facilities & Environment" 
              : "আমাদের প্রিমিয়াম সুযোগ-সুবিধা ও পরিবেশ"
          }
          highlightWord={lang === "en" ? "Facilities" : "সুযোগ-সুবিধা"}
          description={
            lang === "en"
              ? "We provide an advanced ecosystem designed to empower students with both cutting-edge global standard education and deep moral character."
              : "আমরা একটি উন্নত ইকোসিস্টেম প্রদান করি যা শিক্ষার্থীদের যুগোপযোগী বৈশ্বিক মানসম্পন্ন শিক্ষা এবং গভীর নৈতিক চরিত্র উভয় ক্ষেত্রেই সমৃদ্ধ করে।"
          }
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {FACILITIES_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative bg-transparent dark:bg-background p-4 md:p-8 rounded-2xl border border-neutral-400 dark:border-neutral-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out select-none"
            >
              <div className="absolute inset-0 bg-linear-to-br from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-[#032d22]/5 dark:bg-white/5 text-[#032d22] dark:text-accent flex items-center justify-center text-2xl mb-6 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:bg-[#032d22] group-hover:text-accent dark:group-hover:bg-accent dark:group-hover:text-[#032d22] shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-lg md:text-xl font-serif font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#032d22] dark:group-hover:text-accent transition-colors duration-300">
                {lang === "en" ? item.titleEn : item.titleBn}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans font-light leading-relaxed mt-3">
                {lang === "en" ? item.descEn : item.descBn}
              </p>
              
              <div className="w-0 h-0.5 bg-accent mt-5 rounded-full group-hover:w-12 transition-all duration-300 ease-in-out" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}