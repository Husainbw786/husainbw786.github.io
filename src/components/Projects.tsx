import { usePortfolio } from '@/context/PortfolioContext';
import { Count, SectionHeader } from './shared';
import type { ProjectData } from '@/types';

/** Bundled screenshot when provided, GitHub social card otherwise. */
const previewUrl = (p: ProjectData) => {
  if (p.image) return p.image;
  if (p.github) {
    const repo = p.github.replace(/\/+$/, '').split('github.com/')[1];
    if (repo) return `https://opengraph.githubassets.com/1/${repo}`;
  }
  return null;
};

const ProjectCard = ({ p }: { p: ProjectData }) => {
  const preview = previewUrl(p);
  return (
  <article className="card card-hover-lift" style={{ borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
    <div
      style={{
        position: 'relative',
        aspectRatio: '16/10',
        background: 'var(--panel2)',
        backgroundImage: 'repeating-linear-gradient(135deg,color-mix(in oklab,var(--acc) 7%,transparent) 0 2px,transparent 2px 22px)',
        borderBottom: '1px solid var(--bd)',
      }}
    >
      {preview && (
        <img
          src={preview}
          alt={`${p.title} preview`}
          loading="lazy"
          className="preview-img"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      )}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top,color-mix(in oklab,var(--bg) 82%,transparent) 0%,transparent 45%)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: 16,
        }}
      >
        <span className="mono" style={{ fontSize: 11, color: 'var(--tx)', background: 'color-mix(in oklab,var(--bg) 78%,transparent)', padding: '5px 9px', borderRadius: 6, border: '1px solid var(--bd)', backdropFilter: 'blur(6px)' }}>
          [ {p.title} ]
        </span>
        {p.featured && <span className="mono" style={{ fontSize: 11, color: 'var(--acc)', background: 'color-mix(in oklab,var(--bg) 78%,transparent)', padding: '5px 9px', borderRadius: 6, backdropFilter: 'blur(6px)' }}>featured</span>}
      </div>
    </div>
    <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <h3 style={{ fontSize: 21, fontWeight: 600, letterSpacing: '-.015em', marginBottom: 10 }}>{p.title}</h3>
      <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--mut)', marginBottom: 18, flex: 1 }}>{p.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
        {p.tech.map((t) => (
          <span key={t} className="chip-sm">{t}</span>
        ))}
      </div>
      <div className="mono" style={{ display: 'flex', gap: 18, fontSize: 13, paddingTop: 16, borderTop: '1px solid var(--bd)' }}>
        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="hero-link-arrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--acc)' }}>
            live ↗
          </a>
        )}
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-muted">
            source
          </a>
        )}
      </div>
    </div>
  </article>
  );
};

const Projects = () => {
  const { data } = usePortfolio();
  const projects = data?.projects ?? [];
  const flagship = projects.find((p) => p.flagship);
  const rest = projects.filter((p) => !p.flagship);

  return (
    <section id="work" className="wrap" style={{ paddingTop: 'clamp(40px,7vh,90px)', paddingBottom: 'clamp(70px,11vh,130px)' }}>
      <SectionHeader num="02" label="selected work" title="Things I've designed, built & shipped." />

      {flagship && (
        <article className="card card-hover-lift" style={{ borderRadius: 18, padding: 'clamp(24px,4vw,40px)', marginBottom: 20, position: 'relative', overflow: 'hidden' }}>
          <div className="mono" style={{ fontSize: 12, color: 'var(--acc)', marginBottom: 14 }}>🚀 FLAGSHIP — BUILT ENTIRE BACKEND</div>
          <h3 style={{ fontSize: 'clamp(24px,3vw,34px)', fontWeight: 600, letterSpacing: '-.02em', marginBottom: 14 }}>{flagship.title}</h3>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--mut)', maxWidth: '52em', marginBottom: 22 }}>{flagship.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 26 }}>
            {flagship.tech.map((t) => (
              <span key={t} className="chip-sm">{t}</span>
            ))}
          </div>
          {flagship.stats && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 18, marginBottom: 26 }}>
              {flagship.stats.map((s) => (
                <div key={s.label} style={{ background: 'var(--panel2)', border: '1px solid var(--bd)', borderRadius: 12, padding: '18px 20px' }}>
                  <Count value={s.value} style={{ fontSize: 'clamp(24px,2.6vw,32px)', fontWeight: 700, color: 'var(--acc)' }} />
                  <div style={{ fontSize: 12.5, color: 'var(--mut)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}
          {flagship.link && (
            <a href={flagship.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '12px 24px' }}>
              Visit GTWY.ai →
            </a>
          )}
        </article>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 20 }}>
        {rest.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
