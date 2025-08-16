import { Brain, Code, Database, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Data Science",
      description: "Passionate about machine learning, computer vision, and intelligent systems"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Extracting insights from data to drive informed decisions"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creating solutions that improve accessibility and efficiency"
    }
  ];

  return (
    <section id="about" className="section-container bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Driven by curiosity and powered by code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Building the Future with AI & Data Science
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Mano, a B.Tech AI & Data Science student passionate about building impactful AI solutions, 
                full-stack applications, and innovative tools that improve accessibility and efficiency. I love 
                solving problems, learning new technologies, and collaborating on meaningful projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As an aspiring Software Developer with strong skills in Python, Java, and full-stack development, 
                I'm seeking to leverage hands-on experience in building scalable, efficient applications to contribute 
                to innovative software solutions. I'm passionate about problem-solving, writing clean code, and 
                continuous learning.
              </p>
            </div>

            {/* Career Highlights */}
            <div className="portfolio-card">
              <h4 className="text-lg font-semibold text-foreground mb-3">Career Objective</h4>
              <p className="text-muted-foreground">
                Aspiring Software Developer with strong skills in Python, Java, and full-stack development. 
                Seeking to leverage hands-on experience in building scalable, efficient applications to contribute 
                to innovative software solutions. Passionate about problem-solving, writing clean code, and 
                continuous learning.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon size={32} className="text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">2+</div>
            <div className="text-sm text-muted-foreground">Years of Learning</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">15+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Hackathons</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">3+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;