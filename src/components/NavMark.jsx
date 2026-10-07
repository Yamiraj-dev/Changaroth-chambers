import React from "react";
import OfficialHeroMark from "@/components/OfficialHeroMark";

export default function NavMark() {
  return (
    <span className="flex items-center gap-3 md:gap-4">
      <span className="flex w-11 md:w-16 flex-col items-center">
        <OfficialHeroMark top={455} left={505} width={560} />
        <span className="mt-1 h-1 w-[82%] bg-hero-bar" />
      </span>
      <span className="flex flex-col font-body uppercase leading-tight">
        <span className="text-[0.66rem] leading-[1.3] md:text-sm font-semibold tracking-[0.1em] md:tracking-[0.13em] whitespace-nowrap">
          <span className="text-hero-bar">CHANG</span><span className="text-hero-cream">AROTH</span> <span className="text-hero-cream">CHAMBERS</span>
        </span>
        <span className="mt-0.5 md:mt-1 text-[0.56rem] md:text-[10px] tracking-[0.18em] md:tracking-[0.25em] whitespace-nowrap text-hero-gold">Advocates &amp; Solicitors</span>
      </span>
    </span>
  );
}