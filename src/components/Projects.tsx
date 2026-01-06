import { ExternalLink, Github, Bot, Users, FileText, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'AI Screening Tool',
    description:
      'A flexible interview tool backend leveraging OpenAI GPT-4o API for generating personalized questions. Features real-time communication analysis and a high-performance API framework for secure interview management.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'GPT-4o'],
    icon: Bot,
    github: 'https://github.com/Husainbw786/Screening-Tool',
    gradient: 'from-primary to-accent',
  },
  {
    title: 'Employee Data Scraper',
    description:
      'Automated web scraping solution for extracting employee data efficiently. Built with Python for reliable data extraction and processing capabilities.',
    tech: ['Python', 'Web Scraping', 'Data Processing'],
    icon: Users,
    github: 'https://github.com/Husainbw786/Employee-data-Scrapper-main',
    gradient: 'from-accent to-primary',
  },
  {
    title: 'Resume Crafter',
    description:
      'An intelligent resume building tool with AI-powered suggestions for crafting professional resumes tailored to specific job requirements.',
    tech: ['JavaScript', 'Node.js', 'AI Integration'],
    icon: FileText,
    github: 'https://github.com/Husainbw786/Resume-Crafter',
    gradient: 'from-primary to-cyan-400',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Full-stack dashboard application for visualizing and analyzing business metrics with real-time data updates and interactive charts.',
    tech: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
    icon: BarChart3,
    github: 'https://github.com/Husainbw786/Dashboard',
    gradient: 'from-cyan-400 to-accent',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="section-container">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-16">
          <span className="font-mono text-primary">03.</span>
          Featured Projects
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card p-6 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Gradient Glow on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
