import { Shield, Book, Code, Database, GraduationCap, Award } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2024 – Generative AI Certified Professional",
      provider: "Oracle",
      icon: Shield,
      category: "Cloud & AI",
      description: "Advanced certification in Generative AI technologies and Oracle Cloud Infrastructure"
    },
    {
      title: "Python for Data Science",
      provider: "NPTEL",
      icon: Code,
      category: "Programming",
      description: "Comprehensive certification in Python programming for data science applications"
    },
    {
      title: "Fundamentals of Java Programming",
      provider: "Coursera",
      icon: Book,
      category: "Programming",
      description: "Core Java programming concepts and object-oriented programming principles"
    },
    {
      title: "Data Science for Beginners",
      provider: "NASSCOM",
      icon: Database,
      category: "Data Science",
      description: "Foundation course covering data science methodologies and best practices"
    }
  ];

  const getIconColor = (category: string) => {
    switch (category) {
      case 'Cloud & AI': return 'text-purple-400';
      case 'Programming': return 'text-primary';
      case 'Data Science': return 'text-accent';
      default: return 'text-primary';
    }
  };

  const getBgColor = (category: string) => {
    switch (category) {
      case 'Cloud & AI': return 'bg-purple-500/10 border-purple-500/20';
      case 'Programming': return 'bg-primary/10 border-primary/20';
      case 'Data Science': return 'bg-accent/10 border-accent/20';
      default: return 'bg-primary/10 border-primary/20';
    }
  };

  return (
    <section id="certifications" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Continuous learning and professional development in technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="portfolio-card group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                {/* Certification Icon */}
                <div className={`p-3 rounded-lg ${getBgColor(cert.category)} group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon size={24} className={getIconColor(cert.category)} />
                </div>

                <div className="flex-1">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBgColor(cert.category)}`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Provider */}
                  <p className="text-primary font-medium mb-3">
                    {cert.provider}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Verification Badge */}
                  <div className="mt-4 flex items-center gap-2">
                    <Award size={16} className={getIconColor(cert.category)} />
                    <span className="text-sm font-medium text-foreground">
                      Verified Certification
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <GraduationCap size={28} className="text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold text-primary mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20">
                <Shield size={28} className="text-purple-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-2">1</div>
            <div className="text-sm text-muted-foreground">Professional Cert</div>
          </div>
          
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                <Code size={28} className="text-accent" />
              </div>
            </div>
            <div className="text-2xl font-bold text-accent mb-2">3</div>
            <div className="text-sm text-muted-foreground">Tech Skills</div>
          </div>
          
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Book size={28} className="text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Learning Hours</div>
          </div>
        </div>

        {/* Skill Areas */}
        <div className="mt-12 portfolio-card">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Certified Skill Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Generative AI",
              "Python Programming",
              "Java Development",
              "Data Science",
              "Cloud Infrastructure",
              "Machine Learning",
              "Data Analytics",
              "Problem Solving"
            ].map((skill, index) => (
              <div key={index} className="skill-badge text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-12 text-center">
          <div className="portfolio-card max-w-3xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground">
              "Continuous learning through certifications keeps me updated with the latest 
              technologies and industry best practices, ensuring I can deliver cutting-edge 
              solutions in an ever-evolving tech landscape."
            </blockquote>
            <div className="mt-4 text-primary font-medium">
              - Philosophy on Professional Development
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;