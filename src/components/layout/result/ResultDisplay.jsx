"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ResultDisplay({ data }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.2, ease: "power3.out" },
    );
  }, [data]);
  return (
    <div
      ref={cardRef}
      className="mt-10 p-4 xl:p-8 rounded-lg xl:rounded-3xl border border-neutral-400 dark:border-neutral-600 shadow-2xl shadow-neutral-200/50 dark:shadow-none max-w-4xl mx-auto transition-all duration-500 opacity-0"
    >
      <div className="flex justify-between items-start mb-8 border-b border-neutral-400 dark:border-neutral-600 pb-8">
        <div >
          <h2 className="text-3xl font-extrabold text-neutral-800 dark:text-white">
            {data.name}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-1">
            {data.class} | Roll: {data.roll}
          </p>
          <div className="mt-3 inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
            {data.examType}
          </div>
        </div>

        <div className="text-right bg-neutral-50 dark:bg-neutral-800 px-6 py-3 rounded-2xl">
          <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold">
            Total GPA
          </p>
          <p className="text-4xl font-black text-primary">{data.gpa}</p>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-neutral-400 text-xs uppercase tracking-wider">
              <th className="pb-4 font-medium">Subject</th>
              <th className="pb-4 font-medium">Marks</th>
              <th className="pb-4 font-medium text-right">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-400 dark:divide-neutral-600">
            {data.subjects.map((sub, i) => (
              <tr key={i} className="text-sm group">
                <td className="py-4 font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-primary transition-colors w-3/5">
                  {sub.subject}
                </td>
                <td className="py-4 text-neutral-500">
                  {sub.marks} / {sub.fullMarks}
                </td>
                <td className="py-4 font-bold text-primary text-right">
                  {sub.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
