import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const Experience = () => {
  const { data } = usePortfolio();

  if (!data) return null;

  const { experience } = data;

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 blur-3xl -z-10" />

      <div className="section-container">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-16">
          <span className="font-mono text-primary">02.</span>
          Where I've Worked
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors group"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {job.title}
                  </h3>
                  <span className="text-sm text-muted-foreground flex items-center gap-2 whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    {job.period}
                  </span>
                </div>

                <h4 className="text-lg font-medium text-primary mb-1">
                  @ {job.company}
                </h4>

                <p className="text-sm text-muted-foreground flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </p>
                <ul className="space-y-3">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">▹</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default Experience;
