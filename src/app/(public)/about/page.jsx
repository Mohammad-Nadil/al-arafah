import React from "react";
import { siteConfig } from "@/config/site";
import AboutHero from "@/components/layout/about/AboutHero";
import CorePillars from "@/components/layout/about/CorePillars";
import LeadershipTeam from "@/components/layout/about/LeadershipTeam";
import CampusFacilities from "@/components/layout/about/CampusFacilities";
import StatsMetric from "@/components/layout/about/StatsMetric";
import OurStory from "@/components/layout/about/OurStory";
import MissionVision from "@/components/layout/about/MissionVision";

export const metadata = {
  title: `About Us | ${siteConfig.name.en}`,
  description: `${siteConfig.slogan.en}. Learn more about Al-Arafah Islamic International School & College—our mission, Cambridge curriculum, and Islamic Tarbiyah.`,
  keywords: [
    "Al-Arafah",
    "Islamic International School",
    "Cambridge School Dhaka",
    "Hazaribag School",
    "Hifz Program",
    "Modern Islamic Education",
  ],
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
    <main className="w-full  bg-background text-foreground ">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CorePillars />
      <LeadershipTeam />
      <CampusFacilities />
      <StatsMetric />
    </main>
  );
}
