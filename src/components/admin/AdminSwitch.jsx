import React from "react";
import { NavLink } from "react-router-dom";

const ITEMS = [
  { to: "/admin", label: "News & Articles" },
  { to: "/admin/events", label: "Events" },
  { to: "/admin/team", label: "Team" },
];

export default function AdminSwitch() {
  return (
    <div className="inline-flex border border-gold/40">
      {ITEMS.map((i) => (
        <NavLink
          key={i.to}
          to={i.to}
          end
          className={({ isActive }) =>
            `px-5 py-3 text-[10px] tracking-micro uppercase transition-colors ${isActive ? "bg-gold/15 text-gold" : "text-mist hover:text-gold"}`
          }
        >
          {i.label}
        </NavLink>
      ))}
    </div>
  );
}