import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'AI Engineer',
    company: 'Walkover Web Solutions',
    period: 'June 2024 - Present',
    location: 'Indore',
    type: 'work',
    points: [
      'Led backend development of gtwy.ai, enhancing advanced AI API support for conversation management',
      'Optimized LLM integration and backend API performance using Node.js, Express.js, and FastAPI',
      'Designed and implemented robust APIs for chatbot and playground systems with Pydantic validation',
      'Managed scalable data storage with MongoDB for LLM configs and PostgreSQL for chat analytics',
      'Integrated GenAI features using LangChain workflows, HuggingFace models, and MCP',
      'Implemented RAG pipelines and built AI agents with tool interaction and reasoning capabilities',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Walkover Web Solutions',
    period: 'January 2024 - May 2024',
    location: 'Indore',
    type: 'work',
    points: [
      'Mastered sophisticated Git features, contributing to 15% increase in codebase efficiency',
      'Assisted in developing features, boosting user engagement by 20% using Node.js and Python',
      'Refactored project architecture from Node.js to Python/FastAPI, achieving 25% improvement in LLM integration',
    ],
  },
  {
    title: 'B.Tech Computer Science',
    company: 'Medi-Caps University',
    period: '2020 - 2024',
    location: 'Indore',
    type: 'education',
    points: ['CGPA: 8.8/10', 'Ranked #1 on GeeksForGeeks among 1,807 university students'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-secondary/20">
      <div className="section-container">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-16">
          <span className="font-mono text-primary">02.</span>
          Experience
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 mt-6 z-10" />

                {/* Content */}
                <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="glass-card p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
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
