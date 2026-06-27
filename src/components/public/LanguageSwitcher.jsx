"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={() => toggleLanguage(lang === "en" ? "bn" : "en")}
      className="px-3 py-1.5 rounded bg-[#064e3b] text-[#d97706] font-semibold text-sm transition-all"
    >
      {lang === "en" ? "বাংলা" : "English"}
    </button>
  );
}