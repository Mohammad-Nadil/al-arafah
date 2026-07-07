"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

const rules = [
  {
    id: "01",
    textEn: "Strict adherence to the official uniform policy is mandatory.",
    textBn: "অফিসিয়াল ইউনিফর্ম নীতি কঠোরভাবে মেনে চলা বাধ্যতামূলক।",
  },
  {
    id: "02",
    textEn:
      "A minimum of 75% class attendance is required for exam eligibility.",
    textBn: "পরীক্ষায় অংশগ্রহণের জন্য ক্লাসে ন্যূনতম ৭৫% উপস্থিতি অপরিহার্য।",
  },
  {
    id: "03",
    textEn:
      "Electronic devices are strictly prohibited within campus premises.",
    textBn: "ক্যাম্পাস চত্বরে যেকোনো ধরনের ইলেকট্রনিক ডিভাইস নিষিদ্ধ।",
  },
  {
    id: "04",
    textEn: "Academic integrity must be maintained in all examinations.",
    textBn: "সকল পরীক্ষায় একাডেমিক সততা বজায় রাখা আবশ্যিক।",
  },
  {
    id: "05",
    textEn:
      "Disrespect towards faculty or staff will result in disciplinary action.",
    textBn:
      "শিক্ষক বা কর্মীদের প্রতি অবমাননা করলে কঠোর শাস্তিমূলক ব্যবস্থা গ্রহণ করা হবে।",
  },
];

export default function RulesPolicies() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 ">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title={
            lang === "en" ? "Institutional Policies" : "প্রাতিষ্ঠানিক নীতিমালা"
          }
          center={true}
        />

        <div className="mt-12">
          <div className="grid divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
            {rules.map((rule, idx) => (
              <div key={idx} className="py-8 flex gap-8">
                <span className="text-xl font-mono font-bold text-neutral-300 dark:text-neutral-700">
                  {rule.id}
                </span>
                <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                  {lang === "en" ? rule.textEn : rule.textBn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
