"use client";

import React from "react";
import Link from "next/link";

export default function Button({
  label,
  bgColor = "transparent",
  borderColor = "#ffbe0b",
  flairColor = "#ffbe0b",
  textColor = "currentColor",
  textHoverColor = "#ffffff",
  leftIcon,
  rightIcon,
  onClick,
  href,
  target,
  disabled = false,
  size = "md",
  className = "",
  ariaLabel,
}) {
  const sizeMap = {
    sm: "px-5 py-2 text-[13px] gap-1.5 font-medium",
    md: "px-7 py-3 text-[14px] gap-2 font-semibold tracking-wide",
    lg: "px-9 py-4 text-base gap-2.5 font-bold tracking-wider",
  };

  const sz = sizeMap[size] ?? sizeMap.md;

  const sharedClasses = [
    "relative overflow-hidden inline-flex items-center justify-center text-center select-none",
    "rounded-full border transition-all duration-500 ease-out active:scale-95 group  ",
    disabled
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "cursor-pointer hover:scale-[1.03]",
    sz,
    className,
  ].join(" ");

  const innerContent = (
    <>
      <span
        style={{ backgroundColor: flairColor }}
        className="absolute inset-0 w-full h-full rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out origin-center pointer-events-none z-0 "
      />

      <span
        style={{
          "--text-color": textColor,
          "--text-hover": textHoverColor,
        }}
        className="relative z-10 inline-flex items-center gap-[inherit] leading-none whitespace-nowrap text-[var(--text-color)] group-hover:text-[var(--text-hover)] transition-colors duration-300"
      >
        {leftIcon && (
          <span className="inline-flex items-center text-[1.15em]">
            {leftIcon}
          </span>
        )}
        <span>{label}</span>
        {rightIcon && (
          <span className="inline-flex items-center text-[1.15em]">
            {rightIcon}
          </span>
        )}
      </span>
    </>
  );

  const customStyles = {
    backgroundColor: bgColor,
    borderColor: borderColor,
  };

  if (href && !disabled) {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel || label}
        style={customStyles}
        className={sharedClasses}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel || label}
      style={customStyles}
      className={sharedClasses}
    >
      {innerContent}
    </button>
  );
}
