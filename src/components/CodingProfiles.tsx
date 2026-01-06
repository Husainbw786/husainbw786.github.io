import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'LeetCode',
    username: 'husain_bw',
    url: 'https://leetcode.com/husain_bw/',
    stat: 'Top 19%',
    statLabel: 'Global Ranking',
    color: 'bg-[#FFA116]',
    textColor: 'text-[#FFA116]',
  },
  {
    name: 'GeeksforGeeks',
    username: 'husain_bw',
    url: 'https://auth.geeksforgeeks.org/user/husain_bw',
    stat: '#1',
    statLabel: 'University Rank',
    color: 'bg-[#2F8D46]',
    textColor: 'text-[#2F8D46]',
  },
  {
    name: 'HackerRank',
    username: 'husainhackerrank',
    url: 'https://www.hackerrank.com/husainhackerrank',
    stat: '5★',
    statLabel: 'Problem Solving',
    color: 'bg-[#2EC866]',
    textColor: 'text-[#2EC866]',
  },
];

const CodingProfiles = () => {
  return (
    <section id="coding" className="py-20">
      <div className="section-container">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
          <span className="font-mono text-primary">02.</span>
          Coding Profiles
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {platforms.map((platform) => (
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
              src="https://github-readme-streak-stats.herokuapp.com/?user=husainbw786&currStreakNum=2FD3EB&fire=pink&sideLabels=F00&theme=nightowl&hide_border=true&background=00000000"
              alt="GitHub Streak Stats"
              className="w-full"
              loading="lazy"
            />
          </div>
          
          <div className="glass-card p-6 overflow-hidden">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Top Languages
            </h3>
            <img
              src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=husainbw786&theme=nightowl&layout=compact&hide_border=true&bg_color=00000000"
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
