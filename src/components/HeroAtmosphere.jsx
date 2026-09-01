import React from "react";

export default function HeroAtmosphere() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-forest-deep" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 47%, rgba(255,255,255,0.16) 0%, rgba(212,175,55,0.09) 15%, rgba(46,82,56,0.16) 28%, transparent 52%)",
        }}
      />
      <svg className="absolute inset-x-0 bottom-0 h-[58%] w-full opacity-25" viewBox="0 0 1440 520" preserveAspectRatio="none">
        <g fill="none" stroke="rgba(163,176,170,0.22)" strokeWidth="1">
          {[0, 1, 2, 3, 4, 5].map((line) => (
            <g key={line}>
              <path d={`M -80 ${150 + line * 16} C 130 ${220 + line * 8}, 140 ${490 - line * 10}, 430 520`} />
              <path d={`M 1520 ${150 + line * 16} C 1310 ${220 + line * 8}, 1300 ${490 - line * 10}, 1010 520`} />
            </g>
          ))}
        </g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/25 via-transparent to-forest-deep/70" />
    </div>
  );
}