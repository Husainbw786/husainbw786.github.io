import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Coding', href: '#coding' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : ''
      }`}
    >
      <div className="section-container py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-mono flex items-center gap-2">
          <img src="/favicon.png" alt="BW Logo" className="w-8 h-8 rounded" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{'<BW />'}</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link font-mono text-sm">
                <span className="text-primary mr-1">0{index + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Resume.pdf"
              target="_blank"
              className="px-4 py-2 border border-primary text-primary rounded-lg font-mono text-sm hover:bg-primary/10 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <ul className="flex flex-col items-center py-8 gap-6">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary mr-2">0{index + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Resume.pdf"
                target="_blank"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-mono hover:bg-primary/10 transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
