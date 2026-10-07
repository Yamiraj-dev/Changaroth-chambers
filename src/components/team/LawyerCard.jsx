import React from "react";
import { Image } from "@/components/ui/image";

export default function LawyerCard({ lawyer, index }) {
  return (
    <article className="group flex gap-5 items-start">
      <div className="relative overflow-hidden border border-gold/20 bg-forest-light w-32 sm:w-36 lg:w-28 xl:w-32 shrink-0">
        <Image
          src={lawyer.image}
          alt={`Portrait of ${lawyer.name}`}
          className="block w-full aspect-[4/5]"
          focalPointX={0.5}
          focalPointY={0.3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent pointer-events-none" />
        <span className="absolute top-4 left-4 font-display italic text-gold text-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-xl xl:text-2xl text-hero-cream">{lawyer.name}</h3>
        <p className="mt-1 text-[10px] tracking-micro uppercase text-gold">{lawyer.role}</p>
        <span className="block w-8 h-px bg-gold/50 my-3" />
        <blockquote className="font-display italic text-sm text-hero-cream/90 leading-snug">
          “{lawyer.quote}”
        </blockquote>
        {lawyer.practice && <p className="mt-3 text-xs text-hero-cream"><span className="text-gold">Practice:</span> {lawyer.practice}</p>}
        {lawyer.education && <p className="mt-1 text-xs text-hero-cream"><span className="text-gold">Education:</span> {lawyer.education}</p>}
        <p className={`mt-2 text-mist text-xs leading-relaxed ${lawyer.practice ? "" : "line-clamp-3"}`}>{lawyer.bio}</p>
      </div>
    </article>
  );
}