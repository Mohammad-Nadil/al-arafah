"use client";
import { useLanguage } from "@/context/LanguageContext";
import { FiGlobe } from "react-icons/fi";

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={() => toggleLanguage(lang === "en" ? "bn" : "en")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 dark:border-border text-xs font-semibold hover:bg-primary/5 dark:hover:bg-white/5 hover:border-accent transition-all duration-300 cursor-pointer text-foreground group"
    >
      <FiGlobe className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform duration-300" />
      <span className="tracking-wide">
        {lang === "en" ? "বাংলা" : "English"}
      </span>
    </button>
  );
}