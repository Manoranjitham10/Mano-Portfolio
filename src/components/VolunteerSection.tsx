import { Calendar, MapPin, Users, Award, TrendingUp, Clock } from 'lucide-react';

const VolunteerSection = () => {
  const activities = [
    {
      role: "Tech Workshop Mentor",
      organization: "Local Community Center",
      duration: "2023 - Present",
      description: "Teaching basic programming and AI concepts to underprivileged students, helping bridge the digital divide",
      impact: "Mentored 50+ students",
      skills: ["Teaching", "Python", "Community Outreach"]
    },
    {
      role: "Student Ambassador",
      organization: "Panimalar Engineering College",
      duration: "2023 - 2024",
      description: "Representing the college in various tech events and helping new students adapt to college life",
      impact: "Guided 200+ freshers",
      skills: ["Leadership", "Public Speaking", "Event Management"]
    },
    {
      role: "Open Source Contributor",
      organization: "Various GitHub Projects",
      duration: "2022 - Present", 
      description: "Contributing to open-source AI and data science projects, helping improve accessibility tools",
      impact: "15+ contributions",
      skills: ["Git", "Collaboration", "Code Review"]
    }
  ];

  const causes = [
    "Digital Literacy for All",
    "AI Ethics & Accessibility", 
    "Women in Tech",
    "Environmental Sustainability",
    "Education Technology"
  ];

  return (
    <section id="volunteer" className="section-container bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Volunteer Experience</h2>
          <p className="section-subtitle">
            Giving back to the community through technology and mentorship
          </p>
        </div>

        {/* Volunteer Activities */}
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="timeline-item">
              <div className="portfolio-card ml-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <Users size={24} className="text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {activity.role}
                      </h3>
                      <p className="text-accent font-medium mb-2">
                        {activity.organization}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar size={16} />
                        {activity.duration}
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {activity.description}
                      </p>
                      
                      {/* Impact */}
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp size={16} className="text-primary" />
                        <span className="text-primary font-medium">{activity.impact}</span>
                      </div>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {activity.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-badge text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Users size={28} className="text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold text-primary mb-2">250+</div>
            <div className="text-sm text-muted-foreground">People Impacted</div>
          </div>
          
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                <Clock size={28} className="text-accent" />
              </div>
            </div>
            <div className="text-2xl font-bold text-accent mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Volunteer Hours</div>
          </div>
          
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Award size={28} className="text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Active Roles</div>
          </div>
        </div>

        {/* Causes I Support */}
        <div className="mt-12 portfolio-card">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Causes I'm Passionate About
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {causes.map((cause, index) => (
              <div key={index} className="achievement-badge">
                {cause}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="portfolio-card max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Let's Make a Difference Together
            </h3>
            <p className="text-muted-foreground mb-6">
              I believe in using technology as a force for good. If you're working on projects 
              that create positive social impact or promote accessibility, I'd love to collaborate.
            </p>
            <button className="btn-accent">
              Connect for Social Impact Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;