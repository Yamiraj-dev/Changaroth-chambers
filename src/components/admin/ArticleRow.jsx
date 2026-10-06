import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function ArticleRow({ article, onStatus }) {
  const date = article.published_date || article.updated_date;
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 py-6 border-b border-white/10">
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-xl text-hero-cream truncate">{article.title}</h3>
        <p className="mt-1 text-xs text-mist">
          {article.author_name || "—"} · {date ? format(new Date(date), "d MMM yyyy") : ""}
        </p>
      </div>
      <div className="flex flex-wrap gap-5 text-[10px] tracking-micro uppercase">
        <Link to={`/admin/edit/${article.id}`} className="text-gold hover:text-gold-light">Edit</Link>
        {article.slug && <Link to={`/news/${article.slug}`} className="text-mist hover:text-gold">View</Link>}
        {article.status === "draft" && <button onClick={() => onStatus(article, "published")} className="text-mist hover:text-gold">Publish</button>}
        {article.status === "published" && <button onClick={() => onStatus(article, "archived")} className="text-mist hover:text-gold">Archive</button>}
        {article.status === "archived" && <button onClick={() => onStatus(article, "published")} className="text-mist hover:text-gold">Restore</button>}
      </div>
    </div>
  );
}