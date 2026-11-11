import React from "react";

const OPTIONS = [
  { value: true, label: "A4" },
  { value: false, label: "Original size" },
];

export default function PosterSizeToggle({ value, onChange }) {
  return (
    <div className="max-w-sm mx-auto">
      <p className="text-[10px] tracking-micro uppercase text-gold mb-3">Poster format</p>
      <div className="grid grid-cols-2 border border-gold/30">
        {OPTIONS.map((o) => (
          <button
            key={o.label}
            type="button"
            onClick={() => onChange(o.value)}
            className={`py-3 text-[11px] tracking-micro uppercase transition-colors ${value === o.value ? "bg-gold text-forest" : "text-mist hover:text-gold"}`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}