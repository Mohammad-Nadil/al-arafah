"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/public/Container";
import { siteConfig } from "@/config/site";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiYoutube,
  FiChevronRight,
} from "react-icons/fi";

const FooterLink = ({ href, text }) => (
  <li>
    <Link
      href={href}
      className="group flex items-center gap-1 text-sm font-sans font-light text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-accent transition-colors duration-300 w-fit"
    >
      <FiChevronRight className="w-3.5 h-3.5 opacity-50 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary dark:text-accent" />
      <span className="group-hover:translate-x-0.5 transition-transform duration-300">
        {text}
      </span>
    </Link>
  </li>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-xl bg-neutral-200/40 hover:bg-primary dark:bg-neutral-800/40 dark:hover:bg-accent text-neutral-600 dark:text-neutral-400 hover:text-white dark:hover:text-background flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-sm border border-neutral-300/20 dark:border-neutral-700/20 cursor-pointer"
  >
    {icon}
  </a>
);

export default function Footer() {
  const { lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const cleanData = {
    explore: { en: "Explore", bn: "অনুসন্ধান" },
    contact: { en: "Contact Info", bn: "যোগাযোগ" },
    location: { en: "Our Location", bn: "আমাদের অবস্থান" },
    rights: { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
    privacy: { en: "Privacy Policy", bn: "গোপনীয়তা নীতি" },
    terms: { en: "Terms of Service", bn: "শর্তাবলী" },
    links: [
      { href: "/about", en: "About Us", bn: "আমাদের সম্পর্কে" },
      { href: "/admissions", en: "Admissions", bn: "ভর্তি তথ্য" },
      { href: "/curriculum", en: "Curriculum", bn: "কারিকুলাম" },
      { href: "/notices", en: "Notice Board", bn: "নোটিশ বোর্ড" }
    ]
  };

  return (
    <footer className="w-full bg-subtle  border-t border-neutral-200/60 dark:border-neutral-800/60 relative py-12 text-neutral-600 dark:text-neutral-400 transition-colors duration-500 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-5 border-b border-neutral-200/60 dark:border-neutral-800/60">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="text-xl md:text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100 flex items-start gap-3 select-none leading-tight tracking-tight">
              <span>
                {lang === "en" ? siteConfig.name.en : siteConfig.name.bn}
              </span>
            </div>

            <p className="text-sm font-sans font-light leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-sm pl-4 border-l-2 border-primary/30 italic">
              "{lang === "en" ? siteConfig.slogan.en : siteConfig.slogan.bn}"
            </p>

            <div className="flex items-center gap-3 pt-2">
              {siteConfig.socials.facebook && (
                <SocialIcon
                  href={siteConfig.socials.facebook}
                  icon={<FiFacebook className="w-4 h-4" />}
                />
              )}
              {siteConfig.socials.youtube && (
                <SocialIcon
                  href={siteConfig.socials.youtube}
                  icon={<FiYoutube className="w-4 h-4" />}
                />
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 lg:ml-6">
            <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-neutral-900 dark:text-neutral-200 mb-6 relative select-none">
              {lang === "en" ? cleanData.explore.en : cleanData.explore.bn}
              <span className="absolute bottom-[-6px] left-0 w-6 h-[2px] bg-primary dark:bg-accent rounded-full" />
            </h4>
            <ul className="flex flex-col gap-3.5">
              {cleanData.links.map((link, idx) => (
                <FooterLink 
                  key={idx} 
                  href={link.href} 
                  text={lang === "en" ? link.en : link.bn} 
                />
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 lg:ml-4">
            <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-neutral-900 dark:text-neutral-200 mb-6 relative select-none">
              {lang === "en" ? cleanData.contact.en : cleanData.contact.bn}
              <span className="absolute bottom-[-6px] left-0 w-6 h-[2px] bg-primary dark:bg-accent rounded-full" />
            </h4>
            <ul className="flex flex-col gap-4.5">
              <li className="flex items-start gap-3.5 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-neutral-200/40 dark:bg-neutral-800/40 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary/10 dark:group-hover:bg-accent/10">
                  <FiMapPin className="w-4 h-4 text-primary dark:text-accent shrink-0" />
                </div>
                <span className="text-sm font-sans font-light text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors duration-300 leading-relaxed pt-0.5">
                  {lang === "en"
                    ? siteConfig.contact.address.en
                    : siteConfig.contact.address.bn}
                </span>
              </li>
              <li className="flex items-center gap-3.5 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-neutral-200/40 dark:bg-neutral-800/40 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary/10 dark:group-hover:bg-accent/10">
                  <FiPhone className="w-4 h-4 text-primary dark:text-accent shrink-0" />
                </div>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-sm font-sans font-light text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors duration-300 pt-0.5"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-3.5 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-neutral-200/40 dark:bg-neutral-800/40 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary/10 dark:group-hover:bg-accent/10">
                  <FiMail className="w-4 h-4 text-primary dark:text-accent shrink-0" />
                </div>
                <a
                  href={`mailto:${siteConfig.contact.mail}`}
                  className="text-sm font-sans font-light text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:hover:text-accent dark:group-hover:text-neutral-200 transition-colors duration-300 break-all pt-0.5"
                >
                  {siteConfig.contact.mail}
                </a>
              </li>
            </ul>
          </div>

          {/* Map Location */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-neutral-900 dark:text-neutral-200 mb-6 relative select-none">
              {lang === "en" ? cleanData.location.en : cleanData.location.bn}
              <span className="absolute bottom-[-6px] left-0 w-6 h-[2px] bg-primary dark:bg-accent rounded-full" />
            </h4>
            <div className="w-full h-36 rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-500 group relative [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:transition-all [&_iframe]:duration-700 group-hover:[&_iframe]:scale-[1.03]">
              {siteConfig.contact.googleMapsLink}
              <div className="absolute inset-0 bg-transparent pointer-events-none group-hover:bg-primary/5 transition-colors duration-500" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4  ">
          <p className="text-xs font-sans font-light text-neutral-400 dark:text-neutral-500 text-center sm:text-left select-none">
            &copy; {currentYear} Al-Arafah School & College.{" "}
            {lang === "en" ? cleanData.rights.en : cleanData.rights.bn}
          </p>
          <div className="flex items-center gap-6 text-xs font-sans font-light text-neutral-400 dark:text-neutral-500">
            <Link
              href="/privacy-policy"
              className="hover:text-primary dark:hover:text-accent transition-colors duration-300 relative group/link"
            >
              <span>{lang === "en" ? cleanData.privacy.en : cleanData.privacy.bn}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary dark:bg-accent group-hover/link:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary dark:hover:text-accent transition-colors duration-300 relative group/link"
            >
              <span>{lang === "en" ? cleanData.terms.en : cleanData.terms.bn}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary dark:bg-accent group-hover/link:w-full transition-all duration-300" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}