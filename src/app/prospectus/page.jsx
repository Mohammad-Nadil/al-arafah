"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaBookOpen,
  FaGraduationCap,
  FaCalendarAlt,
  FaAward,
  FaCheckCircle,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUserCheck,
  FaChevronRight,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function ProspectusPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const tabContentRef = useRef(null);
  const headerRef = useRef(null);

  // Data
  const principals = [
    { name: "Eng. Md. Shofiqul Islam", duration: "Jan 1999 – Nov 2000" },
    { name: "A.B.M. Hasan", duration: "Dec 2000 – Jan 2001" },
    { name: "Maw. Mokhlesur Rahman", duration: "Jan 2001 – Nov 2001" },
    { name: "Zaqi Habib Khan", duration: "Dec 2001 – Apr 2006" },
    { name: "Eng. Md. Shofiqul Islam", duration: "May 2006 – Nov 2008" },
    { name: "Saimum Amin Chowdhury", duration: "Jul 2009 – Feb 2010" },
    { name: "Alhajj Md. Enamul Haque", duration: "Apr 2010 – Present" },
  ];

  const syllabusData = [
    {
      title: "Play Group",
      items: ["No formal test", "Oral interview with parents and child"],
    },
    {
      title: "Nursery",
      items: ["English Alphabet (Capital & Small)", "Numbers (1 to 50)", "Bangla Alphabets (Vowels Only)"],
    },
    {
      title: "KG",
      items: ["English Language", "Mathematics", "Bangla"],
    },
    {
      title: "STD-I to STD-V",
      items: ["English Language", "Mathematics", "Science"],
    },
    {
      title: "STD-VI to STD-X",
      items: ["English Language", "Mathematics", "Science (Based on previous syllabus)"],
    },
  ];

  const ageGrid = [
    { age: "3+", uk: "Nursery", usa: "Pre-school", school: "Play Group" },
    { age: "4+", uk: "Reception", usa: "Pre-school", school: "Nursery" },
    { age: "5+", uk: "Year 1", usa: "KG", school: "KG" },
    { age: "6+", uk: "Year 2", usa: "Grade 1", school: "STD. I" },
    { age: "7+", uk: "Year 3", usa: "Grade 2", school: "STD. II" },
    { age: "8+", uk: "Year 4", usa: "Grade 3", school: "STD. III" },
    { age: "9+", uk: "Year 5", usa: "Grade 4", school: "STD. IV" },
    { age: "10+", uk: "Year 6", usa: "Grade 5", school: "STD. V" },
    { age: "11+", uk: "Year 7", usa: "Grade 6", school: "STD. VI" },
    { age: "12+", uk: "Year 8", usa: "Grade 7", school: "STD. VII" },
    { age: "13+", uk: "Year 9", usa: "Grade 8", school: "STD. VIII" },
    { age: "14+", uk: "Year 10", usa: "Grade 9", school: "STD. IX" },
    { age: "15+", uk: "Year 11", usa: "Grade 10", school: "STD. X / O' Level" },
  ];

  // GSAP Initial Load Animation
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  // GSAP Animation when active tab changes
  useEffect(() => {
    if (tabContentRef.current) {
      gsap.fromTo(
        tabContentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      {/* Hero Header */}
      <header
        ref={headerRef}
        className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-950 text-white pt-16 pb-24 px-6 sm:px-12 rounded-b-[2.5rem] shadow-xl overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center sm:text-left flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-4 border border-emerald-500/30">
              <HiSparkles className="w-4 h-4" /> Established in 1998
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Al-Arafah Islamic Int'l <br className="hidden sm:inline" />
              <span className="text-emerald-400">School & College</span>
            </h1>
            <p className="mt-2 text-emerald-200 text-sm sm:text-base font-medium">
              আল-আরাফাহ ইসলামিক ইন্টাঃ স্কুল এন্ড কলেজ
            </p>
            <p className="mt-4 text-emerald-100/80 italic text-base sm:text-lg">
              "A Home of Moral & Modern Education"
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-full md:w-80 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dhanmondi, Dhaka-1209</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>8621246, 01911343340</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>alarafahschool@gmail.com</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-wrap gap-2 border border-slate-100 mb-8">
          {[
            { id: "overview", label: "Overview & Philosophy", icon: FaBookOpen },
            { id: "features", label: "Facilities & Features", icon: FaAward },
            { id: "admission", label: "Admission & Age Structure", icon: FaGraduationCap },
            { id: "syllabus", label: "Syllabus & Test", icon: FaCalendarAlt },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Wrapper with GSAP Ref */}
        <div ref={tabContentRef}>
          {/* Tab 1: Overview & Philosophy */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-5">
                    <FaShieldAlt className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Purpose & Objectives</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Established in 1998 under the welfare project of <strong>Al-Arafah Islami Bank Foundation</strong> to foster Islamic education aligned with internationally recognized modern standards.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our core mission is to guide youngsters toward the blissful path of Almighty Allah while equipping them with necessary academic skills for an honorable life.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center mb-5">
                    <FaUserCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Akhirat-Oriented Education</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    We introduce and nurture faith-based education to protect children from purely materialistic worldviews, keeping Akhirat in mind.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Students follow the standard Edexcel/English medium curriculum alongside ideological Islamic subjects to become practicing Muslims and resourceful professionals.
                  </p>
                </div>
              </div>

              {/* Principals History */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <FaClock className="w-5 h-5 text-emerald-600" />
                  Principals Honor Roll
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {principals.map((p, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <h4 className="font-semibold text-slate-800 text-sm">{p.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{p.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Facilities & Features */}
          {activeTab === "features" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Hifzul Quran Section",
                  desc: "Al-Arafah Tahfizul Quran Madrasah offers full-time Hifz (ages 7-10) and junior section (ages 4-6) balancing Quran memorization with core subjects.",
                  tag: "Specialized",
                },
                {
                  title: "Digi Class Facilities",
                  desc: "Multimedia interactive learning tools covering Edexcel syllabi from KG-II to A' Level using 3D demonstrations, rhymes, and e-books.",
                  tag: "Technology",
                },
                {
                  title: "Science & Computer Labs",
                  desc: "Equipped labs for practical knowledge. Computer education is compulsory starting right from Standard II.",
                  tag: "Academic",
                },
                {
                  title: "British Council Partner",
                  desc: "Enrolled in the 'Young Learners Centre'. Regular teacher training and student participation in international competitions.",
                  tag: "Global",
                },
                {
                  title: "Residential Facility",
                  desc: "Hostel options available for full-time Hifz students with structured nutritious weekly menus and indoor games.",
                  tag: "Campus",
                },
                {
                  title: "Safe Transport",
                  desc: "Buses running on fixed routes driven by experienced Muslim drivers along with caring female attendants.",
                  tag: "Safety",
                },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                      {feature.tag}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-3 mb-2">{feature.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Admission & Age Structure */}
          {activeTab === "admission" && (
            <div className="space-y-8">
              {/* Procedure */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Admission Steps</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "1. Collect Form (Tk. 300) from Office",
                    "2. Submit Form with 3 Photos",
                    "3. Admission Test & Medical Checkup",
                    "4. Birth Certificate & Fee Payment",
                  ].map((step, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs font-medium text-emerald-900 flex items-center gap-2">
                      <FaCheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Age Matrix */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900">Age & Class Equivalency Table</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 text-slate-600 uppercase font-semibold">
                      <tr>
                        <th className="p-4">Age</th>
                        <th className="p-4">British Curriculum</th>
                        <th className="p-4">USA Grade System</th>
                        <th className="p-4 text-emerald-700 font-bold">Al-Arafah Title</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {ageGrid.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-4 font-semibold text-slate-900">{row.age}</td>
                          <td className="p-4">{row.uk}</td>
                          <td className="p-4">{row.usa}</td>
                          <td className="p-4 font-bold text-emerald-700">{row.school}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Syllabus & Test */}
          {activeTab === "syllabus" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {syllabusData.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="text-base font-bold text-emerald-800 mb-3 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span>{item.title}</span>
                    <FaChevronRight className="w-3 h-3 text-slate-400" />
                  </h4>
                  <ul className="space-y-2">
                    {item.items.map((sub, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}