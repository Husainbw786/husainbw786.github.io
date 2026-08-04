import { usePortfolio } from '@/context/PortfolioContext';

const Navbar = () => {
  const { data } = usePortfolio();
  const name = data?.personal.name ?? 'Husain Baghwala';

  return (
    <nav className="nav">
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600, letterSpacing: '-.01em', whiteSpace: 'nowrap' }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--acc)', boxShadow: '0 0 10px var(--acc)' }} />
        {name}
      </a>
      <div className="nav-links">
        <a href="#skills">skills</a>
        <a href="#work">work</a>
        <a href="#experience">experience</a>
        <a href="#certifications">certs</a>
        <a href="#contact" className="talk">let's talk</a>
      </div>
    </nav>
  );
};

export default Navbar;
