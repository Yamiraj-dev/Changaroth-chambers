import React from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function PosterLightbox({ event, open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-forest-deep border-gold/20 [&>button]:hidden">
        <DialogTitle className="sr-only">{event.title}</DialogTitle>
        <button onClick={() => onOpenChange(false)} className="absolute -top-10 right-0 text-gold hover:text-gold-light"><X className="w-6 h-6" /></button>
        {event.poster_type === "pdf" ? (
          <iframe src={event.poster_url} title={event.title} className="w-full h-[85vh] bg-white" />
        ) : (
          <img src={event.poster_url} alt={event.title} className="w-full max-h-[85vh] object-contain" />
        )}
      </DialogContent>
    </Dialog>
  );
}