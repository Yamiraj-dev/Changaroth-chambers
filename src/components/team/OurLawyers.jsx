import React from "react";
import LawyerCard from "@/components/team/LawyerCard";
import RestOfTeam from "@/components/team/RestOfTeam";

const BASE = "https://media.base44.com/images/public/6a905eb7064e9f37b1446f75/";
const BIO = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";

// Update each lawyer's role, quote and bio here.
const LAWYERS = [
  {
    name: "Lenny Rahman",
    role: "Principal",
    image: BASE + "f2d16fd32_LR.jpg",
    practice: "Criminal Litigation, Civil Litigation, Commercial, ADR Specialist",
    education: "International Islamic University Malaysia, LLB",
  },
  {
    name: "Miza Musa",
    image: BASE + "911a8ea8e_miza.jpg",
    practice: "Civil Litigation, Debt Recovery, Personal Injury",
    education: "Sultan Sharif Ali Islamic University, LLB & BSL",
  },
  {
    name: "Zunorin Abd Rahman",
    role: "Syarie Counsel",
    image: BASE + "39e478dc1_zunorin.jpg",
    practice: "Syariah Law",
    education: "Sultan Sharif Ali Islamic University, BSL",
  },
  {
    name: "Izzatul Mohaimin",
    image: BASE + "a1afc7841_izzatul.jpg",
    practice: "Civil Litigation",
    education: "Cardiff University, LLB (Hons)",
  },
  {
    name: "Rulzaimi Ramlee",
    image: BASE + "ead667abf_zaimi.jpg",
    practice: "Criminal Litigation, Civil Litigation, Personal Injury",
    education: "The University of Manchester, LLB (Hons)",
  },
  {
    name: "Ahmad Zahid Borhan",
    image: BASE + "60f739837_zahid.jpg",
    practice: "Criminal Litigation, Civil Litigation, Debt Recovery",
    education: "Sultan Sharif Ali Islamic University, LLB & BSL, Minor in ICT",
  },
].map((l) => ({ role: "Associate", bio: l.practice ? "" : BIO, ...l }));

export default function OurLawyers() {
  return (
    <section id="team" className="relative bg-forest-deep py-16 scroll-mt-20 lg:pt-24 lg:pb-10 px-6 md:px-12 lg:min-h-screen lg:flex lg:items-center">
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