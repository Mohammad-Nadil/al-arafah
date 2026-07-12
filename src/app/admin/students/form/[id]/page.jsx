"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import studentData from "@/../temp/student.json";
import { MdArrowBack, MdKeyboardArrowDown, MdSave, MdPerson } from "react-icons/md";
import DragDrop from "@/components/ui/DragDrop";

// ---------- Dropdown option lists (replace with DB-driven lists later) ----------
const GENDERS = ["Male", "Female"];
const CLASSES = [
  "Play", "Nursery", "KG-I", "KG-II",
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
];
const SECTIONS = ["A", "B", "C", "D"];
const GROUPS = ["Science", "Commerce", "Arts", "N/A"];
const STATUSES = ["active", "inactive", "graduated", "suspended"];
const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const emptyForm = {
  fullName: "",
  gender: "",
  dateOfBirth: "",
  rollNumber: "",
  className: "",
  section: "",
  group: "",
  status: "active",
  fatherName: "",
  motherName: "",
  guardianName: "",
  contactNumber: "",
  emergencyNumber: "",
  address: "",
  bloodGroup: "",
  avatarUrl: null,
};

export default function StudentEditPage() {
  const { id } = useParams();
  const router = useRouter();

  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    // Simulate fetch — replace with real API call later
    const timer = setTimeout(() => {
      const found = studentData.find((s) => s.studentId.$oid === id);
      if (found) {
        setForm({ ...emptyForm, ...found });
        setAvatarPreview(found.avatarUrl || null);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend update logic will go here later (PUT/PATCH to /api/students/[id])
    console.log("Updated student:", form);
  };

  if (loading) {
    return <FormSkeleton />;
  }

  if (notFound) {
    return (
      <div className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4">
          <MdPerson className="text-red-400" size={28} />
        </div>
        <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
          Student Not Found
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-xs">
          No student record matches this ID.
        </p>
        <button
          onClick={() => router.back()}
          className="mt-5 px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back button + Title */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1.5 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <MdArrowBack /> Back
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Edit Student
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Update {form.fullName ? `${form.fullName}'s` : "the student's"} information below
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Combined Avatar and Basic Info Card */}
        <div className="bg-background dark:bg-subtle/30 border border-neutral-400 dark:border-subtle/30 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row gap-6">
          {/* Left: Image Upload Section */}
          <div className="w-full md:w-1/3 shrink-0">
            <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
              Student Photo
            </h3>
            <div className="w-full h-64">
              <DragDrop
                setImg={setImg}
                setPreview={setAvatarPreview}
                preview={avatarPreview}
              />
            </div>
            <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-3 text-center">
              PNG or JPG, square image recommended (min 200x200px)
            </p>
          </div>

          {/* Right: Basic Info Section */}
          <div className="flex-1">
            <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <FormInput
                  label="Full Name"
                  value={form.fullName}
                  onChange={(v) => handleChange("fullName", v)}
                  placeholder="e.g. Jackelyn Witherdon"
                  required
                />
              </div>
              <FormSelect
                label="Gender"
                value={form.gender}
                onChange={(v) => handleChange("gender", v)}
                options={GENDERS}
                placeholder="Select gender"
              />
              <FormInput
                label="Date of Birth"
                type="date"
                value={form.dateOfBirth}
                onChange={(v) => handleChange("dateOfBirth", v)}
              />
              <FormSelect
                label="Blood Group"
                value={form.bloodGroup}
                onChange={(v) => handleChange("bloodGroup", v)}
                options={BLOOD_GROUPS}
                placeholder="Select blood group"
              />
            </div>
          </div>
        </div>

        {/* Academic Info */}
        <FormSection title="Academic Information">
          <FormInput
            label="Roll Number"
            type="number"
            value={form.rollNumber}
            onChange={(v) => handleChange("rollNumber", v)}
            placeholder="e.g. 149"
            required
          />
          <FormSelect
            label="Class"
            value={form.className}
            onChange={(v) => handleChange("className", v)}
            options={CLASSES}
            placeholder="Select class"
            required
          />
          <FormSelect
            label="Section"
            value={form.section}
            onChange={(v) => handleChange("section", v)}
            options={SECTIONS}
            placeholder="Select section"
          />
          <FormSelect
            label="Group"
            value={form.group}
            onChange={(v) => handleChange("group", v)}
            options={GROUPS}
            placeholder="Select group"
          />
          <FormSelect
            label="Status"
            value={form.status}
            onChange={(v) => handleChange("status", v)}
            options={STATUSES}
            placeholder="Select status"
          />
        </FormSection>

        {/* Family Info */}
        <FormSection title="Family & Guardian">
          <FormInput
            label="Father's Name"
            value={form.fatherName}
            onChange={(v) => handleChange("fatherName", v)}
            placeholder="e.g. Ola Tween"
          />
          <FormInput
            label="Mother's Name"
            value={form.motherName}
            onChange={(v) => handleChange("motherName", v)}
            placeholder="e.g. Melisande Cesaric"
          />
          <FormInput
            label="Guardian Name"
            value={form.guardianName}
            onChange={(v) => handleChange("guardianName", v)}
            placeholder="e.g. Sabrina Witterick"
          />
        </FormSection>

        {/* Contact Info */}
        <FormSection title="Contact & Address">
          <FormInput
            label="Contact Number"
            value={form.contactNumber}
            onChange={(v) => handleChange("contactNumber", v)}
            placeholder="e.g. 852-380-0367"
            required
          />
          <FormInput
            label="Emergency Number"
            value={form.emergencyNumber}
            onChange={(v) => handleChange("emergencyNumber", v)}
            placeholder="e.g. 753-113-6913"
          />
          <div className="sm:col-span-2">
            <FormInput
              label="Address"
              value={form.address}
              onChange={(v) => handleChange("address", v)}
              placeholder="e.g. 8 Longview Terrace"
            />
          </div>
        </FormSection>

        {/* Sticky action bar */}
        <div className="sticky bottom-4 p-4 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-subtle/30 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors shadow-sm"
          >
            <MdSave size={17} />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

// ---------- Reusable Form Section ----------
function FormSection({ title, children, className }) {
  return (
    <div className="bg-background dark:bg-subtle/30 border border-neutral-400 dark:border-subtle/30 rounded-2xl p-5 md:p-6 shadow-sm">
      <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
        {title}
      </h3>
      <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 ${className}`}>
        {children}
      </div>
    </div>
  );
}

// ---------- Reusable Form Input ----------
function FormInput({ label, type = "text", value, onChange, placeholder, required }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 bg-background dark:bg-subtle/70 border border-neutral-300 dark:border-neutral-800 rounded-lg text-sm font-medium text-neutral-900 dark:text-neutral-100 outline-none focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder-neutral-400 dark:placeholder-neutral-600"
      />
    </div>
  );
}

// ---------- Reusable Form Select ----------
function FormSelect({ label, value, onChange, options, placeholder, required }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none px-3.5 py-2.5 pr-9 bg-background dark:bg-subtle/70 border border-neutral-300 dark:border-neutral-800 rounded-lg text-sm font-medium text-neutral-900 dark:text-neutral-100 outline-none focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer"
        >
          <option value="" className="bg-background dark:bg-neutral-900">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option
              key={opt}
              value={opt}
              className="bg-background dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
            >
              {opt}
            </option>
          ))}
        </select>
        <MdKeyboardArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
      </div>
    </div>
  );
}

// ---------- Loading Skeleton ----------
function FormSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 space-y-6 animate-pulse">
      <div className="h-4 w-20 bg-neutral-200 dark:bg-subtle/30 rounded" />
      <div className="h-7 w-48 bg-neutral-200 dark:bg-subtle/30 rounded" />

      <div className="bg-background dark:bg-neutral-900 border border-neutral-400 dark:border-subtle/30 rounded-2xl p-6 shadow-sm flex items-center gap-5">
        <div className="w-24 h-24 rounded-2xl bg-neutral-200 dark:bg-subtle/30 shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 bg-neutral-200 dark:bg-subtle/30 rounded" />
          <div className="h-3 w-48 bg-neutral-200 dark:bg-subtle/30 rounded" />
        </div>
      </div>

      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-background dark:bg-neutral-900 border border-neutral-400 dark:border-subtle/30 rounded-2xl p-6 shadow-sm space-y-4"
        >
          <div className="h-3 w-32 bg-neutral-200 dark:bg-subtle/30 rounded" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2].map((j) => (
              <div key={j} className="space-y-1.5">
                <div className="h-2.5 w-16 bg-neutral-200 dark:bg-subtle/30 rounded" />
                <div className="h-10 bg-neutral-200 dark:bg-subtle/30 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}