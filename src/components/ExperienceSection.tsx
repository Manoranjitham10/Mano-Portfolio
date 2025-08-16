import { Briefcase, Calendar, MapPin, TrendingUp, Users, BarChart3 } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    role: "Data Analyst Intern",
    company: "Retech Solutions Pvt. Ltd.",
    location: "Chennai, India",
    duration: "Jun 2024 - Jul 2024",
    highlights: [
      "Developed and deployed interactive Power BI dashboards integrating Pandas-processed datasets to monitor social media engagement across 5+ platforms, improving insight accessibility by 40%.",
      "Performed advanced sentiment analysis on 10K+ user comments using NLP techniques, identifying key engagement trends and driving 15% improvement in content strategy effectiveness."
    ]
  };

  const achievements = [
    { icon: BarChart3, value: "40%", label: "Improved Insight Accessibility" },
    { icon: TrendingUp, value: "15%", label: "Content Strategy Improvement" },
    { icon: Users, value: "10K+", label: "User Comments Analyzed" },
    { icon: BarChart3, value: "5+", label: "Platforms Monitored" }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Real-world application of data science and analytics skills
          </p>
        </div>

        <div className="timeline-item">
          <div className="portfolio-card ml-8 hover:scale-105 transition-transform duration-300">
            {/* Experience Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Briefcase size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {experience.role}
                  </h3>
                  <p className="text-primary font-medium text-lg">
                    {experience.company}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {experience.duration}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <span className="text-accent font-medium">Internship</span>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
              <div className="space-y-4">
                {experience.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
                  <achievement.icon size={28} className="text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent mb-2">
                {achievement.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Applied */}
        <div className="mt-12 portfolio-card">
          <h4 className="text-lg font-semibold text-foreground mb-6">Technologies & Skills Applied</h4>
          <div className="flex flex-wrap gap-3">
            {["Power BI", "Pandas", "Python", "NLP", "Sentiment Analysis", "Data Visualization", "Social Media Analytics", "Dashboard Development"].map((skill, index) => (
              <div key={index} className="skill-badge">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Quote */}
        <div className="mt-12 text-center">
          <div className="portfolio-card max-w-3xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground">
              "This internship provided invaluable hands-on experience in real-world data analytics, 
              allowing me to apply theoretical knowledge to solve practical business challenges and 
              deliver measurable impact."
            </blockquote>
            <div className="mt-4 text-primary font-medium">
              - Reflection on Professional Growth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;