import { useEffect, useState } from "react";

// Drag & drop + clipboard paste support. onFile receives a File.
export default function useFileDrop(onFile, enabled = true) {
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const onPaste = (e) => {
      const file = [...(e.clipboardData?.files || [])][0];
      if (file) { e.preventDefault(); onFile(file); }
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, [onFile, enabled]);

  const dropProps = {
    onDragOver: (e) => { e.preventDefault(); setDragging(true); },
    onDragLeave: () => setDragging(false),
    onDrop: (e) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) onFile(file);
    },
  };

  return { dragging, dropProps };
}