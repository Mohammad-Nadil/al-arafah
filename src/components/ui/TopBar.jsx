"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { IoIosMail } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import Container from "../public/Container";
const TopBar = () => {
  const { lang } = useLanguage();

  return (
    <div className="hidden sm:block w-full bg-primary text-primary-foreground border-b border-white/10 py-2 px-2">
      <Container className="flex justify-between items-center text-xs font-medium tracking-wide">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteConfig.contact.mail}`}
            className="flex items-center gap-2 opacity-85 hover:opacity-100 hover:text-accent transition-all duration-200"
          >
            <IoIosMail className="text-xl text-accent" />
            <span>{siteConfig.contact.mail}</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-1.5 opacity-85 hover:opacity-100 hover:text-accent transition-all duration-200"
          >
            <FiPhone className="text-base text-accent" />
            <span>{siteConfig.contact.phone}</span>
          </a>
        </div>

        <div className="font-serif tracking-wider text-accent drop-shadow-sm">
          {siteConfig.slogan[lang]}
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
