import { ExternalLink } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const CodingProfiles = () => {
  const { coding_profiles } = portfolioData;

  return (
    <section id="coding" className="py-20">
      <div className="section-container">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
          <span className="font-mono text-primary">02.</span>
          Coding Profiles
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {coding_profiles.platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {platform.name}
              </h3>
              <p className="text-sm text-muted-foreground font-mono mb-4">@{platform.username}</p>

              <div className="pt-4 border-t border-border">
                <p className={`text-2xl font-bold ${platform.textColor}`}>{platform.stat}</p>
                <p className="text-xs text-muted-foreground">{platform.statLabel}</p>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 overflow-hidden">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              GitHub Streak
            </h3>
            <img
              src={coding_profiles.github_streak_url}
              alt="GitHub Streak Stats"
              className="w-full"
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=husainbw786&theme=nord_dark";
              }}
            />
          </div>

          <div className="glass-card p-6 overflow-hidden">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Top Languages
            </h3>
            <img
              src={coding_profiles.top_languages_url}
              alt="Top Languages"
              className="w-full"
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = "https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=husainbw786&theme=nord_dark";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
