"use client";
import {
  MdSearch,
  MdFilterList,
  MdArrowForward,
  MdPhone,
  MdKeyboardArrowDown,
  MdClose,
} from "react-icons/md";
import studentData from "@/../temp/student.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function StudentsPage() {
  const students = studentData.slice(0, 50);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className="max-w-360 mx-auto space-y-6 ">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Students Directory
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Manage {studentData.length} active students
          </p>
        </div>
        <Link
          href="/admin/students/form"
          className="px-5 py-2.5 bg-neutral-900 dark:bg-white/50 text-white dark:text-neutral-900 rounded-xl text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition shadow-lg"
        >
          Add New Student
        </Link>
      </div>

      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-700 rounded-xl shadow-sm focus-within:border-primary/60 dark:focus-within:border-primary/80 transition-colors">
            <MdSearch className="text-xl text-neutral-400 shrink-0" />
            <input
              type="text"
              placeholder="Search by name, roll, or contact..."
              className="w-full bg-transparent text-sm outline-none text-neutral-900 dark:text-white placeholder-neutral-400"
            />
          </div>
          <button
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className={`px-4 py-3 border rounded-xl flex items-center gap-2 text-sm font-semibold transition-all shrink-0 ${
              isFilterOpen
                ? "bg-primary/80 border-primary/80 text-white shadow-md"
                : "border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            }`}
          >
            <MdFilterList className="text-lg" />
            <span className="hidden sm:inline">Filters</span>
            <MdKeyboardArrowDown
              className={`transition-transform duration-300 ${
                isFilterOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div>
          <div
            className={`overflow-hidden ${isFilterOpen ? "max-h-70" : "max-h-0"} transition-all duration-300 ease-in-out`}
          >
            <div className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-2xl p-4 md:p-5 shadow-sm space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <FilterSelect label="Class" placeholder="All Classes" />
                <FilterSelect label="Section" placeholder="All Sections" />
                <FilterSelect label="Group" placeholder="All Groups" />
                <FilterSelect label="Status" placeholder="All Status" />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800">
                <button className="flex items-center gap-1.5 text-[8px] xs:text-xs font-semibold text-neutral-500 dark:text-neutral-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                  <MdClose size={15} /> Clear all filters
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-[8px] xs:text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary text-white text-[8px] xs:text-xs font-semibold transition-colors shadow-sm">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="900 xl:border border-neutral-400 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="hidden xl:grid grid-cols-8 gap-4 px-6 py-4 text-sm  font-bold   uppercase tracking-widest border-b border-neutral-100 dark:border-neutral-800 bg-primary/20 dark:bg-subtle">
          <div className="col-span-2">Student Identity</div>
          <div>Roll</div>
          <div>Class</div>
          <div>Section</div>
          <div>Group</div>
          <div className="">Contact </div>
          <div className="text-right">Action</div>
        </div>

        <div className="grid lg:grid-cols-2 xl:block gap-3 sm:p-3 md:p-0 xl:gap-0 ">
          {students.map((s, index) => (
            <div
              key={index}
              className="xl:odd:bg-background  xl:even:bg-primary/5 dark:xl:even:bg-subtle/40"
            >
              <Link
                href={`/admin/students/${s.studentId.$oid}`}
                className="xl:hidden group block relative bg-subtle/30  rounded-2xl border border-neutral-400 dark:border-neutral-800 p-4 active:scale-[0.98] transition-transform duration-200 overflow-hidden"
              >
                <div className="absolute inset-0  transition-all duration-300 pointer-events-none" />

                <div className="relative flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary dark:ring-primary border-2 border-white dark:border-neutral-800 shadow-sm">
                      <Image
                        src={
                          s.gender?.toLowerCase() === "male"
                            ? "/placeholder/boy.jpg"
                            : "/placeholder/girl.jpg"
                        }
                        alt={s.fullName}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-neutral-900 dark:text-white truncate text-sm xs:text-base">
                      {s.fullName}
                    </p>
                    <div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
                        Class:{s.className}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
                        Roll #{s.rollNumber}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 group-active:bg-primary group-active:text-white transition-colors duration-200">
                    <MdArrowForward size={16} />
                  </div>
                </div>

                <div className="relative flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-dashed border-neutral-100 dark:border-neutral-800">
                  <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[10px] font-bold text-neutral-600 dark:text-neutral-400 uppercase">
                    Sec: {s.section || "-"}
                  </span>
                  <span className="px-2 py-1 rounded-md   text-[10px] font-bold   uppercase tracking-wide">
                    {s.group || "-"}
                  </span>
                  <div className="ml-auto flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 font-mono text-nowrap">
                    <MdPhone className="text-neutral-400" size={13} />
                    {s.contactNumber}
                  </div>
                </div>
              </Link>

              <Link
                href={`/admin/students/${s.studentId.$oid}`}
                className="hidden xl:grid group grid-cols-8 gap-4 px-6 py-4 items-center border-b border-neutral-300 dark:border-neutral-800 hover:bg-primary/5 dark:hover:bg-neutral-800/40 transition-all duration-300 ease-in-out text-sm "
              >
                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-2 border-white dark:border-neutral-700 shadow-sm">
                    <Image
                      src={
                        s.gender?.toLowerCase() === "male"
                          ? "/placeholder/boy.jpg"
                          : "/placeholder/girl.jpg"
                      }
                      alt={s.fullName}
                      width={44}
                      height={44}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      {s.fullName}
                    </p>
                  </div>
                </div>

                <div className="font-medium text-neutral-900 dark:text-neutral-300">
                  {s.rollNumber}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  {s.className}
                </div>
                <div>
                  <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[10px] font-bold text-neutral-600 dark:text-neutral-400 uppercase">
                    {s.section || "-"}
                  </span>
                </div>
                <div>
                  <span className="px-2 py-1 rounded-md bg-primary/20  text-[10px] font-bold  uppercase tracking-wide">
                    {s.group || "-"}
                  </span>
                </div>

                <div className="flex items-center text-neutral-600 dark:text-neutral-400 font-mono text-nowrap gap-1.5">
                  <MdPhone className="text-neutral-400" /> {s.contactNumber}
                </div>

                <div className="col-span-1 text-right flex items-center justify-end">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-400 dark:border-neutral-700 group-hover:border-primary dark:group-hover:border-primary transition-all text-[10px] font-bold text-neutral-600 dark:text-neutral-300">
                    VIEW <MdArrowForward className="text-primary" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterSelect({ label, placeholder }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        <select
          defaultValue=""
          className="w-full appearance-none px-3 py-2.5 pr-8 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 outline-none focus:border-primary dark:focus:border-primary transition-colors cursor-pointer"
        >
          <option value="">{placeholder}</option>
        </select>
        <MdKeyboardArrowDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
      </div>
    </div>
  );
}
