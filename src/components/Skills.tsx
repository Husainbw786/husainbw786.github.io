import { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { SectionHeader, TechIcon } from './shared';

const GROUP_META: Record<string, { label: string; tag: string; desc: string }> = {
  ai: { label: 'AI Engineering', tag: 'llm', desc: 'RAG pipelines, AI agents and LLM orchestration running in production at scale.' },
  frameworks: { label: 'Backend', tag: 'api', desc: 'Robust, high-throughput APIs and real-time services.' },
  languages: { label: 'Languages', tag: 'core', desc: 'The core toolkit — typed, tested and DSA-sharpened.' },
  databases: { label: 'Data Systems', tag: 'data', desc: 'Document stores, relational databases, caches and vector search.' },
  tools: { label: 'Tools & DevOps', tag: 'infra', desc: 'Shipping, debugging and iterating fast.' },
};

const ORDER = ['ai', 'frameworks', 'languages', 'databases', 'tools'] as const;

/* Keep cards visually balanced: show at most this many chips, tuck the rest behind "+N more". */
const MAX_VISIBLE = 8;

const SkillCard = ({ groupKey, items }: { groupKey: string; items: string[] }) => {
  const [expanded, setExpanded] = useState(false);
  const meta = GROUP_META[groupKey];
  const visible = expanded ? items : items.slice(0, MAX_VISIBLE);
  const hidden = items.length - MAX_VISIBLE;

  return (
    <div className="card card-hover" style={{ padding: 26 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <h3 style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-.01em' }}>{meta.label}</h3>
        <span className="mono" style={{ fontSize: 12, color: 'var(--acc)' }}>{meta.tag}</span>
      </div>
      <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--mut)', marginBottom: 20 }}>{meta.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {visible.map((it) => (
          <span key={it} className="chip">
            <TechIcon name={it} />
            {it}
          </span>
        ))}
        {hidden > 0 && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="chip"
            style={{ cursor: 'pointer', color: 'var(--acc)', borderColor: 'color-mix(in oklab,var(--acc) 40%,var(--bd))', background: 'transparent' }}
          >
            {expanded ? 'show less' : `+${hidden} more`}
          </button>
        )}
      </div>
    </div>
  );
};

const Skills = () => {
  const { data } = usePortfolio();
  const skills = data?.about.skills;
  if (!skills) return null;

  return (
    <section id="skills" className="wrap section">
      <SectionHeader num="01" label="capabilities" title="Building backends with AI woven through every layer." maxWidth="16em" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 18, alignItems: 'start' }}>
        {ORDER.map((key) => {
          const items = skills[key];
          if (!items?.length) return null;
          return <SkillCard key={key} groupKey={key} items={items} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
