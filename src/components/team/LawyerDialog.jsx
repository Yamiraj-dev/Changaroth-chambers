import React from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import LawyerPortrait from "@/components/team/LawyerPortrait";
import LawyerDetails from "@/components/team/LawyerDetails";

export default function LawyerDialog({ lawyer, open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[95vw] p-6 md:p-10 bg-forest-deep border-gold/20 rounded-none max-h-[90vh] overflow-y-auto [&>button]:hidden">
        <button onClick={() => onOpenChange(false)} className="absolute top-4 right-4 text-gold hover:text-gold-light"><X className="w-5 h-5" /></button>
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-10">
          <LawyerPortrait lawyer={lawyer} className="w-40 sm:w-56 shrink-0 self-start" />
          <div className="min-w-0 flex-1 sm:max-h-[70vh] sm:overflow-y-auto sm:pr-3 no-scrollbar">
            <DialogTitle className="font-display text-3xl font-light text-hero-cream">{lawyer.name}</DialogTitle>
            <p className="mt-1 text-[10px] tracking-micro uppercase text-gold">{lawyer.role}</p>
            <span className="block w-10 h-px bg-gold/50 my-4" />
            <LawyerDetails lawyer={lawyer} />
            {lawyer.bio && <p className="mt-5 text-mist text-sm leading-relaxed whitespace-pre-line">{lawyer.bio}</p>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}