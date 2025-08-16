import { Github, ExternalLink, Eye, Code2, Cpu, Mic } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Bus Identification for Visually Impaired",
      description: "Developed an AI-based mobile app that detects and recognizes Tamil Nadu bus numbers from live video (95% accuracy) using YOLOv5 and EasyOCR, delivering real-time voice feedback and route information for visually impaired users.",
      technologies: ["Python", "YOLOv8", "EasyOCR", "pyttsx3", "SpeechRecognition", "TensorRT", "ONNX"],
      github_link: "https://github.com/BrandonTang89/Bus_Numbers",
      icon: Eye,
      category: "AI/Computer Vision",
      status: "Completed"
    },
    {
      title: "Chhoti AI – Voice-Driven AI Platform for Cultural Product Creation and Pricing",
      description: "Built a voice-enabled AI platform that improved rural artisans' product listing speed by 70% and pricing accuracy by 40%, enabling easier access to e-commerce through AI-driven voice interaction and multilingual support.",
      technologies: ["Next.js", "FastAPI", "Claude 3", "Web Speech API", "Langdetect"],
      github_link: "https://github.com/Manoranjitham10/Nexathon-cosmos",
      icon: Mic,
      category: "Full-Stack/AI",
      status: "Featured"
    }
  ];

  const getProjectIcon = (icon: any) => {
    const IconComponent = icon;
    return <IconComponent size={24} />;
  };

  return (
    <section id="projects" className="section-container bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Innovative solutions leveraging AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card group hover:scale-105 transition-all duration-300 lg:col-span-1">
              {/* Project Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                    {getProjectIcon(project.icon)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                        project.status === 'Featured' 
                          ? 'bg-accent/10 text-accent border border-accent/20' 
                          : 'bg-primary/10 text-primary border border-primary/20'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 btn-outline flex-1 justify-center"
                >
                  <Github size={16} />
                  View Code
                </a>
                <button className="flex items-center gap-2 btn-accent px-4">
                  <ExternalLink size={16} />
                  Demo
                </button>
              </div>

              {/* Project Stats */}
              <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-primary">
                    {project.title.includes('95%') ? '95%' : '70%'}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {project.title.includes('95%') ? 'Accuracy' : 'Speed Improvement'}
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-accent">
                    {project.title.includes('95%') ? 'Real-time' : '40%'}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {project.title.includes('95%') ? 'Processing' : 'Pricing Accuracy'}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="portfolio-card group border-dashed border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="p-4 rounded-full bg-primary/10 border border-primary/20 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code2 size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-4">
              Currently working on exciting new AI and full-stack projects
            </p>
            <div className="text-sm text-primary font-medium">
              Stay tuned for updates!
            </div>
          </div>
        </div>

        {/* Project Categories */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">Project Categories</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["AI & Computer Vision", "Full-Stack Development", "Data Analytics", "Mobile Applications", "Voice Technology"].map((category, index) => (
              <div key={index} className="achievement-badge">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;