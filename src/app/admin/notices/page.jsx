"use client";
import React, { useState } from "react";
import {
  MdAdd,
  MdDeleteOutline,
  MdEdit,
  MdNotificationsActive,
  MdCalendarToday,
} from "react-icons/md";

import notices from "@/../temp/notices.json";
import DeleteModal from "@/components/ui/DeleteModal";
import toast from "react-hot-toast";
import Link from "next/link";

export const NoticesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    // এখানে আপনার ডিলিট API কল করুন

    toast.success("Notice deleted successfully");
    setTimeout(() => {
      setIsDeleting(false);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <div className="mx-auto flex flex-col gap-6 ">
      {/* Header & Create Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900  flex items-center gap-2">
            <MdNotificationsActive className="text-primary" /> Notice Board
          </h2>
          <p className="text-sm text-neutral-500 mt-0.5">
            Manage and broadcast important announcements to students and teachers
          </p>
        </div>

        <Link
          href="/admin/notices/new"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-deep transition-colors shadow-sm"
        >
          <MdAdd size={18} /> Add New Notice
        </Link>
      </div>

      {/* Notices Container */}
      <div className="xl:bg-white  xl:border border-neutral-200  rounded-2xl xl:shadow-sm overflow-hidden">
        
        {/* ================= PC / Desktop Table View ================= */}
        <div className="hidden xl:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-50/80  border-b border-neutral-200  text-[11px] font-bold uppercase tracking-wider text-neutral-500 ">
                <th className="py-4 px-6">Topic</th>
                <th className="py-4 px-6">Title & Description</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100  text-sm">
              {notices.slice(0, 5).map((notice, index) => (
                <tr
                  key={index}
                  className="hover:bg-neutral-50/60  transition-colors"
                >
                  {/* Topic Column */}
                  <td className="py-4 px-6 align-top">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-primary/10  text-primary  font-bold text-[10px] uppercase tracking-wide border border-shield/50 ">
                      {notice.topic}
                    </span>
                  </td>

                  {/* Title & Description Column */}
                  <td className="py-4 px-6 align-top max-w-xl">
                    <h3 className="font-semibold text-neutral-900  text-base mb-1">
                      {notice.title}
                    </h3>
                    <p className="text-xs text-neutral-500  line-clamp-2 leading-relaxed">
                      {notice.description}
                    </p>
                  </td>

                  {/* Date Column */}
                  <td className="py-4 px-6 align-top whitespace-nowrap text-xs font-medium text-neutral-600 ">
                    {notice.date}
                  </td>

                  {/* Actions Column */}
                  <td className="py-4 px-6 align-top text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/notices/${notice.id}`}
                        className="p-2 rounded-lg border border-neutral-300  hover:bg-neutral-100  transition-colors"
                      >
                        <MdEdit
                          size={16}
                          className="text-neutral-600 "
                        />
                      </Link>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="p-2 rounded-lg border border-red-200  hover:bg-red-50  transition-colors"
                      >
                        <MdDeleteOutline size={16} className="text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= Mobile & Small Device Card View ================= */}
        <div className="xl:hidden space-y-4 py-4">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="bg-white  border border-neutral-200/80  rounded-2xl p-4 shadow-xs space-y-3 transition-all hover:shadow-md"
            >
              {/* Card Header: Topic & Date */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-primary/10  text-primary  font-bold text-[11px] uppercase tracking-wider border border-shield/60 ">
                  {notice.topic}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-500  font-medium bg-neutral-100  px-2.5 py-1 rounded-lg">
                  <MdCalendarToday size={13} className="text-primary" />
                  {notice.date}
                </span>
              </div>

              {/* Card Title & Description */}
              <div className="space-y-1">
                <h3 className="font-bold text-neutral-900  text-base leading-snug">
                  {notice.title}
                </h3>
                <p className="text-xs text-neutral-500  leading-relaxed line-clamp-3">
                  {notice.description}
                </p>
              </div>

              {/* Card Actions Footer */}
              <div className="flex items-center gap-2 pt-3 border-t border-neutral-100 ">
                <Link
                  href={`/admin/notices/${notice.id}`}
                  className="flex-1 py-2 rounded-xl bg-neutral-100  hover:bg-neutral-200  text-neutral-700  font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MdEdit size={15} /> Edit Notice
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 py-2 rounded-xl bg-red-50  hover:bg-red-100  text-red-600  font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-red-200/50 "
                >
                  <MdDeleteOutline size={15} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        name="Notice Item"
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default NoticesPage;