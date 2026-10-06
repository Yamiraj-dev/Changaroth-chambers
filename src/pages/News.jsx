import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import ArticleCard from "@/components/news/ArticleCard";
import GoldButton from "@/components/GoldButton";

const PAGE = 9;

export default function News() {
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(PAGE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    base44.entities.Article.filter({ status: "published" }, "-published_date", limit + 1).then((res) => {
      setArticles(res);
      setLoading(false);
    });
  }, [limit]);

  const visible = articles.slice(0, limit);

  return (
    <PageShell>
      <PageHeader
        eyebrow="News & Insights"
        title="From the Chambers"
        description="Announcements, legal insights and publications from Changaroth Chambers."
      />
      {!loading && visible.length === 0 && (
        <p className="text-mist text-center py-24 font-display text-xl">No articles have been published yet.</p>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {visible.map((a, i) => <ArticleCard key={a.id} article={a} index={i} />)}
      </div>
      <div className="flex justify-center mt-20">
        {loading ? (
          <Loader2 className="w-6 h-6 text-gold animate-spin" />
        ) : articles.length > limit && (
          <GoldButton onClick={() => setLimit(limit + PAGE)}>Load older articles</GoldButton>
        )}
      </div>
    </PageShell>
  );
}