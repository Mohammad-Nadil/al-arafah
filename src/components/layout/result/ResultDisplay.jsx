"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";

export default function ResultDisplay({ data }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.2, ease: "power3.out" },
    );

    if (data && data.gpa >= 3.5) {
      // ভালো রেজাল্টের শর্ত

      // সাধারণ কনফিগারেশন
      const defaults = {
        spread: 70,
        ticks: 60,
        gravity: 0.8,
        decay: 0.94,
        startVelocity: 30,
        colors: ["#ffbe0b", "#ffffff", "#ff0000"], // আপনার থিম কালার
      };

      // বাম পাশের জন্য ফায়ারওয়ার্ক
      confetti({
        ...defaults,
        particleCount: 80,
        origin: { x: 0, y: 0.95 }, // x:0 মানে একদম বামে, y:0.95 মানে স্ক্রিনের নিচে
        angle: 45, // ডান দিকে এঙ্গেল করবে
      });

      // ডান পাশের জন্য ফায়ারওয়ার্ক
      confetti({
        ...defaults,
        particleCount: 80,
        origin: { x: 1, y: 0.95 }, // x:1 মানে একদম ডানে, y:0.95 মানে স্ক্রিনের নিচে
        angle: 135, // বাম দিকে এঙ্গেল করবে
      });
    }
  }, [data]);
  return (
    <div
      ref={cardRef}
      className="mt-10 p-4 xl:p-8 rounded-lg xl:rounded-3xl border border-neutral-400 dark:border-neutral-600 shadow-2xl shadow-neutral-200/50 dark:shadow-none max-w-4xl mx-auto transition-all duration-500 opacity-0"
    >
      <div className="flex justify-between items-start mb-8 border-b border-neutral-400 dark:border-neutral-600 pb-8">
        <div>
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
