import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import VisionMissionSection from './components/VisionMissionSection';
import PillarsSection from './components/PillarsSection';
import StoryTimelineSection from './components/StoryTimelineSection';
import LeadershipSection from './components/LeadershipSection';

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'À Propos - Jamaa United | Construire des Communautés Plus Fortes';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez la mission de Jamaa United pour renforcer les familles et les communautés en République Démocratique du Congo à travers nos trois piliers : Upendo (Amour), Akili (Intelligence), et Matendo (Actions).');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Vision & Mission Section */}
        <VisionMissionSection />
        
        {/* Three Pillars Section */}
        <PillarsSection />
        
        {/* Story Timeline Section */}
        <StoryTimelineSection />
        
        {/* Leadership Philosophy Section */}
        <LeadershipSection />
      </main>
    </div>
  );
};

export default AboutPage;