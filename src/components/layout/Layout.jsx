import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../ui/Header';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Organization Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <h3 className="text-xl font-heading font-semibold">Jamaa United</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Construire des communautés plus fortes par l'unité familiale.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Liens Rapides</h4>
              <div className="space-y-2">
                <a href="/homepage" className="block text-muted-foreground hover:text-white transition-smooth">
                  Accueil
                </a>
                <a href="/impact-domains" className="block text-muted-foreground hover:text-white transition-smooth">
                  Domaines d'Impact
                </a>
                <a href="/activities" className="block text-muted-foreground hover:text-white transition-smooth">
                  Nos Activités
                </a>
                <a href="/team" className="block text-muted-foreground hover:text-white transition-smooth">
                  Notre Équipe
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Contactez-nous</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Goma, République Démocratique du Congo</p>
                <p>info@jamaaunited.org</p>
                <p>+243 970 123 456</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Jamaa United. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;