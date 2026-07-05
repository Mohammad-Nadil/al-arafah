import React from "react";
import { siteConfig } from "@/config/site"; 

export const metadata = {
  title: `About Us | ${siteConfig.name.en}`,
  description: `${siteConfig.slogan.en}. Learn more about Al-Arafah Islamic International School & College—our mission, Cambridge curriculum, and Islamic Tarbiyah.`,
  keywords: ["Al-Arafah", "Islamic International School", "Cambridge School Dhaka", "Hazaribag School", "Hifz Program", "Modern Islamic Education"],
  openGraph: {
    title: `About Us | ${siteConfig.name.en}`,
    description: siteConfig.slogan.en,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name.en,
  },
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground transition-colors duration-500">
  
      
    </main>
  );
}
