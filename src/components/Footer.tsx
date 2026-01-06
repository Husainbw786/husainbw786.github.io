import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Husainbw786"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/husainbw786"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:husainbw123@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <Heart size={14} className="text-primary" /> by Husain Baghwala
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
