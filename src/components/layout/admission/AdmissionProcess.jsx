
"use client";

import React from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  FiFileText,
  FiUpload,
  FiCreditCard,
  FiEdit3,
  FiCheckSquare,
  FiAward,
  FiInfo,
} from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export default function AdmissionProcess() {
  const { lang } = useLanguage();

  const content = {
    badge: {
      en: "Step-by-Step Guide",
      bn: "ভর্তির ধাপসমূহ",
    },
    title: {
      en: "Admission Process",
      bn: "ভর্তি প্রক্রিয়া",
    },
    highlightWord: {
      en: "Process",
      bn: "প্রক্রিয়া",
    },
    description: {
      en: "Learn about the main admission steps. Contact the school to confirm the current procedure and required documents.",
      bn: "ভর্তির প্রধান ধাপগুলো জেনে নিন। বর্তমান ভর্তি প্রক্রিয়া ও প্রয়োজনীয় কাগজপত্র সম্পর্কে নিশ্চিত হতে প্রতিষ্ঠানে যোগাযোগ করুন।",
    },
    noteTitle: {
      en: "Admission Test",
      bn: "ভর্তি পরীক্ষা",
    },
    noteDescription: {
      en: "Admission involves an assessment. Please contact the school to confirm the applicable assessment method and requirements for the student's intended level.",
      bn: "ভর্তির ক্ষেত্রে শিক্ষার্থীর যোগ্যতা যাচাই করা হয়। নির্ধারিত শ্রেণির জন্য কী ধরনের মূল্যায়ন ও কী কী শর্ত প্রযোজ্য, তা প্রতিষ্ঠানে যোগাযোগ করে জেনে নিন।",
    },
    steps: [
      {
        number: "01",
        title: {
          en: "Collect the Admission Form",
          bn: "ভর্তি ফরম সংগ্রহ",
        },
        description: {
          en: "Collect the admission form from the school office. The prospectus lists the form fee as Tk. 300, non-refundable.",
          bn: "প্রতিষ্ঠানের অফিস থেকে ভর্তি ফরম সংগ্রহ করুন। প্রসপেক্টাস অনুযায়ী ফরমের মূল্য ৩০০ টাকা, যা ফেরতযোগ্য নয়।",
        },
        icon: <FiFileText />,
      },
      {
        number: "02",
        title: {
          en: "Complete and Submit the Form",
          bn: "ফরম পূরণ ও জমা",
        },
        description: {
          en: "Complete the admission form and submit it to the school office. Confirm the required supporting documents with the school.",
          bn: "ভর্তি ফরম যথাযথভাবে পূরণ করে প্রতিষ্ঠানের অফিসে জমা দিন। প্রয়োজনীয় কাগজপত্রের তালিকা অফিস থেকে নিশ্চিত করে নিন।",
        },
        icon: <FiUpload />,
      },
      {
        number: "03",
        title: {
          en: "Attend the Admission Assessment",
          bn: "ভর্তি মূল্যায়নে অংশগ্রহণ",
        },
        description: {
          en: "The prospectus mentions an admission test. Contact the school for the assessment date, format and applicable requirements.",
          bn: "প্রসপেক্টাসে ভর্তি পরীক্ষার কথা উল্লেখ রয়েছে। পরীক্ষার তারিখ, পদ্ধতি ও প্রযোজ্য শর্ত জানতে প্রতিষ্ঠানে যোগাযোগ করুন।",
        },
        icon: <FiEdit3 />,
      },
      {
        number: "04",
        title: {
          en: "Confirm Admission and Fees",
          bn: "ভর্তি ও ফি নিশ্চিতকরণ",
        },
        description: {
          en: "Contact the school office to learn about the admission decision, applicable fees and the next steps.",
          bn: "ভর্তির সিদ্ধান্ত, প্রযোজ্য ফি এবং পরবর্তী করণীয় সম্পর্কে প্রতিষ্ঠানের অফিস থেকে জেনে নিন।",
        },
        icon: <FiCreditCard />,
      },
      {
        number: "05",
        title: {
          en: "Complete Enrollment",
          bn: "ভর্তির কার্যক্রম সম্পন্ন",
        },
        description: {
          en: "Follow the instructions provided by the school to complete the admission process.",
          bn: "ভর্তি কার্যক্রম সম্পন্ন করতে প্রতিষ্ঠান থেকে দেওয়া নির্দেশনা অনুসরণ করুন।",
        },
        icon: <FiCheckSquare />,
      },
    ],
  };

  const t = (key) => content[key][lang] || content[key].en;

  return (
    <section
      id="process"
      className="relative w-full border-b border-shield/40 bg-subtle/30 py-16 md:py-24"
    >
      <Container>
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          highlightWord={t("highlightWord")}
          description={t("description")}
          align="center"
        />

        {/* Admission Assessment Note */}
        <div className="mx-auto mb-12 flex max-w-3xl items-start gap-3 rounded-xl border border-shield/70 bg-white p-4 shadow-sm">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-base text-navy">
            <FiInfo />
          </div>

          <div className="font-sans text-xs leading-relaxed text-gray-700 sm:text-sm">
            <span className="mb-1 block font-semibold text-navy">
              {t("noteTitle")}
            </span>
            {t("noteDescription")}
          </div>
        </div>

        {/* Stepper */}
        <div className="relative mx-auto max-w-3xl">
          <div className="pointer-events-none absolute bottom-8 left-6 top-8 hidden w-0.5 bg-shield/80 sm:block" />

          <div className="relative z-10 space-y-6 sm:space-y-8">
            {content.steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 rounded-2xl border border-shield/70 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md sm:gap-6 sm:p-6"
              >
                {/* Step Number and Icon */}
                <div className="relative shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy font-serif text-sm font-bold text-white shadow-md">
                    {step.number}
                  </div>

                  <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border border-shield/60 bg-subtle text-xs text-primary shadow-sm">
                    {step.icon}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-0.5">
                  <h3 className="mb-1 font-serif text-base font-semibold text-foreground sm:text-lg">
                    {step.title[lang] || step.title.en}
                  </h3>

                  <p className="font-sans text-xs font-light leading-relaxed text-gray-600 sm:text-sm">
                    {step.description[lang] || step.description.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
