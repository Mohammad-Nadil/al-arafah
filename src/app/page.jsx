import LanguageSwitcher from "@/components/public/LanguageSwitcher";
import ThemeToggle from "@/components/public/ThemeToggle";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Home</h1>
      <ThemeToggle />
      <LanguageSwitcher />
    </div>
  );
};

export default page;
