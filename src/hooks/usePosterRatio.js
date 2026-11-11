import { useEffect, useState } from "react";

// Returns the image's natural width/height ratio (null until loaded or when disabled).
export default function usePosterRatio(url, enabled) {
  const [ratio, setRatio] = useState(null);

  useEffect(() => {
    setRatio(null);
    if (!url || !enabled) return;
    const img = new window.Image();
    img.onload = () => setRatio(img.naturalWidth / img.naturalHeight);
    img.src = url;
  }, [url, enabled]);

  return ratio;
}