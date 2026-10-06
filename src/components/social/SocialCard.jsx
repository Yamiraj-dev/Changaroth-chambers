import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ArrowUpRight, Eye, EyeOff, Instagram, Linkedin } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function SocialCard({ post, index, isAdmin, onToggleHidden }) {
  const Icon = post.platform === "instagram" ? Instagram : Linkedin;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col border border-gold/15 bg-forest/60 hover:border-gold/40 transition-colors duration-500 ${post.hidden ? "opacity-40" : ""}`}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
        <span className="inline-flex items-center gap-2 text-[10px] tracking-micro uppercase text-gold">
          <Icon className="w-3.5 h-3.5" /> {post.platform}
        </span>
        <span className="text-[10px] tracking-micro uppercase text-mist">
          {post.posted_date && format(new Date(post.posted_date), "d MMM yyyy")}
        </span>
      </div>
      {post.image_url && (
        <div className="relative aspect-square overflow-hidden"><Image src={post.image_url} alt="" className="w-full h-full" /></div>
      )}
      <p className="px-5 pt-5 text-sm text-mist leading-relaxed line-clamp-6 whitespace-pre-line flex-1">{post.text}</p>
      <div className="flex items-center justify-between px-5 py-5">
        {post.post_url && (
          <a href={post.post_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] tracking-micro uppercase text-hero-cream hover:text-gold transition-colors">
            View post <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
        {isAdmin && (
          <button onClick={() => onToggleHidden(post)} className="inline-flex items-center gap-1 text-[10px] tracking-micro uppercase text-mist hover:text-gold">
            {post.hidden ? <><Eye className="w-3.5 h-3.5" /> Show</> : <><EyeOff className="w-3.5 h-3.5" /> Hide</>}
          </button>
        )}
      </div>
    </motion.div>
  );
}