import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Construire des Familles Plus Fortes, des Communautés Plus Fortes",
      subtitle: "Où l'Amour, l'Intelligence et l'Action s'unissent pour transformer des vies à Goma et au-delà"
    },
    {
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Upendo - Akili - Matendo",
      subtitle: "L'Amour nous guide, l'Intelligence nous autonomise, l'Action nous transforme"
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      title: "Chaque Famille a le Pouvoir de Créer le Changement",
      subtitle: "Rejoignez notre mouvement de développement communautaire centré sur la famille"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroSlides?.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide?.image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/60 to-accent/40"></div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary/30 transition-all duration-300 border border-white/20"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary/30 transition-all duration-300 border border-white/20"
      >
        <Icon name="ChevronRight" size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border ${
              index === currentSlide ? 'bg-white border-white' : 'bg-white/30 border-white/50 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm font-medium border border-white/20">
                <Icon name="Heart" size={16} className="text-accent" />
                <span>Mouvement Jamaa United</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {heroSlides?.[currentSlide]?.title}
            </h1>

            <p className="text-xl sm:text-2xl text-white/95 mb-8 max-w-3xl font-body leading-relaxed drop-shadow-md">
              {heroSlides?.[currentSlide]?.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-accent/20"
              >
                <Icon name="Users" size={20} className="mr-2" />
                Rejoindre Notre Communauté
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:border-white/60"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Regarder Notre Histoire
              </Button>
            </div>

            {/* Quick Stats - Updated to show starting values */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">0</div>
                <div className="text-white/90 text-sm">
                  Familles Servies
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">0</div>
                <div className="text-white/90 text-sm">
                  Communautés
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">0</div>
                <div className="text-white/90 text-sm">
                  Domaines d'Impact
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">0</div>
                <div className="text-white/90 text-sm">
                  Années Actives
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;