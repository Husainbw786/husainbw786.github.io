import { ExternalLink, Github, Bot, Users, FileText, BarChart3, Code, Layers, Cpu, Globe } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';
import * as LucideIcons from 'lucide-react';

const Projects = () => {
  const { projects } = portfolioData;
  const flagshipProject = projects.find((p) => p.flagship);
  const featuredProjects = projects.filter((p) => p.featured && !p.flagship);
  const otherProjects = projects.filter((p) => !p.featured);

  const getIcon = (iconName: string, className?: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className={className} /> : null;
  };

  return (
    <section id="projects" className="py-32">
      <div className="section-container">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-16">
          <span className="font-mono text-primary">04.</span>
          Featured Projects
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        {/* Flagship Project - GTWY */}
        {flagshipProject && (
          <div className="mb-20">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-cyan-400/20 blur-3xl -z-10" />

              <div className="glass-card border-primary/30 p-8 md:p-12 relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent" />

                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-mono text-xs font-semibold tracking-wider animate-pulse">
                    🚀 FLAGSHIP PROJECT
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full font-mono text-xs">
                    Built Entire Backend
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                      {flagshipProject.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {flagshipProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {flagshipProject.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full font-mono text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={flagshipProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      <Globe size={18} />
                      Visit GTWY.ai
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {flagshipProject.stats?.map((stat, i) => (
                      <div key={i} className="glass-card p-6 text-center hover:border-primary/50 transition-colors">
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="glass-card p-6 mb-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={22} />
                    </a>
                  )}
                  <a
                    href={project.github || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                {project.title.includes('ViaSocket') ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    <div className={`aspect-video rounded-xl bg-gradient-to-br ${project.gradient} p-0.5 hover:scale-105 transition-transform duration-300`}>
                      <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                        <img
                          src="/viasocket-logo.png"
                          alt="ViaSocket Logo"
                          className="w-48 h-auto object-contain"
                        />
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className={`aspect-video rounded-xl bg-gradient-to-br ${project.gradient} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      {getIcon(project.icon, "w-16 h-16 text-primary/50")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-semibold text-center mb-8">Other Noteworthy Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                  {getIcon(project.icon, "w-5 h-5 text-primary-foreground")}
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-muted text-muted-foreground rounded font-mono text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Husainbw786?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-mono hover:bg-primary/10 transition-colors"
          >
            View All Projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
