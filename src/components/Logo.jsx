import React from "react";

const Mark = ({ className = "h-8 w-16", strokeWidth = 2.25 }) => (
  <svg
    viewBox="0 0 80 32"
    fill="none"
    stroke="currentColor"
    className={className}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M40 16 C40 4 12 4 12 16 C12 28 40 28 40 16 C40 4 68 4 68 16 C68 28 40 28 40 16" />
  </svg>
);

export default function Logo({ variant = "compact", markClassName = "text-gold", className = "" }) {
  if (variant === "mark") {
    return <Mark className={markClassName} />;
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <Mark className={`h-6 w-12 ${markClassName}`} />
        <span className="w-px h-7 bg-gold/40" />
        <div className="leading-none">
          <span className="block text-[11px] tracking-micro uppercase font-medium">
            Changaroth Chambers
          </span>
          <span className="block text-[8px] tracking-micro uppercase opacity-60 mt-1">
            Advocates &amp; Solicitors
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <Mark className={`h-12 w-24 ${markClassName}`} />
      <div className="w-16 h-px bg-gold/40" />
      <div className="text-center leading-relaxed">
        <span className="block text-sm tracking-micro uppercase font-medium">
          Changaroth Chambers
        </span>
        <span className="block text-[9px] tracking-micro uppercase opacity-70 mt-2">
          Advocates &amp; Solicitors · Appropriate Dispute Resolution
        </span>
        <span className="block text-[9px] tracking-micro uppercase opacity-70">
          Syariah Counsel · Commissioner for Oaths
        </span>
        <span className="block text-[9px] tracking-micro uppercase opacity-50 mt-1">
          Brunei Darussalam
        </span>
      </div>
    </div>
  );
}