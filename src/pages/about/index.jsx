import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
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
      <Header />
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
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Organization Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold">Jamaa United</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Construire des communautés plus fortes par l'unité familiale, guidés par Upendo, Akili et Matendo.
              </p>
            </div>
            
            {/* Liens Rapides */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Liens Rapides</h4>
              <div className="space-y-2">
                <a href="/homepage" className="block text-gray-300 hover:text-white transition-smooth">
                  Accueil
                </a>
                <a href="/impact-domains" className="block text-gray-300 hover:text-white transition-smooth">
                  Domaines d'Impact
                </a>
                <a href="/activities" className="block text-gray-300 hover:text-white transition-smooth">
                  Nos Activités
                </a>
                <a href="/team" className="block text-gray-300 hover:text-white transition-smooth">
                  Notre Équipe
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Contactez-nous</h4>
              <div className="space-y-2 text-gray-300">
                <p>Goma, République Démocratique du Congo</p>
                <p>info@jamaaunited.org</p>
                <p>+243 XXX XXX XXX</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Jamaa United. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;