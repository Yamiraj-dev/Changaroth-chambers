import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import EventCard from "@/components/events/EventCard";

export default function LatestEvents() {
  const { data: events = [] } = useQuery({
    queryKey: ["latest-events"],
    queryFn: () => base44.entities.Event.filter({ status: "published" }, "-event_date", 3),
  });

  if (!events.length) return null;

  return (
    <div className="mb-12 md:mb-16 pb-12 border-b border-white/10">
      <p className="text-[10px] tracking-micro uppercase text-gold mb-8">Events</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((e) => <EventCard key={e.id} event={e} />)}
      </div>
      <div className="flex justify-center pt-10">
        <Link to="/events" className="group inline-flex items-center gap-3 border border-gold px-7 py-3 hover:bg-gold transition-all duration-500">
          <span className="text-[10px] tracking-micro uppercase text-gold group-hover:text-forest transition-colors duration-500">Explore more of our events</span>
          <span className="w-6 h-px bg-gold group-hover:bg-forest transition-all duration-500" />
        </Link>
      </div>
    </div>
  );
}