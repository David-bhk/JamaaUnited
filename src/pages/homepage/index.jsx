import React from 'react';
import PageTitle from '../../components/shared/PageTitle';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import ImpactMetrics from './components/ImpactMetrics';
import CommunityStories from './components/CommunityStories';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  const pageDescription = 'Construire des Communautés Plus Fortes par le Développement Centré sur la Famille';

  return (
    <div className="min-h-screen bg-background">
      <PageTitle 
        title="Accueil" 
        description={pageDescription}
      />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Three Pillars Section */}
        <PillarsSection />

        {/* Impact Metrics Section */}
        <ImpactMetrics />

        {/* Community Stories Section */}
        <CommunityStories />

        {/* Call to Action Section */}
        <CallToAction />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-soft">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">Jamaa United</h3>
                  <p className="text-sm opacity-80">
                    Construire des Communautés Plus Fortes
                  </p>
                </div>
              </div>
              <p className="text-background/80 leading-relaxed mb-4">
                Autonomiser les familles et les communautés par l'Amour, l'Intelligence et l'Action. Ensemble, nous créons un changement positif durable à Goma et au-delà.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">
                Liens Rapides
              </h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="/about" className="hover:text-background transition-colors">À Propos</a></li>
                <li><a href="/impact-domains" className="hover:text-background transition-colors">Domaines d'Impact</a></li>
                <li><a href="/activities" className="hover:text-background transition-colors">Nos Activités</a></li>
                <li><a href="/team" className="hover:text-background transition-colors">Notre Équipe</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold mb-4">
                Contact
              </h4>
              <div className="space-y-2 text-background/80">
                <p>Goma, Nord-Kivu</p>
                <p>République Démocratique du Congo</p>
                <p>+243 123 456 789</p>
                <p>contact@jamaaunited.org</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; {new Date()?.getFullYear()} Jamaa United. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;