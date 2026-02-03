import { Briefcase, GraduationCap } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const Experience = () => {
  const { experience } = portfolioData;
  return (
    <section id="experience" className="py-32 bg-secondary/20">
      <div className="section-container">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-16">
          <span className="font-mono text-primary">03.</span>
          Experience
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 mt-6 z-10" />

                {/* Content */}
                <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="glass-card p-6 hover:border-primary/50 transition-colors">
                    {exp.highlight && (
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-mono text-xs font-semibold animate-pulse">
                          ⭐ KEY PROJECT
                        </span>
                        <a
                          href={exp.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-accent/20 text-accent rounded-full font-mono text-xs hover:bg-accent/30 transition-colors"
                        >
                          {exp.projectName} →
                        </a>
                      </div>
                    )}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${exp.highlight ? 'bg-gradient-to-br from-primary/20 to-accent/20' : 'bg-primary/10'}`}>
                        {exp.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-primary" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <p className="text-primary font-mono text-sm">{exp.company}</p>
                        <p className="text-muted-foreground text-sm">
                          {exp.period} • {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
