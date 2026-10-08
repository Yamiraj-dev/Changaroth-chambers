import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NavMark from "@/components/NavMark";
import useCurrentUser from "@/hooks/useCurrentUser";

const NAV_ITEMS = [
  { label: "Home", to: "/home" },
  { label: "Areas of Practice", to: "#practices" },
  { label: "How We Practice", to: "#approach" },
  { label: "Our Lawyers", to: "#team" },
  { label: "Client Support", to: "#support" },
  { label: "Contact", to: "#contact" },
  { label: "News", to: "/news" },
  { label: "Events", to: "/events" },
  { label: "Social", to: "/social" },
];

export default function CurtainNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAdmin } = useCurrentUser();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleNav = (to) => {
    setOpen(false);
    setTimeout(() => {
      const onHome = pathname === "/" || pathname === "/home";
      if (to === "/home" && onHome) { navigate("/home"); return window.scrollTo({ top: 0, behavior: "smooth" }); }
      if (to.startsWith("/")) return navigate(to);
      if (!onHome) return navigate("/home" + to);
      const el = document.querySelector(to);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-4 bg-forest/80 backdrop-blur-md" : "py-6 bg-transparent"
        }`}
      >
        <div className="px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" onClick={(e) => { e.preventDefault(); handleNav("/home"); }} className="group flex items-center gap-3 text-white group-hover:text-gold transition-colors">
            <NavMark />
          </Link>

          {/* Menu trigger — two gold lines */}
          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 text-mist hover:text-gold transition-colors"
            aria-label="Open menu"
          >
            <span className="text-base md:text-lg font-medium tracking-micro uppercase">Menu</span>
            <span className="flex flex-col gap-[5px]">
              <span className="block w-8 h-px bg-gold group-hover:w-10 transition-all duration-300" />
              <span className="block w-6 h-px bg-gold group-hover:w-10 transition-all duration-300" />
            </span>
          </button>
        </div>
      </header>

      {/* Curtain overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-forest-deep transition-transform duration-[600ms] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        {/* Close trigger */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 md:right-12 group flex items-center gap-3 text-mist hover:text-gold transition-colors"
          aria-label="Close menu"
        >
          <span className="text-[10px] tracking-micro uppercase">Close</span>
          <span className="relative w-8 h-8 flex items-center justify-center">
            <span className="absolute w-8 h-px bg-gold rotate-45" />
            <span className="absolute w-8 h-px bg-gold -rotate-45" />
          </span>
        </button>

        {/* Nav links */}
        <nav className="h-full flex flex-col justify-center px-6 md:px-24 max-w-[1600px] mx-auto">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNav(item.to)}
                  className="group flex items-baseline gap-6 md:gap-10 text-left"
                >
                  <span className="font-display italic text-gold/60 text-sm md:text-base tabular-nums w-8">
                    0{i + 1}
                  </span>
                  <span className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-white group-hover:text-gold group-hover:translate-x-4 transition-all duration-500 tracking-tight">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Footer line */}
          <div className="mt-16 flex items-center gap-4">
            <span className="w-12 h-px bg-gold/40" />
            <span className="text-[10px] tracking-micro uppercase text-mist">
              Rights Respected, Disputes Resolved.
            </span>
            {isAdmin && (
              <button onClick={() => handleNav("/admin")} className="ml-auto text-[10px] tracking-micro uppercase text-gold hover:text-gold-light">
                Publishing
              </button>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}