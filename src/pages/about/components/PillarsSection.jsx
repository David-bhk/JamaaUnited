import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { pillarsData } from '../../../content/pillars';

const PillarsSection = () => {
  const [activePillar, setActivePillar] = useState(0);

  const content = {
    sectionTitle: "Nos Trois Piliers",
    subtitle: "Upendo – Akili – Matendo",
    description: "Ces trois piliers interconnectés forment la fondation de notre approche de transformation communautaire. Chaque pilier représente un élément crucial dans la construction de familles et communautés plus fortes."
  };
  const currentPillar = pillarsData[activePillar] ?? pillarsData[0];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            {content.sectionTitle}
          </h2>
          <h3 className="text-xl lg:text-2xl font-accent font-semibold text-primary mb-6">
            {content.subtitle}
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Pillars Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-card p-2 rounded-xl shadow-soft">
            {pillarsData.map((pillar, index) => (
              <button
                key={index}
                onClick={() => setActivePillar(index)}
                className={`px-6 py-3 rounded-lg font-heading font-semibold transition-smooth ${
                  activePillar === index
                    ? 'bg-gradient-to-r ' + pillar.color + ' text-white shadow-soft'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {pillar?.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Pillar Content */}
        <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${currentPillar.color} flex items-center justify-center shadow-soft`}>
                      <Icon name={currentPillar.icon} size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-heading font-bold text-foreground">
                        {currentPillar.name}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {currentPillar.translation}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentPillar.description}
                  </p>
                </div>

                {/* Principles */}
                <div className="space-y-4">
                  <h4 className="text-xl font-heading font-semibold text-foreground">
                    Principes Clés
                  </h4>
                  <div className="space-y-3">
                    {currentPillar.principles.map((principle, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${currentPillar.color} flex items-center justify-center mt-0.5`}>
                          <Icon name="Check" size={14} className="text-white" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {principle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className={`p-6 rounded-xl ${currentPillar.bgColor} border-l-4 ${currentPillar.borderColor}`}>
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Impact Réel
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentPillar.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="h-full min-h-96 lg:min-h-full">
                <Image
                  src={currentPillar.detailImage}
                  alt={`${currentPillar.name} - ${currentPillar.translation}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating Quote */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-elevated">
                  <div className="flex items-start space-x-3">
                    <Icon name="Quote" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium leading-relaxed">
                        {activePillar === 0 
                          ? "L'amour est le pont entre deux cœurs et le fondement de chaque communauté forte."
                          : activePillar === 1
                          ? "La vraie intelligence combine la connaissance avec la sagesse et la compassion avec l'action."
                          : "Les actions parlent plus fort que les mots, mais les actions enracinées dans l'amour et la sagesse parlent à l'âme."
                        }
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        — Philosophie Jamaa United
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;