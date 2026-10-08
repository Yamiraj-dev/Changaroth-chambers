import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { base44 } from "@/api/base44Client";
import { Image } from "@/components/ui/image";

export default function LatestAnnouncements() {
  const { data: articles = [] } = useQuery({
    queryKey: ["latest-announcements"],
    queryFn: () => base44.entities.Article.filter({ status: "published" }, "-published_date", 3),
  });

  if (!articles.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16 pb-12 border-b border-white/10">
      {articles.map((a) => (
        <Link key={a.id} to={`/news/${a.slug}`} className="group block">
          {a.cover_image && (
            <div className="relative aspect-[16/10] mb-5 border border-gold/15 bg-forest-light">
              <img src={a.cover_image} alt={a.title} className="absolute inset-0 w-full h-full object-contain" />
            </div>
          )}
          <p className="text-[10px] tracking-micro uppercase text-gold/80">
            {a.published_date && format(new Date(a.published_date), "d MMMM yyyy")}
          </p>
          <h3 className="mt-2 font-display text-xl text-hero-cream leading-snug group-hover:text-gold transition-colors duration-500">{a.title}</h3>
          {a.summary && <p className="mt-2 text-sm text-mist leading-relaxed line-clamp-3">{a.summary}</p>}
        </Link>
      ))}
      <div className="md:col-span-3 flex justify-center pt-4">
        <Link to="/news" className="group inline-flex items-center gap-3 border border-gold px-7 py-3 hover:bg-gold transition-all duration-500">
          <span className="text-[10px] tracking-micro uppercase text-gold group-hover:text-forest transition-colors duration-500">Explore more of our articles</span>
          <span className="w-6 h-px bg-gold group-hover:bg-forest transition-all duration-500" />
        </Link>
      </div>
    </div>
  );
}