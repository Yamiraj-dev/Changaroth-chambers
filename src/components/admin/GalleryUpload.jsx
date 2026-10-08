import React, { useState } from "react";
import { ImagePlus, Loader2, X } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function GalleryUpload({ value = [], onChange }) {
  const [uploading, setUploading] = useState(false);

  const upload = async (files) => {
    const images = [...files].filter((f) => f.type.startsWith("image/"));
    if (!images.length) return;
    setUploading(true);
    const urls = await Promise.all(images.map((file) => base44.integrations.Core.UploadPublicFile({ file }).then((r) => r.file_url)));
    onChange([...value, ...urls]);
    setUploading(false);
  };

  return (
    <div>
      <span className="text-[10px] tracking-micro uppercase text-gold">Mini gallery (optional)</span>
      <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
        {value.map((url) => (
          <div key={url} className="relative aspect-square border border-gold/20 overflow-hidden">
            <img src={url} alt="" className="w-full h-full object-cover" />
            <button type="button" onClick={() => onChange(value.filter((u) => u !== url))} className="absolute top-1 right-1 p-1 bg-forest-deep/80 text-gold hover:text-gold-light">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
        <label className="aspect-square flex flex-col items-center justify-center gap-2 border border-dashed border-gold/30 text-mist hover:border-gold hover:text-gold cursor-pointer transition-colors">
          {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ImagePlus className="w-5 h-5" />}
          <span className="text-[10px] tracking-micro uppercase">{uploading ? "Uploading" : "Add images"}</span>
          <input type="file" accept="image/*" multiple className="hidden" disabled={uploading} onChange={(e) => upload(e.target.files)} />
        </label>
      </div>
    </div>
  );
}