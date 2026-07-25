"use client";
import React, { useEffect, useState } from "react";
import { MdLayers, MdHome, MdSchool } from "react-icons/md";
import HomeBannerForm from "./HomeBannerForm";
import AdmissionFeesForm from "./AdmissionFeesForm";

export const ContentManagementPage = () => {
  const [activeTab, setActiveTab] = useState("banner");

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-">
      {/* Page Header */}
      <div>
        <h2 className="text-md md:text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
          <MdLayers className="text-emerald-600" /> Public Website Content
          Management
        </h2>
        <p className=" text-xs md:text-sm text-neutral-500 mt-0.5">
          Update homepage banners, admission details, and website texts
          dynamically
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-neutral-200 dark:border-neutral-800 gap-6 my-4 md:my-8 text-[10px] sm:text-sm">
        <button
          onClick={() => setActiveTab("banner")}
          className={`pb-3  font-bold flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === "banner"
              ? "border-emerald-600 text-emerald-600"
              : "border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-white"
          }`}
        >
          <MdHome size={18} /> Home Banners (3 Texts)
        </button>
        <button
          onClick={() => setActiveTab("fees")}
          className={`pb-3  font-bold flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === "fees"
              ? "border-emerald-600 text-emerald-600"
              : "border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-white"
          }`}
        >
          <MdSchool size={18} /> Admission Fees Structure
        </button>
      </div>

      {/* Tab Content Rendering */}
      {activeTab === "banner" && <HomeBannerForm />}
      {activeTab === "fees" && <AdmissionFeesForm />}
    </div>
  );
};

export default ContentManagementPage;
