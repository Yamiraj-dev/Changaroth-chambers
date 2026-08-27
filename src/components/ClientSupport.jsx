import React from "react";
import { ScrollText, Scale, ShieldCheck, Landmark } from "lucide-react";

const SERVICES = [
  {
    icon: ScrollText,
    title: "Legal Strategy & Planning",
    desc: "Matter assessment, risk mapping, and a clear path forward defined before action is taken.",
  },
  {
    icon: Landmark,
    title: "Representation & Advocacy",
    desc: "Disciplined representation before courts, tribunals, and arbitral panels — written and oral.",
  },
  {
    icon: Scale,
    title: "Resolution & Recovery",
    desc: "Structured negotiation and enforcement that restores position and recovers value.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk Management",
    desc: "Frameworks that keep clients ahead of regulatory obligation and exposure.",
  },
];

const IMAGE_URL = "https://media.base44.com/images/public/6a905eb7064e9f37b1446f75/350ca1376_generated_image.png";

export default function ClientSupport() {
  return (
    <section id="support" className="relative bg-forest-light py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-display italic text-gold text-sm">04</span>
          <span className="w-12 h-px bg-gold/40" />
          <span className="text-[11px] tracking-micro uppercase text-mist">Client Support</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
          {/* Left: image */}
          <div className="relative min-h-[400px] lg:min-h-[560px] overflow-hidden">
            <img
              src={IMAGE_URL}
              alt="Architectural detail in chiaroscuro light"
              className="w-full h-full object-cover"
            />
            {/* Overlay tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest/30 to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="w-12 h-px bg-gold mb-4" />
              <p className="font-display italic text-white text-lg leading-snug max-w-xs">
                Every matter receives the weight of full attention.
              </p>
            </div>
          </div>

          {/* Right: services list */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight tracking-tight mb-12">
              We carry the matter
              <br />
              <span className="text-gold">end to end.</span>
            </h2>
            <div className="space-y-px bg-white/10">
              {SERVICES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-forest-light p-6 md:p-8 group flex items-start gap-6 hover:bg-forest transition-colors duration-500"
                >
                  <Icon className="w-7 h-7 text-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.25} />
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-light text-white mb-2 group-hover:text-gold transition-colors duration-500">
                      {title}
                    </h3>
                    <p className="text-mist text-sm leading-relaxed max-w-lg">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}