import { Award, Trophy, Star, Crown } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Winner – Web Design Competition at National level tech fest",
      icon: Crown,
      category: "Design Excellence",
      description: "Recognized for outstanding web design skills at a prestigious national technology festival"
    },
    {
      title: "Winner – Coding Contest at IEEE Day 2023",
      icon: Trophy,
      category: "Programming",
      description: "Demonstrated exceptional coding abilities and problem-solving skills in IEEE competition"
    },
    {
      title: "2nd Runner-Up – Poster Presentation at PECTEAM 2023",
      icon: Award,
      category: "Presentation",
      description: "Achieved third place for innovative poster presentation showcasing technical project"
    }
  ];

  const getIconColor = (index: number) => {
    const colors = ['text-yellow-400', 'text-primary', 'text-accent'];
    return colors[index % colors.length];
  };

  const getBgColor = (index: number) => {
    const colors = [
      'bg-yellow-500/10 border-yellow-500/20',
      'bg-primary/10 border-primary/20',
      'bg-accent/10 border-accent/20'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="achievements" className="section-container bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Achievements & Recognition</h2>
          <p className="section-subtitle">
            Awards and recognition for excellence in technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="portfolio-card group hover:scale-105 transition-all duration-300">
              {/* Achievement Icon */}
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full ${getBgColor(index)} group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon size={32} className={getIconColor(index)} />
                </div>
              </div>

              {/* Category Badge */}
              <div className="text-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBgColor(index)}`}>
                  {achievement.category}
                </span>
              </div>

              {/* Achievement Title */}
              <h3 className="text-lg font-semibold text-foreground text-center mb-4 leading-tight">
                {achievement.title}
              </h3>

              {/* Achievement Description */}
              <p className="text-muted-foreground text-center text-sm leading-relaxed">
                {achievement.description}
              </p>

              {/* Achievement Highlight */}
              <div className="mt-6 pt-4 border-t border-border text-center">
                <div className="flex items-center justify-center gap-2">
                  <Star size={16} className={getIconColor(index)} />
                  <span className="text-sm font-medium text-foreground">
                    Competitive Achievement
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 portfolio-card">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Achievement Highlights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                    <Crown size={24} className="text-yellow-400" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">Design Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  National recognition for web design innovation and creativity
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <Trophy size={24} className="text-primary" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">Programming Mastery</h4>
                <p className="text-sm text-muted-foreground">
                  IEEE competition winner showcasing algorithmic thinking
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                    <Award size={24} className="text-accent" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">Communication Skills</h4>
                <p className="text-sm text-muted-foreground">
                  Effective presentation and technical communication abilities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Timeline */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-8">Recognition Timeline</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="achievement-badge">2023 - IEEE Day Winner</div>
            <div className="hidden md:block w-8 h-0.5 bg-primary"></div>
            <div className="achievement-badge">2023 - PECTEAM Runner-Up</div>
            <div className="hidden md:block w-8 h-0.5 bg-primary"></div>
            <div className="achievement-badge">National Design Winner</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;