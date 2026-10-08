import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import EventCard from "@/components/events/EventCard";
import HomeFeedSection from "@/components/HomeFeedSection";

export default function LatestEvents() {
  const { data: events = [] } = useQuery({
    queryKey: ["latest-events"],
    queryFn: () => base44.entities.Event.filter({ status: "published" }, "-event_date", 3),
  });

  if (!events.length) return null;

  return (
    <HomeFeedSection eyebrow="Events" title="Latest events." to="/events" cta="Explore more of our events">
      {events.map((e) => <EventCard key={e.id} event={e} />)}
    </HomeFeedSection>
  );
}