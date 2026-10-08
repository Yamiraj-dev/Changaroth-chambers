import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function PosterLightbox({ event, open, onOpenChange }) {
  const gallery = event.gallery || [];
  const [active, setActive] = useState(null);
  useEffect(() => { if (open) setActive(null); }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-forest-deep border-gold/20 [&>button]:hidden">
        <DialogTitle className="sr-only">{event.title}</DialogTitle>
        <button onClick={() => onOpenChange(false)} className="absolute -top-10 right-0 text-gold hover:text-gold-light"><X className="w-6 h-6" /></button>
        {active ? (
          <img src={active} alt={event.title} className="w-full max-h-[75vh] object-contain" />
        ) : event.poster_type === "pdf" ? (
          <iframe src={event.poster_url} title={event.title} className={`w-full bg-white ${gallery.length ? "h-[75vh]" : "h-[85vh]"}`} />
        ) : (
          <img src={event.poster_url} alt={event.title} className={`w-full object-contain ${gallery.length ? "max-h-[75vh]" : "max-h-[85vh]"}`} />
        )}
        {gallery.length > 0 && (
          <div className="flex gap-2 p-3 overflow-x-auto no-scrollbar border-t border-gold/20">
            <Thumb src={event.poster_type === "pdf" ? null : event.poster_url} label="Poster" selected={!active} onClick={() => setActive(null)} />
            {gallery.map((url) => <Thumb key={url} src={url} selected={active === url} onClick={() => setActive(url)} />)}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Thumb({ src, label, selected, onClick }) {
  return (
    <button type="button" onClick={onClick} className={`shrink-0 w-16 h-16 border overflow-hidden bg-forest-light transition-colors ${selected ? "border-gold" : "border-gold/20 opacity-60 hover:opacity-100"}`}>
      {src ? <img src={src} alt="" className="w-full h-full object-cover" /> : <span className="text-[10px] tracking-micro uppercase text-gold">{label}</span>}
    </button>
  );
}