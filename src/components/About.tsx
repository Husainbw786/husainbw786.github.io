import * as LucideIcons from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const About = () => {
  const { data } = usePortfolio();

  if (!data) return null;

  const { about } = data;
  const { bio_paragraphs, highlights, skills } = about;

  // Helper function to get icon component by name string
  // Helper function to get icon component by name string
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={24} className="mb-2 text-primary" /> : <LucideIcons.HelpCircle size={24} className="mb-2 text-primary" />;
  };

  return (
    <section id="about" className="py-32">
      <div className="section-container">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-16">
          <span className="font-mono text-primary">01.</span>
          About Me
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            {about.bio_paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              {about.highlights.map((item) => (
                <div key={item.label} className="glass-card p-4 hover:border-primary/50 transition-colors">
                  {getIcon(item.icon)}
                  <h4 className="font-semibold text-sm">{item.label}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.skills.languages.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg font-mono text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                AI & ML
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.skills.ai.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-accent/10 text-accent border border-accent/30 rounded-lg font-mono text-sm hover:bg-accent/20 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.skills.databases.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-green-400/10 text-green-400 border border-green-400/30 rounded-lg font-mono text-sm cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full" />
                Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...about.skills.frameworks, ...about.skills.tools].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg font-mono text-sm hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
