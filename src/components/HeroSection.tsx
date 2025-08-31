import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-scale-in" style={{ animationDelay: '0.3s' }}>
                Welcome to My Portfolio
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Hi, I'm{' '}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Mano Ranjitham N
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.7s' }}>
                Aspiring Software Developer | AI & Data Science Enthusiast
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                Passionate about building impactful AI solutions, full-stack applications, and innovative tools 
                that improve accessibility and efficiency.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <MapPin size={16} className="text-primary" />
                Chennai, Tamil Nadu
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" />
                +91 9788760623
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" />
                manoranjitham104@gmail.com
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '1.1s' }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-hero hover:scale-105 transition-transform duration-300 group"
              >
                <Mail size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                Let's Collaborate!
              </button>
              <a
                href="#projects"
                className="btn-outline hover:scale-105 transition-transform duration-300 group"
              >
                <Download size={20} className="mr-2 group-hover:translate-y-1 transition-transform" />
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 animate-fade-in" style={{ animationDelay: '1.3s' }}>
              <a
                href="https://github.com/Manoranjitham10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mano-ranjitham-n-8037bb254/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:manoranjitham104@gmail.com"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/lovable-uploads/67cc23d8-1688-4042-9648-314f59adf40e.png"
                  alt="Mano Ranjitham N - Software Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute top-10 -right-6 w-20 h-20 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-10 -left-6 w-16 h-16 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg animate-pulse">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform"
        >
          <ChevronDown size={24} className="text-primary" />
        </button>
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