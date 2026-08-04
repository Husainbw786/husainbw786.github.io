import { usePortfolio } from '@/context/PortfolioContext';
import { SectionHeader } from './shared';
import type { CertificationData } from '@/types';

/** Issuer branding: simpleicons slug + colour used for the logo and the panel wash. */
const ISSUERS: Record<string, { slug: string; logoColor: string; tint: string; label: string }> = {
  anthropic: { slug: 'claude', logoColor: 'D97757', tint: '#D97757', label: 'Anthropic' },
  openai: { slug: 'openai', logoColor: 'ffffff', tint: '#74AA9C', label: 'OpenAI' },
  postman: { slug: 'postman', logoColor: 'FF6C37', tint: '#FF6C37', label: 'Postman' },
};

const issuerBrand = (issuer: string) =>
  ISSUERS[issuer.trim().toLowerCase()] ?? {
    slug: '',
    logoColor: 'c6f24e',
    tint: 'var(--acc)',
    label: issuer,
  };

const CertCard = ({ c }: { c: CertificationData }) => {
  const brand = issuerBrand(c.issuer);

  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover-lift"
      style={{ borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Framed certificate scan; the issuer logo panel shows through if the image is missing. */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '3/2',
          borderBottom: '1px solid var(--bd)',
          background: `radial-gradient(120% 120% at 50% 0%,color-mix(in oklab,${brand.tint} 20%,var(--panel2)) 0%,var(--panel2) 70%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(135deg,color-mix(in oklab,#fff 6%,transparent) 0 1px,transparent 1px 16px)',
          }}
        />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          {brand.slug && (
            <img
              src={`https://cdn.simpleicons.org/${brand.slug}/${brand.logoColor}`}
              alt=""
              width={42}
              height={42}
              loading="lazy"
              style={{ display: 'block', filter: `drop-shadow(0 0 18px color-mix(in oklab,${brand.tint} 55%,transparent))` }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
          <span
            className="mono"
            style={{ fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--tx)', opacity: 0.85 }}
          >
            {brand.label}
          </span>
        </div>
        {c.image && (
          <img
            src={c.image}
            alt={`${c.title} certificate issued to Husain Baghwala`}
            loading="lazy"
            className="preview-img"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              padding: 10,
              filter: 'drop-shadow(0 10px 24px rgba(0,0,0,.45))',
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}

        <span
          className="mono"
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            fontSize: 10.5,
            letterSpacing: '.1em',
            color: 'var(--acc)',
            background: 'color-mix(in oklab,var(--bg) 76%,transparent)',
            border: '1px solid var(--bd)',
            borderRadius: 999,
            padding: '4px 10px',
            backdropFilter: 'blur(6px)',
          }}
        >
          ✓ verified
        </span>
      </div>

      <div style={{ padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-.01em', lineHeight: 1.35, marginBottom: 8 }}>{c.title}</h3>
        <div className="mono" style={{ fontSize: 11.5, color: 'var(--mut)', marginBottom: 16 }}>
          {brand.label} · issued {c.issued}
          {c.expires && c.expires.toLowerCase().startsWith('does not') ? ' · no expiry' : c.expires ? ` · valid till ${c.expires}` : ''}
        </div>
        {c.topics && c.topics.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
            {c.topics.map((t) => (
              <span key={t} className="chip-sm">{t}</span>
            ))}
          </div>
        )}
        <div
          className="mono hero-link-arrow"
          style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: 'var(--acc)', paddingTop: 14, borderTop: '1px solid var(--bd)' }}
        >
          verify credential ↗
        </div>
      </div>
    </a>
  );
};

const Certifications = () => {
  const { data } = usePortfolio();
  const certifications = data?.certifications ?? [];
  if (certifications.length === 0) return null;

  const issuers = [...new Set(certifications.map((c) => issuerBrand(c.issuer).label))];

  return (
    <section
      id="certifications"
      className="wrap"
      style={{ paddingTop: 'clamp(40px,7vh,90px)', paddingBottom: 'clamp(70px,11vh,130px)', borderTop: '1px solid var(--bd)' }}
    >
      <SectionHeader num="04" label="credentials" title="Certified by the labs building the models." maxWidth="18em" />

      <div className="mono" style={{ fontSize: 12.5, color: 'var(--mut)', marginTop: -30, marginBottom: 30 }}>
        {String(certifications.length).padStart(2, '0')} certifications · {issuers.join(' · ')} · all independently verifiable
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18 }}>
        {certifications.map((c) => (
          <CertCard key={c.url} c={c} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
