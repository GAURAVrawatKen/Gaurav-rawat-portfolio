import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gaurav Rawat | Software Developer & AI Specialist</title>
        <meta
          name="description"
          content="Portfolio of Gaurav Rawat - BCA student specializing in software development, AI integration, and modern web technologies. Building innovative digital solutions."
        />
        <meta
          name="keywords"
          content="Gaurav Rawat, Software Developer, Web Developer, AI Developer, React, Angular, Python, Portfolio"
        />
        <meta name="author" content="Gaurav Rawat" />
        <link rel="canonical" href="https://gauravrawat.dev" />

        {/* Open Graph */}
        <meta property="og:title" content="Gaurav Rawat | Software Developer & AI Specialist" />
        <meta
          property="og:description"
          content="Portfolio showcasing software development, AI integration, and web technologies expertise."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gauravrawat.dev" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gaurav Rawat | Software Developer & AI Specialist" />
        <meta
          name="twitter:description"
          content="Portfolio showcasing software development, AI integration, and web technologies expertise."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ServicesSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
