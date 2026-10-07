import React from "react";
import HeroWordmark from "@/components/HeroWordmark";
import { Link } from "react-router-dom";

const AFFILIATIONS = [
  { name: "Changaroth Chambers LLC", href: "https://www.changarothchambers.com", logo: "https://www.changarothchambers.com/img/logo.png" },
  { name: "Commonwealth Lawyers Association", href: "https://www.commonwealthlawyers.com/", logo: "https://www.commonwealthlawyers.com/wp-content/uploads/2022/02/cla-logo.svg" },
];

export default function Footer() {
  return (
    <footer className="relative bg-forest-deep pt-24 md:pt-32 pb-10 px-6 md:px-12 overflow-hidden border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        {/* Announcements strip */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-20 md:mb-32 pb-12 border-b border-white/10">
          <div>
            <p className="text-[10px] tracking-micro uppercase text-gold mb-2">
              Announcements, Insights and Publications
            </p>
            <p className="font-display text-2xl md:text-3xl font-light text-white">
              For future announcements of events and publications.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-3 text-mist hover:text-gold transition-colors self-start"
          >
            <span className="text-[10px] tracking-micro uppercase">Subscribe</span>
            <span className="w-10 h-px bg-gold group-hover:w-16 transition-all duration-500" />
          </button>
        </div>

        {/* Landing logo */}
        <div className="flex justify-center mb-16">
          <HeroWordmark mounted />
        </div>

        {/* Affiliations */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-[10px] tracking-micro uppercase text-gold mb-6">Affiliations</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {AFFILIATIONS.map((a) => (
              <a
                key={a.name}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={a.name}
                className="flex items-center justify-center bg-hero-cream px-6 py-4 w-48 h-24 border border-gold/20 hover:border-gold transition-colors"
              >
                <img src={a.logo} alt={a.name} className="max-h-full max-w-full object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom fine print */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-8 border-t border-white/10">
          <div className="text-mist text-xs leading-relaxed max-w-xs">
            Advocates &amp; Solicitors · Appropriate Dispute Resolution
            <br />
            Syariah Counsel · Commissioner for Oaths
            <br />
            Brunei Darussalam
            <div className="mt-4 flex gap-6">
              <Link to="/about" className="text-gold hover:text-gold-light uppercase tracking-micro text-[11px]">About</Link>
              <Link to="/contact" className="text-gold hover:text-gold-light uppercase tracking-micro text-[11px]">Contact</Link>
            </div>
          </div>
          <div className="text-mist text-xs leading-relaxed text-right">
            © {new Date().getFullYear()} Changaroth Chambers. All rights reserved.
            <br />
            <span className="text-mist/60">
              This website is intended for informational purposes only.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}