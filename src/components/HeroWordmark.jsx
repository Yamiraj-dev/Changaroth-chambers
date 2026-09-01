import React from "react";
import { Image } from "@/components/ui/image";

const LOGO_URL = "https://media.base44.com/images/public/6a905eb7064e9f37b1446f75/5e7f6fcc3_IMG_5309.png";

export default function HeroWordmark({ mounted = false }) {
  const step = (delay) => ({ transitionDelay: `${delay}ms` });

  const base = `transition-all duration-[1100ms] ease-out ${
    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

  return (
    <div className="relative flex flex-col items-center text-center select-none">
      {/* Arabic (Jawi) script line */}
      <span
        dir="rtl"
        lang="ms-Arab"
        className={`${base} font-arabic text-base sm:text-2xl md:text-3xl lg:text-4xl leading-[1.7] text-halo-gold`}
        style={step(300)}
      >
        چاڠاروت چيمبرس
      </span>

      {/* Official logo mark — original colourways, untouched */}
      <span
        className={`${base} mt-4 sm:mt-6 md:mt-8 inline-flex items-center justify-center bg-white rounded-sm p-2 sm:p-3 w-[68px] sm:w-[104px] md:w-[124px] shadow-2xl shadow-black/50`}
        style={step(450)}
      >
        <Image
          src={LOGO_URL}
          alt=""
          fittingType="fit"
          originWidth={1563}
          originHeight={1563}
          className="w-full"
        />
      </span>

      {/* Forest bar */}
      <span
        className={`${base} mt-4 sm:mt-7 md:mt-9 block h-[4px] sm:h-[6px] w-12 sm:w-20 md:w-24 bg-[#2D4B3D]`}
        style={step(600)}
      />

      {/* CHANGAROTH */}
      <span
        className={`${base} mt-4 sm:mt-7 md:mt-9 font-display font-semibold text-halo-gold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.06em]`}
        style={step(750)}
      >
        CHANGAROTH
      </span>

      {/* CHAMBERS */}
      <span
        className={`${base} mt-2 sm:mt-4 font-display font-light text-halo-gold text-[11px] sm:text-lg md:text-xl tracking-[0.5em] pl-[0.5em]`}
        style={step(900)}
      >
        CHAMBERS
      </span>

      {/* BRUNEI DARUSSALAM */}
      <span
        className={`${base} mt-3 sm:mt-5 md:mt-6 font-body font-semibold text-halo-gold text-[9px] sm:text-xs md:text-sm tracking-[0.32em] pl-[0.32em]`}
        style={step(1050)}
      >
        BRUNEI DARUSSALAM
      </span>
    </div>
  );
}