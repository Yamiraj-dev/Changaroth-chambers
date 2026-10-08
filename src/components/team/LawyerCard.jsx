import React, { useState } from "react";
import LawyerPortrait from "@/components/team/LawyerPortrait";
import LawyerDetails from "@/components/team/LawyerDetails";
import LawyerDialog from "@/components/team/LawyerDialog";

export default function LawyerCard({ lawyer, index }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="group flex gap-4 sm:gap-5 items-start text-left w-full">
        <div className="relative w-28 sm:w-40 lg:w-36 xl:w-44 shrink-0">
          <LawyerPortrait lawyer={lawyer} className="group-hover:border-gold/60 transition-colors" />
          <span className="absolute top-2 left-2 sm:top-4 sm:left-4 font-display italic text-gold text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-xl xl:text-2xl text-hero-cream group-hover:text-gold transition-colors">{lawyer.name}</h3>
          <p className="mt-1 text-[10px] tracking-micro uppercase text-gold">{lawyer.role}</p>
          <span className="block w-8 h-px bg-gold/50 my-3" />
          <LawyerDetails lawyer={lawyer} />
          <span className="mt-3 inline-block text-[10px] tracking-micro uppercase text-mist group-hover:text-gold transition-colors">View profile</span>
        </div>
      </button>
      <LawyerDialog lawyer={lawyer} open={open} onOpenChange={setOpen} />
    </>
  );
}