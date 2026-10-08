import React, { useState } from "react";
import LawyerCard from "@/components/team/LawyerCard";

const BASE = "https://media.base44.com/images/public/6a905eb7064e9f37b1446f75/";
const STAFF = [
  { name: "Izhar Rozaiman", role: "Legal Officer", image: BASE + "82d0584ff_izhar.jpg" },
  { name: "Danish Haslan", role: "Process Server", image: BASE + "d5d70c728_danish.jpg" },
  { name: "Adiva Alimmin", role: "Paralegal", image: BASE + "030f7f8b1_adivaa.jpg" },
  { name: "Zaim Adli", role: "Paralegal", image: BASE + "60b01d493_zaim.jpg" },
  { name: "Asyraf Ibrahim", role: "Pupil", image: BASE + "8b9e240db_asyraf.jpg" },
].map((p) => ({ role: "Support Staff", ...p }));

export default function RestOfTeam() {
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
            {STAFF.map((p, i) => <LawyerCard key={p.name} lawyer={p} index={i + 6} />)}
          </div>
        </div>
      </div>
    </div>
  );
}