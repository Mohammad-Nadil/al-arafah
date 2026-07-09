"use client";
import { useState, useEffect } from "react";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

export default function DragDrop({ setImg, setPreview, preview }) {
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImg(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFile(e.dataTransfer.files[0]);
      }}
      className={`w-full h-full border-2 border-dashed rounded-xl flex items-center justify-center relative transition-colors ${
        isDragging ? "border-emerald-500 bg-emerald-50/50" : "border-neutral-300 dark:border-neutral-700"
      }`}
    >
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFile(e.target.files[0])}
        className="hidden"
        id="fileInput"
      />
      
      {preview ? (
        <div className="relative w-full h-full p-2">
          <img src={preview} alt="preview" className="w-full h-full object-contain rounded-lg" />
          <button
            onClick={() => setPreview(null)}
            className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            <FaTimes />
          </button>
        </div>
      ) : (
        <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center">
          <FaCloudUploadAlt className="text-5xl text-neutral-400 mb-2" />
          <p className="text-neutral-600">Drag & Drop or <span className="text-emerald-600 font-bold">Browse</span></p>
        </label>
      )}
    </div>
  );
}