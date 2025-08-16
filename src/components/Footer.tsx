import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mano Ranjitham N
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            Aspiring Software Developer passionate about AI, Data Science, and building innovative solutions.
          </p>
          
          <div className="flex justify-center gap-6">
            <a href="mailto:manoranjitham104@gmail.com" className="p-3 rounded-full border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1">
              <Mail size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/mano-ranjitham-n-8037bb254/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <Linkedin size={20} className="text-muted-foreground hover:text-accent transition-colors" />
            </a>
            <a href="https://github.com/Manoranjitham10" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1">
              <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
          
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-primary" /> using React, TypeScript & Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 Mano Ranjitham N. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;