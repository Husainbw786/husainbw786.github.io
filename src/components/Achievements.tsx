import { Trophy, Medal, Flame, Award, Target, BookOpen } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const Achievements = () => {
  const { data } = usePortfolio();

  if (!data) return null;

  const { achievements } = data;

  const getIcon = (iconName: string, className?: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className={className} /> : <LucideIcons.HelpCircle className={className} />;
  };

  return (
    <section id="achievements" className="py-32 bg-secondary/20">
      <div className="section-container">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-16">
          <span className="font-mono text-primary">05.</span>
          Achievements
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 border ${achievement.borderColor}`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${achievement.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                {getIcon(achievement.icon, `w-8 h-8 ${achievement.color}`)}
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
