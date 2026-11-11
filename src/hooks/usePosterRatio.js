import { useEffect, useState } from "react";

const A4 = 1.414; // height / width

// Detects the poster's natural ratio and whether it's A4 (portrait or landscape, ±3%).
export default function usePosterRatio(url, type) {
  const [ratio, setRatio] = useState(null);

  useEffect(() => {
    setRatio(null);
    if (!url || type === "pdf") return;
    const img = new window.Image();
    img.onload = () => setRatio(img.naturalWidth / img.naturalHeight);
    img.src = url;
  }, [url, type]);

  if (type === "pdf") return { ratio: 1 / A4, isA4: true };
  if (!ratio) return { ratio: null, isA4: null };
  const r = Math.max(ratio, 1 / ratio);
  return { ratio, isA4: Math.abs(r - A4) / A4 < 0.03 };
}