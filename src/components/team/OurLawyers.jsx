import React from "react";
import LawyerCard from "@/components/team/LawyerCard";
import RestOfTeam from "@/components/team/RestOfTeam";
import useStaff from "@/hooks/useStaff";

export default function OurLawyers() {
  const { data: staff = [] } = useStaff();
  const lawyers = staff.filter((s) => s.group !== "support");
  const support = staff.filter((s) => s.group === "support");
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
          {lawyers.map((l, i) => <LawyerCard key={l.id} lawyer={l} index={i} />)}
        </div>
        {support.length > 0 && <RestOfTeam staff={support} offset={lawyers.length} />}
      </div>
    </section>
  );
}