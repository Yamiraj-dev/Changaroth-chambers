import React from "react";
import OfficialHeroMark from "@/components/OfficialHeroMark";

export default function NavMark() {
  return (
    <span className="flex w-24 md:w-28 flex-col items-center">
      <OfficialHeroMark />
      <span className="-mt-0.5 h-1 w-[27%] bg-hero-bar" />
    </span>
  );
}