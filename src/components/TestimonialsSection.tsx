import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Professor / Mentor",
      feedback: "Mano has a great passion for AI and problem-solving. He consistently delivers projects with innovation and precision.",
      role: "Academic Mentor"
    },
    {
      name: "Hackathon Teammate",
      feedback: "Working with Mano was inspiring—he's a strong leader and excellent collaborator who always motivates the team.",
      role: "Team Collaborator"
    }
  ];

  return (
    <section className="section-container bg-section-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">Feedback from mentors and collaborators</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex justify-center mb-4">
                <Quote size={32} className="text-primary" />
              </div>
              <blockquote className="text-muted-foreground text-center mb-6 italic">
                "{testimonial.feedback}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-primary">{testimonial.role}</div>
              </div>
              <div className="flex justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="portfolio-card max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4">My Hobbies & Interests</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Hackathons", "Tech Blogging", "Exploring AI tools", "Gaming", "Travel"].map((hobby, index) => (
                <div key={index} className="skill-badge">{hobby}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;