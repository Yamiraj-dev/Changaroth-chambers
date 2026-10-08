import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import PageShell from "@/components/PageShell";
import GoldButton from "@/components/GoldButton";
import CoverUpload from "@/components/admin/CoverUpload";

const fieldClass = "w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-hero-cream placeholder:text-mist/50 transition-colors";
const FIELDS = [
  ["role", "Title", "e.g. Associate, Paralegal"],
  ["practice", "Practice", "Leave blank to hide"],
  ["education", "Education", "Leave blank to hide"],
  ["qualifications", "Qualifications", "Leave blank to hide"],
];

export default function StaffEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [form, setForm] = useState({ name: "", role: "", group: "lawyer", image: "", practice: "", education: "", qualifications: "", bio: "" });
  const [loading, setLoading] = useState(!!id);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    base44.entities.StaffMember.get(id).then((m) => { setForm((f) => ({ ...f, ...m })); setLoading(false); });
  }, [id]);

  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

  const save = async () => {
    setSaving(true);
    const { name, role, group, image, practice, education, qualifications, bio } = form;
    const data = { name, role, group, image, practice, education, qualifications, bio };
    if (id) await base44.entities.StaffMember.update(id, data);
    else await base44.entities.StaffMember.create({ ...data, order: Date.now() });
    qc.invalidateQueries({ queryKey: ["staff"] });
    navigate("/admin/team");
  };

  return (
    <PageShell>
      <Link to="/admin/team" className="inline-flex items-center gap-2 text-[10px] tracking-micro uppercase text-mist hover:text-gold mb-10">
        <ArrowLeft className="w-3.5 h-3.5" /> All team members
      </Link>
      {loading ? (
        <div className="flex justify-center py-24"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-[10px] tracking-micro uppercase text-gold">{id ? "Editing member" : "New member"}</p>
          <input value={form.name} onChange={(e) => set("name")(e.target.value)} placeholder="Full name" className={`${fieldClass} font-display text-3xl`} />
          <div className="flex gap-3">
            {[["lawyer", "Lawyer"], ["support", "Rest of the team"]].map(([k, l]) => (
              <button key={k} type="button" onClick={() => set("group")(k)}
                className={`px-5 py-2.5 text-[10px] tracking-micro uppercase border transition-colors ${form.group === k ? "border-gold bg-gold/15 text-gold" : "border-white/15 text-mist hover:text-gold"}`}>{l}</button>
            ))}
          </div>
          {FIELDS.map(([k, label, p]) => (
            <label key={k} className="block">
              <span className="text-[10px] tracking-micro uppercase text-gold">{label}</span>
              <input value={form[k] || ""} onChange={(e) => set(k)(e.target.value)} placeholder={p} className={fieldClass} />
            </label>
          ))}
          <span className="block text-[10px] tracking-micro uppercase text-gold -mb-6">Bio</span>
          <textarea value={form.bio || ""} onChange={(e) => set("bio")(e.target.value)} placeholder="Short bio (optional)" rows={3} className={`${fieldClass} resize-none`} />
          <div className="max-w-xs"><CoverUpload value={form.image} onChange={set("image")} /></div>
          <div className="pt-4 border-t border-white/10">
            <GoldButton solid disabled={saving || !form.name} onClick={save}>
              {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />} {id ? "Save changes" : "Add member"}
            </GoldButton>
          </div>
        </div>
      )}
    </PageShell>
  );
}