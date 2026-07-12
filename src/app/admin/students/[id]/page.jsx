"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import studentData from "@/../temp/student.json";
import {
  MdArrowBack,
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdCalendarToday,
  MdBloodtype,
  MdSchool,
  MdGroup,
  MdPerson,
  MdEditNote,
  MdDeleteOutline,
} from "react-icons/md";
import Link from "next/link";
import DeleteModal from "@/components/ui/DeleteModal";
import toast from "react-hot-toast";

function Badge({ label }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide text-neutral-500 dark:text-neutral-400`}
    >
      {label}
    </span>
  );
}

function InfoCard({ title, icon, rows }) {
  return (
    <div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.1 }}
      className=" dark:bg-subtle/30 rounded-2xl border border-neutral-400 dark:border-neutral-800 p-5 md:p-6 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="space-y-3">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
              {row.icon}
              <span>{row.label}</span>
            </div>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-right">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function StudentDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = () => {
    setIsDeleting(true);
    // এখানে আপনার ডিলিট API কল করুন

    toast.success("Student deleted successfully");
    setTimeout(() => {
      setIsDeleting(false);
      setIsModalOpen(false);
    }, 2000);
  };

  const student = studentData.find((s) => s.studentId.$oid === id);

  if (!student) {
    return (
      <div className="max-w-5xl mx-auto p-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4">
          <MdPerson className="text-red-400" size={28} />
        </div>
        <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
          Student Not Found
        </h2>
        <button
          onClick={() => router.back()}
          className="mt-5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  // ---------- MAIN CONTENT ----------
  return (
    <div className=" pb-10">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-primary  dark:hover:text-primary  transition-colors mb-6"
      >
        <MdArrowBack /> Back to Students
      </button>

      {/* Profile Header Card */}
      <div className=" dark:bg-subtle/30 rounded-2xl border border-neutral-400 dark:border-neutral-800 overflow-hidden shadow-sm">
        <div className="h-20 md:h-26 bg-linear-to-r from-primary to-primary/20 relative z-10">
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        <div className=" p-3 sm:p-6 relative z-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex items-end gap-4 -mt-12 md:-mt-14">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-lg bg-neutral-100 dark:bg-subtle">
                <Image
                  src={
                    student.gender?.toLowerCase() === "male"
                      ? "/placeholder/boy.jpg"
                      : "/placeholder/girl.jpg"
                  }
                  alt={student.fullName}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="pb-1">
                <h1 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                  {student.fullName}
                </h1>
                <div className="  font-medium flex  gap-2 ">
                  <p>Roll #{student.rollNumber}</p> · <p>{student.className}</p>
                </div>
              </div>
            </div>

            {/* Quick action & Edit/Delete */}
            <div className="flex gap-2">
              {/* Call Button */}
              <a
                href={`tel:${student.contactNumber}`}
                className="  flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white text-xs xs:text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                <MdPhone size={16} /> Call
              </a>

              {/* Edit Button */}
              <Link
                href={`/admin/students/form/${id}`}
                className="  flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 dark:bg-subtle text-neutral-700 dark:text-neutral-200 text-xs xs:text-sm font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <MdEditNote size={16} /> Edit
              </Link>

              {/* Delete Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="  flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs xs:text-sm font-semibold hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
              >
                <MdDeleteOutline size={16} /> Delete
              </button>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-5">
            <Badge label={`Section: ${student.section || "-"}`} />
            <Badge label={student.group || "-"} />
            <Badge
              label={
                student.bloodGroup ? `Blood: ${student.bloodGroup}` : "Blood: -"
              }
            />
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        <InfoCard
          title="Personal Information"
          icon={<MdPerson className="text-primary" />}
          rows={[
            {
              icon: <MdCalendarToday size={14} />,
              label: "Date of Birth",
              value: student.dob || "-",
            },
            {
              icon: <MdGroup size={14} />,
              label: "Gender",
              value: student.gender || "-",
            },
            {
              icon: <MdBloodtype size={14} />,
              label: "Blood Group",
              value: student.bloodGroup || "-",
            },
            {
              icon: <MdPerson size={14} />,
              label: "Religion",
              value: student.religion || "-",
            },
          ]}
        />

        <InfoCard
          title="Contact Information"
          icon={<MdPhone className="text-primary" />}
          rows={[
            {
              icon: <MdPhone size={14} />,
              label: "Phone",
              value: student.contactNumber || "-",
            },
            {
              icon: <MdEmail size={14} />,
              label: "Email",
              value: student.email || "-",
            },
            {
              icon: <MdLocationOn size={14} />,
              label: "Address",
              value: student.address || "-",
            },
          ]}
        />

        <InfoCard
          title="Academic Information"
          icon={<MdSchool className="text-primary" />}
          rows={[
            {
              icon: <MdSchool size={14} />,
              label: "Class",
              value: student.className || "-",
            },
            {
              icon: <MdGroup size={14} />,
              label: "Section",
              value: student.section || "-",
            },
            {
              icon: <MdGroup size={14} />,
              label: "Group",
              value: student.group || "-",
            },
            {
              icon: <MdCalendarToday size={14} />,
              label: "Admission Date",
              value: student.admissionDate || "-",
            },
          ]}
        />

        <InfoCard
          title="Guardian Information"
          icon={<MdPerson className="text-primary" />}
          rows={[
            {
              icon: <MdPerson size={14} />,
              label: "Guardian Name",
              value: student.guardianName || "-",
            },
            {
              icon: <MdPhone size={14} />,
              label: "Guardian Phone",
              value: student.guardianPhone || "-",
            },
          ]}
        />
      </div>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        name="Jackelyn Witherdon"
        isDeleting={isDeleting}
      />
    </div>
  );
}
