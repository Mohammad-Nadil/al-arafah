"use client";

import React from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import Curriculum from "@/components/layout/academics/Curriculum";
import SchoolTiming from "@/components/layout/academics/SchoolTiming";
// import DownloadCenter from "@/components/layout/academics/DownloadCenter";
import RulesPolicies from "@/components/layout/academics/RulesPolicies";

export default function AcademicsPage() {
  const { lang } = useLanguage();

  return (
    <main className="py-12 md:py-14 xl:py-16 bg-background">
      <Container>
        <SectionHeader
          title={lang === "en" ? "Academic Overview" : "একাডেমিক তথ্যাবলী"}
          center={true}
        />
        <Curriculum />
        <SchoolTiming />
        {/* <DownloadCenter /> */}
        <RulesPolicies />
      </Container>
    </main>
  );
}
