import React from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { FiBook, FiCalendar, FiFileText, FiAward } from "react-icons/fi";

export const metadata = {
  title: "Academics - Al-Arafah Islamic International School & College",
  description:
    "Explore our academic curriculum, class routines, exam schedules, and student result portal.",
};

const academicSections = [
  {
    id: 1,
    title: "Curriculum",
    icon: <FiBook />,
    desc: "Play to Grade 10 & Hifz curriculum.",
    link: "academics/curriculum",
  },
  {
    id: 2,
    title: "Class Routine",
    icon: <FiCalendar />,
    desc: "View and download your weekly class routine.",
    link: "academics/class-routine",
  },
  {
    id: 3,
    title: "Exam Routine",
    icon: <FiFileText />,
    desc: "Check upcoming exam schedules and seat plans.",
    link: "academics/exam-routine",
  },
  {
    id: 4,
    title: "Results Portal",
    icon: <FiAward />,
    desc: "Search student marksheet by ID or Roll.",
    link: "academics/results",
  },
];

export default function AcademicsPage() {
  return (
    <main className="py-12 md:py-14 xl:py-16 bg-background">
      <Container>
        <SectionHeader
          badge="ACADEMICS"
          title="Academic Excellence"
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {academicSections.map((s) => (
            <a
              key={s.id}
              href={s.link}
              className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-primary transition-all group"
            >
              <div className="text-primary text-3xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-neutral-500 text-sm">{s.desc}</p>
            </a>
          ))}
        </div>
      </Container>
    </main>
  );
}
