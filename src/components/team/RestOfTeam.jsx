import React, { useState } from "react";
import LawyerCard from "@/components/team/LawyerCard";

export default function RestOfTeam({ staff, offset }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-14 lg:mt-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-8">
            {staff.map((p, i) => <LawyerCard key={p.id} lawyer={p} index={i + offset} />)}
          </div>
        </div>
      </div>
    </div>
  );
}