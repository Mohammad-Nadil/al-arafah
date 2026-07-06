"use client";

import React, { useState } from "react";
import Container from "@/components/public/Container";
import { useLanguage } from "@/context/LanguageContext";
import { FiUser, FiMail, FiPhone, FiBookOpen, FiDollarSign, FiSend, FiCheckCircle } from "react-icons/fi";

const cleanData = {
  titleEn: "Online Admission Application",
  titleBn: "অনলাইন ভর্তি আবেদন ফর্ম",
  subtitleEn: "Please fill out the form carefully with accurate information. All fields marked with * are required.",
  subtitleBn: "অনুগ্রহ করে সঠিক তথ্য দিয়ে ফর্মটি সতর্কতার সাথে পূরণ করুন। * চিহ্নিত ঘরগুলো অবশ্যই পূরণ করতে হবে।",
  classes: [
    { id: "pg", labelEn: "Playgroup", labelBn: "প্লেগ্রুপ" },
    { id: "nursery", labelEn: "Nursery", labelBn: "নার্সারি" },
    { id: "kg1", labelEn: "KG I", labelBn: "কেজি ১" },
    { id: "kg2", labelEn: "KG II", labelBn: "কেজি ২" },
    { id: "c1", labelEn: "Class I", labelBn: "১ম শ্রেণী" },
    { id: "c2", labelEn: "Class II", labelBn: "২য় শ্রেণী" },
    { id: "c3", labelEn: "Class III", labelBn: "৩য় শ্রেণী" },
    { id: "c4", labelEn: "Class IV", labelBn: "৪র্থ শ্রেণী" },
    { id: "c5", labelEn: "Class V", labelBn: "৫ম শ্রেণী" },
    { id: "c6", labelEn: "Class VI", labelBn: "৬ষ্ঠ শ্রেণী" },
    { id: "c7", labelEn: "Class VII", labelBn: "৭ম শ্রেণী" },
    { id: "c8", labelEn: "Class VIII", labelBn: "৮ম শ্রেণী" },
    { id: "c9", labelEn: "Class IX", labelBn: "৯ম শ্রেণী" },
    { id: "c10", labelEn: "Class X", labelBn: "১০ম শ্রেণী" }
  ],
  labels: {
    studentNameEn: "Student's Full Name *",
    studentNameBn: "শিক্ষার্থীর পুরো নাম *",
    parentNameEn: "Parent / Guardian Name *",
    parentNameBn: "অভিভাবকের নাম *",
    phoneEn: "Mobile Number (Active) *",
    phoneBn: "মোবাইল নম্বর (সক্রিয়) *",
    emailEn: "Email Address (Optional)",
    emailBn: "ইমেইল আইডি (ঐচ্ছিক)",
    selectClassEn: "Select Class *",
    selectClassBn: "শ্রেণী নির্বাচন করুন *",
    paymentTitleEn: "Application Processing Fee",
    paymentTitleBn: "আবেদন প্রসেসিং ফি",
    submitEn: "Submit Application & Pay",
    submitBn: "আবেদন জমা দিন ও পে করুন",
    successEn: "Application Submitted Successfully!",
    successBn: "আবেদনটি সফলভাবে জমা হয়েছে!"
  }
};

