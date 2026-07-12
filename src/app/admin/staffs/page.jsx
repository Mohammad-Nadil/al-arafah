"use client";
import {
  MdSearch,
  MdFilterList,
  MdPhone,
  MdKeyboardArrowDown,
  MdClose,
  MdDeleteOutline,
  MdEdit,
} from "react-icons/md";
import staffData from "@/../temp/staff.json";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Image } from "antd";
import DeleteModal from "@/components/ui/DeleteModal";

export default function StaffsPage() {
  const staffs = staffData.slice(0, 10);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = () => {
    setIsDeleting(true);
    // এখানে আপনার ডিলিট API কল করুন

    toast.success("Student deleted successfully");
    setTimeout(() => {
      setIsDeleting(false);
      setIsModalOpen(false);
    }, 2000);
  };

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className="max-w-360 mx-auto space-y-6 ">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Staff Directory
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Manage {staffData.length} active staffs
          </p>
        </div>
        <Link
          href="/admin/staffs/new"
          className="px-5 py-2.5 bg-neutral-900 dark:bg-white/50 text-white dark:text-neutral-900 rounded-xl text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition shadow-lg"
        >
          Add New Staff
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
                <FilterSelect
                  label="Role"
                  placeholder="All Roles"
                  options={["Human Resources", "Support", "Development"]}
                />
                <FilterSelect
                  label="Department"
                  placeholder="All Departments"
                  options={["HR", "IT", "Business"]}
                />
                <FilterSelect
                  label="Gender"
                  placeholder="All Genders"
                  options={["Male", "Female"]}
                />
                <FilterSelect
                  label="Status"
                  placeholder="All Status"
                  options={["Active", "Inactive"]}
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800">
                <button className="flex items-center gap-1.5 text-[8px] xs:text-xs font-semibold text-neutral-500 dark:text-neutral-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                  <MdClose size={15} /> Clear all filters
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="px-3 sm:px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-[8px] xs:text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-3 sm:px-4 py-2 rounded-lg bg-primary hover:bg-primary text-white text-[8px] xs:text-xs font-semibold transition-colors shadow-sm">
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
          <div className="col-span-2">Staff Identity</div>
          <div>Role</div>
          <div>Department</div>
          <div>Staff Id</div>
          <div>Status</div>
          <div className="">Contact </div>
          <div className="text-right">Action</div>
        </div>

        <div className="grid lg:grid-cols-2 xl:block gap-3 sm:p-3 md:p-0 xl:gap-0 ">
          {staffs.map((s, index) => (
            <div
              key={index}
              className="xl:odd:bg-background  xl:even:bg-primary/5 dark:xl:even:bg-subtle/40"
            >
              <div
                href={`/admin/staffs/${s.id.$oid}`}
                className="xl:hidden group block relative bg-subtle/30  rounded-2xl border border-neutral-400 dark:border-neutral-800 p-4 active:scale-[0.98] transition-transform duration-200 overflow-hidden"
              >
                <div className="absolute inset-0  transition-all duration-300 pointer-events-none" />

                <div className="relative flex items-center gap-2 xs.:gap-3">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary dark:ring-primary border-2 border-white dark:border-neutral-800 shadow-sm">
                      <Image
                        src={s.avatarUrl}
                        alt={s.fullName}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-neutral-900 dark:text-white truncate text-sm xs:text-base">
                      {s.fullName}
                    </p>
                    <div>
                      <p className="text-[10px] xs:text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
                        Department: {s.department}
                      </p>
                      <p className="text-[10px] xs:text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
                        Role: {s.role}
                      </p>
                      <p className="text-[10px] xs:text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
                        staff id: {s.staffId}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-wrap items-center gap-1 xs:gap-1.5  pt-2 border-t border-dashed border-neutral-100 dark:border-neutral-800">
                  <span className="px-2 py-1 rounded-md text-[9px] xs:text-[10px] font-bold   uppercase tracking-wide">
                    {s.email || "-"}
                  </span>
                  <div className="ml-auto flex items-center gap-1 text-[9px] xs:text-xs text-neutral-500 dark:text-neutral-400 font-mono text-nowrap">
                    <MdPhone className="text-neutral-400" size={13} />
                    {s.contactNumber}
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                    href={`/admin/staffs/${s.id.$oid}`}
                    className="flex-1 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold text-xs flex items-center justify-center gap-1 hover:bg-neutral-200 transition-colors"
                  >
                    <MdEdit size={14} /> Edit
                  </Link>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold text-xs flex items-center justify-center gap-1 hover:bg-red-100 transition-colors"
                  >
                    <MdDeleteOutline size={14} /> Delete
                  </button>
                </div>
              </div>

              <div
                href={`/admin/staffs/${s.id.$oid}`}
                className="hidden xl:grid group grid-cols-8 gap-4 px-6 py-4 items-center border-b border-neutral-300 dark:border-neutral-800 hover:bg-primary/5 dark:hover:bg-neutral-800/40 transition-all duration-300 ease-in-out text-sm "
              >
                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-2 border-white dark:border-neutral-700 shadow-sm">
                    <Image
                      src={s.avatarUrl}
                      alt={s.fullName}
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
                  {s.role}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  {s.department}
                </div>
                <div>
                  <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[10px] font-bold text-neutral-600 dark:text-neutral-400 uppercase">
                    {s.staffId || "-"}
                  </span>
                </div>
                <div>
                  <span className="px-2 py-1 rounded-md bg-primary/20  text-[10px] font-bold  uppercase tracking-wide">
                    {s.status || "-"}
                  </span>
                </div>

                <div className="flex items-center text-neutral-600 dark:text-neutral-400 font-mono text-nowrap gap-1.5">
                  <MdPhone className="text-neutral-400" /> {s.contactNumber}
                </div>

                <div className="col-span-1 text-right flex items-center justify-end gap-2">
                  <Link
                    href={`/admin/staffs/${s.id.$oid}`}
                    className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <MdEdit
                      size={16}
                      className="text-neutral-600 dark:text-neutral-400"
                    />
                  </Link>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-2 rounded-lg border border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <MdDeleteOutline size={16} className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        name="Jackelyn Witherdon"
        isDeleting={isDeleting}
      />
    </div>
  );
}

function FilterSelect({ label, placeholder, options = [] }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        <select
          defaultValue=""
          className="w-full appearance-none px-3 py-2.5 pr-8 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 outline-none focus:border-neutral-900 dark:focus:border-white transition-colors cursor-pointer"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <MdKeyboardArrowDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
      </div>
    </div>
  );
}
