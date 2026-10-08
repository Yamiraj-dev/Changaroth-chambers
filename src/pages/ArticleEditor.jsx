import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import PageShell from "@/components/PageShell";
import GoldButton from "@/components/GoldButton";
import CoverUpload from "@/components/admin/CoverUpload";
import RichEditor from "@/components/admin/RichEditor";

const slugify = (t) =>
  `${t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60)}-${Math.random().toString(36).slice(2, 6)}`;

const fieldClass = "w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-hero-cream placeholder:text-mist/50 transition-colors";

export default function ArticleEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", summary: "", cover_image: "", body: "", published_date: "" });
  const [existing, setExisting] = useState(null);
  const [loading, setLoading] = useState(!!id);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    base44.entities.Article.get(id).then((a) => {
      setExisting(a);
      setForm({ title: a.title || "", summary: a.summary || "", cover_image: a.cover_image || "", body: a.body || "", published_date: a.published_date ? a.published_date.slice(0, 10) : "" });
      setLoading(false);
    });
  }, [id]);

  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

  const save = async (status) => {
    setSaving(true);
    const data = { ...form, status };
    if (form.published_date) data.published_date = new Date(`${form.published_date}T12:00:00`).toISOString();
    else if (status === "published") data.published_date = new Date().toISOString();
    else delete data.published_date;
    if (existing) {
      await base44.entities.Article.update(existing.id, data);
    } else {
      const me = await base44.auth.me();
      await base44.entities.Article.create({ ...data, slug: slugify(form.title), author_name: me.full_name });
    }
    navigate("/admin");
  };

  const status = existing?.status || "draft";

  return (
    <PageShell>
      <Link to="/admin" className="inline-flex items-center gap-2 text-[10px] tracking-micro uppercase text-mist hover:text-gold mb-10">
        <ArrowLeft className="w-3.5 h-3.5" /> All articles
      </Link>
      {loading ? (
        <div className="flex justify-center py-24"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>
      ) : (
        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-[10px] tracking-micro uppercase text-gold">{existing ? `Editing · ${status}` : "New article"}</p>
          <input value={form.title} onChange={(e) => set("title")(e.target.value)} placeholder="Article title" className={`${fieldClass} font-display text-3xl md:text-4xl`} />
          <textarea value={form.summary} onChange={(e) => set("summary")(e.target.value)} placeholder="Short summary shown on the news page" rows={2} className={`${fieldClass} resize-none`} />
          <label className="block">
            <span className="text-[10px] tracking-micro uppercase text-gold">Article date (defaults to publish day)</span>
            <input type="date" value={form.published_date} onChange={(e) => set("published_date")(e.target.value)} className={`${fieldClass} [color-scheme:dark]`} />
          </label>
          <CoverUpload value={form.cover_image} onChange={set("cover_image")} />
          <RichEditor value={form.body} onChange={set("body")} />
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
            {status === "draft" && <GoldButton disabled={saving || !form.title} onClick={() => save("draft")}>Save draft</GoldButton>}
            <GoldButton solid disabled={saving || !form.title} onClick={() => save(status === "draft" ? "published" : status)}>
              {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              {status === "draft" ? "Publish" : "Save changes"}
            </GoldButton>
            {status === "published" && <GoldButton disabled={saving} onClick={() => save("archived")}>Archive</GoldButton>}
            {status === "archived" && <GoldButton disabled={saving} onClick={() => save("published")}>Restore to published</GoldButton>}
          </div>
        </div>
      )}
    </PageShell>
  );
}