import React from "react";

const APPROACH = [
  {
    word: "Solution-driven",
    desc: "We pursue the most direct path to a lasting resolution — measuring outcomes not by hours billed, but by problems solved.",
  },
  {
    word: "Sustainable",
    desc: "Advice that endures beyond the matter at hand. We build frameworks that protect our clients long after the file closes.",
  },
  {
    word: "Collaborative",
    desc: "Regional counterparts and specialist counsel engaged without ego. The right minds assembled for the right matter.",
  },
];

export default function OurApproach() {
  return (
    <section id="approach" className="relative bg-forest py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-display italic text-gold text-sm">03</span>
          <span className="w-12 h-px bg-gold/40" />
          <span className="text-[11px] tracking-micro uppercase text-mist">Our Approach</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left: heading */}
          <div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-balance">
              How we
              <br />
              <span className="text-stroke-gold">practice.</span>
            </h2>
            <p className="text-mist text-base md:text-lg leading-relaxed mt-10 max-w-md">
              Our work reflects a balance between local responsibility and broader
              legal perspectives — grounded in the rule of law, engaged with the
              region.
            </p>
          </div>

          {/* Right: approach pillars */}
          <div className="space-y-px bg-white/10">
            {APPROACH.map((a, i) => (
              <div key={a.word} className="bg-forest p-8 md:p-10 group">
                <div className="flex items-start gap-8">
                  <span className="font-display italic text-gold/50 text-base pt-1 w-8">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-4xl font-light text-white mb-4 group-hover:text-gold transition-colors duration-500">
                      {a.word}
                    </h3>
                    <p className="text-mist leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grounded in the Rule of Law */}
        <div className="mt-24 md:mt-32 flex flex-col items-center text-center">
          <div className="w-24 h-px bg-gold/40 mb-8" />
          <p className="font-display italic text-2xl md:text-3xl text-mist max-w-2xl leading-relaxed">
            Grounded in the Rule of Law.
          </p>
        </div>
      </div>
    </section>
  );
}