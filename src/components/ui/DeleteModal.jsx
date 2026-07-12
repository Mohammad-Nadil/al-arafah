"use client";
import { MdClose, MdWarning, MdDelete } from "react-icons/md";

export default function DeleteModal({ isOpen, onClose, onConfirm, studentName, isDeleting }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-white/20 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-2xl border border-neutral-200 dark:border-neutral-800 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center gap-3 text-red-600 mb-4">
          <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-full">
            <MdWarning size={24} />
          </div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Delete This ?</h3>
        </div>

        {/* Info */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          Are you sure you want to delete <strong>{name}</strong>? This action cannot be undone. Please enter your password to confirm.
        </p>

        {/* Password Input */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Admin Password</label>
          <input
            type="password"
            className="w-full mt-1.5 px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-sm outline-none focus:border-red-500 dark:focus:border-red-500"
            placeholder="••••••••"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors disabled:opacity-50"
          >
            {isDeleting ? "Deleting..." : <><MdDelete /> Confirm Delete</>}
          </button>
        </div>
      </div>
    </div>
  );
}