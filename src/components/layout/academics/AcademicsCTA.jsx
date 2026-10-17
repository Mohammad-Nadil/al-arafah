
"use client";

import React from "react";
import Container from "@/components/public/Container";
import Button from "@/components/ui/Button";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export default function AdmissionCTA() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";

  const content = {
    badge: {
      en: "Begin the Journey",
      bn: "শিক্ষার যাত্রা শুরু হোক",
    },
    title: {
      en: "Ready to Learn More About Admission?",
      bn: "ভর্তি সম্পর্কে আরও জানতে চান?",
    },
    description: {
      en: "Take the next step in your child's educational journey. Explore our admission guidelines or get in touch with our administrative team for more information.",
      bn: "আপনার সন্তানের শিক্ষাজীবনের পরবর্তী ধাপ শুরু করুন। ভর্তির নিয়মাবলি সম্পর্কে জানুন অথবা বিস্তারিত তথ্যের জন্য আমাদের প্রশাসনিক দলের সঙ্গে যোগাযোগ করুন।",
    },
    admissionButton: {
      en: "Admission Process",
      bn: "ভর্তি প্রক্রিয়া",
    },
    contactButton: {
      en: "Contact the School",
      bn: "প্রতিষ্ঠানে যোগাযোগ",
    },
    footnote: {
      en: "Contact the school for current admission information",
      bn: "বর্তমান ভর্তি-সংক্রান্ত তথ্যের জন্য প্রতিষ্ঠানে যোগাযোগ করুন",
    },
  };

  const t = (key) => content[key][lang] || content[key].en;

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      <Container>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center rounded-3xl border border-white/10 bg-primary/10 p-4 sm:p-8 text-center shadow-2xl backdrop-blur-md md:p-12 xl:p-16">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
            <FaWandMagicSparkles className="text-sm text-accent" />
            <span>{t("badge")}</span>
          </div>

          {/* Heading */}
          <h2 className="mb-4 font-serif text-2xl font-medium leading-tight tracking-wide sm:text-3xl md:text-4xl">
            {t("title")}
          </h2>

          {/* Description */}
          <p className="mb-10 max-w-2xl font-sans text-xs font-light leading-relaxed sm:text-sm md:text-base">
            {t("description")}
          </p>

          {/* Action Buttons */}
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Button
              label={t("admissionButton")}
              href="/admission"
              bgColor="var(--accent)"
              borderColor="var(--accent)"
              flairColor="#ffffff"
              textColor="var(--accent-foreground)"
              textHoverColor="var(--navy)"
              size="md"
              className="w-full shadow-lg shadow-accent/10 sm:w-auto"
              rightIcon={<FiArrowRight />}
            />

            <Button
              label={t("contactButton")}
              href="/contact"
              bgColor="rgba(255, 255, 255, 0.05)"
              borderColor="var(--primary)"
              flairColor="var(--primary)"
              textColor="var(--primary)"
              textHoverColor="#ffffff"
              size="md"
              className="w-full sm:w-auto"
              leftIcon={<FiPhoneCall />}
            />
          </div>

          {/* Admission Information */}
          <div className="mt-8 flex w-full items-center justify-center gap-2 border-t border-white/10 pt-6 font-sans text-[11px] text-gray-400 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent" />
            <span>{t("footnote")}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
