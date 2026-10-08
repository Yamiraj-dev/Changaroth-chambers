import React from "react";
import { Image } from "@/components/ui/image";

export default function PosterPreview({ event }) {
  return (
    <div className="relative aspect-[1/1.414] border border-gold/15 bg-forest-light overflow-hidden">
      {event.poster_type === "pdf" ? (
        <iframe src={`${event.poster_url}#toolbar=0&navpanes=0&view=FitH`} title={event.title} className="absolute inset-0 w-full h-full pointer-events-none bg-white" />
      ) : event.poster_url ? (
        <Image src={event.poster_url} alt={event.title} fittingType="fit" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full" />
      ) : null}
    </div>
  );
}