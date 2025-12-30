import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import LatestProjectsSection from '@/components/LatestProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ExperienceSection from '@/components/ExperienceSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ServicesSection />
        <LatestProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
