import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function EventRow({ event, onStatus, onDelete }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 py-6 border-b border-white/10">
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-xl text-hero-cream truncate">{event.title}</h3>
        <p className="mt-1 text-xs text-mist">{event.event_date ? format(new Date(`${event.event_date}T12:00:00`), "d MMM yyyy") : "No date"}</p>
      </div>
      <div className="flex flex-wrap gap-5 text-[10px] tracking-micro uppercase">
        <Link to={`/admin/events/edit/${event.id}`} className="text-gold hover:text-gold-light">Edit</Link>
        {event.poster_url && <a href={event.poster_url} target="_blank" rel="noopener noreferrer" className="text-mist hover:text-gold">View</a>}
        {event.status === "draft" && <button onClick={() => onStatus(event, "published")} className="text-mist hover:text-gold">Publish</button>}
        {event.status === "published" && <button onClick={() => onStatus(event, "archived")} className="text-mist hover:text-gold">Archive</button>}
        {event.status === "archived" && <button onClick={() => onStatus(event, "published")} className="text-mist hover:text-gold">Restore</button>}
        <button onClick={() => onDelete(event)} className="text-red-400 hover:text-red-300">Delete</button>
      </div>
    </div>
  );
}