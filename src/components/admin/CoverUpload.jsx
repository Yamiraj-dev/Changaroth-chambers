import React, { useCallback, useState } from "react";
import { ImagePlus, Loader2, X } from "lucide-react";
import { base44 } from "@/api/base44Client";
import useFileDrop from "@/hooks/useFileDrop";

export default function CoverUpload({ value, onChange }) {
  const [uploading, setUploading] = useState(false);

  const upload = useCallback(async (file) => {
    if (!file.type.startsWith("image/")) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadPublicFile({ file });
    onChange(file_url);
    setUploading(false);
  }, [onChange]);

  const { dragging, dropProps } = useFileDrop(upload, !value);

  if (value) {
    return (
      <div className="relative flex justify-center border border-gold/20">
        <img src={value} alt="Cover" className="block max-w-full h-auto" />
        <button type="button" onClick={() => onChange("")} className="absolute top-3 right-3 p-2 bg-forest-deep/80 text-gold hover:text-gold-light">
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <label {...dropProps} className={`flex flex-col items-center justify-center gap-3 aspect-[21/9] border border-dashed text-mist hover:border-gold hover:text-gold transition-colors cursor-pointer ${dragging ? "border-gold text-gold bg-gold/5" : "border-gold/30"}`}>
      {uploading ? <Loader2 className="w-6 h-6 animate-spin" /> : <ImagePlus className="w-6 h-6" />}
      <span className="text-[10px] tracking-micro uppercase">{uploading ? "Uploading…" : "Add cover image"}</span>
      <span className="text-xs text-mist">Click, drag & drop, or paste</span>
      <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} disabled={uploading} />
    </label>
  );
}