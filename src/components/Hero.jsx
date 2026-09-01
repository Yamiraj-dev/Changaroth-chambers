import React, { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";

export default function Hero() {
  const ref = useRef(null);
  const [glowY, setGlowY] = useState(50);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  // Mouse-move gilded glow follows cursor Y
  const handleMouse = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowY(Math.max(10, Math.min(90, y)));
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouse}
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-forest-deep flex items-center justify-center"
    >
      {/* Radial glow following cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at 50% ${glowY}%, rgba(212,175,55,0.10), transparent 60%)`,
        }}
      />

      {/* Faint grain */}
      <div className="absolute inset-0 bg-grain opacity-40" />

      {/* Official logo, centered as the hero mark */}
      <h1
        className={`relative z-20 flex items-center justify-center transition-all duration-[1200ms] ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <Logo variant="hero" />
        <span className="sr-only">Changaroth Chambers</span>
      </h1>

      {/* Top-left micro label */}
      <div className={`absolute top-52 md:top-32 left-6 md:left-12 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "400ms" }}>
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
              Locally Rooted —
              <br />
              <span className="text-gold">Regionally Connected.</span>
            </p>
          </div>

          {/* Intro paragraph + CTA */}
          <div className="max-w-md md:text-right">
            <p className="text-mist text-sm md:text-base leading-relaxed mb-6">
              Grounded in Brunei's legal tradition and committed to the rule of law,
              we engage in professional collaboration with regional counterparts to
              support ethical practice, legal development, and knowledge sharing.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector("#values");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-3 border border-gold px-7 py-3 hover:bg-gold transition-all duration-500"
            >
              <span className="text-[10px] tracking-micro uppercase text-gold group-hover:text-forest transition-colors duration-500">
                Learn More
              </span>
              <span className="w-6 h-px bg-gold group-hover:w-10 group-hover:bg-forest transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${mounted ? "opacity-60" : "opacity-0"}`} style={{ transitionDelay: "1000ms" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-micro uppercase text-mist">Scroll</span>
          <span className="w-px h-8 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}