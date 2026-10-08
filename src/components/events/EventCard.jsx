import React from "react";
import { format } from "date-fns";
import PosterPreview from "@/components/events/PosterPreview";

export default function EventCard({ event }) {
  return (
    <a href={event.poster_url} target="_blank" rel="noopener noreferrer" className="group block">
      <PosterPreview event={event} />
      <p className="mt-5 text-[10px] tracking-micro uppercase text-gold/80">
        {event.event_date && format(new Date(`${event.event_date}T12:00:00`), "d MMMM yyyy")}
      </p>
      <h3 className="mt-2 font-display text-xl text-hero-cream leading-snug group-hover:text-gold transition-colors duration-500">{event.title}</h3>
      <span className="mt-2 inline-block text-[10px] tracking-micro uppercase text-mist group-hover:text-gold transition-colors">View poster →</span>
    </a>
  );
}