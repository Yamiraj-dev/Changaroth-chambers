import React from "react";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import EventCard from "@/components/events/EventCard";

export default function Events() {
  const { data: events, isLoading } = useQuery({
    queryKey: ["events-public"],
    queryFn: () => base44.entities.Event.filter({ status: "published" }, "-event_date", 200),
  });

  return (
    <PageShell>
      <PageHeader eyebrow="Events" title="Upcoming & Past Events" description="Seminars, talks and gatherings hosted or attended by Changaroth Chambers." />
      {isLoading ? (
        <div className="flex justify-center py-24"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>
      ) : !events.length ? (
        <p className="text-mist text-center py-24 font-display text-xl">No events have been published yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {events.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
      )}
    </PageShell>
  );
}