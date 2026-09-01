import React from "react";
import { Image } from "@/components/ui/image";

const LOGO_URL = "https://media.base44.com/images/public/6a905eb7064e9f37b1446f75/5e7f6fcc3_IMG_5309.png";

const Plate = ({ sizeClassName = "w-10 h-10", padding = "p-1" }) => (
  <span className={`inline-flex items-center justify-center bg-white rounded-sm border border-gold/20 ${padding} ${sizeClassName}`}>
    <Image
      src={LOGO_URL}
      alt="Changaroth Chambers"
      fittingType="fit"
      originWidth={1563}
      originHeight={1563}
      className="w-full h-full"
    />
  </span>
);

export default function Logo({ variant = "compact", className = "" }) {
  if (variant === "hero") {
    return (
      <div
        className={`relative isolate flex items-center justify-center bg-forest-deep p-8 md:p-16 -mt-24 md:mt-0 ${className}`}
        style={{
          /* Feather the isolated blending surface so its edges melt into the
             surrounding hero instead of reading as a square. */
          maskImage: "radial-gradient(circle at center, #000 55%, transparent 82%)",
          WebkitMaskImage: "radial-gradient(circle at center, #000 55%, transparent 82%)",
        }}
      >
        {/* Gold radial glow lifting the mark off the dark green */}
        <span
          className="absolute -inset-[45%] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.07) 45%, transparent 72%)",
          }}
        />
        {/* Invert turns the white plate black and the black artwork light;
            screen blending on the wrapper then drops the black plate away,
            leaving only the luminous mark over the forest background. */}
        <span
          className="relative block w-[150px] sm:w-[220px] md:w-[290px] lg:w-[340px] -mb-6 md:mb-0"
          style={{ mixBlendMode: "screen" }}
        >
          <Image
            src={LOGO_URL}
            alt="Changaroth Chambers"
            fittingType="fit"
            originWidth={1563}
            originHeight={1563}
            className="w-full"
            style={{ filter: "invert(1) brightness(1.12)" }}
          />
        </span>
      </div>
    );
  }

  if (variant === "mark") {
    return <Plate sizeClassName="w-14 h-14" padding="p-1.5" />;
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <Plate sizeClassName="w-10 h-10" />
        <span className="w-px h-7 bg-gold/40" />
        <div className="leading-none">
          <span className="block text-[11px] tracking-micro uppercase font-medium">
            Changaroth Chambers
          </span>
          <span className="block text-[8px] tracking-micro uppercase opacity-60 mt-1">
            Advocates &amp; Solicitors
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <Plate sizeClassName="w-24 h-24" padding="p-2" />
      <div className="w-16 h-px bg-gold/40" />
      <div className="text-center leading-relaxed">
        <span className="block text-sm tracking-micro uppercase font-medium">
          Changaroth Chambers
        </span>
        <span className="block text-[9px] tracking-micro uppercase opacity-70 mt-2">
          Advocates &amp; Solicitors · Appropriate Dispute Resolution
        </span>
        <span className="block text-[9px] tracking-micro uppercase opacity-70">
          Syariah Counsel · Commissioner for Oaths
        </span>
        <span className="block text-[9px] tracking-micro uppercase opacity-50 mt-1">
          Brunei Darussalam
        </span>
      </div>
    </div>
  );
}