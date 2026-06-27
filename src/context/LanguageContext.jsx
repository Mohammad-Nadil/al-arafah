"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // ইউজার আগে কোনটা সিলেক্ট করেছিল তা LocalStorage এ সেভ রাখার জন্য
  useEffect(() => {
    const savedLang = localStorage.getItem("app-lang");
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("app-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
