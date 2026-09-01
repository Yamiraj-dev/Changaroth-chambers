import React from "react";
import { Image } from "@/components/ui/image";

const LOGO_URL = "https://media.base44.com/images/public/6a905eb7064e9f37b1446f75/1d22eb5b8_image.png";

// Fades the logo's own light plate out into the dark hero — no square, no card edge.
const FEATHER_GRADIENT =
  "radial-gradient(ellipse 82% 74% at 50% 50%, #000 0%, #000 70%, rgba(0,0,0,0.75) 85%, transparent 100%)";

const FEATHER = {
  WebkitMaskImage: FEATHER_GRADIENT,
  maskImage: FEATHER_GRADIENT,
};

export default function HeroWordmark({ mounted = false }) {
  return (
    <div
      className={`relative flex items-center justify-center select-none transition-all duration-[1400ms] ease-out ${
        mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: "300ms" }}
    >
      {/* Luminous spotlight pool — soft white light, fully transparent at the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[175%] h-[175%]"
        style={{
          background:
            "radial-gradient(ellipse 56% 54% at 50% 50%, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.86) 52%, rgba(255,255,255,0.32) 72%, rgba(212,175,55,0.12) 85%, transparent 100%)",
        }}
      />

      {/* Official logo — original colourways, untouched */}
      <div
        className="relative w-[220px] sm:w-[300px] md:w-[380px] lg:w-[440px]"
        style={FEATHER}
      >
        <Image
          src={LOGO_URL}
          alt="Changaroth Chambers — Brunei Darussalam"
          fittingType="fit"
          originWidth={1024}
          originHeight={1024}
          className="w-full"
        />
      </div>
    </div>
  );
}