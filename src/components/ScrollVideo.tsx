import { useEffect, useRef } from "react";
import videoAsset from "@/assets/liebe-bg.mp4.asset.json";

/**
 * Full-screen background video whose timeline is driven purely by scroll
 * position. No autoplay, no independent playback: currentTime is lerped
 * toward the scroll-derived target inside a single rAF loop.
 */
export function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    let current = 0; // smoothed progress 0..1
    let target = 0;
    let duration = 0;
    let ready = false;

    const readScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    const onMeta = () => {
      duration = video.duration || 0;
      ready = true;
      readScroll();
      current = target;
      try {
        video.currentTime = current * Math.max(0, duration - 0.05);
      } catch {
        /* seek not ready yet */
      }
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!ready || !duration) return;
      // frame-rate independent easing toward the scroll target
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.0002) current = target;
      const t = current * Math.max(0, duration - 0.05);
      if (Math.abs(video.currentTime - t) > 1 / 60) {
        video.currentTime = t;
      }
    };

    video.pause();
    if (video.readyState >= 1) onMeta();
    else video.addEventListener("loadedmetadata", onMeta);

    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", readScroll);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", readScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <video
        ref={videoRef}
        src={videoAsset.url}
        muted
        playsInline
        preload="auto"
        aria-hidden
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover mix-blend-multiply opacity-90 [filter:brightness(1.08)_contrast(1.02)_saturate(1.05)]"
      />
      {/* white luxury integration layers */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,transparent_35%,var(--background)_88%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_18%,transparent_80%,var(--background)_100%)]" />
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(60%_50%_at_20%_20%,var(--beige),transparent_70%)]" />
    </div>
  );
}
