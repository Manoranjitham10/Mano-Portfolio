import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import HackathonsSection from '@/components/HackathonsSection';
import AchievementsSection from '@/components/AchievementsSection';
import CertificationsSection from '@/components/CertificationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PersonalitySection from '@/components/PersonalitySection';
import VolunteerSection from '@/components/VolunteerSection';
import PublicationsSection from '@/components/PublicationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PersonalitySection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <HackathonsSection />
      <AchievementsSection />
      <CertificationsSection />
      <PublicationsSection />
      <VolunteerSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
