import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow delay-200" />
      
      <div className="section-container relative z-10 py-32">
        <div className="max-w-4xl">
          <p className="font-mono text-primary mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
            Hi, my name is
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Husain Baghwala.
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
            I build <span className="text-gradient">AI-powered</span> solutions.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
            I'm an AI Engineer at{' '}
            <a href="https://walkover.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Walkover Web Solutions
            </a>
            , specializing in LLM integration, backend development, and building intelligent systems with 
            LangChain, RAG pipelines, and cutting-edge AI technologies.
          </p>

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
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/husainbw786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:husainbw123@gmail.com"
                className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
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
