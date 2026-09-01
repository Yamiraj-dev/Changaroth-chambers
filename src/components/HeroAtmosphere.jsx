import React from "react";
import { Image } from "@/components/ui/image";

const BACKGROUND_URL = "https://media.base44.com/images/public/6a905eb7064e9f37b1446f75/edfda9867_generated_image.png";

export default function HeroAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Image
        src={BACKGROUND_URL}
        alt=""
        fittingType="fill"
        originWidth={1536}
        originHeight={864}
        className="h-full w-full opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/35 via-transparent to-forest-deep/45" />
    </div>
  );
}