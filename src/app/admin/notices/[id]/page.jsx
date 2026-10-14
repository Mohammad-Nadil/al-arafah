"use client";
import React, { useState, useEffect } from "react";
import { MdSave, MdArrowBack, MdNotificationsActive } from "react-icons/md";
import noticesData from "@/../temp/notices.json";
import Link from "next/link";
import { useParams } from "next/navigation";

export const NoticeFormPage = () => {
  // যদি id প্রপস হিসেবে পাস করা হয়, তবে এডিট মোড, না হলে অ্যাড মোড

  const { id } = useParams();
  const isEditMode = Boolean(id && id !== "new");

  const [formData, setFormData] = useState({
    topic: "",
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0], // আজকের তারিখ ডিফল্ট হিসেবে
  });

  useEffect(() => {
    if (isEditMode) {
      // JSON ফাইল বা ডেটা থেকে নির্দিষ্ট id এর নোটিশটি খুঁজে বের করা
      const existingNotice = noticesData.find((item) => item.id === Number(id));
      if (existingNotice) {
        setFormData({
          topic: existingNotice.topic || "",
          title: existingNotice.title || "",
          description: existingNotice.description || "",
          date: existingNotice.date || "",
        });
      }
    }
  }, [isEditMode, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      console.log("Updating Notice ID:", id, formData);
      // এখানে এডিট বা আপডেট লজিক বসবে
    } else {
      console.log("Adding New Notice:", formData);
      // এখানে নতুন নোটিশ ক্রিয়েট বা সেভ করার লজিক বসবে
    }
    alert(isEditMode ? "Notice Updated Successfully!" : "Notice Added Successfully!");
  };

  return (
    <div className="mx-auto space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between border-b border-neutral-200  pb-4">
        <div className="flex items-center gap-3">
          <Link
            href="/notices"
            className="p-2 rounded-xl border border-neutral-200  hover:bg-neutral-100  transition-colors text-neutral-600 "
          >
            <MdArrowBack size={20} />
          </Link>
          <div>
            <h2 className="text-xl font-bold text-neutral-900  flex items-center gap-2">
              <MdNotificationsActive className="text-primary" />
              {isEditMode ? "Edit Notice" : "Add New Notice"}
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              {isEditMode
                ? `Modify the details for notice ID: ${id}`
                : "Fill up the form to broadcast a new announcement"}
            </p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="bg-white  border border-neutral-200  rounded-2xl shadow-sm px-4 sm:px-6 py-6 space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Topic Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 ">
              Topic / Category
            </label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g. Academic, Event, Urgent"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300  bg-white  text-sm text-neutral-900  focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Date Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 ">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300  bg-white  text-sm text-neutral-900  focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Title Input */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 ">
            Notice Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter concise title of the notice"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-300  bg-white  text-sm text-neutral-900  focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Description Textarea */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 ">
            Description
          </label>
          <textarea
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            placeholder="Write down the detailed announcement here..."
            required
            className="w-full px-4 py-3 rounded-xl border border-neutral-300  bg-white  text-sm text-neutral-900  focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-200 ">
          <Link
            href="/admin/notices"
            className="px-5 py-2.5 rounded-xl border border-neutral-300  text-sm font-semibold text-neutral-600  hover:bg-neutral-100  transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-deep transition-colors shadow-sm"
          >
            <MdSave size={18} />
            {isEditMode ? "Update Notice" : "Save Notice"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoticeFormPage;