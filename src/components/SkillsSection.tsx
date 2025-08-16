import { 
  Code, 
  Globe, 
  Brain, 
  Wrench, 
  Database, 
  Users,
  MessageCircle,
  Target,
  Zap,
  Heart
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java"],
      color: "primary"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "Firebase"],
      color: "accent"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Scikit-learn", "TensorFlow", "OpenCV", "YOLOv5/v8", "EasyOCR"],
      color: "primary"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "Github", "Power BI", "VS Code", "Google Colab"],
      color: "accent"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL"],
      color: "primary"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Communication", "Teamwork", "Leadership", "Problem-solving", "Adaptability"],
      color: "accent"
    }
  ];

  const getIconForCategory = (title: string) => {
    switch (title) {
      case "Programming Languages": return Code;
      case "Web Technologies": return Globe;
      case "AI & Machine Learning": return Brain;
      case "Tools & Platforms": return Wrench;
      case "Databases": return Database;
      case "Soft Skills": return Users;
      default: return Code;
    }
  };

  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${category.color === 'primary' ? 'bg-primary/10 border border-primary/20' : 'bg-accent/10 border border-accent/20'}`}>
                  <category.icon size={24} className={category.color === 'primary' ? 'text-primary' : 'text-accent'} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Proficiency Visualization */}
        <div className="mt-16 portfolio-card">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            Technical Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: "Python", level: 90 },
              { skill: "Machine Learning", level: 85 },
              { skill: "Data Analysis", level: 88 },
              { skill: "Web Development", level: 75 },
              { skill: "Java", level: 80 },
              { skill: "Computer Vision", level: 82 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
            <Heart size={20} className="text-primary" />
            <span className="text-primary font-medium">
              Always learning, always growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;