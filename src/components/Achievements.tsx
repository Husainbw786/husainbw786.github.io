import { Trophy, Medal, Flame, Award } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: '#1 University Rank',
    description: 'Ranked 1st among 1,807 students on GeeksForGeeks platform at Medi-Caps University',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
  },
  {
    icon: Medal,
    title: 'Top 19% on LeetCode',
    description: 'Demonstrated advanced proficiency in problem-solving and coding challenges globally',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Flame,
    title: '365+ Day Streak',
    description: 'Maintained consistent daily practice solving DSA questions on GeeksForGeeks and LeetCode',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
  },
  {
    icon: Award,
    title: 'Postman API Expert',
    description: 'Certified as Postman API Fundamentals Student Expert',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 bg-secondary/20">
      <div className="section-container">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-16">
          <span className="font-mono text-primary">04.</span>
          Achievements
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${achievement.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
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
