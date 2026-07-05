"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader"; // 🎯 তোমার কাস্টম সেকশন হেডার

// 🏆 সোশ্যাল বা প্রফেশনাল আইকন (ইচ্ছাধীন ব্যবহারের জন্য)
import { FiMail, FiLinkedin } from "react-icons/fi";

const LEADERS = [
  {
    id: 1,
    nameEn: "Prof. Al-Amin Chowdhury",
    nameBn: "প্রফেসর আল-আমিন চৌধুরী",
    roleEn: "Founder & Chairman",
    roleBn: "প্রতিষ্ঠাতা ও চেয়ারম্যান",
    image: "/placeholder.jpg",
    eduEn: "Ex-Professor, Dhaka University",
    eduBn: "সাবেক অধ্যাপক, ঢাকা বিশ্ববিদ্যালয়"
  },
  {
    id: 2,
    nameEn: "Dr. Sayed Mahmud",
    nameBn: "ড. সৈয়দ মাহমুদ",
    roleEn: "Principal & Head of Cambridge",
    roleBn: "অধ্যক্ষ ও প্রধান (কেমব্রিজ শাখা)",
    image: "/placeholder.jpg",
    eduEn: "Ph.D. in Islamic Education (UK)",
    eduBn: "পিএইচডি ইন ইসলামিক এডুকেশন (ইউকে)"
  },
  {
    id: 3,
    nameEn: "Mufti Zubayer Ahmed",
    nameBn: "মুফতি যুবায়ের আহমেদ",
    roleEn: "Director of Hifz & Tarbiyah",
    roleBn: "পরিচালক (হিফজ ও তারবিয়াহ শাখা)",
    image: "/placeholder.jpg",
    eduEn: "Senior Scholar & Academician",
    eduBn: "প্রবীণ ইসলামিক স্কলার ও শিক্ষাবিদ"
  }
];

export default function LeadershipTeam() {
  const { lang } = useLanguage();

  return (
    <section 
      id="leadership-team" 
      className="w-full py-20 md:py-28 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500 overflow-hidden relative"
    >
      <Container>
        {/* 🎯 তোমার কাস্টম গ্লোবাল সেকশন হেডার */}
        <SectionHeader
          badge={lang === "en" ? "GOVERNING BODY" : "পরিচালনা পর্ষদ"}
          title={lang === "en" ? "The Minds Behind Al-Arafah" : "আল-আরাফাহর দূরদর্শী নেতৃত্ব"}
          center={true}
        />

        {/* 👥 লিডারশিপ মেম্বারদের লাক্সারি কার্ড গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16 relative z-10">
          {LEADERS.map((leader) => (
            <div 
              key={leader.id}
              className="group flex flex-col items-center text-center bg-transparent rounded-3xl p-5 border border-transparent hover:border-neutral-200/50 dark:hover:border-neutral-800/40 transition-all duration-500 hover:shadow-xl"
            >
              {/* 📸 প্রফেশনাল পোর্ট্রেট এরিয়া (গ্লসি লিনিয়ার বর্ডারসহ) */}
              <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-full overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60 shadow-md mb-6 transition-all duration-700 group-hover:scale-105">
                {/* হোভার গ্রেডিয়েন্ট রিং */}
                <div className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-tr from-[var(--primary)] via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" 
                     style={{ WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} 
                />
                
                <Image
                  src={leader.image} // 🎯 পিন্টারেস্ট থেকে ৩টা ফরমাল পোর্ট্রেট ছবি নামিয়ে নিও ভাই
                  alt={leader.nameEn}
                  fill
                  className="object-cover opacity-95 dark:opacity-85 filter contrast-[1.02]"
                  sizes="20vw"
                />
              </div>

              {/* 📝 মেম্বার ডিটেইলস */}
              <span className="text-[10px] font-sans font-bold tracking-widest text-[var(--primary)] dark:text-[var(--accent)] uppercase mb-1.5">
                {lang === "en" ? leader.roleEn : leader.roleBn}
              </span>
              
              <h3 className="text-lg md:text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[var(--primary)] dark:group-hover:text-[var(--accent)] transition-colors duration-300">
                {lang === "en" ? leader.nameEn : leader.nameBn}
              </h3>
              
              <p className="text-xs md:text-sm font-sans font-light text-neutral-400 dark:text-neutral-500 mt-2 max-w-[240px]">
                {lang === "en" ? leader.eduEn : leader.eduBn}
              </p>

              {/* 🔗 কুইক সোশাল কানেক্ট হোভার এনিমেশন */}
              <div className="flex items-center gap-3 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <button className="text-neutral-400 hover:text-[var(--primary)] dark:hover:text-[var(--accent)] transition-colors">
                  <FiMail className="w-4 h-4" />
                </button>
                <button className="text-neutral-400 hover:text-[var(--primary)] dark:hover:text-[var(--accent)] transition-colors">
                  <FiLinkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}