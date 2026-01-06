import { Github, Linkedin, Mail, Code2, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
  'AI Engineer',
  'Backend Developer',
  'Problem Solver',
  'LLM Specialist',
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow delay-200" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="section-container relative z-10 py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <Terminal size={14} className="text-primary" />
            <span className="font-mono text-sm text-primary">Available for opportunities</span>
          </div>
          
          <p className="font-mono text-primary mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.15s' }}>
            Hi, my name is
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Husain Baghwala.
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-2 animate-fade-up opacity-0 flex items-center gap-3" style={{ animationDelay: '0.3s' }}>
            I'm a{' '}
            <span className="text-gradient inline-flex items-center">
              {displayText}
              <span className="w-0.5 h-8 md:h-12 bg-primary ml-1 animate-pulse" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
            Building <span className="text-primary">AI-powered</span> solutions at{' '}
            <a href="https://walkover.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Walkover Web Solutions
            </a>
            . Specializing in LLM integration, RAG pipelines, and intelligent backend systems.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.45s' }}>
            <div className="glass-card px-5 py-3 flex items-center gap-3">
              <Code2 className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">365+</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </div>
            </div>
            <div className="glass-card px-5 py-3 flex items-center gap-3">
              <span className="text-xl font-bold text-yellow-400">#1</span>
              <div>
                <p className="text-sm font-semibold">GFG Rank</p>
                <p className="text-xs text-muted-foreground">University</p>
              </div>
            </div>
            <div className="glass-card px-5 py-3 flex items-center gap-3">
              <span className="text-xl font-bold text-green-400">19%</span>
              <div>
                <p className="text-sm font-semibold">Top Global</p>
                <p className="text-xs text-muted-foreground">LeetCode</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 animate-fade-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg glow-effect-sm hover:scale-105 transition-transform duration-300"
            >
              Get In Touch
            </a>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Husainbw786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/husainbw786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:husainbw123@gmail.com"
                className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
