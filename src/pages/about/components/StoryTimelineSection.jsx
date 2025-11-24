import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const StoryTimelineSection = () => {
  const [activeYear, setActiveYear] = useState(0);

  const content = {
    sectionTitle: "Notre Histoire",
    subtitle: "Un Voyage de Transformation Communautaire",
    description: "Des débuts modestes à un mouvement qui touche des centaines de familles, notre histoire est celle de la persévérance, de l'amour, et de la croyance inébranlable que les familles fortes créent des sociétés fortes.",
    timeline: [
      {
        year: "2018",
        title: "La Vision Naît",
        description: "Jamaa United a été conçu à partir d'une observation simple mais puissante : les communautés les plus fortes étaient celles avec les liens familiaux les plus forts. Nos fondateurs ont reconnu le besoin d'une approche holistique du développement communautaire.",
        milestone: "Fondation établie",
        impact: "3 familles fondatrices",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop"
      },
      {
        year: "2019",
        title: "Premiers Programmes Communautaires", 
        description: "Nous avons lancé nos premiers ateliers de renforcement familial à Goma, en nous concentrant sur la communication, la résolution de conflits, et le développement de l'intelligence émotionnelle au sein des unités familiales.",
        milestone: "Premiers programmes lancés",
        impact: "25 familles servies",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400&h=300&fit=crop"
      },
      {
        year: "2020",
        title: "Expansion de Notre Portée",
        description: "Malgré les défis mondiaux, nous avons adapté nos programmes pour atteindre plus de familles grâce à des approches communautaires innovantes et des partenariats avec des leaders locaux.",
        milestone: "Partenariats communautaires formés",
        impact: "100+ familles atteintes",
        image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=400&h=300&fit=crop"
      },
      {
        year: "2021", 
        title: "Le Cadre des Trois Piliers",
        description: "Nous avons formalisé notre approche autour d'Upendo, Akili, et Matendo, créant un cadre complet qui répond aux besoins émotionnels, intellectuels, et pratiques des familles.",
        milestone: "Cadre établi",
        impact: "200+ familles transformées", 
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
      },
      {
        year: "2022",
        title: "Développement du Leadership Communautaire",
        description: "Nous avons commencé à former des leaders communautaires locaux pour devenir des facilitateurs de changement, multipliant notre impact et assurant la durabilité de nos programmes.",
        milestone: "Programme de leadership lancé",
        impact: "50+ leaders communautaires formés",
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=400&h=300&fit=crop"
      },
      {
        year: "2023",
        title: "Sept Domaines d'Impact",
        description: "Nous avons élargi nos domaines d'intervention à sept domaines clés, abordant le spectre complet des besoins familiaux et communautaires de l'éducation à l'autonomisation économique.",
        milestone: "Programmes complets lancés",
        impact: "400+ familles servies",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop"
      },
      {
        year: "2024",
        title: "Construire pour l'Avenir",
        description: "Aujourd'hui, nous continuons à grandir et évoluer, restant toujours fidèles à notre croyance fondamentale que chaque famille a le potentiel d'être un catalyseur de changement positif dans sa communauté.",
        milestone: "Croissance durable atteinte",
        impact: "500+ familles et plus",
        image: "https://images.pixabay.com/photo/2016/11/19/21/05/hand-1841827_1280.jpg?w=400&h=300&fit=crop"
      },

    ],
    ui: {
      milestone: "Étape Clé",
      impact: "Impact",
      journeyProgress: "Progrès du Voyage",
      previous: "Précédent",
      next: "Suivant"
    }
  };

  return (
    <section className="py-20 bg-background">
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

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-2 bg-card p-2 rounded-xl shadow-soft min-w-max">
            {content.timeline.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveYear(index)}
                className={`px-4 py-2 rounded-lg font-heading font-semibold transition-smooth whitespace-nowrap ${
                  activeYear === index
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-soft'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item?.year}
              </button>
            ))}
          </div>
        </div>

        {/* Active Timeline Item */}
        <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft">
                      <span className="text-white font-heading font-bold text-lg">
                        {content.timeline[activeYear].year.slice(-2)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                        {content.timeline[activeYear].title}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {content.timeline[activeYear].year}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {content.timeline[activeYear].description}
                  </p>
                </div>

                {/* Milestone & Impact */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-gradient-trust p-6 rounded-xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-trust flex items-center justify-center">
                        <Icon name="Flag" size={20} className="text-trust-foreground" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground">
                        {content.ui.milestone}
                      </h4>
                    </div>
                    <p className="text-muted-foreground">
                      {content.timeline[activeYear].milestone}
                    </p>
                  </div>

                  <div className="bg-gradient-warm p-6 rounded-xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-hope flex items-center justify-center">
                        <Icon name="TrendingUp" size={20} className="text-hope-foreground" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground">
                        {content.ui.impact}
                      </h4>
                    </div>
                    <p className="text-muted-foreground">
                      {content.timeline[activeYear].impact}
                    </p>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">
                      {content.ui.journeyProgress}
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {Math.round(((activeYear + 1) / content.timeline.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((activeYear + 1) / content.timeline.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="h-full min-h-96 lg:min-h-full">
                <Image
                  src={content.timeline[activeYear].image}
                  alt={`${content.timeline[activeYear].year} - ${content.timeline[activeYear].title}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Year Badge */}
                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-elevated">
                  <span className="text-2xl font-heading font-bold text-primary">
                    {content.timeline[activeYear].year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setActiveYear(Math.max(0, activeYear - 1))}
            disabled={activeYear === 0}
            className="flex items-center space-x-2 px-6 py-3 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
            <span className="font-medium text-muted-foreground">
              {content.ui.previous}
            </span>
          </button>
          
          <button
            onClick={() => setActiveYear(Math.min(content.timeline.length - 1, activeYear + 1))}
            disabled={activeYear === content.timeline.length - 1}
            className="flex items-center space-x-2 px-6 py-3 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="font-medium text-muted-foreground">
              {content.ui.next}
            </span>
            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoryTimelineSection;