import React from "react";
import OfficialHeroMark from "@/components/OfficialHeroMark";

export default function NavMark() {
  return (
    <span className="flex items-center gap-4">
      <span className="flex w-14 md:w-16 flex-col items-center">
        <OfficialHeroMark top={455} left={505} width={560} />
        <span className="mt-1 h-1 w-[82%] bg-hero-bar" />
      </span>
      <span className="flex flex-col font-body uppercase leading-tight">
        <span className="text-[13px] md:text-sm font-semibold tracking-[0.13em]">
          <span className="text-hero-bar">CHANG</span><span className="text-hero-cream">AROTH</span> <span className="text-hero-cream">CHAMBERS</span>
        </span>
        <span className="mt-1 text-[9px] md:text-[10px] tracking-[0.25em] text-hero-gold">Advocates &amp; Solicitors</span>
      </span>
    </span>
  );
}