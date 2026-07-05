"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full border border-transparent hover:border-gray-200 dark:hover:border-border hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 text-accent cursor-pointer flex items-center justify-center group"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FiSun className="w-4 h-4 transition-transform group-hover:rotate-45 duration-300" />
      ) : (
        <FiMoon className="w-4 h-4 transition-transform group-hover:-rotate-12 duration-300" />
      )}
    </button>
  );
}
