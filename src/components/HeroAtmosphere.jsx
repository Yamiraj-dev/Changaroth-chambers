import React from "react";

export default function HeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-atmosphere-base absolute inset-0" />
      <div className="hero-atmosphere-glow absolute inset-0 opacity-80" />
      <svg className="absolute inset-x-0 bottom-0 h-[64%] w-full opacity-30" viewBox="0 0 1535 600" preserveAspectRatio="none">
        <g fill="none" stroke="rgb(var(--hero-gold))" strokeOpacity="0.14" strokeWidth="1">
          {[0, 1, 2, 3, 4, 5, 6].map((line) => (
            <g key={line}>
              <path d={`M -90 ${160 + line * 14} C 160 ${205 + line * 9}, 165 ${465 - line * 4}, 540 600`} />
              <path d={`M 1625 ${160 + line * 14} C 1375 ${205 + line * 9}, 1370 ${465 - line * 4}, 995 600`} />
            </g>
          ))}
        </g>
      </svg>
      <div className="absolute inset-0 bg-grain opacity-20" />
      <div className="hero-atmosphere-fade absolute inset-0" />
    </div>
  );
}