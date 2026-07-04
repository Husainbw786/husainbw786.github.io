import { useEffect, useRef } from 'react';

/** Fixed background grid, cursor glow, and scroll progress bar. */
const Effects = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const fine = window.matchMedia('(pointer:fine)').matches;
    let onMove: ((e: MouseEvent) => void) | null = null;
    if (glow && fine) {
      onMove = (e: MouseEvent) => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      };
      window.addEventListener('mousemove', onMove, { passive: true });
    } else if (glow) {
      glow.style.display = 'none';
    }

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (barRef.current) barRef.current.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      if (onMove) window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          backgroundImage:
            'linear-gradient(var(--bd) 1px,transparent 1px),linear-gradient(90deg,var(--bd) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.5,
          pointerEvents: 'none',
          maskImage: 'radial-gradient(circle at 50% 0%,#000,transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 0%,#000,transparent 80%)',
        }}
      />
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 520,
          height: 520,
          margin: '-260px 0 0 -260px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle,color-mix(in oklab,var(--acc) 16%,transparent),transparent 68%)',
          pointerEvents: 'none',
          zIndex: 1,
          filter: 'blur(36px)',
          opacity: 0.55,
          transition: 'transform .18s ease-out',
          willChange: 'transform',
        }}
      />
      <div
        ref={barRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 2,
          width: '0%',
          background: 'var(--acc)',
          zIndex: 200,
          boxShadow: '0 0 12px var(--acc)',
        }}
      />
    </>
  );
};

export default Effects;
