import React from "react";
import OfficialHeroMark from "@/components/OfficialHeroMark";

export default function NavMark() {
  return (
    <span className="flex w-36 md:w-44 flex-col items-center">
      <OfficialHeroMark top={455} />
      <span className="-mt-0.5 h-1 w-[27%] bg-hero-bar" />
    </span>
  );
}