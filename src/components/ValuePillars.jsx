import React, { useRef } from "react";

const VALUES = [
  {
    title: "Advocates & Solicitors",
    desc: "Licensed practitioners representing clients before all courts and tribunals with rigorous preparation and disciplined advocacy.",
  },
  {
    title: "Appropriate Dispute Resolution",
    desc: "Specialists in appropriate dispute resolution — mediation, arbitration, and negotiation as principled alternatives to litigation.",
  },
  {
    title: "Syariah Counsel",
    desc: "Advising on matters of Syariah and Islamic law with scholarly depth and practical sensitivity to personal and commercial contexts.",
  },
  {
    title: "Commissioner for Oaths",
    desc: "Commissioned to administer oaths, affirmations, and statutory declarations with full legal authority and discretion.",
  },
];

const ATTRIBUTES = [
  { word: "Grounded", note: "Reflected in Brunei's legal system." },
  { word: "Connected", note: "ESG Asia Pacific Alliance." },
  { word: "Collaborative", note: "Cross-border engagement." },
  { word: "Solution-driven", note: "A practical, measured approach." },
  { word: "Trusted", note: "Integrity and discretion." },
];

export default function ValuePillars() {
  const sectionRef = useRef(null);

  return (
    <section id="values" ref={sectionRef} className="relative bg-forest bg-grain py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-display italic text-gold text-sm">01</span>
          <span className="w-12 h-px bg-gold/40" />
          <span className="text-[11px] tracking-micro uppercase text-mist">We Are</span>
        </div>

        {/* Heading — monolithic serif */}
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-balance mb-20 md:mb-32">
          A firm defined by
          <br />
          <span className="text-stroke-gold">discipline</span>, not decoration.
        </h2>

        {/* Two-column: professions on left, attributes on right */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 lg:gap-24">
          {/* Professions list */}
          <div className="space-y-8">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t border-white/10 pt-6">
                <h3 className="font-display text-xl md:text-2xl font-medium text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-mist text-sm md:text-base leading-relaxed max-w-md">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Attributes — the five pillars */}
          <div className="lg:pl-12 lg:border-l border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
              {ATTRIBUTES.map((a, i) => (
                <div
                  key={a.word}
                  className="bg-forest p-8 md:p-10 group hover:bg-forest-light transition-colors duration-500"
                >
                  <span className="font-display italic text-gold/50 text-sm block mb-6">
                    0{i + 1}
                  </span>
                  <h4 className="font-display text-3xl md:text-4xl font-light text-white mb-3 group-hover:text-gold transition-colors duration-500">
                    {a.word}
                  </h4>
                  <p className="text-mist text-sm leading-relaxed">{a.note}</p>
                </div>
              ))}
              {/* Filler tile */}
              <div className="bg-forest p-8 md:p-10 flex items-end">
                <p className="font-display italic text-mist/50 text-lg leading-snug">
                  Grounded in the
                  <br />
                  rule of law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}