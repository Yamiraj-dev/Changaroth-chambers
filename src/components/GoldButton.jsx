import React from "react";

export default function GoldButton({ children, solid = false, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-[10px] tracking-micro uppercase border transition-all duration-500 disabled:opacity-40 disabled:pointer-events-none ${
        solid ? "bg-gold border-gold text-forest hover:bg-gold-light" : "border-gold/60 text-gold hover:bg-gold hover:text-forest"
      } ${className}`}
    >
      {children}
    </button>
  );
}