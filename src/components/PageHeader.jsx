import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 md:mb-20"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-gold/60" />
        <span className="text-[10px] tracking-micro uppercase text-gold">{eyebrow}</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-6xl font-light text-hero-cream leading-tight">{title}</h1>
          {description && <p className="mt-5 text-mist leading-relaxed">{description}</p>}
        </div>
        {children}
      </div>
      <div className="mt-10 h-px gilded-line opacity-40" />
    </motion.header>
  );
}