import { useEffect, useRef } from 'react';

const ICONS: Record<string, [string, string]> = {
  Python: ['python', '3776AB'],
  JavaScript: ['javascript', 'F7DF1E'],
  TypeScript: ['typescript', '3178C6'],
  'Node.js': ['nodedotjs', '5FA04E'],
  'C++': ['cplusplus', '00599C'],
  FastAPI: ['fastapi', '009688'],
  'Express.js': ['express', 'ffffff'],
  Express: ['express', 'ffffff'],
  Flask: ['flask', 'ffffff'],
  LangChain: ['langchain', 'ffffff'],
  LangGraph: ['langgraph', 'ffffff'],
  OpenCV: ['opencv', '5C3EE8'],
  Pandas: ['pandas', '150458'],
  NumPy: ['numpy', '013243'],
  Git: ['git', 'F05032'],
  GitHub: ['github', 'ffffff'],
  Docker: ['docker', '2496ED'],
  Postman: ['postman', 'FF6C37'],
  Jupyter: ['jupyter', 'F37626'],
  HuggingFace: ['huggingface', 'FFD21E'],
  OpenAI: ['openai', 'ffffff'],
  Anthropic: ['claude', 'D97757'],
  Gemini: ['googlegemini', '9B8AE0'],
  MongoDB: ['mongodb', '47A248'],
  PostgreSQL: ['postgresql', '4F9DDE'],
  Redis: ['redis', 'FF4438'],
  React: ['react', '61DAFB'],
  MCP: ['modelcontextprotocol', 'ffffff'],
};

export const TechIcon = ({ name, size = 15 }: { name: string; size?: number }) => {
  const icon = ICONS[name];
  if (!icon) {
    return (
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--acc)',
          display: 'inline-block',
          flex: 'none',
        }}
      />
    );
  }
  return (
    <img
      src={`https://cdn.simpleicons.org/${icon[0]}/${icon[1]}`}
      alt=""
      width={size}
      height={size}
      style={{ display: 'block', flex: 'none', opacity: 0.95 }}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
};

export const SectionHeader = ({ num, label, title, maxWidth }: { num: string; label: string; title: string; maxWidth?: string }) => (
  <>
    <div className="kicker">
      <span className="num">{'// '}{num}</span>
      <span className="label">{label}</span>
    </div>
    <h2 className="h2" style={maxWidth ? { maxWidth } : undefined}>{title}</h2>
  </>
);

/** Count-up number that animates when scrolled into view. Parses values like "500K+", "#1", "19%", "365+". */
export const Count = ({ value, style }: { value: string; style?: React.CSSProperties }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const m = value.match(/^([^\d]*)([\d,]+)(.*)$/);
    if (!m) return;
    const prefix = m[1];
    const target = parseFloat(m[2].replace(/,/g, ''));
    const suffix = m[3];
    const fmt = (v: number) => prefix + Math.round(v).toLocaleString('en-US') + suffix;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          const dur = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const e = 1 - Math.pow(1 - t, 3);
            el.textContent = fmt(target * e);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="mono" style={style}>
      {value}
    </div>
  );
};
