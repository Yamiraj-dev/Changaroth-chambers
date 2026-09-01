import React from "react";

export default function TransparentHeroLogo() {
  return (
    <svg viewBox="0 0 800 800" className="h-auto w-full overflow-visible" role="img" aria-label="Changaroth Chambers — Brunei Darussalam">
      <defs>
        <linearGradient id="heroGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F1D69A" />
          <stop offset="0.52" stopColor="#FFF2C7" />
          <stop offset="1" stopColor="#C99B43" />
        </linearGradient>
      </defs>
      <text x="400" y="165" textAnchor="middle" fill="url(#heroGold)" fontFamily="Noto Naskh Arabic, serif" fontSize="72">چڠاروت چيمبرز</text>
      <text x="400" y="440" textAnchor="middle" fill="url(#heroGold)" fontFamily="Georgia, serif" fontSize="300">∞</text>
      <rect x="320" y="455" width="160" height="18" fill="#127052" />
      <text x="400" y="555" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="53" fontWeight="600" letterSpacing="5">
        <tspan fill="#147052">CHANG</tspan><tspan fill="#F4E8C8">AROTH</tspan>
      </text>
      <text x="400" y="620" textAnchor="middle" fill="#F4E8C8" fontFamily="Inter, sans-serif" fontSize="32" letterSpacing="18">CHAMBERS</text>
      <text x="400" y="690" textAnchor="middle" fill="#D4AF37" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="500" letterSpacing="8">BRUNEI DARUSSALAM</text>
    </svg>
  );
}