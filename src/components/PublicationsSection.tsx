import { BookOpen, Award, Calendar, ExternalLink, Star, Trophy } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: "AI-Powered Accessibility Solutions for Visual Impairment",
      type: "Conference Paper",
      venue: "National Conference on Emerging Technologies",
      date: "2024",
      status: "Published",
      description: "Research paper on implementing computer vision and natural language processing for creating assistive technologies for visually impaired individuals.",
      coAuthors: ["Dr. Sarah Kumar", "Prof. Rajesh Patel"],
      keywords: ["Computer Vision", "Accessibility", "AI Ethics", "YOLOv8"]
    },
    {
      title: "Voice-Driven E-commerce Platforms for Rural Communities",
      type: "Workshop Paper", 
      venue: "IEEE Student Conference on Technology and Society",
      date: "2024",
      status: "Under Review",
      description: "Analysis of implementing voice interfaces to bridge the digital divide and empower rural artisans in e-commerce platforms.",
      coAuthors: ["Priya Sharma", "Dr. Vikram Singh"],
      keywords: ["Voice Technology", "Digital Inclusion", "Rural Development", "AI Ethics"]
    }
  ];

  const blogs = [
    {
      title: "Making AI Accessible: Lessons from Building for Visually Impaired Users",
      platform: "Medium",
      date: "March 2024",
      views: "1.2K",
      topic: "AI Ethics & Accessibility"
    },
    {
      title: "Getting Started with Computer Vision: A Beginner's Guide to YOLOv8",
      platform: "Dev.to",
      date: "February 2024", 
      views: "850",
      topic: "Technical Tutorial"
    },
    {
      title: "My Journey from Zero to AI: Learning Data Science in College",
      platform: "LinkedIn Articles",
      date: "January 2024",
      views: "2.1K",
      topic: "Career Journey"
    }
  ];

  return (
    <section id="publications" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">Publications & Writings</h2>
          <p className="section-subtitle">
            Sharing knowledge through research papers and technical blogs
          </p>
        </div>

        {/* Research Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Research Publications
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="portfolio-card group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <BookOpen size={24} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {pub.title}
                        </h4>
                        <p className="text-accent font-medium mb-1">{pub.venue}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {pub.date}
                          </div>
                          <span className="text-primary font-medium">{pub.type}</span>
                        </div>
                      </div>
                      
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        pub.status === 'Published' 
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                          : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                      }`}>
                        {pub.status}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{pub.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-sm font-medium text-foreground">Co-Authors: </span>
                      <span className="text-sm text-muted-foreground">
                        {pub.coAuthors.join(", ")}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {pub.keywords.map((keyword, keyIndex) => (
                        <span key={keyIndex} className="skill-badge text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Technical Blog Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div key={index} className="portfolio-card group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                    <ExternalLink size={20} className="text-accent" />
                  </div>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                  {blog.title}
                </h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary font-medium">{blog.platform}</span>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400" />
                      <span className="text-sm text-muted-foreground">{blog.views} views</span>
                    </div>
                  </div>
                  
                  <div className="achievement-badge text-center">
                    {blog.topic}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Writing Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <BookOpen size={28} className="text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Research Papers</div>
          </div>
          
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                <ExternalLink size={28} className="text-accent" />
              </div>
            </div>
            <div className="text-2xl font-bold text-accent mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Blog Posts</div>
          </div>
          
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Star size={28} className="text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold text-primary mb-2">4K+</div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </div>
          
          <div className="portfolio-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                <Trophy size={28} className="text-accent" />
              </div>
            </div>
            <div className="text-2xl font-bold text-accent mb-2">3</div>
            <div className="text-sm text-muted-foreground">Writing Awards</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="portfolio-card max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Love Reading About AI & Tech?
            </h3>
            <p className="text-muted-foreground mb-6">
              I regularly write about AI accessibility, emerging technologies, and my learning journey. 
              Follow my blog for insights on making technology more inclusive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Follow My Blog
              </button>
              <button className="btn-outline">
                Collaborate on Research
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;