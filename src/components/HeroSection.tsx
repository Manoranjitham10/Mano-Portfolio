import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src="/lovable-uploads/8cea62e1-9cd0-486f-b9e9-238f12bec2dc.png"
                  alt="Mano Ranjitham N"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-background">
                <span className="text-primary-foreground font-bold">AI</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Hi, I'm{' '}
              </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mano Ranjitham N
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Aspiring Software Developer | AI & Data Science Enthusiast
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building impactful AI solutions, full-stack applications, and innovative tools 
              that improve accessibility and efficiency.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              Chennai, Tamil Nadu
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              +91 9788760623
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              manoranjitham104@gmail.com
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-hero"
            >
              Let's Collaborate!
            </button>
            <a
              href="#projects"
              className="btn-outline"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/Manoranjitham10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-primary"
            >
              <Github size={24} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/mano-ranjitham-n-8037bb254/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-accent"
            >
              <Linkedin size={24} className="text-muted-foreground hover:text-accent transition-colors" />
            </a>
            <a
              href="mailto:manoranjitham104@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-primary"
            >
              <Mail size={24} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ArrowDown size={24} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default HeroSection;