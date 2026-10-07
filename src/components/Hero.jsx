import React, { useEffect, useState } from "react";
import HeroWordmark from "@/components/HeroWordmark";
import HeroAtmosphere from "@/components/HeroAtmosphere";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[560px] md:h-screen md:min-h-[700px] w-full overflow-hidden bg-forest-deep flex items-start md:items-center justify-center"
    >
      <HeroAtmosphere />

      {/* Faint grain */}
      <div className="absolute inset-0 bg-grain opacity-40" />

      {/* Stacked wordmark, centered as the hero mark */}
      <h1 className="absolute left-0 right-0 top-1/2 -translate-y-1/2 md:relative md:top-auto md:translate-y-0 z-20 md:-mt-10 flex items-center justify-center">
        <HeroWordmark mounted={mounted} />
        <span className="sr-only">Changaroth Chambers — Brunei Darussalam</span>
      </h1>

      {/* Top-left micro label */}
      <div className={`absolute top-24 left-6 md:left-12 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "400ms" }}>
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-gold/50" />
          <span className="text-[10px] tracking-micro uppercase text-mist">Est. Brunei Darussalam</span>
        </div>
      </div>

      {/* Bottom content */}
      <div className={`absolute bottom-10 md:bottom-16 left-0 right-0 px-6 md:px-12 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "600ms" }}>
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Tagline */}
          <div className="max-w-xl">
            <p className="font-display text-2xl md:text-3xl font-light text-white leading-snug">
              Rights Respected,
              <br />
              <span className="text-gold">Disputes Resolved.</span>
            </p>
          </div>

          {/* Intro paragraph + CTA */}
          <div className="max-w-md md:text-right">
            <p className="text-mist text-sm md:text-base leading-relaxed">
              Grounded in Brunei's legal tradition and committed to the rule of law,
              we engage in professional collaboration with regional counterparts to
              support ethical practice, legal development, and knowledge sharing.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-30 transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "1000ms" }}>
        <button
          onClick={() => document.querySelector("#practices")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-2 animate-bounce text-gold hover:text-gold-light transition-colors"
          aria-label="Scroll to explore"
        >
          <span className="text-[11px] font-medium tracking-micro uppercase">Scroll to Explore</span>
          <span className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
        </button>
      </div>
    </section>
  );
}