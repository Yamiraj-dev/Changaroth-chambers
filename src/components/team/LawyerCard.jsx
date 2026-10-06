import React from "react";
import { Image } from "@/components/ui/image";

export default function LawyerCard({ lawyer, index }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden border border-gold/20 bg-forest-light">
        <Image
          src={lawyer.image}
          alt={`Portrait of ${lawyer.name}`}
          className="block w-full aspect-[4/5] grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
          focalPointX={0.5}
          focalPointY={0.3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent pointer-events-none" />
        <span className="absolute top-4 left-4 font-display italic text-gold text-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="pt-6">
        <h3 className="font-display text-2xl md:text-3xl text-hero-cream">{lawyer.name}</h3>
        <p className="mt-2 text-[10px] tracking-micro uppercase text-gold">{lawyer.role}</p>
        <span className="block w-10 h-px bg-gold/50 my-5" />
        <blockquote className="font-display italic text-lg text-hero-cream/90 leading-snug">
          “{lawyer.quote}”
        </blockquote>
        <p className="mt-4 text-mist text-sm leading-relaxed">{lawyer.bio}</p>
      </div>
    </article>
  );
}