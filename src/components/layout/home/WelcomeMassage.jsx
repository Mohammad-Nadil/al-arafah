"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiDoubleQuotesL } from "react-icons/ri";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WelcomeMassage() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".js-welcome-text-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".js-welcome-img-container",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: sectionRef },
  );

 

  return (
    <section
      ref={sectionRef}
      id="welcome-message"
      className="w-full py-20 md:py-28 overflow-hidden bg-background text-foreground"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="js-welcome-text-anim">
              <SectionHeader
                badge={
                  lang === "en"
                    ? "Institutional Vision"
                    : "প্রাতিষ্ঠানিক লক্ষ্য"
                }
                title={
                  lang === "en"
                    ? "Welcome to Al-Arafah Campus"
                    : "আল-আরাফাহ ক্যাম্পাসে আপনাকে স্বাগতম"
                }
                highlightWord={lang === "en" ? "Al-Arafah" : "আল-আরাফাহ"}
                align="left"
                className="mb-0! md:mb-0!"
              />
            </div>

            <div className="js-welcome-text-anim relative pl-6 border-l-2 border-accent bg-accent/5 py-4 pr-4 rounded-r-xl">
              <RiDoubleQuotesL className="text-accent text-5xl opacity-20 absolute -top-3 left-2" />
              <p className="text-base sm:text-lg font-serif italic text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {lang === "en"
                  ? "“Education is not just preparation for life; education is life itself, enriched with divine principles and moral fortitude.”"
                  : "“শিক্ষা কেবল জীবনের প্রস্তুতি নয়; শিক্ষাই স্বয়ং জীবন, যা ঐশী আদর্শ এবং नैतिक শক্তির দ্বারা সমৃদ্ধ।”"}
              </p>
            </div>

            <div className="js-welcome-text-anim space-y-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              <p>
                {lang === "en"
                  ? "At Al-Arafah Islamic International School & College, we believe in holistic development. Our curriculum bridges Cambridge global education standards with deep-rooted Islamic morals, nurturing children into academically brilliant and spiritually conscious individuals."
                  : "আল-আরাফাহ ইসলামিক ইন্টারন্যাশনাল স্কুল অ্যান্ড কলেজে আমরা শিক্ষার্থীদের সামগ্রিক বিকাশে বিশ্বাসী। আমাদের কারিকুলাম কেমব্রিজের বিশ্বমানের শিক্ষার সাথে গভীর ইসলামিক মূল্যবোধের সেতু বন্ধন তৈরি করে, যা প্রতিটি শিশুকে মেধাবী ও দ্বীনি চেতনায় উদ্বুদ্ধ নাগরিক হিসেবে গড়ে তোলে।"}
              </p>
              <p>
                {lang === "en"
                  ? "We foster an environment where modern scientific inquiry meets divine guidance. Our students grow not just as brilliant professionals, but as standard-bearers of integrity and empathy."
                  : "আমরা এমন একটি পরিবেশ তৈরি করি যেখানে আধুনিক বৈজ্ঞানিক অনুসন্ধান এবং ঐশী দিকনির্দেশনার নিখুঁত মেলবন্ধন ঘটে। আমাদের শিক্ষার্থীরা কেবল সফল পেশাদার হিসেবেই নয়, বরং সততা ও সহানুভূতির প্রতীক হিসেবে গড়ে ওঠে।"}
              </p>
            </div>

            <div className="js-welcome-text-anim pt-4 flex items-center gap-4">
              <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
              <div>
                <h4 className="font-serif text-base font-semibold text-primary">
                  {lang === "en"
                    ? "Alhajj Md. Enamul Haque"
                    : "আলহাজ্জ মোঃ এনামুল হক"}
                </h4>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mt-0.5 font-sans">
                  {lang === "en"
                    ? "Principal, Al-Arafah"
                    : "অধ্যক্ষ, আল-আরাফাহ"}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="js-welcome-img-container relative w-full max-w-95">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl pointer-events-none" />

              <div className="absolute inset-0 border border-accent/30 translate-x-4 translate-y-4 rounded md:rounded-4xl rounded-bl-none pointer-events-none z-0 transition-transform duration-500 group-hover:translate-x-2" />

              <div className="relative w-full aspect-4/5 rounded md:rounded-4xl rounded-bl-none overflow-hidden shadow-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/50 z-10">
                <Image
                  src="/principal.jpeg"
                  alt="Principal of Al-Arafah"
                  fill
                  priority
                  className="object-cover object-top "
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#032d22]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#032d22] border border-accent/40 text-[#fefcf8] px-5 py-3 rounded-xl shadow-lg z-20 text-center font-serif">
                <span className="block text-xl font-bold text-accent leading-none">
                  20+
                </span>
                <span className="text-[10px] uppercase tracking-widest block mt-1 text-gray-300 font-sans">
                  {lang === "en" ? "Years Excellence" : "বছরের ঐতিহ্য"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
