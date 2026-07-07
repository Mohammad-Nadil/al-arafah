"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function ResultSearch({ onSearch }) {
  const { lang } = useLanguage();
  const [roll, setRoll] = useState("");
  const [exam, setExam] = useState("");

  const t = {
    en: {
      rollPlaceholder: "Enter Roll Number",
      selectExam: "Select Examination",
      button: "Search Result",
      exams: [
        "1st Monthly Test",
        "Half Yearly Examination",
        "Pre-Test Examination",
        "Final Examination",
      ],
    },
    bn: {
      rollPlaceholder: "রোল নম্বর লিখুন",
      selectExam: "পরীক্ষা নির্বাচন করুন",
      button: "ফলাফল খুঁজুন",
      exams: [
        "১ম মাসিক পরীক্ষা",
        "অর্ধ-বার্ষিক পরীক্ষা",
        "প্রি-টেস্ট পরীক্ষা",
        "বার্ষিক পরীক্ষা",
      ],
    },
  };

  const currentT = lang === "bn" ? t.bn : t.en;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(roll, exam);
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4  p-6 rounded-xl xl:rounded-2xl border border-primary dark:border-neutral-600 shadow-sm transition-all max-w-4xl mx-auto"
    >
      <input
        type="number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        placeholder={currentT.rollPlaceholder}
        className="p-4 border border-primary dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
        required
      />

      <select
        value={exam}
        onChange={(e) => setExam(e.target.value)}
        className="p-4 border rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer 
              
             text-neutral-800 dark:text-neutral-200 
             border-primary dark:border-neutral-600"
        required
      >
        <option value="" className="text-neutral-500">
          {currentT.selectExam}
        </option>
        {currentT.exams.map((e, index) => (
          <option
            key={e}
            value={
              [
                "1st Monthly Test",
                "Half Yearly Examination",
                "Pre-Test Examination",
                "Final Examination",
              ][index]
            }
            className="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200" 
          >
            {e}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-primary hover:bg-primary/90 text-white rounded-xl font-bold p-4 transition-all active:scale-95"
      >
        {currentT.button}
      </button>
    </form>
  );
}
