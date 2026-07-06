"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import {
  FiSend,
  FiUser,
  FiMail,
  FiEdit2,
  FiMessageSquare,
} from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.message) {
      toast.error(
        lang === "en" ? "Please fill all fields!" : "সবগুলো ঘর পূরণ করুন!",
      );
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(
        lang === "en"
          ? "Message sent successfully!"
          : "আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!",
      );
      e.target.reset();
    }, 1500);
  };

  // Helper function for input classes
  const inputClass =
    "w-full pl-12 pr-4 py-4 rounded-xl bg-background border border-neutral-400 dark:border-neutral-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-hidden transition-all duration-300";
  const iconClass =
    "absolute left-4 top-4 text-neutral-400 group-focus-within:text-primary transition-colors";

  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6  p-4 md:p-10 rounded-xl md:rounded-2xl xl:rounded-3xl border border-neutral-400 dark:border-neutral-800 bg-background dark:bg-subtle shadow-2xl shadow-neutral-100 dark:shadow-none"
      >
        {/* Name */}
        <div className="relative group col-span-1">
          <FiUser className={iconClass} />
          <input
            name="name"
            type="text"
            placeholder={lang === "en" ? "Full Name" : "পুরো নাম"}
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div className="relative group col-span-1">
          <FiMail className={iconClass} />
          <input
            name="email"
            type="email"
            placeholder={lang === "en" ? "Email Address" : "ইমেইল"}
            className={inputClass}
          />
        </div>

        {/* Subject */}
        <div className="relative group col-span-1 md:col-span-2">
          <FiEdit2 className={iconClass} />
          <input
            name="subject"
            type="text"
            placeholder={lang === "en" ? "Subject" : "বিষয়"}
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div className="relative group col-span-1 md:col-span-2">
          <FiMessageSquare className={iconClass} />
          <textarea
            name="message"
            placeholder={lang === "en" ? "Message" : "বার্তা"}
            rows={5}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Button */}
        <button
          disabled={loading}
          type="submit"
          className="col-span-1 md:col-span-2 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading
            ? lang === "en"
              ? "Sending..."
              : "পাঠানো হচ্ছে..."
            : lang === "en"
              ? "Send Message"
              : "বার্তা পাঠান"}
          <FiSend className={loading ? "animate-pulse" : ""} />
        </button>
      </form>
    </>
  );
}
