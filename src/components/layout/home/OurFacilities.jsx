"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiBookOpen, FiMonitor, FiTruck,  } from "react-icons/fi";
import { MdOutlineMosque } from "react-icons/md";
import { BiDna } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";

const cleanData = {
  header: {
    badgeEn: "Learning Facilities",
    badgeBn: "শিক্ষার সহায়ক সুবিধা",
    titleEn: "Facilities for Better Learning",
    titleBn: "উন্নত শিক্ষার জন্য প্রয়োজনীয় সুবিধা",
    highlightWordEn: "Facilities",
    highlightWordBn: "শিক্ষার",
    descEn:
      "A supportive learning environment combining modern education, Islamic values, and practical learning opportunities.",
    descBn:
      "আধুনিক শিক্ষা, ইসলামী মূল্যবোধ ও হাতে-কলমে শেখার সুযোগ নিয়ে আমাদের শিক্ষার্থীদের জন্য একটি সুন্দর শিক্ষার পরিবেশ।",
  },

  facilities: [
    {
      id: 1,
      icon: <LuGraduationCap />,
      titleEn: "English-Medium Education",
      titleBn: "ইংরেজি মাধ্যমের শিক্ষা",
      descEn:
        "English-medium education from Play Group to O' Level, with Islamic values and Bangla and Arabic learning.",
      descBn:
        "প্লে গ্রুপ থেকে ও লেভেল পর্যন্ত ইংরেজি মাধ্যমে পড়াশোনা, পাশাপাশি ইসলামী মূল্যবোধ, বাংলা ও আরবি শিক্ষা।",
    },
    {
      id: 2,
      icon: <MdOutlineMosque />,
      titleEn: "Hifzul Quran Section",
      titleBn: "হিফজুল কুরআন বিভাগ",
      descEn:
        "A dedicated Quran memorization program with a junior section and full-time Hifz opportunities.",
      descBn:
        "কুরআন হেফজের জন্য বিশেষ বিভাগ। ছোটদের জুনিয়র বিভাগ ও উপযুক্ত শিক্ষার্থীদের জন্য পূর্ণকালীন হিফজের ব্যবস্থা।",
    },
    {
      id: 3,
      icon: <FiMonitor />,
      titleEn: "DigiClass Learning",
      titleBn: "ডিজিক্লাসে আধুনিক শিক্ষা",
      descEn:
        "Multimedia lessons with interactive 3D content, educational games, rhymes, and e-books.",
      descBn:
        "ত্রিমাত্রিক উপস্থাপনা, শিক্ষামূলক খেলা, ছড়া ও ই-বুকের মাধ্যমে সহজ ও আনন্দদায়ক পাঠদান।",
    },
    {
      id: 4,
      icon: <FiBookOpen />,
      titleEn: "Library Facilities",
      titleBn: "সমৃদ্ধ গ্রন্থাগার",
      descEn:
        "Academic books, reference materials, and leisure reading, with access to an additional Islamic library for teachers and senior students.",
      descBn:
        "পাঠ্যবই, সহায়ক বই ও গল্প-সাহিত্য পড়ার সুযোগ। শিক্ষক ও জ্যেষ্ঠ শিক্ষার্থীরা অতিরিক্ত একটি ইসলামী গ্রন্থাগারও ব্যবহার করতে পারেন।",
    },
    {
      id: 5,
      icon: <BiDna />,
      titleEn: "Science & Computer Labs",
      titleBn: "বিজ্ঞান ও কম্পিউটার ল্যাব",
      descEn:
        "Separate science and computer laboratories to support practical learning and computer education.",
      descBn:
        "বিজ্ঞান ও কম্পিউটার বিষয়ে হাতে-কলমে শেখার জন্য আলাদা ল্যাবের ব্যবস্থা।",
    },
    {
      id: 6,
      icon: <FiTruck />,
      titleEn: "School Transport",
      titleBn: "স্কুল পরিবহন",
      descEn:
        "School bus services on designated routes, with experienced drivers and female attendants.",
      descBn:
        "নির্ধারিত রুটে স্কুল বাসের ব্যবস্থা, যেখানে অভিজ্ঞ চালকের পাশাপাশি নারী সহকারী থাকেন।",
    },
  ],
};

export default function OurFacilities() {
  const { lang } = useLanguage();

  return (
    <section
      id="our-facilities"
      className="w-full py-20 md:py-28 bg-subtle  text-foreground transition-colors duration-500 overflow-hidden"
    >
      <Container>
        <SectionHeader
          badge={lang === "en" ? cleanData.header.badgeEn : cleanData.header.badgeBn}
          title={lang === "en" ? cleanData.header.titleEn : cleanData.header.titleBn}
          highlightWord={lang === "en" ? cleanData.header.highlightWordEn : cleanData.header.highlightWordBn}
          description={lang === "en" ? cleanData.header.descEn : cleanData.header.descBn}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {cleanData.facilities.map((item) => (
            <div
              key={item.id}
              className="group relative bg-transparent  p-4 md:p-6 rounded-2xl border border-neutral-400  shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out select-none"
            >
             

              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-2xl mb-6 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-lg md:text-xl font-serif font-semibold text-neutral-900 group-hover:text-primary transition-colors duration-300">
                {lang === "en" ? item.titleEn : item.titleBn}
              </h3>

              <p className="text-sm text-neutral-600  font-sans font-light leading-relaxed mt-3">
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