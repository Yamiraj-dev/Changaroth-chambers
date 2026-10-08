import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Image } from "@/components/ui/image";

export default function ArticleCard({ article, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/news/${article.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden border border-gold/15 bg-forest-light">
          {article.cover_image ? (
            <Image src={article.cover_image} alt={article.title} fittingType="fit" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center font-display text-6xl text-stroke-gold opacity-40">CC</div>
          )}
        </div>
        <div className="pt-6">
          <p className="text-[10px] tracking-micro uppercase text-gold/80">
            {article.published_date ? format(new Date(article.published_date), "d MMMM yyyy") : "Unpublished"}
            {article.author_name && <span className="text-mist"> · {article.author_name}</span>}
          </p>
          <h2 className="mt-3 font-display text-2xl text-hero-cream leading-snug group-hover:text-gold transition-colors duration-500">
            {article.title}
          </h2>
          {article.summary && <p className="mt-3 text-sm text-mist leading-relaxed line-clamp-3">{article.summary}</p>}
          <span className="mt-5 inline-flex items-center gap-3 text-[10px] tracking-micro uppercase text-gold">
            Read <span className="w-6 h-px bg-gold group-hover:w-10 transition-all duration-500" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}