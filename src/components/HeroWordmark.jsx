import React from "react";
import { Image } from "@/components/ui/image";

const LOGO_URL = "https://media.base44.com/images/public/6a905eb7064e9f37b1446f75/b5be3af03_generated_image.png";

export default function HeroWordmark({ mounted = false }) {
  return (
    <div
      className={`relative flex items-center justify-center select-none transition-all duration-[1400ms] ease-out ${
        mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: "300ms" }}
    >
      {/* Official logo — transparent gilded colourway */}
      <div
        className="relative w-[230px] sm:w-[260px] md:w-[300px] lg:w-[330px] mix-blend-screen"
        style={{
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 0%, #000 48%, rgba(0,0,0,.8) 60%, rgba(0,0,0,.25) 72%, transparent 84%)",
          maskImage: "radial-gradient(circle at 50% 50%, #000 0%, #000 48%, rgba(0,0,0,.8) 60%, rgba(0,0,0,.25) 72%, transparent 84%)",
        }}
      >
        <Image
          src={LOGO_URL}
          alt="Changaroth Chambers — Brunei Darussalam"
          fittingType="fit"
          originWidth={2048}
          originHeight={2048}
          className="w-full"
        />
      </div>
    </div>
  );
}