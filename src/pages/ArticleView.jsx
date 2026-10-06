import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ArrowLeft, Loader2, Share2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Image } from "@/components/ui/image";
import { useToast } from "@/components/ui/use-toast";
import PageShell from "@/components/PageShell";

export default function ArticleView() {
  const { slug } = useParams();
  const { toast } = useToast();
  const [article, setArticle] = useState(undefined);

  useEffect(() => {
    base44.entities.Article.filter({ slug }).then((res) => setArticle(res[0] || null));
  }, [slug]);

  const share = async () => {
    if (navigator.share) return navigator.share({ title: article.title, url: window.location.href });
    await navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied" });
  };

  return (
    <PageShell>
      <Link to="/news" className="inline-flex items-center gap-2 text-[10px] tracking-micro uppercase text-mist hover:text-gold transition-colors mb-12">
        <ArrowLeft className="w-3.5 h-3.5" /> All news
      </Link>
      {article === undefined && <div className="flex justify-center py-32"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>}
      {article === null && <p className="text-center py-32 font-display text-2xl text-hero-cream">Article not found.</p>}
      {article && (
        <motion.article initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            {article.status !== "published" && (
              <span className="inline-block mb-6 px-3 py-1 border border-gold/40 text-[10px] tracking-micro uppercase text-gold">{article.status}</span>
            )}
            <h1 className="font-display text-4xl md:text-6xl font-light text-hero-cream leading-tight text-balance">{article.title}</h1>
            <p className="mt-6 text-[10px] tracking-micro uppercase text-gold/80">
              {article.published_date && format(new Date(article.published_date), "d MMMM yyyy")}
              {article.author_name && <span className="text-mist"> · {article.author_name}</span>}
            </p>
          </div>
          {article.cover_image && (
            <div className="relative aspect-[21/9] border border-gold/15 overflow-hidden mb-16">
              <Image src={article.cover_image} alt={article.title} className="w-full h-full" />
            </div>
          )}
          <div className="max-w-2xl mx-auto">
            {article.summary && <p className="font-display text-xl md:text-2xl text-hero-cream/90 leading-relaxed mb-10">{article.summary}</p>}
            <div className="article-body" dangerouslySetInnerHTML={{ __html: article.body || "" }} />
            <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
              <Link to="/news" className="text-[10px] tracking-micro uppercase text-mist hover:text-gold transition-colors">Back to news</Link>
              <button onClick={share} className="inline-flex items-center gap-2 text-[10px] tracking-micro uppercase text-gold hover:text-gold-light">
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            </div>
          </div>
        </motion.article>
      )}
    </PageShell>
  );
}