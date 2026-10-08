import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function StaffRow({ member, onMove, onDelete, first, last }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-white/10">
      {member.image ? <img src={member.image} alt="" loading="lazy" className="w-12 h-14 object-cover border border-gold/20" /> : <div className="w-12 h-14 bg-forest-light border border-gold/20" />}
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-lg text-hero-cream truncate">{member.name}</h3>
        <p className="text-[10px] tracking-micro uppercase text-gold">{member.role}</p>
      </div>
      <div className="flex items-center gap-4 text-[10px] tracking-micro uppercase">
        <button disabled={first} onClick={() => onMove(-1)} className="text-mist hover:text-gold disabled:opacity-30" aria-label="Move up"><ArrowUp className="w-4 h-4" /></button>
        <button disabled={last} onClick={() => onMove(1)} className="text-mist hover:text-gold disabled:opacity-30" aria-label="Move down"><ArrowDown className="w-4 h-4" /></button>
        <Link to={`/admin/team/edit/${member.id}`} className="text-gold hover:text-gold-light">Edit</Link>
        <button onClick={onDelete} className="text-red-400 hover:text-red-300">Delete</button>
      </div>
    </div>
  );
}