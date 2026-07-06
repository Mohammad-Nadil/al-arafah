"use client";

import React from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiFacebook,
  FiYoutube,
} from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site"; // আপনার দেওয়া ফাইল থেকে ইমপোর্ট
import ContactForm from "@/components/layout/contact/ContactForm";

export default function ContactPage() {
  const { lang } = useLanguage();

  const infoCards = [
    {
      icon: <FiPhone />,
      title: lang === "en" ? "Call Us" : "কল করুন",
      value: siteConfig.contact.phoneFormatted,
    },
    {
      icon: <FiMail />,
      title: lang === "en" ? "Email Us" : "ইমেইল করুন",
      value: siteConfig.contact.mail,
    },
    {
      icon: <FiMapPin />,
      title: lang === "en" ? "Location" : "ঠিকানা",
      value:
        lang === "en"
          ? siteConfig.contact.address.en
          : siteConfig.contact.address.bn,
    },
    {
      icon: <FiClock />,
      title: lang === "en" ? "Office Hours" : "অফিস সময়",
      value: lang === "en" ? "Sun - Thu: 8am - 4pm" : "রবি - বৃহঃ: ৮টা - ৪টা",
    },
  ];

  return (
    <section className="w-full py-20 bg-background text-foreground">
      <Container>
        <SectionHeader
          badge={lang === "en" ? "CONTACT US" : "যোগাযোগ"}
          title={
            lang === "en"
              ? "We'd Love to Hear From You"
              : "আপনার যেকোনো প্রয়োজনে আমাদের জানান"
          }
          center={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
          <div className="lg:col-span-4 space-y-6">
            {infoCards.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-400 dark:border-neutral-800 transition-all hover:border-primary/50"
              >
                <div className="text-primary mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-neutral-400">
                    {item.title}
                  </h4>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              <a
                href={siteConfig.socials.facebook}
                className="p-3 bg-blue-600/10 text-blue-600 rounded-xl"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href={siteConfig.socials.youtube}
                className="p-3 bg-red-600/10 text-red-600 rounded-xl"
              >
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>

        <div className="mt-16 rounded-3xl overflow-hidden border-8 border-neutral-100 dark:border-neutral-900 shadow-2xl h-[450px]">
          {React.cloneElement(siteConfig.contact.googleMapsLink, {
            className:
              "w-full h-full grayscale hover:grayscale-0 transition-all duration-700",
          })}
        </div>
      </Container>
    </section>
  );
}
