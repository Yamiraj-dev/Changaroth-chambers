import React from "react";
import { Link } from "react-router-dom";

// One column of the homepage feed (articles or events).
export default function HomeFeedSection({ eyebrow, title, to, cta, children }) {
  return (
    <div className="flex flex-col">
      <p className="text-[10px] tracking-micro uppercase text-gold mb-2">{eyebrow}</p>
      <h2 className="font-display text-2xl md:text-3xl font-light text-white mb-8">{title}</h2>
      <div className="space-y-6 flex-1">{children}</div>
      <div className="pt-8">
        <Link to={to} className="group inline-flex items-center gap-3 border border-gold px-7 py-3 hover:bg-gold transition-all duration-500">
          <span className="text-[10px] tracking-micro uppercase text-gold group-hover:text-forest transition-colors duration-500">{cta}</span>
          <span className="w-6 h-px bg-gold group-hover:bg-forest transition-all duration-500" />
        </Link>
      </div>
    </div>
  );
}