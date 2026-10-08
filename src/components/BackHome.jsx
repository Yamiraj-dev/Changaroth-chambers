import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackHome() {
  return (
    <Link to="/home" className="group flex w-fit items-center gap-3 mb-6 text-mist hover:text-gold transition-colors">
      <ArrowLeft className="w-4 h-4 text-gold group-hover:-translate-x-1 transition-transform" />
      <span className="text-[11px] tracking-micro uppercase">Back to home</span>
    </Link>
  );
}