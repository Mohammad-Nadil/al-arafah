"use client";

import React from "react";
import Container from "@/components/public/Container";
import Curriculum from "@/components/layout/academics/Curriculum";
// import DownloadCenter from "@/components/layout/academics/DownloadCenter";
import RulesPolicies from "@/components/layout/academics/RulesPolicies";
import AcademicHero from "@/components/layout/academics/AcademicHero";
import AcademicLevels from "@/components/layout/academics/AcademicLevels";
import EarlyChildhood from "@/components/layout/academics/EarlyChildhood";
import IslamicHifzSection from "@/components/layout/academics/IslamicHifzSection";
import AcademicsCTA from "@/components/layout/academics/AcademicsCTA";

export default function AcademicsPage() {
  return (
    <main className=" bg-background">
      <Container>
        <AcademicHero />
        <AcademicLevels />
        <Curriculum />
        <EarlyChildhood />
        <IslamicHifzSection />
        <RulesPolicies />
        <AcademicsCTA/>
        {/* <DownloadCenter /> */}
      </Container>
    </main>
  );
}
