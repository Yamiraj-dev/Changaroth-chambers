import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import PageShell from "@/components/PageShell";
import GoldButton from "@/components/GoldButton";
import PosterUpload from "@/components/admin/PosterUpload";
import GalleryUpload from "@/components/admin/GalleryUpload";

const fieldClass = "w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-hero-cream placeholder:text-mist/50 transition-colors";

export default function EventEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ title: "", event_date: "", poster_url: "", poster_type: "", gallery: [] });
  const [existing, setExisting] = useState(null);
  const [loading, setLoading] = useState(!!id);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    base44.entities.Event.get(id).then((e) => {
      setExisting(e);
      setForm({ title: e.title || "", event_date: e.event_date || "", poster_url: e.poster_url || "", poster_type: e.poster_type || "", gallery: e.gallery || [] });
      setLoading(false);
    });
  }, [id]);

  const setPoster = useCallback((poster_url, poster_type) => setForm((f) => ({ ...f, poster_url, poster_type })), []);

  const save = async (status) => {
    setSaving(true);
    const data = { ...form, status };
    if (!data.poster_type) delete data.poster_type;
    if (existing) await base44.entities.Event.update(existing.id, data);
    else await base44.entities.Event.create(data);
    queryClient.invalidateQueries();
    navigate("/admin/events");
  };

  const status = existing?.status || "draft";

  return (
    <PageShell>
      <Link to="/admin/events" className="inline-flex items-center gap-2 text-[10px] tracking-micro uppercase text-mist hover:text-gold mb-10">
        <ArrowLeft className="w-3.5 h-3.5" /> All events
      </Link>
      {loading ? (
        <div className="flex justify-center py-24"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>
      ) : (
        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-[10px] tracking-micro uppercase text-gold">{existing ? `Editing · ${status}` : "New event"}</p>
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Event title" className={`${fieldClass} font-display text-3xl md:text-4xl`} />
          <label className="block">
            <span className="text-[10px] tracking-micro uppercase text-gold">Event date</span>
            <input type="date" value={form.event_date} onChange={(e) => setForm({ ...form, event_date: e.target.value })} className={`${fieldClass} [color-scheme:dark]`} />
          </label>
          <PosterUpload value={form.poster_url} type={form.poster_type} onChange={setPoster} />
          <GalleryUpload value={form.gallery} onChange={(gallery) => setForm((f) => ({ ...f, gallery }))} />
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
            {status === "draft" && <GoldButton disabled={saving || !form.title} onClick={() => save("draft")}>Save draft</GoldButton>}
            <GoldButton solid disabled={saving || !form.title || !form.poster_url} onClick={() => save(status === "draft" ? "published" : status)}>
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