import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { base44 } from "@/api/base44Client";
import HomeFeedSection from "@/components/HomeFeedSection";
import FeedThumb from "@/components/FeedThumb";

export default function LatestAnnouncements() {
  const { data: articles = [] } = useQuery({
    queryKey: ["latest-announcements"],
    queryFn: () => base44.entities.Article.filter({ status: "published" }, "-published_date", 3),
  });

  return (
    <HomeFeedSection eyebrow="News & Insights" title="Latest articles." to="/news" cta="Explore more of our articles">
      {articles.length ? articles.map((a) => (
        <Link key={a.id} to={`/news/${a.slug}`} className="group flex gap-5 items-start">
          <FeedThumb src={a.cover_image} alt={a.title} />
          <div className="min-w-0">
            <p className="text-[10px] tracking-micro uppercase text-gold/80">
              {a.published_date && format(new Date(a.published_date), "d MMMM yyyy")}
            </p>
            <h3 className="mt-2 font-display text-xl text-hero-cream leading-snug group-hover:text-gold transition-colors duration-500">{a.title}</h3>
            {a.summary && <p className="mt-2 text-sm text-mist leading-relaxed line-clamp-2">{a.summary}</p>}
          </div>
        </Link>
      )) : <p className="text-mist text-sm">No articles yet.</p>}
    </HomeFeedSection>
  );
}