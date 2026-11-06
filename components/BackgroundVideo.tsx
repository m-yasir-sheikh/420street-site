"use client";

import { useEffect, useRef } from "react";

interface BackgroundVideoProps {
  src: string;
  poster: string;
  className?: string;
}

/**
 * Autoplays only when the visitor has not asked for reduced motion. The `autoplay`
 * attribute is deliberately omitted so the poster frame is what renders for everyone
 * until the preference has been checked on the client.
 */
export default function BackgroundVideo({ src, poster, className = "" }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      if (query.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {
          /* Autoplay can still be refused by the browser; the poster frame stands in. */
        });
      }
    };

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
