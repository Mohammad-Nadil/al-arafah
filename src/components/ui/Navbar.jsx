"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FiChevronDown } from "react-icons/fi";
import LanguageSwitcher from "../public/LanguageSwitcher";
import ThemeToggle from "../public/ThemeToggle";
import logo from "@/../public/logo.png";
import Container from "../public/Container";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import gsap from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cleanData = {
  menuItems: {
    en: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      {
        name: "Academics",
        href: "/academics",
        submenu: [
          { name: "Class Routine", href: "/academics?tab=class-routine" },
          { name: "Exam Routine", href: "/academics?tab=exam-routine" },
          { name: "Results", href: "/academics?tab=results" },
        ],
      },
      { name: "Admissions", href: "/admissions" },
      { name: "Notices", href: "/notices" },
      { name: "Gallery", href: "/gallery" },
      { name: "Contact", href: "/contact" },
    ],
    bn: [
      { name: "হোম", href: "/" },
      { name: "আমাদের সম্পর্কে", href: "/about" },
      {
        name: "একাডেমিকস",
        href: "/academics",
        submenu: [
          { name: "ক্লাস রুটিন", href: "/academics?tab=class-routine" },
          { name: "পরীক্ষার রুটিন", href: "/academics?tab=exam-routine" },
          { name: "ফলাফল", href: "/academics?tab=results" },
        ],
      },
      { name: "ভর্তি তথ্য", href: "/admissions" },
      { name: "নোটিশ", href: "/notices" },
      { name: "গ্যালারি", href: "/gallery" },
      { name: "যোগাযোগ", href: "/contact" },
    ],
  },
};

const Navbar = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const navRef = useRef(null);

  // 🔒 মোবাইল মেনু অন হলে ব্যাকগ্রাউন্ড স্ক্রল লক করা
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 🛑 বাইরে ক্লিক করলে মেনু ক্লোজ করার লজিক
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: navRef.current,
        start: "top top",
        end: "max",
        pin: true,
        pinSpacing: false,
      });
    },
    { scope: navRef },
  );

  return (
    <div ref={navRef} className="relative z-50 w-full">
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-xs lg:hidden z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="relative z-50 w-full bg-background/50 shadow-sm backdrop-blur-md transition-colors duration-500">
        <Container>
          <div className="flex justify-between h-16 items-center">
            <a href="/" className="flex items-center gap-3 cursor-pointer select-none">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 transition-all duration-300">
                <Image
                  src={logo}
                  alt="Al-Arafah Logo"
                  fill
                  priority
                  sizes="(max-w: 640px) 40px, 48px"
                  className="object-contain dark:invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif xs:text-base text-lg font-bold text-primary tracking-wide leading-tight">
                  {lang === "en" ? "Al-Arafah Islamic" : "আল-আরাফাহ ইসলামিক"}
                </span>
                <span className="text-[8px] xs:text-[10px] sm:text-xs text-accent font-semibold uppercase tracking-widest mt-0.5">
                  {lang === "en"
                    ? "International School & College"
                    : "ইন্টারন্যাশনাল স্কুল অ্যান্ড কলেজ"}
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-6">
              {cleanData.menuItems[lang].map((item, index) => {
                if (item.submenu) {
                  return (
                    <div key={index} className="relative group py-2">
                      <button className="flex items-center gap-1 text-xs xl:text-sm font-medium hover:text-accent transition-colors py-2 cursor-pointer focus:outline-none">
                        <span>{item.name}</span>
                        <FiChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200 text-neutral-400" />
                      </button>
                      <div className="absolute top-full left-0 w-48 bg-background border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-xl py-2 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200 origin-top-left z-50">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-xs font-medium hover:bg-primary/5 hover:text-accent transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm font-medium hover:text-accent transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all"
                  >
                    {item.name}
                  </a>
                );
              })}
              
              <div className="flex items-center gap-2 pl-2 border-l border-neutral-200 dark:border-neutral-800">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>

              <Button
                label={lang === "en" ? "Apply Now" : "আবেদন করুন"}
                size="sm" 
                borderColor="#ffbe0b" 
                flairColor="#ffbe0b"
                textHoverColor="#032d22" 
                className="font-semibold text-xs tracking-wider uppercase shadow-md text-foreground"
              />
            </div>

            {/* Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:text-accent focus:outline-none cursor-pointer z-50"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background border-b border-neutral-200 dark:border-neutral-800 px-4 pt-2 pb-6 space-y-1 absolute top-16 left-0 w-full z-50 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-xl">
            {cleanData.menuItems[lang].map((item, index) => {
              if (item.submenu) {
                return (
                  <div key={index} className="block">
                    <button
                      onClick={() => setIsAcademicOpen(!isAcademicOpen)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-primary/5 hover:text-accent transition-colors cursor-pointer text-left"
                    >
                      <span>{item.name}</span>
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isAcademicOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isAcademicOpen && (
                      <div className="pl-6 pr-3 py-1 space-y-1 bg-neutral-50 dark:bg-neutral-950/40 rounded-md mt-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setIsAcademicOpen(false);
                            }}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/5 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}

            <div className="grid grid-cols-2 gap-2 pt-4 pb-2 border-t border-neutral-100 dark:border-neutral-900 items-center justify-items-center">
              <div className="scale-110">
                <LanguageSwitcher />
              </div>
              <div className="scale-110">
                <ThemeToggle />
              </div>
            </div>

            <button className="w-full mt-2 bg-accent text-accent-foreground px-4 py-2.5 rounded font-semibold text-sm tracking-wider uppercase text-center shadow-sm cursor-pointer">
              {lang === "en" ? "Apply Now" : "আবেদন করুন"}
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;