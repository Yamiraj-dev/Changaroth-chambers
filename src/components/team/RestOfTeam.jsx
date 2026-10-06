import React, { useState } from "react";
import LawyerCard from "@/components/team/LawyerCard";

const PLACEHOLDER = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80";
const STAFF = [1, 2, 3, 4, 5].map((n) => ({
  name: `Team Member ${n}`,
  role: "Staff",
  image: PLACEHOLDER,
  quote: "Lorem ipsum dolor sit amet.",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}));

export default function RestOfTeam() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-14">
      <div className="flex justify-center">
        <button
          onClick={() => setOpen(!open)}
          className="group inline-flex items-center gap-3 border border-gold px-7 py-3 hover:bg-gold transition-all duration-500"
        >
          <span className="text-[10px] tracking-micro uppercase text-gold group-hover:text-forest transition-colors duration-500">
            {open ? "Hide the rest of our team" : "See the rest of our team"}
          </span>
          <span className={`w-6 h-px bg-gold group-hover:bg-forest transition-all duration-500 ${open ? "w-3" : ""}`} />
        </button>
      </div>
      <div className={`grid transition-all duration-700 ${open ? "grid-rows-[1fr] opacity-100 mt-14" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
            {STAFF.map((p, i) => <LawyerCard key={p.name} lawyer={p} index={i + 6} />)}
          </div>
        </div>
      </div>
    </div>
  );
}