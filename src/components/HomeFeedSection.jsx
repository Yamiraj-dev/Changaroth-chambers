import React from "react";
import { Link } from "react-router-dom";

export default function HomeFeedSection({ eyebrow, title, to, cta, children }) {
  return (
    <div className="mb-12 md:mb-16 pb-12 border-b border-white/10">
      <p className="text-[10px] tracking-micro uppercase text-gold mb-2">{eyebrow}</p>
      <h2 className="font-display text-2xl md:text-3xl font-light text-white mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{children}</div>
      <div className="flex justify-center pt-10">
        <Link to={to} className="group inline-flex items-center gap-3 border border-gold px-7 py-3 hover:bg-gold transition-all duration-500">
          <span className="text-[10px] tracking-micro uppercase text-gold group-hover:text-forest transition-colors duration-500">{cta}</span>
          <span className="w-6 h-px bg-gold group-hover:bg-forest transition-all duration-500" />
        </Link>
      </div>
    </div>
  );
}