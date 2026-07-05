"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/public/Container";
import Button from "@/components/ui/Button";

const SLIDES_DATA = [
  {
    id: 1,
    tagEn: "Islamic English Medium School",
    tagBn: "ইসলামিক ইংলিশ মিডিয়াম স্কুল",
    titleEnLine1: "Nurturing Faith,",
    titleEnLine2: "Inspiring Excellence",
    titleBnLine1: "দ্বীনি বিশ্বাস লালন,",
    titleBnLine2: "সর্বোচ্চ মেধার বিকাশ",
    descEn:
      "A refined Cambridge Curriculum pathway integrated with Islamic Tarbiyah, disciplined campus life, and confident English medium scholarship.",
    descBn:
      "ইসলামিক তারবিয়াহ, সুশৃঙ্খল ক্যাম্পাস জীবন এবং আত্মবিশ্বাসী ইংলিশ মিডিয়াম স্কলারশিপের সাথে সমন্বিত একটি পরিমার্জিত কেমব্রিজ কারিকুলাম。",
  },
  {
    id: 2,
    tagEn: "Admissions Open 2026-27",
    tagBn: "ভর্তি চলছে ২০২৬-২৭",
    titleEnLine1: "Shaping Future,",
    titleEnLine2: "Islamic Leaders",
    titleBnLine1: "ভবিষ্যতের ইসলামিক",
    titleBnLine2: "নেতৃত্ব গড়ার প্রত্যয়",
    descEn:
      "Empowering global standard education built strictly upon moral values, modern technology, and comprehensive Hifzul Quran pathways.",
    descBn:
      "নৈতিক মূল্যবোধ, আধুনিক প্রযুক্তি এবং সম্পূর্ণ হিফজুল কুরআন ট্র্যাকের ওপর ভিত্তি করে বিশ্বমানের শিক্ষা নিশ্চিত করা।",
  },
  {
    id: 3,
    tagEn: "Academic Heritage",
    tagBn: "একাডেমিক ঐতিহ্য",
    titleEnLine1: "Modern Science Meets",
    titleEnLine2: "Divine Knowledge",
    titleBnLine1: "আধুনিক বিজ্ঞান ও",
    titleBnLine2: "ঐশী জ্ঞানের মেলবন্ধন",
    descEn:
      "State-of-the-art laboratory facilities paired with strict discipline, deep spiritual guidance, and Cambridge world-class resources.",
    descBn:
      "সুশৃঙ্খল পরিবেশ, গভীর আধ্যাত্মিক দিকনির্দেশনা এবং কেমব্রিজ মানের রিসোর্সের সাথে আমাদের আধুনিক ল্যাবরেটরি সুবিধা।",
  },
];

const EVEN_IMAGE = "/banner/banner2.jpg";
const ODD_IMAGE = "/banner/banner1.jpg";

export default function HeroBanner() {
  const { lang } = useLanguage();
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".js-hero-content-anim",
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12 },
    );

    const activeBg = containerRef.current.querySelector(
      `.bg-slide-${currentSlide}`,
    );
    if (activeBg) {
      gsap.fromTo(
        activeBg,
        { opacity: 0, scale: 1.12 },
        { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" },
      );
    }
  }, [currentSlide]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 xs:py-20 lg:py-30 flex items-center overflow-hidden bg-[#032d22]"
    >
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {SLIDES_DATA.map((slide, index) => {
          const assignedImage = index % 2 === 0 ? EVEN_IMAGE : ODD_IMAGE;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide
                  ? "z-10 opacity-35 dark:opacity-25"
                  : "z-0 opacity-0"
              }`}
            >
              <Image
                src={assignedImage}
                alt={`Al-Arafah Campus Banner`}
                fill
                priority={index === 0}
                className={`object-cover object-center will-change-transform bg-slide-${index}`}
              />
            </div>
          );
        })}

        <div className="absolute inset-0 z-20 bg-linear-to-r from-[#032d22] via-[#032d22]/80 to-transparent md:from-[#032d22]/95 md:via-[#032d22]/60 hidden dark:block" />
        <div className="absolute inset-0 z-20 bg-linear-to-r from-[#043d2e] via-[#043d2e]/90 to-transparent md:from-[#043d2e]/70 dark:hidden" />
      </div>

      <Container className="w-full relative z-30">
        <div className=" text-left space-y-6 sm:space-y-8">
          <div className="js-hero-content-anim flex items-center gap-2 border-l-2 border-accent pl-3">
            <span className="text-accent text-xs font-bold uppercase tracking-widest font-sans">
              {lang === "en"
                ? SLIDES_DATA[currentSlide].tagEn
                : SLIDES_DATA[currentSlide].tagBn}
            </span>
          </div>

          <h1 className="js-hero-content-anim text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-serif font-semibold text-[#fefcf8] tracking-wide leading-[1.15] ">
            {lang === "en" ? (
              <>
                {SLIDES_DATA[currentSlide].titleEnLine1}
                <br />
                {SLIDES_DATA[currentSlide].titleEnLine2}
              </>
            ) : (
              <>
                {SLIDES_DATA[currentSlide].titleBnLine1}
                <br />
                {SLIDES_DATA[currentSlide].titleBnLine2}
              </>
            )}
          </h1>

          <p className="js-hero-content-anim max-w-xl text-sm sm:text-base text-gray-300/90 font-light leading-relaxed font-sans">
            {lang === "en"
              ? SLIDES_DATA[currentSlide].descEn
              : SLIDES_DATA[currentSlide].descBn}
          </p>

          <div className="js-hero-content-anim flex  items-center justify-center sm:justify-start gap-4 pt-4 w-full sm:w-auto ">
            <Button
              label="Apply Now"
              borderColor="#ffbe0b"
              flairColor="#ffbe0b"
              textColor="#ffbe0b"
              textHoverColor="#032d22"
              rightIcon={<FiArrowRight />}
            />
            <Button
              label="Virtual Tour"
              borderColor="rgba(255,255,255,0.4)"
              flairColor="rgba(255,255,255,0.1)"
              textColor="#ffffff"
              textHoverColor="#ffffff"
            />
          </div>
        </div>
        <div className="absolute -bottom-10 right-1/2 translate-x-1/2 sm:translate-x-0 sm:bottom-6 sm:right-12 lg:right-24 z-30 flex items-center gap-2.5">
          {SLIDES_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                index === currentSlide
                  ? "w-8 bg-accent"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
