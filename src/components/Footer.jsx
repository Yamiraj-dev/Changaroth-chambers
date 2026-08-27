import React from "react";
import Logo from "@/components/Logo";

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

        {/* Full logo block */}
        <div className="flex justify-center mb-16">
          <Logo variant="full" markClassName="text-gold" />
        </div>

        {/* Massive CC monogram */}
        <div className="flex justify-center mb-12">
          <span className="font-display text-[22vw] md:text-[18vw] lg:text-[15vw] font-light text-stroke-gold leading-none select-none">
            CC
          </span>
        </div>

        {/* Bottom fine print */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-8 border-t border-white/10">
          <div className="text-mist text-xs leading-relaxed max-w-xs">
            Advocates &amp; Solicitors · Appropriate Dispute Resolution
            <br />
            Syariah Counsel · Commissioner for Oaths
            <br />
            Brunei Darussalam
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