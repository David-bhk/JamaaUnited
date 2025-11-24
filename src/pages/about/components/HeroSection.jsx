import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const content = {
    title: "Construire des Communautés Plus Fortes par l'Unité Familiale",
    subtitle: "Jamaa United",
    description: `Jamaa United représente l'idée révolutionnaire que la transformation sociétale commence au sein de l'unité familiale. Nous incarnons la philosophie swahilie de "Jamaa" (famille/communauté) comme fondement de tout changement positif.`,
    pillars: "Nos Trois Piliers",
    upendo: "Upendo",
    upendoDesc: "L'amour comme fondement de toutes les relations",
    akili: "Akili",
    akiliDesc: "L'intelligence guidant nos décisions", 
    matendo: "Matendo",
    matendoDesc: "Les actions créant un changement durable"
  };

  return (
    <section className="relative min-h-screen bg-gradient-warm flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-secondary"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-accent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-primary">
                  {content.subtitle}
                </h2>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                {content.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.description}
              </p>
            </div>

            {/* Three Pillars Preview */}
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {content.pillars}
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg shadow-soft hover:shadow-elevated transition-smooth">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Heart" size={16} className="text-white" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {content.upendo}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {content.upendoDesc}
                  </p>
                </div>

                <div className="bg-card p-4 rounded-lg shadow-soft hover:shadow-elevated transition-smooth">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-sky-500 flex items-center justify-center">
                      <Icon name="Brain" size={16} className="text-white" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {content.akili}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {content.akiliDesc}
                  </p>
                </div>

                <div className="bg-card p-4 rounded-lg shadow-soft hover:shadow-elevated transition-smooth">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                      <Icon name="Zap" size={16} className="text-white" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {content.matendo}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {content.matendoDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=700&fit=crop"
                alt="African family gathering in community setting"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-elevated">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hope to-cyan-500 flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">
                    Familles Servies
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-lg shadow-elevated">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-trust to-blue-600 flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">
                    Communautés
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;