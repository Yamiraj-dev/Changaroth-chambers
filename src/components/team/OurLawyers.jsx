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
  {
    name: "Izzatul Mohaimin",
    image: BASE + "a1afc7841_izzatul.jpg",
    practice: "Civil Litigation",
    education: "Cardiff University",
    bio: "Called to the Bar by the Honourable Society of Middle Temple in November 2023 and admitted as an Advocate and Solicitor of the Supreme Court of Brunei Darussalam in February 2025.",
  },
  { name: "Rulzaimi Ramlee", image: BASE + "ead667abf_zaimi.jpg" },
  { name: "Ahmad Zahid Borhan", image: BASE + "60f739837_zahid.jpg" },
].map((l) => ({ role: "Associate", quote: QUOTE, bio: BIO, ...l }));

export default function OurLawyers() {
  return (
    <section id="team" className="relative bg-forest-deep py-24 lg:pt-24 lg:pb-10 px-6 md:px-12 lg:min-h-screen lg:flex lg:items-center">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-4 mb-8 lg:mb-4">
          <span className="font-display italic text-gold text-sm">03</span>
          <span className="w-12 h-px bg-gold/40" />
          <span className="text-[11px] tracking-micro uppercase text-mist">Our Lawyers</span>
        </div>
        <h2 className="font-display text-5xl md:text-6xl lg:text-5xl font-light leading-[1.05] tracking-tight mb-10 lg:mb-8">
          The people behind <span className="text-gold">the practice.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-8">
          {LAWYERS.map((l, i) => <LawyerCard key={l.name} lawyer={l} index={i} />)}
        </div>
        <RestOfTeam />
      </div>
    </section>
  );
}