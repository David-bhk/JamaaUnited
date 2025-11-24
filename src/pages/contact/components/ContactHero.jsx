import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary/15 via-background to-background pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 -left-10 w-72 h-72 bg-gradient-trust opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-primary opacity-50 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-primary/10 mix-blend-overlay"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-elevated">
              <Icon name="MessageCircle" size={32} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Connectez-vous avec Nous
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Rejoignez notre mouvement communautaire pour renforcer les familles et transformer les communautés. Chaque conversation commence par une simple connexion.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {[
              { icon: 'Clock', label: 'Réponse sous 24 heures' },
              { icon: 'Shield', label: 'Sécurisé et confidentiel' },
              { icon: 'Users', label: 'Axé sur la communauté' }
            ].map((item) => (
              <div key={item.icon} className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur">
                <Icon name={item.icon} size={16} className="text-primary" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;