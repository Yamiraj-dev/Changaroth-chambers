import React from "react";
import { Image } from "@/components/ui/image";

const LOGO_URL = "https://media.base44.com/images/public/6a905eb7064e9f37b1446f75/5e7f6fcc3_IMG_5309.png";

export default function HeroWordmark({ mounted = false }) {
  return (
    <div
      className={`relative flex items-center justify-center select-none transition-all duration-[1400ms] ease-out ${
        mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: "300ms" }}
    >
      <Image
        src={LOGO_URL}
        alt="Changaroth Chambers — Brunei Darussalam"
        fittingType="fit"
        originWidth={1563}
        originHeight={1563}
        className="relative w-[240px] sm:w-[300px] md:w-[340px] lg:w-[380px]"
      />
    </div>
  );
}