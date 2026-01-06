import { ExternalLink, Github, Bot, Users, FileText, BarChart3, Code, Layers, Cpu, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: React.ComponentType<{ className?: string }>;
  github?: string;
  link?: string;
  gradient: string;
  featured: boolean;
  flagship?: boolean;
  stats?: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    title: 'GTWY.ai - Managed AI Platform',
    description:
      'Built the entire backend for GTWY — an enterprise-grade managed AI platform powering 500K+ active agents and 7M+ automated tasks. Features unified LLM API supporting OpenAI, Anthropic & Gemini with <50ms latency, real-time RAG engine with 98% precision, conversation management, function orchestration, and 2000+ app integrations.',
    tech: ['Node.js', 'FastAPI', 'LangChain', 'MongoDB', 'PostgreSQL', 'RAG', 'OpenAI', 'MCP'],
    icon: Cpu,
    link: 'https://gtwy.ai',
    gradient: 'from-primary via-accent to-cyan-400',
    featured: true,
    flagship: true,
    stats: [
      { label: 'Active Agents', value: '500K+' },
      { label: 'Tasks Automated', value: '7M+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Latency', value: '<50ms' },
    ],
  },
  {
    title: 'AI Screening Tool',
    description:
      'A flexible interview tool backend leveraging OpenAI GPT-4o API for generating personalized questions. Features real-time communication analysis and a high-performance API framework for secure interview management and audio processing.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'GPT-4o', 'WebSocket'],
    icon: Bot,
    github: 'https://github.com/Husainbw786/Screening-Tool',
    gradient: 'from-primary to-accent',
    featured: true,
  },
  {
    title: 'Company Data Scraper',
    description:
      'Automated web scraping solution for extracting company and employee data efficiently. Built with Python for reliable data extraction and processing capabilities.',
    tech: ['Python', 'Web Scraping', 'Data Processing', 'API'],
    icon: Users,
    github: 'https://github.com/Husainbw786/company-scrapper-backend',
    gradient: 'from-accent to-primary',
    featured: true,
  },
  {
    title: 'Resume Crafter',
    description:
      'An intelligent resume building tool with AI-powered suggestions for crafting professional resumes tailored to specific job requirements.',
    tech: ['JavaScript', 'Node.js', 'AI Integration', 'REST API'],
    icon: FileText,
    github: 'https://github.com/Husainbw786/Resume-Crafter',
    gradient: 'from-primary to-cyan-400',
    featured: false,
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Full-stack dashboard application for visualizing and analyzing business metrics with real-time data updates and interactive charts.',
    tech: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
    icon: BarChart3,
    github: 'https://github.com/Husainbw786/Dashboard',
    gradient: 'from-cyan-400 to-accent',
    featured: false,
  },
  {
    title: 'LeetCode Solutions',
    description:
      'Repository of optimized solutions to LeetCode problems, demonstrating proficiency in data structures, algorithms, and competitive programming.',
    tech: ['C++', 'Algorithms', 'Data Structures'],
    icon: Code,
    github: 'https://github.com/Husainbw786/LeetCode',
    gradient: 'from-yellow-400 to-orange-500',
    featured: false,
  },
  {
    title: 'Employee Management System',
    description:
      'A comprehensive system for managing employee data, including CRUD operations, search functionality, and data analytics.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    icon: Layers,
    github: 'https://github.com/Husainbw786/Employee-Management-System',
    gradient: 'from-green-400 to-primary',
    featured: false,
  },
];

const Projects = () => {
  const flagshipProject = projects.find((p) => p.flagship);
  const featuredProjects = projects.filter((p) => p.featured && !p.flagship);
  const otherProjects = projects.filter((p) => !p.featured);

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
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
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
                <div className={`aspect-video rounded-xl bg-gradient-to-br ${project.gradient} p-0.5`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-primary/50" />
                  </div>
                </div>
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
                  <project.icon className="w-5 h-5 text-primary-foreground" />
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
