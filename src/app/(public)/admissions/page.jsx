import React from "react";
import AdmissionCircular from "@/components/layout/admission/AdmissionCircular";
import FeesStructure from "@/components/layout/admission/FeesStructure";
import HowToApply from "@/components/layout/admission/HowToApply";
import ApplicationGateway from "@/components/layout/admission/ApplicationGateway";

export const metadata = {
  title: {
    en: "Admission Circular 2026-2027 | Al-Arafah Islamic International School & College",
    bn: "ভর্তি বিজ্ঞপ্তি ২০২৬-২০২৭ | আল-আরাফাহ ইসলামিক ইন্টারন্যাশনাল স্কুল অ্যান্ড কলেজ"
  },
  description: {
    en: "Explore admission criteria, age eligibility, and rules for the 2026-2027 academic session at Al-Arafah Islamic International School & College.",
    bn: "আল-আরাফাহ ইসলামিক ইন্টারন্যাশনাল স্কুল অ্যান্ড কলেজে ২০২৬-২০২৭ শিক্ষাবর্ষের ভর্তির যোগ্যতা, বয়সসীমা এবং নিয়মাবলী জানুন।"
  },
  openGraph: {
    title: "Admission Circular | Al-Arafah Islamic International School & College",
    description: "Join a world-class infrastructure integrated with moral upbringing. Admission open for 2026-2027.",
    images: [{ url: "/images/admission-og.jpg", width: 1200, height: 630, alt: "Al-Arafah Admission" }],
  }
};

export default function AdmissionPage() {
  return (
    <main className="w-full  bg-background text-foreground ">
      <AdmissionCircular />
      <FeesStructure />
      <HowToApply />
      <ApplicationGateway />
    </main>
  );
}