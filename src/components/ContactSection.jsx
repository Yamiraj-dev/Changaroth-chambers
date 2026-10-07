import React, { useState } from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", matter: "", contact: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.matter || !form.contact || sending) return;
    setSending(true);
    setError("");
    try {
      await base44.functions.invoke("requestConsultation", form);
    } catch (err) {
      setError("Could not send your request. Please try again or email us directly.");
      setSending(false);
      return;
    }
    setSending(false);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", matter: "", contact: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative bg-forest py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Gilded thread */}
      <div className="absolute top-0 left-0 right-0 h-px gilded-line opacity-30" />

      <div className="max-w-[1600px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-display italic text-gold text-sm">05</span>
          <span className="w-12 h-px bg-gold/40" />
          <span className="text-[11px] tracking-micro uppercase text-mist">Contact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left: The Firm's Promise */}
          <div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-balance mb-12">
              Begin a
              <br />
              <span className="text-gold">conversation.</span>
            </h2>
            <p className="text-mist text-lg leading-relaxed max-w-md mb-12">
              Every engagement begins with a confidential consultation. Tell us
              the matter — we will tell you the path. No obligation, no pressure.
            </p>

            {/* Contact details */}
            <div className="space-y-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-[10px] tracking-micro uppercase text-gold mb-1">Address</p>
                <p className="text-white text-sm leading-relaxed">
                  Units 6 &amp; 7, Second Floor, Simpang 13-25
                  <br />
                  The Airport Mall, Jln Komersial Jaya Setia
                  <br />
                  Mukim Berakas A, Bandar Seri Begawan BB2713
                  <br />
                  Brunei Darussalam
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div>
                  <p className="text-[10px] tracking-micro uppercase text-gold mb-1">Telephone</p>
                  <a href="tel:+6732220000" className="text-white text-sm hover:text-gold transition-colors">+673 8329181

                  </a>
                </div>
                <div>
                  <p className="text-[10px] tracking-micro uppercase text-gold mb-1">Email</p>
                  <a href="mailto:chambers@changaroth.bn" className="text-white text-sm hover:text-gold transition-colors">resolve@changarothchambersbn.com

                  </a>
                </div>
              </div>
              <div>
                <p className="text-[10px] tracking-micro uppercase text-gold mb-2">Office Hours</p>
                <div className="text-mist text-sm grid grid-cols-[max-content_1fr] gap-x-6 gap-y-1">
                  <span>Mon – Thu</span><span>8:30 — 16:30</span>
                  <span>Fri</span><span>8:30 — 16:30 (closed for Friday prayers)</span>
                  <span>Sat — Sun</span><span>Closed</span>
                </div>
              </div>
              {/* Social */}
              <div className="flex items-center gap-5 pt-2">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/changarothchambers_bn", label: "Instagram" },
                  { Icon: Linkedin, href: "https://bn.linkedin.com/company/changarothchambersbrunei", label: "LinkedIn" },
                ].map(({ Icon, href, label }) =>
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-mist hover:text-gold transition-colors" aria-label={label}>
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Inquiry Terminal — gold underlines, no boxes */}
          <div className="lg:pl-8">
            <form onSubmit={handleSubmit} className="space-y-12 pt-2">
              <p className="text-[10px] tracking-micro uppercase text-mist mb-8">
                Request a Consultation
              </p>

              {/* Name */}
              <div className="group">
                <label className="block text-[10px] tracking-micro uppercase text-gold mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-white/20 pb-3 text-white text-lg font-display font-light focus:outline-none focus:border-gold transition-colors placeholder:text-mist/40"
                  placeholder="Your full name" />
                
              </div>

              {/* Matter */}
              <div className="group">
                <label className="block text-[10px] tracking-micro uppercase text-gold mb-3">
                  The Matter
                </label>
                <input
                  type="text"
                  name="matter"
                  value={form.matter}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-white/20 pb-3 text-white text-lg font-display font-light focus:outline-none focus:border-gold transition-colors placeholder:text-mist/40"
                  placeholder="Briefly, the nature of your matter" />
                
              </div>

              {/* Contact */}
              <div className="group">
                <label className="block text-[10px] tracking-micro uppercase text-gold mb-3">
                  Contact
                </label>
                <input
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-white/20 pb-3 text-white text-lg font-display font-light focus:outline-none focus:border-gold transition-colors placeholder:text-mist/40"
                  placeholder="Email or telephone" />
                
              </div>

              {/* Submit — full-width gold bar */}
              <button
                type="submit"
                className="group relative w-full py-5 border border-gold overflow-hidden transition-all duration-500 mt-4">
                
                <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative font-display text-lg text-gold group-hover:text-forest transition-colors duration-500 tracking-wide">
                  {sent ? "Request Received" : sending ? "Sending..." : "Request Consultation"}
                </span>
              </button>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <p className="text-mist/60 text-xs leading-relaxed max-w-sm">
                This website is intended for informational purposes only and does
                not constitute legal advice. Submission of this form does not
                create a solicitor–client relationship.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>);

}