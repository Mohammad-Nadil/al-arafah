"use client";

import React from "react";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiFileText, FiCreditCard, FiCheckCircle } from "react-icons/fi";

const cleanData = {
  header: {
    badgeEn: "APPLICATION PROCESS",
    badgeBn: "আবেদন প্রক্রিয়া",
    titleEn: "How to Apply Step-by-Step",
    titleBn: "ধাপ-দ্বারা-ধাপ আবেদন গাইডলাইন",
  },
  steps: [
    {
      id: 1,
      icon: "form",
      titleEn: "Step 1: Fill Application",
      titleBn: "ধাপ ১: ফর্ম পূরণ করুন",
      descEn: "Click the Apply Now button below and fill out the online admission form with accurate student and parent details.",
      descBn: "নিচের 'আবেদন করুন' বাটনে ক্লিক করে শিক্ষার্থী ও অভিভাবকের সঠিক তথ্য দিয়ে অনলাইন ভর্তি ফর্মটি পূরণ করুন।"
    },
    {
      id: 2,
      icon: "payment",
      titleEn: "Step 2: Pay Application Fee",
      titleBn: "ধাপ ২: আবেদন ফি প্রদান",
      descEn: "Submit the required admission processing fee securely via our online payment gateway using bKash, Nagad, or Cards.",
      descBn: "বিকাশ, রকেট, নগদ বা কার্ড ব্যবহার করে আমাদের অনলাইন পেমেন্ট গেটওয়ের মাধ্যমে আবেদন ফি নিরাপদভাবে জমা দিন।"
    },
    {
      id: 3,
      icon: "status",
      titleEn: "Step 3: Interview & Confirmation",
      titleBn: "ধাপ ৩: সাক্ষাৎকার ও নিশ্চিতকরণ",
      descEn: "After tracking status, attend the physical interview/viva with the child. Successful candidates will receive a confirmation SMS.",
      descBn: "আবেদনের অবস্থা ট্র্যাক করার পর সন্তানসহ নির্ধারিত সাক্ষাৎকারে অংশ নিন। সফলভাবে উত্তীর্ণদের এসএমএস-এর মাধ্যমে নিশ্চিত করা হবে।"
    }
  ]
};

export default function HowToApply() {
  const { lang } = useLanguage();

  return (
    <section
      id="how-to-apply"
      className="w-full py-16 bg-background text-foreground transition-colors duration-500"
    >
      <Container>
        <SectionHeader
          badge={
            lang === "en" ? cleanData.header.badgeEn : cleanData.header.badgeBn
          }
          title={
            lang === "en" ? cleanData.header.titleEn : cleanData.header.titleBn
          }
          center={true}
        />

        <div className=" mt-7 md:mt-10 xl:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {cleanData.steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center p-6 border border-neutral-300 dark:border-neutral-700 rounded-2xl bg-background shadow-xs">
              
              {index !== cleanData.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-neutral-300 dark:bg-neutral-700 z-10" />
              )}

              <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center shrink-0 text-primary dark:text-accent mb-6">
                {step.icon === "form" && <FiFileText className="w-7 h-7" />}
                {step.icon === "payment" && <FiCreditCard className="w-7 h-7" />}
                {step.icon === "status" && <FiCheckCircle className="w-7 h-7" />}
              </div>

              <h3 className="font-sans font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-3">
                {lang === "en" ? step.titleEn : step.titleBn}
              </h3>

              <p className="font-sans font-light text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {lang === "en" ? step.descEn : step.descBn}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}