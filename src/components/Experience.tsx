import { usePortfolio } from '@/context/PortfolioContext';
import { SectionHeader } from './shared';

const Experience = () => {
  const { data } = usePortfolio();
  const experience = data?.experience ?? [];
  const achievements = data?.achievements ?? [];

  return (
    <section id="experience" className="wrap" style={{ paddingTop: 'clamp(40px,7vh,90px)', paddingBottom: 'clamp(70px,11vh,130px)', borderTop: '1px solid var(--bd)' }}>
      <SectionHeader num="03" label="the journey" title="Experience & education." />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {experience.map((x) => (
          <div key={`${x.title}-${x.company}`} className="xp-row">
            <div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--acc)', marginBottom: 8 }}>{x.period}</div>
              <div style={{ fontSize: 13, color: 'var(--mut)' }}>{x.title}</div>
              {x.location && <div style={{ fontSize: 12, color: 'var(--mut)', marginTop: 4 }}>{x.location}</div>}
            </div>
            <div>
              <h3 style={{ fontSize: 21, fontWeight: 600, letterSpacing: '-.015em', marginBottom: 14 }}>
                {x.company}
                {x.projectLink && (
                  <a href={x.projectLink} target="_blank" rel="noopener noreferrer" className="mono link-accent-hover" style={{ fontSize: 13, color: 'var(--acc)', marginLeft: 12 }}>
                    {x.projectName} ↗
                  </a>
                )}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, margin: 0, padding: 0 }}>
                {x.points.map((pt) => (
                  <li key={pt} style={{ position: 'relative', paddingLeft: 20, fontSize: 14, lineHeight: 1.6, color: 'var(--mut)' }}>
                    <span style={{ position: 'absolute', left: 0, top: 9, width: 6, height: 6, borderRadius: '50%', background: 'var(--acc)' }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mono" style={{ fontSize: 13, color: 'var(--mut)', textTransform: 'uppercase', letterSpacing: '.18em', margin: '56px 0 24px' }}>
        {'// achievements'}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18 }}>
        {achievements.map((a) => (
          <div key={a.title} className="card card-hover" style={{ padding: 26, position: 'relative', overflow: 'hidden' }}>
            <div className="mono" style={{ fontSize: 32, fontWeight: 700, color: 'var(--acc)', opacity: 0.25, position: 'absolute', top: 14, right: 18 }}>★</div>
            <h4 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-.01em', marginBottom: 10, maxWidth: '18em' }}>{a.title}</h4>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--mut)' }}>{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
