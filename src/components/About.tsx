import { Code2, Brain, Database, Zap, Server, GitBranch } from 'lucide-react';

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'Node.js', 'C++', 'SQL'],
  frameworks: ['FastAPI', 'Express.js', 'Flask', 'LangChain', 'OpenCV', 'Pandas', 'NumPy'],
  tools: ['Git', 'GitHub', 'Docker', 'Postman', 'Jupyter', 'VS Code', 'Cursor', 'PyCharm'],
  ai: ['LangChain', 'HuggingFace', 'OpenAI', 'RAG', 'MCP', 'Prompt Engineering', 'AI Agents'],
  databases: ['MongoDB', 'PostgreSQL', 'Redis', 'Vector DBs'],
};

const highlights = [
  { icon: Brain, label: 'AI Engineering', desc: 'LLM Integration & RAG Pipelines' },
  { icon: Server, label: 'Backend Development', desc: 'Node.js, Python & FastAPI' },
  { icon: Database, label: 'Data Systems', desc: 'MongoDB & PostgreSQL' },
  { icon: Zap, label: 'Problem Solving', desc: 'Top 19% LeetCode, #1 GFG' },
  { icon: Code2, label: 'Clean Code', desc: 'DSA & Best Practices' },
  { icon: GitBranch, label: 'Version Control', desc: 'Git & GitHub Expert' },
];

const About = () => {
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
            <p className="text-muted-foreground leading-relaxed">
              I'm a motivated Software Engineer with a passion for building intelligent systems and 
              scalable backend solutions. Currently working as an <span className="text-foreground font-medium">AI Engineer</span> at 
              Walkover Web Solutions, where I lead backend development for AI-powered products.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My expertise lies in integrating Large Language Models, building RAG pipelines, and 
              developing robust APIs. I've worked extensively with <span className="text-primary">LangChain</span>, 
              <span className="text-primary"> HuggingFace</span>, and the <span className="text-primary">Model Context Protocol (MCP)</span> to 
              create intelligent chatbot systems and AI agents that solve real business problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond AI, I'm deeply passionate about Data Structures & Algorithms. I've maintained a 
              <span className="text-primary"> 365+ day streak</span> on coding platforms and achieved 
              <span className="text-primary"> #1 rank among 1,807 students</span> at my university on GeeksForGeeks. 
              I'm also in the <span className="text-primary">top 19% globally</span> on LeetCode.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              {highlights.map((item) => (
                <div key={item.label} className="glass-card p-4 hover:border-primary/50 transition-colors">
                  <item.icon className="w-6 h-6 text-primary mb-2" />
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
                {skills.languages.map((skill) => (
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
                {skills.ai.map((skill) => (
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
                {skills.databases.map((skill) => (
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
                {[...skills.frameworks, ...skills.tools].map((skill) => (
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
