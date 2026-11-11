import React from "react";
import { Image } from "@/components/ui/image";
import usePosterRatio from "@/hooks/usePosterRatio";

export default function PosterPreview({ event }) {
  const { ratio, isA4 } = usePosterRatio(event.poster_url, event.poster_type);
  const aspectRatio = isA4 === false ? `${ratio}` : ratio ? `${ratio > 1 ? 1.414 : 1 / 1.414}` : `${1 / 1.414}`;

  return (
    <div className="relative border border-gold/15 bg-forest-light overflow-hidden" style={{ aspectRatio }}>
      {event.poster_type === "pdf" ? (
        <iframe src={`${event.poster_url}#toolbar=0&navpanes=0&view=FitH`} title={event.title} className="absolute inset-0 w-full h-full pointer-events-none bg-white" />
      ) : event.poster_url ? (
        <Image src={event.poster_url} alt={event.title} fittingType="fit" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full" />
      ) : null}
      {isA4 !== null && event.poster_url && (
        <span className="absolute bottom-2 left-2 px-2 py-1 bg-forest-deep/85 border border-gold/30 text-[10px] tracking-micro uppercase text-gold">
          {isA4 ? "A4" : "Original size"}
        </span>
      )}
    </div>
  );
}