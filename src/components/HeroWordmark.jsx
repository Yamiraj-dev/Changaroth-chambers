import React from "react";
import OfficialHeroMark from "@/components/OfficialHeroMark";

export default function HeroWordmark({ mounted = false }) {
  return (
    <div
      className={`relative flex w-[250px] sm:w-[290px] md:w-[320px] lg:w-[340px] select-none flex-col items-center transition-all duration-[1400ms] ease-out ${
        mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: "300ms" }}
    >
      <OfficialHeroMark />
      <span className="-mt-1 h-2 w-[27%] bg-hero-bar" />
      <div className="mt-4 text-center font-body uppercase leading-none">
        <div className="text-[20px] font-semibold tracking-[0.13em] sm:text-[23px]">
          <span className="text-hero-bar">CHANG</span><span className="text-hero-cream">AROTH</span>
        </div>
        <div className="mt-4 text-[12px] tracking-[0.62em] text-hero-cream sm:text-[13px]">CHAMBERS</div>
        <div className="mt-5 text-[10px] font-medium tracking-[0.25em] text-hero-gold sm:text-[11px]">BRUNEI DARUSSALAM</div>
      </div>
    </div>
  );
}