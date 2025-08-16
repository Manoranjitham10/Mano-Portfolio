import { Trophy, Medal, Award, Users, Calendar, MapPin, Code } from 'lucide-react';

const HackathonsSection = () => {
  const hackathons = [
    {
      event: "Meesho Scripted By Her Hackathon",
      achievement: "Top 50 Finalist",
      level: "finalist",
      icon: Trophy,
      description: "Selected among top 50 participants in a competitive women-focused hackathon by Meesho"
    },
    {
      event: "Flipkart Grid 7.0",
      achievement: "Semi-Finalist",
      level: "semifinalist",
      icon: Medal,
      description: "Advanced to semi-finals in Flipkart's premier engineering challenge"
    },
    {
      event: "NEXATHON'25 – VIT Chennai",
      achievement: "Participant",
      level: "participant",
      icon: Code,
      project: "Chhoti AI – Voice-Driven AI Platform",
      description: "Developed innovative voice-enabled AI platform for rural artisans"
    },
    {
      event: "Vertex Innovate'25 – VIT Vellore",
      achievement: "Participant",
      level: "participant",
      icon: Award,
      description: "Participated in VIT Vellore's premier innovation hackathon"
    },
    {
      event: "Get It Done (GIDY) Hackathon",
      achievement: "Participant",
      level: "participant",
      icon: Users,
      project: "Smart Garbage Reward System",
      description: "Built an innovative solution for environmental sustainability"
    }
  ];

  const getAchievementColor = (level: string) => {
    switch (level) {
      case 'finalist': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'semifinalist': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  const getIconColor = (level: string) => {
    switch (level) {
      case 'finalist': return 'text-yellow-400';
      case 'semifinalist': return 'text-orange-400';
      default: return 'text-primary';
    }
  };

  return (
    <section id="hackathons" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Hackathons & Competitions</h2>
          <p className="section-subtitle">
            Showcasing innovation and problem-solving in competitive environments
          </p>
        </div>

        {/* Hackathon Timeline */}
        <div className="relative">
          <div className="space-y-6">
            {hackathons.map((hackathon, index) => (
              <div key={index} className="timeline-item">
                <div className="portfolio-card ml-8 group hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`p-3 rounded-lg bg-primary/10 border border-primary/20`}>
                        <hackathon.icon size={24} className={getIconColor(hackathon.level)} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {hackathon.event}
                        </h3>
                        
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${getAchievementColor(hackathon.level)}`}>
                          <Trophy size={14} />
                          {hackathon.achievement}
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {hackathon.description}
                        </p>
                        
                        {hackathon.project && (
                          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                            <h4 className="text-sm font-medium text-accent mb-1">Project:</h4>
                            <p className="text-sm text-muted-foreground">{hackathon.project}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                <Trophy size={28} className="text-yellow-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Hackathons</div>
          </div>
          
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-500/10 border border-orange-500/20">
                <Medal size={28} className="text-orange-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-2">2</div>
            <div className="text-sm text-muted-foreground">Top Placements</div>
          </div>
          
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Code size={28} className="text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                <Users size={28} className="text-accent" />
              </div>
            </div>
            <div className="text-2xl font-bold text-accent mb-2">48h</div>
            <div className="text-sm text-muted-foreground">Avg Duration</div>
          </div>
        </div>

        {/* Key Skills Developed */}
        <div className="mt-12 portfolio-card">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Skills Developed Through Hackathons
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Rapid Prototyping",
              "Team Collaboration",
              "Time Management",
              "Problem Solving",
              "Presentation Skills",
              "Innovation Thinking"
            ].map((skill, index) => (
              <div key={index} className="skill-badge text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 text-center">
          <div className="portfolio-card max-w-3xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground">
              "Hackathons have been instrumental in developing my ability to work under pressure, 
              collaborate effectively with diverse teams, and transform innovative ideas into 
              working prototypes within tight deadlines."
            </blockquote>
            <div className="mt-4 text-primary font-medium">
              - On the Value of Competitive Programming
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;