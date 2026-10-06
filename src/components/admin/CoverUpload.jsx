import React, { useState } from "react";
import { ImagePlus, Loader2, X } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Image } from "@/components/ui/image";

export default function CoverUpload({ value, onChange }) {
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadPublicFile({ file });
    onChange(file_url);
    setUploading(false);
  };

  if (value) {
    return (
      <div className="relative aspect-[21/9] border border-gold/20 overflow-hidden">
        <Image src={value} alt="Cover" className="w-full h-full" />
        <button type="button" onClick={() => onChange("")} className="absolute top-3 right-3 p-2 bg-forest-deep/80 text-gold hover:text-gold-light">
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <label className="flex flex-col items-center justify-center gap-3 aspect-[21/9] border border-dashed border-gold/30 text-mist hover:border-gold hover:text-gold transition-colors cursor-pointer">
      {uploading ? <Loader2 className="w-6 h-6 animate-spin" /> : <ImagePlus className="w-6 h-6" />}
      <span className="text-[10px] tracking-micro uppercase">{uploading ? "Uploading…" : "Add cover image"}</span>
      <input type="file" accept="image/*" className="hidden" onChange={handleFile} disabled={uploading} />
    </label>
  );
}