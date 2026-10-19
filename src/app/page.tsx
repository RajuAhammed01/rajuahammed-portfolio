import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <hr className="section-divider" />
        <AboutSection />
        <hr className="section-divider" />
        <SkillsSection />
        <hr className="section-divider" />
        <ProjectsSection />
        <hr className="section-divider" />
        <ResearchSection />
        <hr className="section-divider" />
        <EducationSection />
        <hr className="section-divider" />
        <CertificationsSection />
        <hr className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