export default function ApplyPage() {
  const { lang } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    targetClass: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // API logic integration here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="w-full py-20 bg-background text-foreground text-center">
        <Container>
          <div className="max-w-md mx-auto border border-neutral-300 dark:border-neutral-700 bg-background p-8 rounded-3xl shadow-xs flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
              <FiCheckCircle className="w-10 h-10" />
            </div>
            <h2 className="font-sans font-bold text-xl md:text-2xl mb-3 text-neutral-900 dark:text-neutral-100">
              {lang === "en" ? cleanData.labels.successEn : cleanData.labels.successBn}
            </h2>
            <p className="font-sans font-light text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
              {lang === "en" 
                ? "Your application tracking ID has been sent via SMS. Please clear the payment to confirm your assessment date."
                : "আপনার আবেদন ট্র্যাকিং আইডি এসএমএস-এর মাধ্যমে পাঠানো হয়েছে। পরীক্ষার তারিখ নিশ্চিত করতে পেমেন্ট সম্পন্ন করুন।"}
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 text-xs font-sans font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl hover:bg-neutral-200/50 transition-all cursor-pointer"
            >
              {lang === "en" ? "Go Back" : "ফিরে যান"}
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="w-full py-16 bg-background text-foreground transition-colors duration-500">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
            {lang === "en" ? cleanData.titleEn : cleanData.titleBn}
          </h1>
          <p className="font-sans font-light text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg mx-auto">
            {lang === "en" ? cleanData.subtitleEn : cleanData.subtitleBn}
          </p>
        </div>

        <div className="max-w-2xl mx-auto border border-neutral-300 dark:border-neutral-700 bg-background rounded-3xl p-6 md:p-10 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Student Name */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {lang === "en" ? cleanData.labels.studentNameEn : cleanData.labels.studentNameBn}
              </label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 w-5 h-5" />
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-300 dark:border-neutral-700 rounded-xl font-sans text-sm font-light text-neutral-800 dark:text-neutral-200 focus:outline-hidden focus:border-primary dark:focus:border-accent transition-colors"
                  placeholder={lang === "en" ? "e.g. Rafsan Ahmed" : "যেমন: রাফসান আহমেদ"}
                />
              </div>
            </div>

            {/* Parent Name */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {lang === "en" ? cleanData.labels.parentNameEn : cleanData.labels.parentNameBn}
              </label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 w-5 h-5" />
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-300 dark:border-neutral-700 rounded-xl font-sans text-sm font-light text-neutral-800 dark:text-neutral-200 focus:outline-hidden focus:border-primary dark:focus:border-accent transition-colors"
                  placeholder={lang === "en" ? "Father's or Mother's name" : "পিতা অথবা মাতার নাম"}
                />
              </div>
            </div>

            {/* Grid for Contact & Class */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {lang === "en" ? cleanData.labels.phoneEn : cleanData.labels.phoneBn}
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 w-5 h-5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-300 dark:border-neutral-700 rounded-xl font-sans text-sm font-light text-neutral-800 dark:text-neutral-200 focus:outline-hidden focus:border-primary dark:focus:border-accent transition-colors"
                    placeholder="017XXXXXXXX"
                  />
                </div>
              </div>

              {/* Class Selection */}
              <div className="space-y-2">
                <label className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {lang === "en" ? cleanData.labels.selectClassEn : cleanData.labels.selectClassBn}
                </label>
                <div className="relative">
                  <FiBookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 w-5 h-5 pointer-events-none" />
                  <select
                    required
                    value={formData.targetClass}
                    onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-300 dark:border-neutral-700 rounded-xl font-sans text-sm font-light text-neutral-800 dark:text-neutral-200 focus:outline-hidden focus:border-primary dark:focus:border-accent transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      {lang === "en" ? "Choose class" : "শ্রেণী সিলেক্ট করুন"}
                    </option>
                    {cleanData.classes.map((cls) => (
                      <option key={cls.id} value={cls.id} className="text-neutral-900 dark:text-neutral-100 bg-background">
                        {lang === "en" ? cls.labelEn : cls.labelBn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Email (Optional) */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {lang === "en" ? cleanData.labels.emailEn : cleanData.labels.emailBn}
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 w-5 h-5" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-300 dark:border-neutral-700 rounded-xl font-sans text-sm font-light text-neutral-800 dark:text-neutral-200 focus:outline-hidden focus:border-primary dark:focus:border-accent transition-colors"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Amount Summary */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center bg-primary/5 dark:bg-accent/5 p-4 rounded-xl border border-primary/10 dark:border-accent/10">
              <div className="flex items-center gap-2">
                <FiDollarSign className="w-5 h-5 text-primary dark:text-accent" />
                <span className="font-sans font-bold text-sm text-neutral-800 dark:text-neutral-200">
                  {lang === "en" ? cleanData.labels.paymentTitleEn : cleanData.labels.paymentTitleBn}
                </span>
              </div>
              <span className="font-sans font-bold text-lg text-primary dark:text-accent">
                {lang === "en" ? "৳500" : "৳৫০০"}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-primary dark:bg-accent text-white dark:text-background font-sans font-bold text-sm tracking-wider uppercase rounded-xl shadow-md hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {lang === "en" ? cleanData.labels.submitEn : cleanData.labels.submitBn}
              <FiSend className="w-4 h-4" />
            </button>

          </form>
        </div>
      </Container>
    </section>
  );
}