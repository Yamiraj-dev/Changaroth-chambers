import React from "react";
import LawyerCard from "@/components/team/LawyerCard";
import RestOfTeam from "@/components/team/RestOfTeam";

const BASE = "https://media.base44.com/images/public/6a905eb7064e9f37b1446f75/";
const BIO = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
const QUOTE = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// Update each lawyer's role, quote and bio here.
const LAWYERS = [
  { name: "Lenny Rahman", role: "Principal", image: BASE + "f2d16fd32_LR.jpg" },
  { name: "Miza Musa", image: BASE + "911a8ea8e_miza.jpg" },
  { name: "Zunorin Rahman", role: "Syarie Counsel", image: BASE + "39e478dc1_zunorin.jpg" },
  { name: "Izzatul Mohaimin", image: BASE + "a1afc7841_izzatul.jpg" },
  { name: "Rulzaimi Ramlee", image: BASE + "ead667abf_zaimi.jpg" },
  { name: "Ahmad Zahid Borhan", image: BASE + "60f739837_zahid.jpg" },
].map((l) => ({ role: "Associate", quote: QUOTE, bio: BIO, ...l }));

export default function OurLawyers() {
  return (
    <section id="team" className="relative bg-forest-deep py-24 lg:py-16 px-6 md:px-12 lg:min-h-screen lg:flex lg:items-center">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display italic text-gold text-sm">—</span>
          <span className="w-12 h-px bg-gold/40" />
          <span className="text-[11px] tracking-micro uppercase text-mist">Our Lawyers</span>
        </div>
        <h2 className="font-display text-5xl md:text-6xl font-light leading-[1.05] tracking-tight mb-10">
          The people behind <span className="text-gold">the practice.</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
          {LAWYERS.map((l, i) => <LawyerCard key={l.name} lawyer={l} index={i} />)}
        </div>
        <RestOfTeam />
      </div>
    </section>
  );
}