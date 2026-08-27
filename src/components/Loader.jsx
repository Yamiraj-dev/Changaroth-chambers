import React, { useState, useEffect } from "react";
import Logo from "@/components/Logo";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 2400;

    const tick = (now) => {
      const elapsed = now - start;
      // Ease-out curve, never quite linear — feels weighty then resolves
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.floor(eased * 100);
      setProgress(value);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => onComplete && onComplete(), 600);
        }, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-forest flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Gilded thread growing with progress */}
      <div className="absolute top-0 left-0 right-0 h-px bg-forest-light">
        <div
          className="h-full bg-gradient-to-r from-gold via-gold-light to-gold transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Infinity-loop mark */}
      <div className="mb-8 animate-fade-in">
        <Logo variant="mark" markClassName="h-10 w-20 text-gold" />
      </div>

      {/* Monogram */}
      <div className="relative mb-8">
        <span className="font-display text-6xl md:text-8xl font-light tracking-tight text-stroke-gold animate-fade-in">
          CC
        </span>
      </div>

      {/* Micro label */}
      <p className="text-mist text-[11px] tracking-micro uppercase mb-8 animate-fade-in">
        Changaroth Chambers · Brunei Darussalam
      </p>

      {/* Counter */}
      <div className="flex items-baseline gap-1">
        <span className="font-display text-5xl md:text-6xl font-light text-white tabular-nums">
          {progress}
        </span>
        <span className="font-display text-2xl text-gold">%</span>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-px bg-gold/40" />
    </div>
  );
}