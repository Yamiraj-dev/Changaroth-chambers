import React from "react";

/**
 * Changaroth Chambers logo — infinity-loop mark above a forest-green bar,
 * with CHANGAROTH / CHAMBERS wordmark and optional credential lines.
 *
 * variant: "full" | "compact" | "mark"
 * markClassName: override the mark's color (defaults to gold)
 */
export default function Logo({
  variant = "full",
  className = "",
  markClassName = "text-gold",
  barClassName = "bg-[#2D4B3D]",
  textClassName = "text-white",
  credentials = true,
}) {
  const Mark = ({ size = "h-8 w-14" }) => (
    <svg
      viewBox="0 0 120 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      className={`${size} ${markClassName}`}
      aria-hidden="true"
    >
      <ellipse cx="40" cy="32" rx="28" ry="22" />
      <ellipse cx="80" cy="32" rx="28" ry="22" />
    </svg>
  );

  const CREDENTIALS = [
    "Advocates & Solicitors",
    "Appropriate Dispute Resolution",
    "Syariah Counsel",
    "Commissioner for Oaths",
  ];

  if (variant === "mark") {
    return <Mark size="h-12 w-20" />;
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <Mark size="h-6 w-10" />
        <span className="w-px h-7 bg-gold/30" />
        <div className="flex flex-col leading-none">
          <span className={`font-body text-sm font-semibold tracking-[0.22em] ${textClassName}`}>
            CHANGAROTH
          </span>
          <span className="font-body text-[9px] tracking-[0.34em] text-mist mt-1">
            CHAMBERS
          </span>
        </div>
      </div>
    );
  }

  // full
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <Mark size="h-14 w-24" />
      <div className={`w-28 h-1.5 ${barClassName} mt-4 mb-5`} />
      <h1 className={`font-body text-xl md:text-2xl font-semibold tracking-[0.22em] ${textClassName}`}>
        CHANGAROTH
      </h1>
      <p className="font-body text-[10px] md:text-xs tracking-[0.36em] text-mist mt-2">
        CHAMBERS
      </p>
      {credentials && (
        <>
          <div className="w-12 h-px bg-gold/40 my-5" />
          <div className="space-y-1.5">
            {CREDENTIALS.map((c) => (
              <p
                key={c}
                className="font-body text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-mist"
              >
                {c}
              </p>
            ))}
          </div>
          <p className="font-body text-[9px] md:text-[10px] tracking-[0.34em] uppercase text-mist mt-4">
            Brunei Darussalam
          </p>
        </>
      )}
    </div>
  );
}