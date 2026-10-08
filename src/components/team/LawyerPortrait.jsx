import React from "react";

// Fixed 4:5 frame; any uploaded photo is cropped to fill it, so every portrait matches.
export default function LawyerPortrait({ lawyer, className = "" }) {
  return (
    <div className={`relative overflow-hidden border border-gold/20 bg-forest-light aspect-[4/5] ${className}`}>
      {lawyer.image && (
        <img src={lawyer.image} alt={`Portrait of ${lawyer.name}`} className="absolute inset-0 w-full h-full object-cover object-[50%_30%]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}