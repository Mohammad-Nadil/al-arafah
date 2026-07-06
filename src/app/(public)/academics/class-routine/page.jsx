"use client";

import React, { useState } from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiEye, FiX, FiCalendar } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

const classRoutines = [
  {
    id: 1,
    titleEn: "Play to KG",
    titleBn: "প্লে থেকে কেজি",
    img: "/routine.jpg",
  },
  {
    id: 2,
    titleEn: "Class 1 to 5",
    titleBn: "১ম থেকে ৫ম শ্রেণি",
    img: "/routine.jpg",
  },
  {
    id: 3,
    titleEn: "Class 6 to 10",
    titleBn: "৬ষ্ঠ থেকে ১০ম শ্রেণি",
    img: "/routine.jpg",
  },
  {
    id: 4,
    titleEn: "Class 11 to 12",
    titleBn: "১১শ থেকে ১২শ শ্রেণি",
    img: "/routine.jpg",
  },
];

export default function ClassRoutinePage() {
  const { lang } = useLanguage();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main className="py-16 bg-background">
      <Container>
        <SectionHeader
          badge={lang === "en" ? "ROUTINES" : "রুটিন"}
          title={lang === "en" ? "Class Routine" : "ক্লাস রুটিন"}
          center={true}
        />

        <div className="max-w-3xl mx-auto mt-12 grid gap-4">
          {classRoutines.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="cursor-pointer flex items-center justify-between p-6 bg-card border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-primary transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiCalendar size={24} />
                </div>
                <h3 className="font-bold text-lg">
                  {lang === "en" ? item.titleEn : item.titleBn}
                </h3>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                <FiEye size={16} /> {lang === "en" ? "View" : "দেখুন"}
              </button>
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <div
              className="bg-white dark:bg-neutral-900 p-4 rounded-2xl max-w-4xl w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 text-white hover:text-red-400"
              >
                <FiX size={32} />
              </button>
              <img
                src={selectedImg.img || "/routine.jpg"}
                alt="Routine"
                className="w-full aspect-video  rounded-lg"
                onError={(e) =>
                  (e.target.src =
                    "https://placehold.co/800x600/f0f0f0/333?text=Routine+Image+Not+Found")
                }
              />
              <p className="text-center mt-4 font-bold text-neutral-800 dark:text-neutral-200">
                {lang === "en" ? selectedImg.titleEn : selectedImg.titleBn}
              </p>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
