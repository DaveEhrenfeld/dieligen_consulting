import { useEffect, useRef } from 'react';

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    let raf = 0;
    let dir = 1;
    let reversing = false;
    let lastTs = 0;
    const EDGE = 0.12;

    const startReverse = () => {
      if (reversing) return;
      reversing = true;
      v.pause();
      lastTs = performance.now();
      const tick = (now: number) => {
        const dt = Math.min(0.05, (now - lastTs) / 1000);
        lastTs = now;
        const t = v.currentTime - dt;
        if (t <= EDGE) {
          try { v.currentTime = EDGE; } catch (_) {}
          reversing = false;
          dir = 1;
          v.play().catch(() => {});
          return;
        }
        try { v.currentTime = t; } catch (_) {}
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const onTimeUpdate = () => {
      if (dir !== 1 || reversing) return;
      const dur = v.duration;
      if (!dur || !isFinite(dur)) return;
      if (v.currentTime >= dur - EDGE) {
        dir = -1;
        startReverse();
      }
    };

    const onEnded = () => {
      if (dir === 1 && !reversing) { dir = -1; startReverse(); }
    };

    const onLoaded = () => {
      try { v.currentTime = EDGE; } catch (_) {}
      v.play().catch(() => {});
    };

    v.addEventListener('timeupdate', onTimeUpdate);
    v.addEventListener('ended', onEnded);
    if (v.readyState >= 1) onLoaded();
    else v.addEventListener('loadedmetadata', onLoaded, { once: true });

    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        reversing = false;
        v.pause();
      } else {
        if (dir === 1) v.play().catch(() => {});
        else { reversing = false; startReverse(); }
      }
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelAnimationFrame(raf);
      v.removeEventListener('timeupdate', onTimeUpdate);
      v.removeEventListener('ended', onEnded);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video"
      src="/assets/hero-transition.mp4"
      poster="/assets/hero-poster.png"
      muted
      playsInline
      preload="auto"
      autoPlay
      aria-hidden="true"
    />
  );
}
