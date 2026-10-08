import React, { useCallback, useState } from "react";
import { FileUp, Loader2, X } from "lucide-react";
import { base44 } from "@/api/base44Client";
import useFileDrop from "@/hooks/useFileDrop";
import PosterPreview from "@/components/events/PosterPreview";

export default function PosterUpload({ value, type, onChange }) {
  const [uploading, setUploading] = useState(false);

  const upload = useCallback(async (file) => {
    const isPdf = file.type === "application/pdf";
    if (!isPdf && !file.type.startsWith("image/")) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadPublicFile({ file });
    onChange(file_url, isPdf ? "pdf" : "image");
    setUploading(false);
  }, [onChange]);

  const { dragging, dropProps } = useFileDrop(upload, !value);

  if (value) {
    return (
      <div className="relative max-w-sm mx-auto">
        <PosterPreview event={{ poster_url: value, poster_type: type, title: "Poster" }} />
        <button type="button" onClick={() => onChange("", "")} className="absolute top-3 right-3 p-2 bg-forest-deep/80 text-gold hover:text-gold-light">
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <label {...dropProps} className={`flex flex-col items-center justify-center gap-3 max-w-sm mx-auto aspect-[1/1.414] border border-dashed text-mist hover:border-gold hover:text-gold transition-colors cursor-pointer ${dragging ? "border-gold text-gold bg-gold/5" : "border-gold/30"}`}>
      {uploading ? <Loader2 className="w-6 h-6 animate-spin" /> : <FileUp className="w-6 h-6" />}
      <span className="text-[10px] tracking-micro uppercase">{uploading ? "Uploading…" : "Add poster (PDF or image)"}</span>
      <span className="text-xs text-mist">Click, drag & drop, or paste</span>
      <input type="file" accept="application/pdf,image/*" className="hidden" onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} disabled={uploading} />
    </label>
  );
}