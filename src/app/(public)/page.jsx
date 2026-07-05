import FeaturedNotice from "@/components/layout/home/FeaturedNotice";
import HeroBanner from "@/components/layout/home/HeroBanner";
import HifzHighlights from "@/components/layout/home/HifzHighlights";
import OurFacilities from "@/components/layout/home/OurFacilities";
import WelcomeMassage from "@/components/layout/home/WelcomeMassage";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroBanner />
      <WelcomeMassage />
      <OurFacilities />
      <FeaturedNotice />
      {/* <HifzHighlights /> */}
    </div>
  );
};

export default page;
