"use client";
import React, { useState } from "react";
import { MdSettings, MdStore, MdLock, MdCalendarToday, MdSave } from "react-icons/md";
import toast from "react-hot-toast";
import { siteConfig } from "@/config/site";

export const SettingsPage = () => {
  // গ্লোবাল সেটিংস স্টেট (siteConfig এর সাথে ম্যাচ করে ফ্ল্যাট করা হয়েছে)
  const [generalSettings, setGeneralSettings] = useState({
    schoolNameEn: siteConfig.name.en,
    schoolNameBn: siteConfig.name.bn,
    email: siteConfig.contact.mail,
    phone: siteConfig.contact.phone,
    address: siteConfig.contact.address.en,
    academicYear: "2026",
  });

  // পাসওয়ার্ড পরিবর্তন স্টেট
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralSettings({ ...generalSettings, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSaveGeneral = (e) => {
    e.preventDefault();
    toast.success("General settings updated successfully!");
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New password and confirm password do not match!");
      return;
    }
    toast.success("Password changed successfully!");
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="mx-auto flex flex-col gap-6 ">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <MdSettings className="text-emerald-600" /> Admin Settings
        </h2>
        <p className="text-sm text-neutral-500 mt-0.5">
          Manage system configurations, school profile, and account security
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ================= SECTION 1: GENERAL SETTINGS ================= */}
        <div className="lg:col-span-2 bg-white dark:bg-subtle/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-neutral-100 dark:border-neutral-800 pb-4">
            <MdStore className="text-emerald-600" size={20} />
            <h3 className="text-base font-bold text-foreground">
              General & School Profile
            </h3>
          </div>

          <form onSubmit={handleSaveGeneral} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
                  School Name (English)
                </label>
                <input
                  type="text"
                  name="schoolNameEn"
                  value={generalSettings.schoolNameEn}
                  onChange={handleGeneralChange}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
                  School Name (Bangla)
                </label>
                <input
                  type="text"
                  name="schoolNameBn"
                  value={generalSettings.schoolNameBn}
                  onChange={handleGeneralChange}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
                  Official Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={generalSettings.email}
                  onChange={handleGeneralChange}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
                  Helpline / Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={generalSettings.phone}
                  onChange={handleGeneralChange}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
                  Active Academic Year
                </label>
                <div className="relative">
                  <select
                    name="academicYear"
                    value={generalSettings.academicYear}
                    onChange={handleGeneralChange}
                    className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-foreground focus:ring-2 focus:ring-emerald-600 outline-none appearance-none"
                  >
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                  <MdCalendarToday className="absolute right-3.5 top-2.5 text-neutral-400 pointer-events-none" size={16} />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={generalSettings.address}
                  onChange={handleGeneralChange}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MdSave size={18} /> Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* ================= SECTION 2: SECURITY & PASSWORD ================= */}
        <div className="bg-white dark:bg-subtle/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-neutral-100 dark:border-neutral-800 pb-4">
            <MdLock className="text-emerald-600" size={20} />
            <h3 className="text-base font-bold text-foreground">
              Change Password
            </h3>
          </div>

          <form onSubmit={handleSavePassword} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-subtle/50 text-sm text-foreground focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-neutral-900 dark:bg-neutral-800 hover:bg-neutral-800 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
              >
                <MdLock size={16} /> Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;