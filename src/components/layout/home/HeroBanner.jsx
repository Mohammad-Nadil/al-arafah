"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/public/Container";
import Button from "@/components/ui/Button";

const cleanData = {
  images: {
    even: "/banner/banner2.jpg",
    odd: "/banner/banner1.jpg",
  },
  slides: [
    {
      id: 1,
      tagEn: "Akhirat First",
      tagBn: "আখিরাতমুখী শিক্ষা",
      titleEnLine1: "Akhirat-oriented ",
      titleEnLine2: "Faith-based Education",
      titleBnLine1: "আখিরাতকে গুরুত্ব দিয়ে ",
      titleBnLine2: "ঈমানভিত্তিক শিক্ষা",
      descEn:
        "Nurturing a balanced approach to seek blessings for both this world and the hereafter, avoiding total immersion in worldly interests..",
      descBn:
        "দুনিয়া ও আখিরাত—উভয় জীবনে আল্লাহর রহমত ও কল্যাণ লাভের চেষ্টা করা এবং শুধু দুনিয়ার স্বার্থ নিয়ে ব্যস্ত না থেকে ভারসাম্যপূর্ণ জীবন গড়ে তোলা।",
    },
    {
      id: 2,
      tagEn: "Faith & Excellence",
      tagBn: "ঈমান ও উৎকর্ষ",
      titleEnLine1: "Education Based ",
      titleEnLine2: "on Imaan",
      titleBnLine1: "ঈমানভিত্তিক শিক্ষা",
      titleBnLine2: "",
      descEn:
        "Combines a modern English medium syllabus to build resourceful professionals with values that foster Faithful, Muttaqi, and Akhirat-oriented mindsets.",
      descBn:
        " আধুনিক ইংরেজি মাধ্যমের পাঠ্যক্রমের সঙ্গে ইসলামী মূল্যবোধের সমন্বয় করা, যাতে শিক্ষার্থীরা ঈমানদার, আল্লাহভীরু ও আখিরাতের প্রতি সচেতন হওয়ার পাশাপাশি দক্ষ ও যোগ্য পেশাজীবী হিসেবে গড়ে উঠতে পারে।",
    },
    {
      id: 3,
      tagEn: "Islamic Identity",
      tagBn: "ইসলামী আদর্শ",
      titleEnLine1: "Islamic Mind ",
      titleEnLine2: "and Character",
      titleBnLine1: "ইসলামী মন ও চরিত্র",
      titleBnLine2: "",
      descEn:
        "Aligns with international English medium school standards while incorporating ideological subjects to shape children into pious Muslims in faith, conviction, and Sunnah culture, with the ultimate destination being Jannah, Insha-Allah.",
      descBn:
        "আন্তর্জাতিক মানের ইংরেজি মাধ্যমের সিলেবাসের পাশাপাশি নিজস্ব আদর্শিক বিষয় যুক্ত করা হয়েছে, যাতে শিক্ষার্থীরা বিশ্বাস ও মননে খাঁটি মুসলিম এবং সংস্কৃতিতে সুন্নাহর অনুসারী হতে পারে",
    },
  ],
};

export default function HeroBanner() {
  const { lang } = useLanguage();
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cleanData.slides.length);
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
      className="relative w-full py-16 xs:py-20  flex items-center overflow-hidden bg-navy"
    >
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {cleanData.slides.map((slide, index) => {
          const assignedImage =
            index % 2 === 0 ? cleanData.images.even : cleanData.images.odd;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "z-10 opacity-35 " : "z-0 opacity-0"
              }`}
            >
              <Image
                src={assignedImage}
                alt="Al-Arafah Campus Banner"
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"} // এখানে loading property যুক্ত করা হয়েছে
                sizes="100vw"
                className={`object-cover object-center will-change-transform bg-slide-${index} brightness-50`}
              />
            </div>
          );
        })}

        <div className="absolute inset-0 z-20 bg-linear-to-r from-primary-deep via-primary-deep/90 to-transparent md:from-primary-deep/70 brightness-50 " />
      </div>

      <Container className="w-full relative z-30">
        <div className="text-left space-y-6 sm:space-y-8">
          <div className="js-hero-content-anim flex items-center gap-2 border-l-2 border-accent pl-3">
            <span className="text-accent text-xs font-bold uppercase tracking-widest font-sans">
              {lang === "en"
                ? cleanData.slides[currentSlide].tagEn
                : cleanData.slides[currentSlide].tagBn}
            </span>
          </div>

          <h1 className="js-hero-content-anim text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-serif  font-semibold text-[#fefcf8] tracking-wide leading-[1.1]">
            {lang === "en" ? (
              <>
                {cleanData.slides[currentSlide].titleEnLine1}
                <br />
                {cleanData.slides[currentSlide].titleEnLine2}
              </>
            ) : (
              <>
                {cleanData.slides[currentSlide].titleBnLine1}
                <br />
                {cleanData.slides[currentSlide].titleBnLine2}
              </>
            )}
          </h1>

          <p className="js-hero-content-anim max-w-xl text-sm sm:text-base text-gray-300/90 font-light leading-relaxed font-sans">
            {lang === "en"
              ? cleanData.slides[currentSlide].descEn
              : cleanData.slides[currentSlide].descBn}
          </p>

          <div className="js-hero-content-anim flex items-center justify-center sm:justify-start gap-4 pt-4 w-full sm:w-auto">
            <Button
              href={"/admissions"}
              label="Apply Now"
              borderColor="var(--accent)"
              flairColor="var(--accent)"
              textColor="var(--accent)"
              textHoverColor="var(--foreground)"
              rightIcon={<FiArrowRight />}
            />
          </div>
        </div>
        <div className="absolute -bottom-10 right-1/2 translate-x-1/2 sm:translate-x-0 sm:bottom-6 sm:right-12 lg:right-24 z-30 flex items-center gap-2.5">
          {cleanData.slides.map((_, index) => (
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
