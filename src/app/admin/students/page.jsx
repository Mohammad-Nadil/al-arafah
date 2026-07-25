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
import { Image } from "antd";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function StudentsPage() {
  const students = studentData.slice(0, 50);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className=" mx-auto  ">
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
        <div className="grid lg:grid-cols-2 xl:block gap-3 sm:p-3 md:p-0 xl:gap-0 ">
          {students.map((s, index) => (
            <Link
              key={index}
              href={`/admin/students/${s.studentId.$oid}`}
              className="xl:hidden group block relative bg-subtle/30  rounded-2xl border border-neutral-400 dark:border-neutral-800 p-4 active:scale-[0.98] transition-transform duration-200 overflow-hidden xl:odd:bg-background  xl:even:bg-primary/5 dark:xl:even:bg-subtle/40"
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
          ))}
          <div className="hidden xl:block overflow-x-auto rounded-2xl  shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left">Student</th>
                  <th className="px-4 py-4 text-center">Roll</th>
                  <th className="px-4 py-4 text-center">Class</th>
                  <th className="px-4 py-4 text-center">Section</th>
                  <th className="px-4 py-4 text-center">Group</th>
                  <th className="px-4 py-4 text-center hidden 2xl:block">
                    Status
                  </th>
                  <th className="px-4 py-4 text-center">Contact</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map((s) => (
                  <tr
                    key={s.studentId.$oid}
                    onClick={() =>
                      router.push(`/admin/students/${s.studentId.$oid}`)
                    }
                    className="border-b border-primary/10 even:bg-primary/5 dark:even:bg-subtle/40 hover:bg-primary/10 transition "
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={
                            s.gender?.toLowerCase() === "male"
                              ? "/placeholder/boy.jpg"
                              : "/placeholder/girl.jpg"
                          }
                          alt={s.fullName}
                          width={42}
                          height={42}
                          className="rounded-full"
                        />

                        <div>
                          <p className="font-semibold">{s.fullName}</p>
                          <p className="text-xs text-foreground/60">
                            Student ID #{s.rollNumber}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-center font-medium">
                      {s.rollNumber}
                    </td>

                    <td className="px-4 py-4 text-center">{s.className}</td>

                    <td className="px-4 py-4 text-center">
                      <span className="rounded-md bg-background px-3 py-1 text-xs font-semibold">
                        {s.section || "-"}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-center">
                      <span className=" text-foreground px-3 py-1 text-xs font-semibold">
                        {s.group || "-"}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-center hidden 2xl:block">
                      <span
                        className={` px-3 py-1 text-xs font-semibold ${s.status === "active" ? "text-green-600" : s.status === "graduated" ? "text-yellow-600" : "text-red-600"}`}
                      >
                        {s.status}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <MdPhone className="text-primary" />
                        {s.contactNumber}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/admin/students/${s.studentId.$oid}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90"
                      >
                        View
                        <MdArrowForward />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
