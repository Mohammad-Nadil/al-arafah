import FeaturedNotice from "@/components/layout/home/FeaturedNotice";
import HeroBanner from "@/components/layout/home/HeroBanner";
import HifzHighlights from "@/components/layout/home/HifzHighlights";
import OurFacilities from "@/components/layout/home/OurFacilities";
import WelcomeMassage from "@/components/layout/home/WelcomeMassage";
import React from "react";

export default function Homepage() {
  return (
    <main className="w-full  bg-background text-foreground ">
      <HeroBanner />
      <WelcomeMassage />
      <OurFacilities />
      <FeaturedNotice />
      {/* <HifzHighlights /> */}
    </main>
  );
}
