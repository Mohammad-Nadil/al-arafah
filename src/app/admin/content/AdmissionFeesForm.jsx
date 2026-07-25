"use client";
import React, { useState } from "react";
import { MdSave } from "react-icons/md";
import toast from "react-hot-toast";

const AdmissionFeesForm = () => {
  const [feesData, setFeesData] = useState({
    pg_kg: [
      {
        id: 1,
        classEn: "Playgroup & Nursery",
        classBn: "প্লেগ্রুপ ও নার্সারি",
        sessionEn: "৳6,000",
        sessionBn: "৳৬,০০০",
        tuitionEn: "৳3,500",
        tuitionBn: "৳৩,৫০০",
        examEn: "৳1,500",
        examBn: "৳১,৫০০",
        othersEn: "৳1,000",
        othersBn: "৳১,০০০",
        totalEn: "৳12,000",
        totalBn: "৳১২,০০০",
      },
      {
        id: 2,
        classEn: "KG I & KG II",
        classBn: "কেজি ১ ও কেজি ২",
        sessionEn: "৳6,500",
        sessionBn: "৳৬,৫০০",
        tuitionEn: "৳4,000",
        tuitionBn: "৳৪,০০০",
        examEn: "৳1,500",
        examBn: "৳১,৫০০",
        othersEn: "৳1,000",
        othersBn: "৳১,০০০",
        totalEn: "৳13,000",
        totalBn: "৳১৩,০০০",
      },
    ],
    class_1_3: [
      {
        id: 1,
        classEn: "Class I - III",
        classBn: "১ম - ৩য় শ্রেণী",
        sessionEn: "৳7,000",
        sessionBn: "৳৭,০০০",
        tuitionEn: "৳4,500",
        tuitionBn: "৳৪,৫০০",
        examEn: "৳2,000",
        examBn: "৳২,০০০",
        othersEn: "৳1,500",
        othersBn: "৳১,৫০০",
        totalEn: "৳15,000",
        totalBn: "৳১৫,০০০",
      },
    ],
    class_4_7: [
      {
        id: 1,
        classEn: "Class IV - VII",
        classBn: "৪র্থ - ৭ম শ্রেণী",
        sessionEn: "৳8,000",
        sessionBn: "৳৮,০০০",
        tuitionEn: "৳5,000",
        tuitionBn: "৳৫,০০০",
        examEn: "৳2,000",
        examBn: "৳২,০০০",
        othersEn: "৳2,000",
        othersBn: "৳২,০০০",
        totalEn: "৳17,000",
        totalBn: "৳১৭,০০০",
      },
    ],
    class_8_10: [
      {
        id: 1,
        classEn: "Class VIII - IX",
        classBn: "৮ম - ৯ম শ্রেণী",
        sessionEn: "৳9,000",
        sessionBn: "৳৯,০০০",
        tuitionEn: "৳6,000",
        tuitionBn: "৳৬,০০০",
        examEn: "৳2,500",
        examBn: "৳২,৫০০",
        othersEn: "৳2,500",
        othersBn: "৳২,৫০০",
        totalEn: "৳20,000",
        totalBn: "৳২০,০০০",
      },
      {
        id: 2,
        classEn: "Class X",
        classBn: "১০ম শ্রেণী",
        sessionEn: "৳9,500",
        sessionBn: "৳৯,৫০০",
        tuitionEn: "৳6,500",
        tuitionBn: "৳৬,০০০",
        examEn: "৳3,000",
        examBn: "৳৩,০০০",
        othersEn: "৳3,000",
        othersBn: "৳৩,০০০",
        totalEn: "৳22,000",
        totalBn: "৳২২,০০০",
      },
    ],
  });

  const handleFeeChange = (category, index, field, value) => {
    const updatedCategory = [...feesData[category]];
    updatedCategory[index][field] = value;
    setFeesData({ ...feesData, [category]: updatedCategory });
  };

  const handleSave = () => {
    // এখানে ফি সেভ করার API কল করুন
    toast.success("Fee Structure updated successfully!");
  };

  return (
    <div className="space-y-8 bg-white dark:bg-subtle/40 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm">
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
          Admission Fees Structure Management
        </h3>
        <p className="text-xs text-neutral-500 mt-0.5">
          Modify class-wise session fees, tuition, and exam fees for both English and Bangla.
        </p>
      </div>

      {Object.keys(feesData).map((categoryKey) => (
        <div key={categoryKey} className="space-y-3">
          <h4 className="font-bold text-sm text-emerald-600 uppercase tracking-wide">
            Category: {categoryKey.replace(/_/g, " ").toUpperCase()}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {feesData[categoryKey].map((feeItem, idx) => (
              <div
                key={feeItem.id}
                className="bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700/60 rounded-xl p-4 space-y-3"
              >
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={feeItem.classEn}
                    onChange={(e) => handleFeeChange(categoryKey, idx, "classEn", e.target.value)}
                    placeholder="Class Name (En)"
                    className="px-3 py-1.5 rounded-lg border border-neutral-500 bg-white dark:bg-subtle/40 text-xs font-semibold"
                  />
                  <input
                    type="text"
                    value={feeItem.classBn}
                    onChange={(e) => handleFeeChange(categoryKey, idx, "classBn", e.target.value)}
                    placeholder="Class Name (Bn)"
                    className="px-3 py-1.5 rounded-lg border border-neutral-500 bg-white dark:bg-subtle/40 text-xs font-semibold"
                  />
                </div>

                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-neutral-500">Session</span>
                    <input
                      type="text"
                      value={feeItem.sessionEn}
                      onChange={(e) => handleFeeChange(categoryKey, idx, "sessionEn", e.target.value)}
                      className="w-full px-2 py-1 rounded border border-neutral-500 bg-white dark:bg-subtle/40"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500">Tuition</span>
                    <input
                      type="text"
                      value={feeItem.tuitionEn}
                      onChange={(e) => handleFeeChange(categoryKey, idx, "tuitionEn", e.target.value)}
                      className="w-full px-2 py-1 rounded border border-neutral-500 bg-white dark:bg-subtle/40"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500">Exam</span>
                    <input
                      type="text"
                      value={feeItem.examEn}
                      onChange={(e) => handleFeeChange(categoryKey, idx, "examEn", e.target.value)}
                      className="w-full px-2 py-1 rounded border border-neutral-500 bg-white dark:bg-subtle/40"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500">Total</span>
                    <input
                      type="text"
                      value={feeItem.totalEn}
                      onChange={(e) => handleFeeChange(categoryKey, idx, "totalEn", e.target.value)}
                      className="w-full px-2 py-1 rounded border border-neutral-500 bg-white dark:bg-subtle/40 font-bold text-emerald-600"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-end pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
        >
          <MdSave size={18} /> Save Fee Structure
        </button>
      </div>
    </div>
  );
};

export default AdmissionFeesForm;