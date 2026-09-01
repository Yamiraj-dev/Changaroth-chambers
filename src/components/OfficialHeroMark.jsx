import React from "react";

const LOGO_URL = "https://media.base44.com/images/public/6a905eb7064e9f37b1446f75/5e7f6fcc3_IMG_5309.png";

export default function OfficialHeroMark() {
  return (
    <svg viewBox="0 120 1563 735" className="h-auto w-full overflow-visible" role="img" aria-label="Changaroth Chambers official mark">
      <defs>
        <filter id="official-mark-cream" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.878  0 0 0 0 0.863  0 0 0 0 0.812  -0.2126 -0.7152 -0.0722 0 1"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.878  0 0 0 0 0.863  0 0 0 0 0.812  0 0 0 1 0"
          />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0 0 0.1 1 1" />
          </feComponentTransfer>
        </filter>
        <clipPath id="official-mark-crop">
          <rect x="0" y="120" width="1563" height="735" />
        </clipPath>
      </defs>
      <image href={LOGO_URL} x="0" y="0" width="1563" height="1563" filter="url(#official-mark-cream)" clipPath="url(#official-mark-crop)" />
    </svg>
  );
}