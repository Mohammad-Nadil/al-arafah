"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import staffData from "@/../temp/staff.json";
import { MdArrowBack, MdKeyboardArrowDown, MdSave } from "react-icons/md";
import DragDrop from "@/components/ui/DragDrop";

// ---------- Dropdown option lists (replace with DB-driven lists later) ----------
const GENDERS = ["Male", "Female"];
const ROLES = [
  "Principal",
  "Vice Principal",
  "Teacher",
  "Human Resources Manager",
  "Accountant",
  "Librarian",
  "Lab Assistant",
  "Office Staff",
  "Security Guard",
  "Cleaner",
];
const DEPARTMENTS = [
  "Administration",
  "Academics",
  "Business Development",
  "Human Resources",
  "Finance",
  "IT",
  "Facilities",
];
const STATUSES = ["active", "inactive", "on-leave", "resigned"];

const emptyForm = {
  staffId: "",
  fullName: "",
  gender: "",
  role: "",
  department: "",
  status: "active",
  contactNumber: "",
  email: "",
  avatarUrl: null,
};

export default function StaffFormPage() {
  const { id } = useParams();
  const router = useRouter();

  const [img, setImg] = useState(null);
  const isEditMode = Boolean(id && id !== "new");
  const [loading, setLoading] = useState(isEditMode);
  const [form, setForm] = useState(emptyForm);
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    if (!isEditMode) return;

    // Simulate fetch — replace with real API call later
    const timer = setTimeout(() => {
      const found = staffData.find((s) => s.id.$oid === id);
      if (found) {
        setForm({ ...emptyForm, ...found });
        setAvatarPreview(found.avatarUrl || null);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id, isEditMode]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend submit logic will go here later (POST/PUT to /api/staffs)
    console.log("Form submitted:", form);
  };

  if (loading) {
    return <FormSkeleton />;
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
          {isEditMode ? "Edit Staff" : "Add New Staff"}
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {isEditMode
            ? "Update the staff member's information below"
            : "Fill in the details to add a new staff member"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Combined Avatar and Basic Info Card */}
        <div className="bg-background dark:bg-subtle/30 border border-neutral-400 dark:border-subtle/30 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row gap-6">
          {/* Left: Image Upload Section */}
          <div className="w-full md:w-1/3 shrink-0">
            <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
              Staff Photo
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
                  placeholder="e.g. Carlin Giacobbo"
                  required
                />
              </div>
              <FormInput
                label="Staff ID"
                value={form.staffId}
                onChange={(v) => handleChange("staffId", v)}
                placeholder="e.g. 0011"
                required
              />
              <FormSelect
                label="Gender"
                value={form.gender}
                onChange={(v) => handleChange("gender", v)}
                options={GENDERS}
                placeholder="Select gender"
              />
              <FormInput
                label="Contact Number"
                value={form.contactNumber}
                onChange={(v) => handleChange("contactNumber", v)}
                placeholder="e.g. 282-808-4843"
                required
              />
              <FormInput
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => handleChange("email", v)}
                placeholder="e.g. name@school.edu"
                required
              />
            </div>
          </div>
        </div>

        {/* Job Info */}
        <FormSection title="Job Information">
          <FormSelect
            label="Role"
            value={form.role}
            onChange={(v) => handleChange("role", v)}
            options={ROLES}
            placeholder="Select role"
            required
          />
          <FormSelect
            label="Department"
            value={form.department}
            onChange={(v) => handleChange("department", v)}
            options={DEPARTMENTS}
            placeholder="Select department"
            required
          />
          <FormSelect
            label="Status"
            value={form.status}
            onChange={(v) => handleChange("status", v)}
            options={STATUSES}
            placeholder="Select status"
          />
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
            {isEditMode ? "Save Changes" : "Add Staff"}
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
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

// ---------- Reusable Form Input ----------
function FormInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) {
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
function FormSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
}) {
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

      {[1, 2].map((i) => (
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
