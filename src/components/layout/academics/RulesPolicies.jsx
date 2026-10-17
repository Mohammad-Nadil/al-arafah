"use client";

import React, { useState } from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiChevronDown, FiShield } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export default function RulesPolicies() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";
  const [openIndex, setOpenIndex] = useState(0);

  const policies = [
    {
      category: {
        en: "Attendance & Re-admission",
        bn: "উপস্থিতি ও পুনঃভর্তি",
      },
      content: {
        en: "Students are expected to attend classes regularly. According to the prospectus, re-admission requires at least 75% attendance. Please contact the school for any additional conditions or updated requirements.",
        bn: "শিক্ষার্থীদের নিয়মিত ক্লাসে উপস্থিত থাকতে হবে। প্রসপেক্টাস অনুযায়ী, পুনঃভর্তির জন্য কমপক্ষে ৭৫% উপস্থিতি প্রয়োজন। অতিরিক্ত শর্ত বা হালনাগাদ নিয়ম জানতে প্রতিষ্ঠানের সঙ্গে যোগাযোগ করুন।",
      },
    },
    {
      category: {
        en: "Conduct & Islamic Values",
        bn: "আচরণ ও ইসলামী মূল্যবোধ",
      },
      content: {
        en: "Students are encouraged to practise good manners, respect teachers and fellow students, maintain discipline, and develop character in accordance with Islamic teachings.",
        bn: "শিক্ষার্থীদের উত্তম আদব-আখলাক চর্চা, শিক্ষক ও সহপাঠীদের সম্মান, শৃঙ্খলা বজায় রাখা এবং ইসলামী শিক্ষার আলোকে চরিত্র গঠনে উৎসাহিত করা হয়।",
      },
    },
    {
      category: {
        en: "Academic Progress",
        bn: "শিক্ষাগত অগ্রগতি",
      },
      content: {
        en: "Students' academic progress is an important part of school life. Parents and guardians should stay informed about their children's learning and communicate with the school when necessary.",
        bn: "শিক্ষার্থীদের শিক্ষাগত অগ্রগতি বিদ্যালয়জীবনের গুরুত্বপূর্ণ অংশ। অভিভাবকদের সন্তানের পড়াশোনার খোঁজ রাখা এবং প্রয়োজন অনুযায়ী প্রতিষ্ঠানের সঙ্গে যোগাযোগ করা উচিত।",
      },
    },
    {
      category: {
        en: "School Uniform & Appearance",
        bn: "স্কুলের পোশাক ও পরিচ্ছন্নতা",
      },
      content: {
        en: "For the current prescribed uniform, grooming standards, and related requirements, please follow the school's latest instructions or contact the administration.",
        bn: "নির্ধারিত স্কুলের পোশাক, পরিচ্ছন্নতা ও এ-সংক্রান্ত নিয়মের জন্য প্রতিষ্ঠানের সর্বশেষ নির্দেশনা অনুসরণ করুন অথবা প্রশাসনের সঙ্গে যোগাযোগ করুন।",
      },
    },
    {
      category: {
        en: "Parent-School Communication",
        bn: "অভিভাবক ও প্রতিষ্ঠানের যোগাযোগ",
      },
      content: {
        en: "Regular parent-teacher meetings are arranged to discuss students' academic progress and development. Parents may contact the school to learn about meeting schedules and appointment procedures.",
        bn: "শিক্ষার্থীদের পড়াশোনা ও বিকাশ নিয়ে আলোচনা করার জন্য নিয়মিত অভিভাবক-শিক্ষক সভার আয়োজন করা হয়। সভার সময়সূচি ও সাক্ষাতের নিয়ম জানতে অভিভাবকেরা প্রতিষ্ঠানের সঙ্গে যোগাযোগ করতে পারেন।",
      },
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="rules-policies"
      className="relative w-full border-t border-shield/35 bg-background py-16 md:py-24"
    >
      <Container>
        <SectionHeader
          badge={isEnglish ? "Guidelines & Standards" : "নির্দেশনা ও নিয়মাবলি"}
          title={
            isEnglish
              ? "Rules & School Policies"
              : "নিয়মকানুন ও বিদ্যালয়ের নীতিমালা"
          }
          highlightWord={isEnglish ? "Policies" : "নীতিমালা"}
          description={
            isEnglish
              ? "Understanding school expectations, attendance requirements, Islamic values, and parent-school communication."
              : "বিদ্যালয়ের প্রত্যাশা, উপস্থিতির শর্ত, ইসলামী মূল্যবোধ এবং অভিভাবক-প্রতিষ্ঠানের যোগাযোগ সম্পর্কে জানুন।"
          }
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {policies.map((policy, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={policy.category.en}
                className="overflow-hidden rounded-xl border border-shield/60 bg-white shadow-sm transition-all duration-300 hover:border-primary/40"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`policy-panel-${idx}`}
                  className="flex w-full cursor-pointer items-center justify-between gap-3 p-5 text-left font-serif font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-subtle text-sm text-primary">
                      <FiShield />
                    </span>

                    <span>{policy.category[lang] || policy.category.en}</span>
                  </span>

                  <FiChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <div
                  id={`policy-panel-${idx}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] px-5 pb-5 opacity-100"
                      : "grid-rows-[0fr] px-5 pb-0 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-shield/40 pt-4 font-sans text-xs font-light leading-relaxed text-gray-600 sm:text-sm">
                      {policy.content[lang] || policy.content.en}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
