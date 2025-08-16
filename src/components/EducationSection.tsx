import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech. Artificial Intelligence and Data Science",
      institution: "Panimalar Engineering College",
      year: "Expected 2026",
      status: "current",
      description: "Specializing in machine learning, deep learning, data analytics, and AI applications"
    },
    {
      degree: "HSC",
      institution: "Ananthavalli Mat. Hr. Sec. School",
      year: "2021 - 2022",
      status: "completed",
      description: "Higher Secondary Certificate with focus on Mathematics and Science"
    },
    {
      degree: "SSLC",
      institution: "Ananthavalli Mat. Hr. Sec. School",
      year: "2019 - 2020",
      status: "completed",
      description: "Secondary School Leaving Certificate"
    }
  ];

  return (
    <section id="education" className="section-container bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic journey in technology and innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="portfolio-card ml-8 hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${edu.status === 'current' ? 'bg-primary/10 border border-primary/20' : 'bg-accent/10 border border-accent/20'}`}>
                        <GraduationCap size={24} className={edu.status === 'current' ? 'text-primary' : 'text-accent'} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'current' 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'bg-accent/10 text-accent border border-accent/20'
                    }`}>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {edu.year}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {edu.description}
                  </p>
                  
                  {edu.status === 'current' && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      Currently Pursuing
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Education Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="portfolio-card text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <GraduationCap size={32} className="text-primary" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Academic Focus
            </h4>
            <p className="text-muted-foreground">
              Specializing in Artificial Intelligence, Data Science, and Machine Learning 
              with hands-on experience in real-world applications.
            </p>
          </div>
          
          <div className="portfolio-card text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                <MapPin size={32} className="text-accent" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Location
            </h4>
            <p className="text-muted-foreground">
              Chennai, Tamil Nadu - At the heart of India's technology hub, 
              surrounded by innovation and opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;