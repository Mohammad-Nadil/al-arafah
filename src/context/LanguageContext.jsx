"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("app-lang") || "en";
    setLang(savedLang);
    document.documentElement.setAttribute("lang", savedLang);
  }, []);

  const toggleLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("app-lang", newLang);
    document.documentElement.setAttribute("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);