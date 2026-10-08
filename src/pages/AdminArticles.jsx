import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSwitch from "@/components/admin/AdminSwitch";
import { Loader2, Plus } from "lucide-react";
import { base44 } from "@/api/base44Client";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import ArticleRow from "@/components/admin/ArticleRow";

const TABS = [
  { key: "draft", label: "Drafts" },
  { key: "published", label: "Published" },
  { key: "archived", label: "Archive" },
];

export default function AdminArticles() {
  const [articles, setArticles] = useState(null);
  const [tab, setTab] = useState("draft");

  const load = () => base44.entities.Article.list("-updated_date", 500).then(setArticles);
  useEffect(() => { load(); }, []);

  const changeStatus = async (article, status) => {
    const patch = { status };
    if (status === "published" && !article.published_date) patch.published_date = new Date().toISOString();
    await base44.entities.Article.update(article.id, patch);
    load();
  };

  const list = (articles || []).filter((a) => a.status === tab);

  return (
    <PageShell>
      <PageHeader eyebrow="Publishing" title="Articles" description="Write, publish and archive news and blog posts.">
        <div className="flex flex-wrap gap-6 items-center self-start">
          <AdminSwitch />
          <Link to="/admin/new" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-forest text-[10px] tracking-micro uppercase hover:bg-gold-light transition-colors">
            <Plus className="w-3.5 h-3.5" /> New article
          </Link>
        </div>
      </PageHeader>
      <div className="flex gap-8 border-b border-white/10 mb-2">
        {TABS.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`pb-4 -mb-px text-[10px] tracking-micro uppercase border-b transition-colors ${tab === t.key ? "border-gold text-gold" : "border-transparent text-mist hover:text-hero-cream"}`}>
            {t.label} <span className="opacity-60">({(articles || []).filter((a) => a.status === t.key).length})</span>
          </button>
        ))}
      </div>
      {articles === null ? (
        <div className="flex justify-center py-20"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>
      ) : list.length === 0 ? (
        <p className="py-20 text-center text-mist">Nothing here yet.</p>
      ) : (
        list.map((a) => <ArticleRow key={a.id} article={a} onStatus={changeStatus} />)
      )}
    </PageShell>
  );
}