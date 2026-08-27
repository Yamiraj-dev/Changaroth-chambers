import React from "react";

const PRACTICES = [
  {
    n: "01",
    title: "Appropriate Dispute Resolution",
    items: [
      "Mediation & structured negotiation",
      "Arbitration (domestic & international)",
      "Early neutral evaluation",
      "Conciliation and expert determination",
    ],
  },
  {
    n: "02",
    title: "Litigation — Civil & Criminal",
    items: [
      "Commercial & civil disputes",
      "Criminal defence and advocacy",
      "Appellate practice",
      "Enforcement of judgments",
    ],
  },
  {
    n: "03",
    title: "General Counsel",
    items: [
      "Corporate & commercial advisory",
      "Contract drafting and review",
      "Regulatory compliance",
      "Governance and risk management",
    ],
  },
  {
    n: "04",
    title: "Syariah",
    items: [
      "Islamic finance structuring",
      "Family & personal status matters",
      "Wakaf and estate planning",
      "Syariah-compliant transactions",
    ],
  },
];

export default function PracticeGrid() {
  return (
    <section id="practices" className="relative bg-forest-deep py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-display italic text-gold text-sm">02</span>
          <span className="w-12 h-px bg-gold/40" />
          <span className="text-[11px] tracking-micro uppercase text-mist">Main Practices</span>
        </div>

        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-balance mb-16 md:mb-24">
          Four pillars of
          <br />
          <span className="text-stroke-gold">practice.</span>
        </h2>

        {/* Asymmetrical 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {PRACTICES.map((p) => (
            <div
              key={p.n}
              className="group bg-forest-deep p-8 md:p-10 hover:bg-forest-light transition-colors duration-500 relative cursor-pointer"
            >
              {/* Gold top border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gold/30 group-hover:bg-gold transition-colors duration-500" />

              <span className="font-display italic text-gold text-lg block mb-12 transition-transform duration-500 group-hover:-translate-y-2">
                {p.n}
              </span>

              <h3 className="font-display text-2xl md:text-[26px] font-light text-white mb-6 leading-tight group-hover:text-gold transition-colors duration-500">
                {p.title}
              </h3>

              <div className="h-px w-8 bg-gold/30 mb-6 group-hover:w-16 transition-all duration-500" />

              <ul className="space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-mist text-sm leading-relaxed">
                    <span className="text-gold/50 mt-1.5 block w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}