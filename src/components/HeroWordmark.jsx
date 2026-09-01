import React from "react";
import TransparentHeroLogo from "@/components/TransparentHeroLogo";

export default function HeroWordmark({ mounted = false }) {
  return (
    <div
      className={`relative flex items-center justify-center select-none transition-all duration-[1400ms] ease-out ${
        mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: "300ms" }}
    >
      <div className="relative w-[240px] sm:w-[300px] md:w-[340px] lg:w-[380px]">
        <TransparentHeroLogo />
      </div>
    </div>
  );
}