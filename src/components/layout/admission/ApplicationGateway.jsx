"use client";

import React from "react";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import { FiArrowRight, FiFileText } from "react-icons/fi";

const cleanData = {
  content: {
    titleEn: "Ready to Join Al-Arafah?",
    titleBn: "আল-আরাফাহ পরিবারে যোগ দিতে প্রস্তুত?",
    subtitleEn: "Take the first step towards securing your child's moral and academic future. Applications for the 2026-2027 academic session are now open.",
    subtitleBn: "আপনার সন্তানের নৈতিক ও একাডেমিক ভবিষ্যৎ সুনিশ্চিত করতে প্রথম কদমটি নিন। ২০২৬-২০২৭ শিক্ষাবর্ষের জন্য অনলাইন আবেদন ফর্ম উন্মুক্ত করা হয়েছে।",
    btnEn: "Apply Online Now",
    btnBn: "অনলাইনে আবেদন করুন",
  }
};

export default function ApplicationGateway() {
  const { lang } = useLanguage();

  return (
    <section
      id="application-gateway"
      className="w-full py-16 bg-background text-foreground transition-colors duration-500"
    >
      <Container>
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl border border-neutral-300 dark:border-neutral-700 bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 p-8 md:p-12 text-center shadow-xs flex flex-col items-center">
          
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-primary/5 dark:bg-accent/5 rounded-full blur-xl" />
          <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-primary/5 dark:bg-accent/5 rounded-full blur-xl" />

          <div className="w-14 h-14 rounded-2xl bg-primary dark:bg-accent flex items-center justify-center text-white dark:text-background mb-6 shadow-sm">
            <FiFileText className="w-6 h-6" />
          </div>

          <h2 className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4 max-w-xl">
            {lang === "en" ? cleanData.content.titleEn : cleanData.content.titleBn}
          </h2>

          <p className="font-sans font-light text-sm md:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8">
            {lang === "en" ? cleanData.content.subtitleEn : cleanData.content.subtitleBn}
          </p>

          <a href="/admissions/apply" className="inline-block">
            <Button
              label={
                <span className="flex items-center gap-2">
                  {lang === "en" ? cleanData.content.btnEn : cleanData.content.btnBn}
                  <FiArrowRight className="w-4 h-4" />
                </span>
              }
              size="lg"
              borderColor="#ffbe0b"
              flairColor="#ffbe0b"
              textHoverColor="#032d22"
              className="font-sans font-bold text-sm tracking-wider uppercase shadow-md text-foreground px-8 py-3.5"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}