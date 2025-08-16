import { Code, Users, Target, Lightbulb, Rocket, Star } from 'lucide-react';

const PersonalitySection = () => {
  const traits = [
    {
      icon: Lightbulb,
      title: "Innovative Thinker",
      description: "Constantly exploring new technologies and creative solutions to complex problems"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Thrives in collaborative environments and enjoys mentoring fellow developers"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality solutions with measurable impact"
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quick to adapt to new frameworks and technologies in the rapidly evolving tech landscape"
    }
  ];

  const values = [
    "Innovation & Creativity",
    "Continuous Learning",
    "Quality Code",
    "User-Centric Design",
    "Ethical AI Development",
    "Open Source Contribution"
  ];

  return (
    <section id="personality" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Personality & Values</h2>
          <p className="section-subtitle">
            What drives me as a developer and innovator
          </p>
        </div>

        {/* Personality Traits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {traits.map((trait, index) => (
            <div key={index} className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                  <trait.icon size={28} className="text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {trait.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {trait.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="portfolio-card">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Core Values & Principles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors duration-300">
                <Star size={16} className="text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 text-center">
          <div className="portfolio-card max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              My Mission
            </h3>
            <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
              "To leverage the power of artificial intelligence and data science to create innovative solutions 
              that make technology more accessible, improve people's lives, and contribute to a more 
              inclusive digital future. I believe in writing clean, efficient code and building applications 
              that not only solve problems but also inspire others to pursue technology."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalitySection;