"use client";
import React, { useState } from "react";
import { MdSave } from "react-icons/md";
import toast from "react-hot-toast";

const HomeBannerForm = () => {
  const [banners, setBanners] = useState([
    {
      id: 1,
      titleEn: "Welcome to Our Digital Campus",
      titleBn: "আমাদের ডিজিটাল ক্যাম্পাসে স্বাগতম",
      subtitleEn: "Empowering students with modern education and values.",
      subtitleBn: "আধুনিক শিক্ষা ও মূল্যবোধ দিয়ে শিক্ষার্থীদের গড়ে তুলছি।",
    },
    {
      id: 2,
      titleEn: "Admissions Open for 2026",
      titleBn: "২০২৬ শিক্ষাবর্ষে ভর্তি চলছে",
      subtitleEn: "Join our vibrant community of learners and achievers.",
      subtitleBn: "আমাদের মেধাবী ও প্রাণবন্ত পরিবারে আজই যুক্ত হোন।",
    },
    {
      id: 3,
      titleEn: "Excellence in Co-Curricular Activities",
      titleBn: "সহ-পাঠ্যক্রমে উৎকর্ষতা",
      subtitleEn: "Building creativity, leadership, and physical well-being.",
      subtitleBn: "সৃজনশীলতা, নেতৃত্ব এবং শারীরিক সুস্থতা নিশ্চিতকরণ।",
    },
  ]);

  const handleBannerChange = (index, field, value) => {
    const updatedBanners = [...banners];
    updatedBanners[index][field] = value;
    setBanners(updatedBanners);
  };

  const handleSave = () => {
    // এখানে আপনার ব্যানার সেভ করার API কল করুন
    toast.success("Home Banners updated successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className="bg-white dark:bg-subtle/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3">
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                Banner #{banner.id}
              </span>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">Title (English)</label>
              <input
                type="text"
                value={banner.titleEn}
                onChange={(e) => handleBannerChange(index, "titleEn", e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-subtle/50 dark:text-white focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">Title (Bangla)</label>
              <input
                type="text"
                value={banner.titleBn}
                onChange={(e) => handleBannerChange(index, "titleBn", e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-subtle/50 dark:text-white focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">Subtitle (English)</label>
              <textarea
                rows={2}
                value={banner.subtitleEn}
                onChange={(e) => handleBannerChange(index, "subtitleEn", e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-subtle/50 dark:text-white focus:ring-2 focus:ring-emerald-600 outline-none resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">Subtitle (Bangla)</label>
              <textarea
                rows={2}
                value={banner.subtitleBn}
                onChange={(e) => handleBannerChange(index, "subtitleBn", e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-subtle/50 dark:text-white focus:ring-2 focus:ring-emerald-600 outline-none resize-none"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
        >
          <MdSave size={18} /> Save Banner Changes
        </button>
      </div>
    </div>
  );
};

export default HomeBannerForm;