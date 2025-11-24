import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ImpactMetrics = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    {
      id: 'families',
      icon: 'Users',
      number: 0,
      suffix: '',
      label: 'Familles à Transformer',
      description: 'Nous commençons notre parcours pour soutenir les familles dans la construction de liens plus forts et de modèles de communication',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      id: 'communities',
      icon: 'MapPin',
      number: 0,
      suffix: '',
      label: 'Communautés à Atteindre',
      description: 'Commencer notre sensibilisation à travers Goma et les régions environnantes avec espoir et détermination',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      gradient: 'from-secondary/20 to-secondary/5'
    },
    {
      id: 'programs',
      icon: 'Target',
      number: 0,
      suffix: '',
      label: 'Programmes à Lancer',
      description: 'Préparation d\'initiatives innovantes dans nos sept domaines d\'impact prévus',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      id: 'volunteers',
      icon: 'Heart',
      number: 0,
      suffix: '',
      label: 'Bénévoles à Engager',
      description: 'Construction d\'un réseau de membres dévoués de la communauté prêts à conduire le changement',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      id: 'training',
      icon: 'BookOpen',
      number: 0,
      suffix: '',
      label: 'Personnes à Former',
      description: 'Planification pour équiper les individus de nouvelles compétences et connaissances pour le développement communautaire',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      gradient: 'from-secondary/20 to-secondary/5'
    },
    {
      id: 'years',
      icon: 'Calendar',
      number: 0,
      suffix: '',
      label: 'Années d\'Impact Futur',
      description: 'Commencer notre engagement à long terme pour un développement communautaire cohérent et le renforcement familial',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      gradient: 'from-accent/20 to-accent/5'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('impact-metrics');
    if (element) observer?.observe(element);

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      metrics?.forEach((metric) => {
        // Since we're starting at 0, we'll just set the values immediately
        setAnimatedNumbers(prev => ({ ...prev, [metric?.id]: metric?.number }));
      });
    }
  }, [isVisible]);

  return (
    <section id="impact-metrics" className="py-20 bg-gradient-to-br from-muted/20 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-3 text-primary text-sm font-medium mb-4 border border-primary/20">
            <Icon name="Rocket" size={16} />
            <span>Notre Commencement</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            Commencer Notre Voyage Ensemble
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chaque grand mouvement commence par zéro. Ces chiffres représentent notre potentiel et les rêves que nous construisons ensemble alors que nous lançons Jamaa United.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics?.map((metric, index) => (
            <div
              key={metric?.id}
              className={`bg-gradient-to-br ${metric?.gradient} rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover-lift group border border-white/20`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${metric?.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/30`}>
                <Icon name={metric?.icon} size={28} className={metric?.color} />
              </div>

              {/* Number */}
              <div className="mb-4">
                <div className="text-4xl font-heading font-bold text-foreground mb-2 flex items-center">
                  <span className="text-muted-foreground/60 mr-2">~</span>
                  {animatedNumbers?.[metric?.id] || 0}{metric?.suffix}
                  <span className="text-sm ml-2 text-muted-foreground font-normal">
                    bientôt
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {metric?.label}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm">
                {metric?.description}
              </p>

              {/* Progress Indicator - Starting state */}
              <div className="mt-6">
                <div className="w-full bg-muted/50 rounded-full h-1">
                  <div 
                    className={`h-1 rounded-full bg-gradient-to-r ${metric?.color?.replace('text-', 'from-')} to-${metric?.color?.replace('text-', '')?.replace(/-(primary|secondary|accent)/, '-$1/60')} transition-all duration-2000 ease-out`}
                    style={{ 
                      width: isVisible ? '10%' : '0%', // Small progress to show potential
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
                <div className="text-xs text-muted-foreground mt-2 text-center">
                  Prêt à commencer
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 shadow-soft max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Soyez Nos Premières Histoires d'Impact
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Rejoignez-nous dès le premier jour et aidez-nous à transformer ces zéros en nombres significatifs qui représentent un vrai changement dans notre communauté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-xl font-medium transition-all duration-300 hover-lift shadow-lg border border-primary/20">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Rejoindre Notre Communauté de Lancement
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent/20 to-secondary/20 hover:from-accent/30 hover:to-secondary/30 text-foreground rounded-xl font-medium transition-all duration-300 hover-lift border border-accent/30">
                <Icon name="Heart" size={16} className="mr-2" />
                Soutenir Notre Vision
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;