"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
export default function ThemeToggle() {
  const { lang } = useLanguage(); 
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const text = {
    darkToLight: {
      en: "Light Mode",
      bn: "লাইট মোড",
    },
    lightToDark: {
      en: "Dark Mode",
      bn: "ডার্ক মোড",
    },
  };

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded text-sm font-medium"
    >
      {theme === "dark" ? text.darkToLight[lang] : text.lightToDark[lang]}
    </button>
  );
}
