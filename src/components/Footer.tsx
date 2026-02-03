import { Heart } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';
import * as LucideIcons from 'lucide-react';

const Footer = () => {
  const { personal } = portfolioData;

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {personal.socials.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <Heart size={14} className="text-primary" /> by {personal.name}
          </p>

          <p className="text-sm font-mono text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
