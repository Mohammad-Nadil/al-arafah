"use client";
import {
  MdSearch,
  MdFilterList,
  MdArrowForward,
  MdPhone,
} from "react-icons/md";
import studentData from "@/../temp/student.json";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function StudentsPage() {
  const students = studentData.slice(0, 50);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-6 ">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Students Directory
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Manage {studentData.length} active students
          </p>
        </div>
        <button className="px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition shadow-lg">
          Add New Student
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex gap-3">
        <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-700 rounded-xl shadow-sm">
          <MdSearch className="text-xl text-neutral-400" />
          <input
            type="text"
            placeholder="Search by name, roll, or contact..."
            className="w-full bg-transparent text-sm outline-none text-neutral-900 dark:text-white placeholder-neutral-400"
          />
        </div>
        <button className="px-4 py-3 border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded-xl flex items-center gap-2 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
          <MdFilterList className="dark:text-neutral-300" />
        </button>
      </div>

      {/* Modern Grid Table */}
     <div className="bg-white dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-700 rounded-xl xl:rounded-2xl overflow-hidden shadow-sm">
        
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-8 gap-4 p-4 text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider border-b border-neutral-300 dark:border-neutral-700">
          <div className="col-span-2">Student Profile</div>
          <div>Roll</div>
          <div>Class</div>
          <div>Section</div>
          <div>Group</div>
          <div>Contact</div>
          <div className="text-right">Action</div>
        </div>

        {/* Rows - পুরো রো টি এখন একটি Link */}
        {students.map((s, index) => (
          <Link
            key={index}
            href={`/admin/students/${s.studentId.$oid}`} // এখানে আপনার ডিটেইলস পেজের পাথ হবে
            className="grid grid-cols-1 md:grid-cols-8 gap-4 p-4 items-center border-b border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition text-sm cursor-pointer block"
          >
            {/* Student Profile */}
            <div className="col-span-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-700">
                <Image
                  src={s.gender?.toLowerCase() === "male" ? "/placeholder/boy.jpg" : "/placeholder/girl.jpg"}
                  alt={s.fullName}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 dark:text-white">{s.fullName}</p>
                <p className="md:hidden text-[11px] text-neutral-500 dark:text-neutral-400">
                  {s.className} • Roll: {s.rollNumber}
                </p>
              </div>
            </div>

            {/* Desktop Info */}
            <div className="hidden md:block font-mono text-neutral-600 dark:text-neutral-400">{s.rollNumber}</div>
            <div className="hidden md:block text-neutral-600 dark:text-neutral-400">{s.className}</div>
            <div className="hidden md:block text-neutral-600 dark:text-neutral-400">{s.section || "N/A"}</div>
            <div className="hidden md:block text-neutral-600 dark:text-neutral-400">{s.group || "N/A"}</div>
            <div className="invisible md:visible text-neutral-600 dark:text-neutral-400 font-mono flex items-center gap-1.5">
              <MdPhone className="text-neutral-400" /> {s.contactNumber}
            </div>

            {/* Details Indicator (Mobile-এ অ্যারো দেখাবে, ডেস্কটপে হাইড থাকবে) */}
            <div className="text-right flex items-center justify-end">
              <span className="md:hidden text-neutral-400"><MdArrowForward /></span>
              <button className="hidden md:flex items-center gap-2 px-4 py-2 text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition">
                DETAILS <MdArrowForward />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}