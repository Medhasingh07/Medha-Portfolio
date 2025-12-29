import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import LatestProjectsSection from '@/components/LatestProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat bg-center -z-10 opacity-30"></div>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <LatestProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
