import React, { useEffect } from 'react';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import FAQ from './components/FAQ';

const ContactPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact - Jamaa United | Construire des Communautés Plus Fortes';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contactez Jamaa United pour en savoir plus sur nos programmes de renforcement familial et communautaire en République Démocratique du Congo.');
    }
  }, []);

  return (
    <div className="bg-background">
      <ContactHero />
      <main className="relative z-10 -mt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form and Info Section */}
          <section className="mb-16 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div className="lg:col-span-1">
                <ContactInfo />
              </div>
            </div>
          </section>

          {/* Location Map Section */}
          <section className="mb-16 lg:mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                Trouvez-Nous
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Situé au cœur de Goma, notre centre communautaire est facilement accessible et accueille les visiteurs de tous horizons.
              </p>
            </div>
            <LocationMap />
          </section>

          {/* FAQ Section */}
          <section className="mb-16 lg:mb-24">
            <FAQ />
          </section>

          {/* Call to Action Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
                Prêt à Faire la Différence?
              </h2>
              <p className="text-xl lg:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
                Rejoignez notre communauté de familles et de leaders travaillant ensemble pour créer un changement positif. Chaque voyage commence par un seul pas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/activities" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-smooth shadow-soft"
                >
                  Explorer les Programmes
                </a>
                <a 
                  href="/team" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-smooth"
                >
                  Rencontrer Notre Équipe
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;