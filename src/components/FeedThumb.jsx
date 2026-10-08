import React from "react";

// Uniform thumbnail box used by both homepage feeds.
export default function FeedThumb({ src, alt, pdf }) {
  return (
    <div className="relative w-28 sm:w-36 aspect-[4/3] shrink-0 border border-gold/15 bg-forest-light overflow-hidden">
      {pdf ? (
        <iframe src={`${src}#toolbar=0&navpanes=0&view=FitH`} title={alt} className="absolute inset-0 w-full h-full pointer-events-none bg-white" />
      ) : src ? (
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-contain" />
      ) : null}
    </div>
  );
}