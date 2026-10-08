import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import EventFeedItem from "@/components/events/EventFeedItem";
import HomeFeedSection from "@/components/HomeFeedSection";

export default function LatestEvents() {
  const { data: events = [] } = useQuery({
    queryKey: ["latest-events"],
    queryFn: () => base44.entities.Event.filter({ status: "published" }, "-event_date", 3),
  });

  return (
    <HomeFeedSection eyebrow="Events" title="Latest events." to="/events" cta="Explore more of our events">
      {events.length ? events.map((e) => <EventFeedItem key={e.id} event={e} />) : <p className="text-mist text-sm">No events yet.</p>}
    </HomeFeedSection>
  );
}