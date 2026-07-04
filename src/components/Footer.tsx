import { usePortfolio } from '@/context/PortfolioContext';

const Footer = () => {
  const { data } = usePortfolio();
  const name = data?.personal.name ?? 'Husain Baghwala';
  const socials = data?.personal.socials ?? [];

  return (
    <footer style={{ borderTop: '1px solid var(--bd)' }}>
      <div
        className="wrap mono"
        style={{ padding: '34px clamp(20px,5vw,64px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 18, fontSize: 12.5, color: 'var(--mut)' }}
      >
        <span>© {new Date().getFullYear()} {name} — built with intent.</span>
        <div style={{ display: 'flex', gap: 22 }}>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link-accent-hover">
              {s.label.toLowerCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
