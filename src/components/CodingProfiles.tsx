import { usePortfolio } from '@/context/PortfolioContext';
import { Count, SectionHeader } from './shared';

const CodingProfiles = () => {
  const { data } = usePortfolio();
  const profiles = data?.coding_profiles;
  if (!profiles) return null;

  return (
    <section className="wrap" style={{ paddingTop: 'clamp(40px,7vh,90px)', paddingBottom: 'clamp(70px,11vh,130px)', borderTop: '1px solid var(--bd)' }}>
      <SectionHeader num="05" label="competitive coding" title="365+ days of DSA, every single day." maxWidth="16em" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 18 }}>
        {profiles.platforms.map((p) => (
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="card card-hover" style={{ padding: '28px 24px', display: 'block' }}>
            <Count value={p.stat} style={{ fontSize: 'clamp(34px,4vw,48px)', fontWeight: 700, color: 'var(--tx)' }} />
            <div style={{ fontSize: 15, fontWeight: 500, margin: '10px 0 6px' }}>{p.name}</div>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--mut)' }}>
              {p.statLabel} · <span className="mono" style={{ fontSize: 12 }}>@{p.username}</span>
            </p>
          </a>
        ))}
        <div className="card card-hover" style={{ padding: '28px 24px' }}>
          <Count value="365+" style={{ fontSize: 'clamp(34px,4vw,48px)', fontWeight: 700, color: 'var(--tx)' }} />
          <div style={{ fontSize: 15, fontWeight: 500, margin: '10px 0 6px' }}>Day Streak</div>
          <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--mut)' }}>Daily DSA practice across GFG & LeetCode.</p>
        </div>
      </div>

      <div style={{ marginTop: 34, display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {[
          { src: profiles.github_streak_url, alt: 'GitHub streak', flex: '1 1 380px' },
          { src: profiles.top_languages_url, alt: 'Top languages', flex: '1 1 300px' },
        ].map((img) => (
          <div key={img.alt} className="card" style={{ padding: 20, flex: img.flex, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={img.src}
              alt={img.alt}
              style={{ maxWidth: '100%' }}
              loading="lazy"
              onError={(e) => {
                const card = e.currentTarget.parentElement;
                if (card) card.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
