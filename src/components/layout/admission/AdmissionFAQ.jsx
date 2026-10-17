
"use client";

import React, { useState } from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import {
  FiChevronDown,
  FiHelpCircle,
  FiMapPin,
  FiPhoneCall,
  FiMail,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

export default function AdmissionFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { lang } = useLanguage();

  const content = {
    badge: {
      en: "Got Questions?",
      bn: "জিজ্ঞাসা আছে?",
    },
    title: {
      en: "Frequently Asked Questions & Contact",
      bn: "সাধারণ জিজ্ঞাসা ও যোগাযোগ",
    },
    highlight: {
      en: "FAQ & Contact",
      bn: "জিজ্ঞাসা ও যোগাযোগ",
    },
    description: {
      en: "Find answers to common admission questions or contact the school for further information.",
      bn: "ভর্তি-সংক্রান্ত সাধারণ প্রশ্নের উত্তর জানুন অথবা বিস্তারিত তথ্যের জন্য প্রতিষ্ঠানে যোগাযোগ করুন।",
    },
    faqHeading: {
      en: "Common Admission Questions",
      bn: "ভর্তি-সংক্রান্ত সাধারণ প্রশ্ন",
    },
    faqs: [
      {
        question: {
          en: "When does admission take place?",
          bn: "ভর্তি কখন হয়?",
        },
        answer: {
          en: "Admissions normally take place between December and January. Depending on seat availability and suitability, admission may also be possible at other times of the year. Please contact the school for current availability.",
          bn: "সাধারণত ডিসেম্বর ও জানুয়ারি মাসে ভর্তি কার্যক্রম চলে। আসন খালি থাকা ও উপযুক্ততার ভিত্তিতে বছরের অন্য সময়েও ভর্তি হতে পারে। বর্তমানে ভর্তি নেওয়া হচ্ছে কি না, জানতে প্রতিষ্ঠানে যোগাযোগ করুন।",
        },
      },
      {
        question: {
          en: "Is an admission test required?",
          bn: "ভর্তির জন্য পরীক্ষা দিতে হয় কি?",
        },
        answer: {
          en: "The prospectus mentions an admission test. The assessment format, date and class-specific requirements should be confirmed with the school office.",
          bn: "প্রসপেক্টাসে ভর্তি পরীক্ষার কথা উল্লেখ রয়েছে। পরীক্ষার ধরন, তারিখ ও শ্রেণিভিত্তিক শর্ত জানতে প্রতিষ্ঠানের অফিসে যোগাযোগ করুন।",
        },
      },
      {
        question: {
          en: "How much is the admission form fee?",
          bn: "ভর্তি ফরমের ফি কত?",
        },
        answer: {
          en: "The admission form fee is Tk. 300 and is non-refundable.",
          bn: "ভর্তি ফরমের ফি ৩০০ টাকা। এই ফি ফেরতযোগ্য নয়।",
        },
      },
      {
        question: {
          en: "What if seats are unavailable?",
          bn: "আসন খালি না থাকলে কী করব?",
        },
        answer: {
          en: "Admission depends on seat availability and suitability. Contact the school office to ask about options for your preferred class.",
          bn: "ভর্তি আসন খালি থাকা ও উপযুক্ততার ওপর নির্ভর করে। পছন্দের শ্রেণিতে আসন না থাকলে করণীয় জানতে প্রতিষ্ঠানের অফিসে যোগাযোগ করুন।",
        },
      },
      {
        question: {
          en: "What is the attendance requirement for re-admission?",
          bn: "পুনঃভর্তির জন্য উপস্থিতির শর্ত কী?",
        },
        answer: {
          en: "The prospectus states that re-admission requires at least 75% attendance. Contact the school to confirm any additional requirements.",
          bn: "প্রসপেক্টাস অনুযায়ী, পুনঃভর্তির জন্য কমপক্ষে ৭৫% উপস্থিতি থাকতে হবে। অতিরিক্ত কোনো শর্ত আছে কি না, তা প্রতিষ্ঠানে নিশ্চিত করুন।",
        },
      },
      {
        question: {
          en: "What are the Hifzul Quran admission age groups?",
          bn: "হিফজ বিভাগে ভর্তির বয়স কত?",
        },
        answer: {
          en: "The Junior Hifz section is for children aged 4–6, with a duration of approximately 3–4 years from Nursery to Standard I. Full-time Hifz is intended for ages 7–10. Hostel facilities are only for eligible full-time Hifz students; contact the school for details.",
          bn: "জুনিয়র হিফজ বিভাগে ৪–৬ বছর বয়সী শিশুরা ভর্তি হতে পারে। এ বিভাগে নার্সারি থেকে স্ট্যান্ডার্ড ওয়ান পর্যন্ত সময়কাল প্রায় ৩–৪ বছর। পূর্ণকালীন হিফজ বিভাগ ৭–১০ বছর বয়সীদের জন্য। হোস্টেল সুবিধা কেবল উপযুক্ত পূর্ণকালীন হিফজ শিক্ষার্থীদের জন্য; বিস্তারিত জানতে প্রতিষ্ঠানে যোগাযোগ করুন।",
        },
      },
    ],
    contactBadge: {
      en: "Visit the School",
      bn: "প্রতিষ্ঠানে যোগাযোগ করুন",
    },
    contactTitle: {
      en: "Get in Touch With Us",
      bn: "আমাদের সঙ্গে যোগাযোগ করুন",
    },
    contactDescription: {
      en: "Contact the school for admission enquiries and information about the campus.",
      bn: "ভর্তি-সংক্রান্ত জিজ্ঞাসা ও প্রতিষ্ঠান সম্পর্কে তথ্য জানতে যোগাযোগ করুন।",
    },
    address: { en: "Campus Address", bn: "প্রতিষ্ঠানের ঠিকানা" },
    phone: { en: "Phone Number", bn: "ফোন নম্বর" },
    email: { en: "Email Address", bn: "ইমেইল ঠিকানা" },
    officeHours: { en: "Office Hours", bn: "অফিসের সময়সূচি" },
    officeHoursInfo: {
      en: "Please contact the school to confirm office hours.",
      bn: "অফিসের সময়সূচি জানতে প্রতিষ্ঠানে যোগাযোগ করুন।",
    },
    contactButton: {
      en: "Full Contact Page",
      bn: "যোগাযোগের বিস্তারিত তথ্য",
    },
  };

  const t = (key) => content[key][lang] || content[key].en;
  const faqs = content.faqs;

  const toggleAccordion = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative w-full border-b border-shield/40 bg-background py-16 md:py-24"
    >
      <Container>
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          highlightWord={t("highlight")}
          description={t("description")}
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* FAQ Accordion */}
          <div className="space-y-4 lg:col-span-7">
            <h3 className="mb-6 flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
              <FiHelpCircle className="text-primary" />
              <span>{t("faqHeading")}</span>
            </h3>

            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl border border-shield/70 bg-white shadow-sm transition-all duration-300 hover:border-primary/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-left font-serif font-semibold text-foreground transition-colors hover:text-primary sm:p-5"
                  >
                    <span className="pr-2 text-sm sm:text-base">
                      {faq.question[lang] || faq.question.en}
                    </span>

                    <FiChevronDown
                      className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] px-5 pb-5 opacity-100"
                        : "grid-rows-[0fr] px-5 pb-0 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-shield/40 pt-3 font-sans text-xs font-light leading-relaxed text-gray-600 sm:text-sm">
                        {faq.answer[lang] || faq.answer.en}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Card */}
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-shield/80 bg-white p-6 shadow-md sm:p-8">
              <div className="mb-6 border-b border-shield/40 pb-5">
                <span className="rounded-full bg-subtle px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-primary">
                  {t("contactBadge")}
                </span>

                <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
                  {t("contactTitle")}
                </h3>

                <p className="mt-1 font-sans text-xs font-light text-gray-500">
                  {t("contactDescription")}
                </p>
              </div>

              <div className="mb-8 space-y-4 font-sans text-xs text-gray-700 sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-subtle text-primary">
                    <FiMapPin className="text-base" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("address")}
                    </p>
                    <p className="font-light leading-relaxed text-gray-500">
                      {siteConfig.contact.address[lang] ||
                        siteConfig.contact.address.en}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-subtle text-primary">
                    <FiPhoneCall className="text-base" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("phone")}
                    </p>
                    <p className="font-light text-gray-500">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-subtle text-primary">
                    <FiMail className="text-base" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("email")}
                    </p>
                    <p className="font-light text-gray-500">
                      {siteConfig.contact.mail}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-subtle text-primary">
                    <FiClock className="text-base" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("officeHours")}
                    </p>
                    <p className="font-light text-gray-500">
                      {t("officeHoursInfo")}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                label={t("contactButton")}
                href="/contact"
                bgColor="var(--navy)"
                borderColor="var(--navy)"
                flairColor="var(--primary)"
                textColor="#ffffff"
                size="md"
                className="w-full justify-center"
                rightIcon={<FiArrowRight />}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
