import { Github, Linkedin, Mail, Code2, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from './ui/sparkles';
import { BackgroundBeams } from './ui/background-beams';
import { TextGenerateEffect } from './ui/text-generate-effect';

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
      {/* Background Beams Animation */}
      <BackgroundBeams className="z-0" />
      
      {/* Background Glow Effects */}
      <motion.div 
        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="section-container relative z-10 py-32">
        <div className="max-w-4xl">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Terminal size={14} className="text-primary" />
            <span className="font-mono text-sm text-primary">Available for opportunities</span>
          </motion.div>
          
          <motion.p 
            className="font-mono text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Hi, my name is
          </motion.p>
          
          {/* Name with Sparkles Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="mb-4" sparkleCount={20}>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Husain Baghwala.
              </h1>
            </Sparkles>
          </motion.div>
          
          {/* Animated Subtitle */}
          <TextGenerateEffect 
            words="Building the future with AI-powered solutions."
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            duration={0.4}
          />
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-muted-foreground mb-2 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I'm a{' '}
            <span className="text-gradient inline-flex items-center">
              {displayText}
              <motion.span 
                className="w-0.5 h-8 md:h-12 bg-primary ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Building <span className="text-primary">AI-powered</span> solutions at{' '}
            <a href="https://walkover.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Walkover Web Solutions
            </a>
            . Specializing in LLM integration, RAG pipelines, and intelligent backend systems.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {[
              { icon: <Code2 className="w-5 h-5 text-primary" />, value: "365+", label: "Day Streak", sublabel: "" },
              { icon: <span className="text-xl font-bold text-yellow-400">#1</span>, value: "", label: "GFG Rank", sublabel: "University" },
              { icon: <span className="text-xl font-bold text-green-400">19%</span>, value: "", label: "Top Global", sublabel: "LeetCode" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card px-5 py-3 flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
                <div>
                  {stat.value && <p className="text-2xl font-bold">{stat.value}</p>}
                  <p className={stat.value ? "text-xs text-muted-foreground" : "text-sm font-semibold"}>{stat.label}</p>
                  {stat.sublabel && <p className="text-xs text-muted-foreground">{stat.sublabel}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg glow-effect-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            
            <div className="flex items-center gap-4">
              {[
                { href: "https://github.com/Husainbw786", icon: <Github size={22} />, label: "GitHub" },
                { href: "https://linkedin.com/in/husainbw786", icon: <Linkedin size={22} />, label: "LinkedIn" },
                { href: "mailto:husainbw123@gmail.com", icon: <Mail size={22} />, label: "Email" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
