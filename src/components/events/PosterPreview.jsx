import React from "react";
import { Image } from "@/components/ui/image";
import usePosterRatio from "@/hooks/usePosterRatio";

export default function PosterPreview({ event }) {
  const original = event.poster_type !== "pdf" && event.poster_is_a4 === false;
  const ratio = usePosterRatio(event.poster_url, original);
  const aspectRatio = original && ratio ? `${ratio}` : `${1 / 1.414}`;

  return (
    <div className="relative border border-gold/15 bg-forest-light overflow-hidden" style={{ aspectRatio }}>
      {event.poster_type === "pdf" ? (
        <iframe src={`${event.poster_url}#toolbar=0&navpanes=0&view=FitH`} title={event.title} className="absolute inset-0 w-full h-full pointer-events-none bg-white" />
      ) : event.poster_url ? (
        <Image src={event.poster_url} alt={event.title} fittingType="fit" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full" />
      ) : null}
    </div>
  );
}