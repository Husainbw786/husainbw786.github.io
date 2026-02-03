import { Github, Linkedin, Mail, Code2, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/background-beams';
import { TextGenerateEffect } from './ui/text-generate-effect';
import portfolioData from '@/data/portfolio.json';
import * as LucideIcons from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { personal, stats } = portfolioData;

  useEffect(() => {
    const role = personal.roles[currentRole];
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
          setCurrentRole((prev) => (prev + 1) % personal.roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, personal.roles]);

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={22} /> : null;
  };
  const getStatIcon = (iconName: string, className: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className={className || "w-5 h-5"} /> : null;
  };

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

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {personal.name}.
          </motion.h1>

          {/* Animated Subtitle */}
          <TextGenerateEffect
            words={personal.tagline}
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
            dangerouslySetInnerHTML={{ __html: personal.about_short }}
          />

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card px-5 py-3 flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon ? getStatIcon(stat.icon, `${stat.color} w-5 h-5`) : (
                  <span className={`text-xl font-bold ${stat.color}`}>{stat.value}</span>
                )}
                <div>
                  {stat.icon && stat.value && <p className="text-2xl font-bold">{stat.value}</p>}
                  <p className={stat.value && stat.icon ? "text-xs text-muted-foreground" : (!stat.icon ? "text-sm font-semibold" : "text-sm font-semibold")}>{stat.label}</p>
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
              {personal.socials.map((link, index) => (
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
                  {getIcon(link.icon)}
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
