import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Loader2, Paperclip, ChevronDown } from "lucide-react";

const field = "w-full bg-transparent border border-gold/25 px-4 py-3 text-white placeholder:text-mist/50 focus:border-gold outline-none";
const EMPTY = { name: "", email: "", education: "", duration: "", personal_statement: "" };

export default function InternApplication() {
  const [form, setForm] = useState(EMPTY);
  const [files, setFiles] = useState([]);
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!files.length) return setError("Please attach your CV/Resume and personal statement.");
    setBusy(true); setError("");
    try {
      const documents = await Promise.all(files.map((file) => base44.integrations.Core.UploadPrivateFile({ file }).then((r) => r.file_uri)));
      const app = await base44.entities.InternApplication.create({ ...form, documents });
      await base44.functions.invoke("emailInternApplication", { id: app.id });
      setDone(true); setForm(EMPTY); setFiles([]);
    } catch (err) {
      setError(err.message || "Submission failed. Please try again.");
    }
    setBusy(false);
  };

  return (
    <section className="border border-gold/30">
      <div className="p-5">
        <button type="button" onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
          <span>
            <span className="block text-[10px] tracking-micro uppercase text-gold">Careers</span>
            <span className="font-display text-xl text-hero-cream">Internship Application</span>
          </span>
          <ChevronDown className={`w-5 h-5 text-gold transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && <p className="text-mist text-sm mt-4 mb-6">Please upload your CV/Resume and personal statement along with the details below.</p>}
        {!open ? null : done ? (
          <p className="text-gold border border-gold/30 p-6">Thank you. Your application has been received.</p>
        ) : (
          <form onSubmit={submit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input required className={field} placeholder="Full name" value={form.name} onChange={set("name")} />
              <input required type="email" className={field} placeholder="Email" value={form.email} onChange={set("email")} />
            </div>
            <input required className={field} placeholder="Educational background (institution, degree, year)" value={form.education} onChange={set("education")} />
            <input required className={field} placeholder="Proposed duration of internship (e.g. 3 months, Jan–Mar)" value={form.duration} onChange={set("duration")} />
            <div>
              <textarea required maxLength={4000} rows={7} className={field} placeholder="Personal statement" value={form.personal_statement} onChange={set("personal_statement")} />
              <p className="text-right text-xs text-mist mt-1">{form.personal_statement.length}/4000</p>
            </div>
            <label className="flex items-center gap-3 border border-dashed border-gold/40 px-4 py-4 cursor-pointer text-mist hover:text-gold">
              <Paperclip className="w-4 h-4" />
              <span>{files.length ? files.map((f) => f.name).join(", ") : "Attach CV/Resume and personal statement (PDF, DOC)"}</span>
              <input type="file" multiple accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => setFiles([...e.target.files])} />
            </label>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button disabled={busy} className="px-8 py-3 bg-gold text-forest text-[11px] font-medium tracking-micro uppercase hover:bg-gold-light disabled:opacity-60 inline-flex items-center gap-2">
              {busy && <Loader2 className="w-4 h-4 animate-spin" />} Submit Application
            </button>
          </form>
        )}
      </div>
    </section>
  );
}