import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { pillarsData } from '../../../content/pillars';

const PillarsSection = () => {
  const [activePillar, setActivePillar] = useState(0);
  const currentPillar = pillarsData?.[activePillar] ?? pillarsData?.[0];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-medium mb-4">
            <Icon name="Compass" size={16} />
            <span>Notre Fondation</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Trois Piliers de Transformation
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre approche est construite sur la puissante trinité d'Upendo, Akili et Matendo - l'Amour, l'Intelligence et l'Action travaillant ensemble pour créer un changement durable.
          </p>
        </div>

        {/* Pillar Navigation */}
        <div className="flex flex-col lg:flex-row justify-center mb-12 space-y-4 lg:space-y-0 lg:space-x-8">
          {pillarsData?.map((pillar, index) => (
            <button
              key={pillar?.id}
              onClick={() => setActivePillar(index)}
              className={`flex items-center space-x-4 p-6 rounded-2xl transition-all duration-300 hover-lift ${
                activePillar === index
                  ? `${pillar?.bgColor} ${pillar?.textColor} shadow-elevated`
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                activePillar === index ? 'bg-white/50' : 'bg-background'
              }`}>
                <Icon name={pillar?.icon} size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-heading font-semibold">{pillar?.name}</h3>
                <p className="text-sm opacity-80">{pillar?.translation}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Pillar Content */}
        <div className="bg-card rounded-3xl shadow-elevated overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${currentPillar?.color} text-white rounded-full px-6 py-3 mb-4`}>
                  <Icon name={currentPillar?.icon} size={20} />
                  <span className="font-heading font-semibold text-lg">
                    {currentPillar?.name} - {currentPillar?.translation}
                  </span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {currentPillar?.summary}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {currentPillar?.stats?.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">{stat?.number}</div>
                    <div className="text-sm text-muted-foreground">{stat?.label}</div>
                  </div>
                ))}
              </div>

              {/* Activities */}
              <div className="mb-8">
                <h4 className="font-heading font-semibold text-foreground mb-4">
                  Activités Clés:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentPillar?.activities?.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className={currentPillar?.textColor} />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="default"
                className={`bg-gradient-to-r ${currentPillar?.color} hover:opacity-90 text-white shadow-soft hover:shadow-elevated transition-all duration-300`}
              >
                <Icon name="ArrowRight" size={16} className="mr-2" />
                En Savoir Plus
              </Button>
            </div>

            {/* Image Side */}
            <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden">
              <Image
                src={currentPillar?.image}
                alt={`${currentPillar?.name} pillar`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${currentPillar?.color} opacity-20`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;