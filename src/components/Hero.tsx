import { usePortfolio } from '@/context/PortfolioContext';
import { Count } from './shared';

const termLine = (delay: number, color: string, text: string, pad = 0): React.CSSProperties & { text: string } => ({
  animation: `slidein .5s ease ${delay}s both`,
  color,
  paddingLeft: pad,
  text,
});

const Hero = () => {
  const { data } = usePortfolio();
  const stats = data?.stats ?? [];

  const heroStats = [
    { value: '500K+', label: 'agents powered on GTWY.ai' },
    { value: '7M+', label: 'tasks automated' },
    ...stats.map((s) => ({ value: s.value, label: [s.sublabel, s.label].filter(Boolean).join(' ') })),
  ].slice(0, 4);

  const lines = [
    termLine(0.35, 'var(--acc)', '$ git log --grep="impact"'),
    termLine(0.53, 'var(--tx)', '› Built the entire backend of GTWY.ai'),
    termLine(0.71, 'var(--mut)', '» 500K+ active agents · 7M+ tasks automated', 14),
    termLine(0.89, 'var(--tx)', '› Unified LLM API — <50ms · 99.99% uptime'),
    termLine(1.07, 'var(--tx)', '› Real-time RAG engine @ 98% precision'),
    termLine(1.25, 'var(--acc)', '$ ./stack --production'),
    termLine(1.43, 'var(--mut)', '» FastAPI · LangChain · MCP · vector DBs'),
  ];

  return (
    <header id="top" className="wrap hero-grid" style={{ paddingTop: 'clamp(120px,16vh,180px)', paddingBottom: 'clamp(40px,7vh,90px)' }}>
      <div>
        <div
          className="mono"
          style={{
            animation: 'rise .7s ease both',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 12.5,
            color: 'var(--acc)',
            padding: '7px 14px',
            border: '1px solid var(--bd)',
            borderRadius: 999,
            background: 'var(--panel)',
            marginBottom: 28,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--acc)', boxShadow: '0 0 8px var(--acc)', animation: 'pulseglow 2s ease-in-out infinite' }} />
          available for opportunities
        </div>
        <h1 style={{ animation: 'rise .8s ease .05s both', fontSize: 'clamp(46px,8.2vw,108px)', lineHeight: 0.92, letterSpacing: '-.03em', fontWeight: 600 }}>
          AI<br />engineer<span style={{ color: 'var(--acc)' }}>.</span><br />
          <span style={{ color: 'var(--mut)', fontWeight: 400 }}>Backend developer<span style={{ color: 'var(--acc)' }}>.</span></span>
        </h1>
        <p style={{ animation: 'rise .8s ease .12s both', marginTop: 26, maxWidth: '30em', fontSize: 'clamp(15px,1.5vw,18px)', lineHeight: 1.6, color: 'var(--mut)' }}>
          I build AI-first products end to end — LLM APIs, RAG pipelines, and autonomous agents. Built the backend powering 500K+ agents and 7M+ automated tasks at{' '}
          <a href={data?.personal.company_url ?? 'https://walkover.in'} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--acc)' }}>
            Walkover
          </a>.
        </p>
        <div style={{ animation: 'rise .8s ease .18s both', display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
          <a href="#work" className="btn-primary">View my work →</a>
          <a href="#contact" className="btn-ghost">Get in touch</a>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(22px,4vw,52px)', marginTop: 'clamp(40px,6vh,64px)' }}>
          {heroStats.map((s, i) => (
            <div key={s.label} style={{ animation: `rise .7s ease ${0.24 + i * 0.06}s both` }}>
              <Count value={s.value} style={{ fontSize: 'clamp(28px,3.4vw,42px)', fontWeight: 700, color: 'var(--tx)' }} />
              <div style={{ fontSize: 12.5, color: 'var(--mut)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ animation: 'risecard .9s ease .15s both' }}>
        <div className="card" style={{ overflow: 'hidden', boxShadow: '0 40px 80px -30px rgba(0,0,0,.7)', animation: 'floaty 7s ease-in-out infinite' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 16px', borderBottom: '1px solid var(--bd)', background: 'var(--panel2)' }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
            <span className="mono" style={{ marginLeft: 10, fontSize: 12, color: 'var(--mut)' }}>husain@portfolio: ~</span>
          </div>
          <div className="mono" style={{ padding: '22px 22px 26px', fontSize: 13, lineHeight: 1.85 }}>
            {lines.map(({ text, ...style }, i) => (
              <div key={i} style={{ ...style, marginTop: text.startsWith('$') && i > 0 ? 14 : text.startsWith('›') && i === 1 ? 6 : 0 }}>
                {text}
              </div>
            ))}
            <div style={{ animation: 'slidein .5s ease 1.61s both', color: 'var(--acc)', marginTop: 14 }}>
              ${' '}
              <span style={{ display: 'inline-block', width: 9, height: 16, background: 'var(--acc)', verticalAlign: 'middle', animation: 'blink 1.1s step-end infinite' }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
