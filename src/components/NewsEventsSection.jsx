import React from "react";
import LatestAnnouncements from "@/components/LatestAnnouncements";
import LatestEvents from "@/components/LatestEvents";

export default function NewsEventsSection() {
  return (
    <section id="news-events" className="relative bg-forest-deep py-16 lg:py-24 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-display italic text-gold text-sm">05</span>
          <span className="w-12 h-px bg-gold/40" />
          <span className="text-[11px] tracking-micro uppercase text-mist">News &amp; Events</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <LatestAnnouncements />
          <LatestEvents />
        </div>
      </div>
    </section>
  );
}