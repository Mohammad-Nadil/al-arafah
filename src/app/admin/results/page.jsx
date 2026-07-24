"use client";
import React, { useState } from "react";

// import resultsData from "@/../temp/results.json";
import { Image } from "antd";
import boyImg from "@/../public/placeholder/boy.jpg";

const ResultsPage = () => {
  // const [results] = useState(resultsData.filter((item) => item.subjects));

  const placeholder = [
    ["Arafat Hossain", 82, 79, 91, 84, 88, 95, 76, 83, 678, "A+"],
    ["Nusrat Jahan", 91, 90, 94, 89, 87, 96, 85, 90, 722, "A+"],
    ["Rakib Hasan", 75, 73, 80, 78, 72, 82, 76, 74, 610, "A"],
    ["Tasnim Akter", 86, 84, 88, 90, 81, 92, 85, 87, 693, "A+"],
    ["Sabbir Ahmed", 68, 70, 72, 69, 75, 80, 71, 73, 578, "A-"],
    ["Mehedi Hasan", 94, 96, 98, 95, 91, 97, 92, 94, 757, "A+"],
    ["Farzana Islam", 80, 82, 85, 83, 79, 90, 81, 84, 664, "A"],
    ["Tamim Iqbal", 72, 75, 70, 74, 69, 78, 71, 76, 585, "A-"],
    ["Mim Akter", 88, 90, 92, 89, 86, 94, 87, 91, 717, "A+"],
    ["Sakib Rahman", 77, 79, 81, 80, 76, 84, 78, 82, 637, "A"],
  ];

  const getGradeStyle = (grade) => {
    switch (grade) {
      case "A+":
      case "A":
      case "A-":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400";

      case "B":
      case "C":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400";

      case "D":
        return "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400";

      default:
        return "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400";
    }
  };

  return (
    <div className=" space-y-6">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Result Management</h2>
          <p className="text-sm text-neutral-500">
            Manage and update exam results for students
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <select className="px-4 py-2 sm:py-2 border rounded-xl bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-sm">
            <option>Select Class</option>
            <option>STD-I</option>
            <option>STD-II</option>
            <option>STD-III</option>
          </select>
          <select className="px-4 py-2 sm:py-2 border rounded-xl bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-sm">
            <option>select exam</option>
            <option>1st semester</option>
            <option>half yearly</option>
            <option>final</option>
          </select>
          <select className="px-4 py-2 border rounded-xl bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-sm">
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
          </select>
          <button className="px-4 py-2 sm:py-2 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors">
            Load Results
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Students", val: "120" },
          { label: "Passed", val: "112" },
          { label: "Failed", val: "8" },
          { label: "Avg Marks", val: "78%" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-neutral-900 p-4 rounded-2xl border shadow-sm border-neutral-400 dark:border-neutral-600"
          >
            <p className="text-xs text-foreground uppercase">{stat.label}</p>
            <p className="text-xl font-bold mt-1">{stat.val}</p>
          </div>
        ))}
      </div>

      {/* Results Table */}
      <div className="mt-6">
        <div className="hidden md:block overflow-x-auto rounded-xl border border-primary/20 dark:bg-subtle shadow-sm">
          <table className=" w-full text-sm">
            <thead className="bg-primary text-primary-foreground text-[10px] 2xl:text-base">
              <tr>
                {[
                  "#",
                  "Student",
                  "Bangla",
                  "English",
                  "Math",
                  "Science",
                  "ICT",
                  "Religion",
                  "History",
                  "Geography",
                  "Total",
                  "Grade",
                  "Action",
                ].map((label, index) => (
                  <th
                    key={index}
                    className="2xl:px-4  py-3 text-center nth-[2]:text-left nth-[2]:text-base nth-[2]:px-10"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="">
              {placeholder.map((student, index) => (
                <tr
                  key={index}
                  className="border-b border-primary/10 transition hover:bg-background dark:even:bg-background/70 even:bg-primary/10"
                >
                  <td className="px-4 py-3 font-medium">{index + 1}</td>

                  <td className="px-4 py-3 font-semibold flex items-center gap-3">
                    <Image
                      src={boyImg.src}
                      alt="student"
                      className="rounded-full max-w-10 aspect-square"
                    />
                    {student[0]}
                  </td>

                  {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <td key={index} className="px-4 py-3 text-center">
                      {student[index]}
                    </td>
                  ))}

                  <td className="px-4 py-3 text-center font-semibold text-primary">
                    {student[9]}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${getGradeStyle(
                        student[10],
                      )}`}
                    >
                      {student[10]}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-center">
                    <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition hover:opacity-90">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-4 md:hidden">
          {placeholder.map((student, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-400 dark:border-neutral-600  dark:bg-subtle p-4 shadow-sm"
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={boyImg.src}
                    alt="student"
                    className="w-10! aspect-square rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{student[0]}</h3>
                    <p className="text-xs text-foreground/70">
                      Roll #{index + 1}
                    </p>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${getGradeStyle(
                    student[10],
                  )}`}
                >
                  {student[10]}
                </span>
              </div>

              {/* Subjects */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <Info label="Bangla" value={student[1]} />
                <Info label="English" value={student[2]} />
                <Info label="Math" value={student[3]} />
                <Info label="Science" value={student[4]} />
                <Info label="ICT" value={student[5]} />
                <Info label="Religion" value={student[6]} />
                <Info label="History" value={student[7]} />
                <Info label="Geography" value={student[8]} />
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between border-t border-primary/20 pt-4">
                <div>
                  <p className="text-xs text-foreground/60">Total</p>
                  <p className="font-bold text-primary text-lg">
                    {student[9] + " / 800"}
                  </p>
                </div>

                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
                  View Result
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;

const Info = ({ label, value }) => (
  <div className="rounded-xl bg-background border border-neutral-400 dark:border-neutral-600 px-3 py-2">
    <p className="text-[11px] uppercase tracking-wide text-foreground">
      {label}
    </p>

    <p className="mt-1 text-base font-semibold">{value}</p>
  </div>
);
