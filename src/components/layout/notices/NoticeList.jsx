"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiDownload, FiSearch, FiFileText, FiX } from "react-icons/fi";

// আপনার ডাটা
const notices = [
  {
    id: 1,
    title: "Half Yearly Exam Routine 2026",
    date: "2026-07-05",
    category: "Exam",
    pinned: true,
    desc: "The half-yearly examination will begin from July 15th. Please collect your admit cards from the office.",
  },
  {
    id: 2,
    title: "Summer Vacation Announcement",
    date: "2026-06-20",
    category: "Holiday",
    pinned: false,
    desc: "The school will remain closed for summer vacation from June 20th to July 5th.",
  },
];

export default function NoticeList() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedNotice, setSelectedNotice] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedNotice(null);
      }
    }
    if (selectedNotice)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedNotice]);

  const filteredNotices = notices.filter((n) => {
    const matchesTab = activeTab === "All" || n.category === activeTab;
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-6">
      <div className="relative">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          placeholder="Search notices..."
          className="w-full pl-12 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 outline-hidden"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {["All", "Academic", "Exam", "Holiday", "General"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-medium ${activeTab === tab ? "bg-primary text-white" : "bg-neutral-100 dark:bg-neutral-800"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((n) => (
            <div
              key={n.id}
              onClick={() => setSelectedNotice(n)}
              className="cursor-pointer p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl flex justify-between items-center bg-card hover:border-primary transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <FiFileText />
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {n.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {n.date} • {n.category}
                  </p>
                </div>
              </div>

              <div onClick={(e) => e.stopPropagation()}>
                <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-500 hover:text-primary">
                  <FiDownload size={18} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 flex flex-col items-center">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-full mb-4">
              <FiFileText size={32} className="text-neutral-400" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              No notices found
            </h3>
            <p className="text-sm text-neutral-500 mt-1 max-w-xs">
              দুঃখিত, এই ক্যাটাগরিতে বা এই নামে কোনো নোটিশ পাওয়া যায়নি। দয়া করে
              অন্য ক্যাটাগরি ট্রাই করুন।
            </p>
          </div>
        )}
      </div>

      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="bg-background border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl max-w-lg w-full relative shadow-2xl"
          >
            <button
              onClick={() => setSelectedNotice(null)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-red-500"
            >
              <FiX size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 pr-6">
              {selectedNotice.title}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              {selectedNotice.desc}
            </p>
            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all">
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
