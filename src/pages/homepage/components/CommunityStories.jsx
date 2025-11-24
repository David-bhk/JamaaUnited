import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stories = [
    {
      id: 1,
      name: "Marie Uwimana",
      role: "Mère & Leader Communautaire",
      location: "Goma, Nord-Kivu",
      image: "https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      story: `"Nous commençons juste notre parcours avec Jamaa United. En commençant à construire nos programmes axés sur Upendo, nous sommes excités d'apprendre comment exprimer l'amour plus ouvertement et nous soutenir mutuellement dans les moments difficiles.\n\nNous croyons qu'à travers la formation Akili, nous gagnerons les compétences pour démarrer de petites entreprises et aider d'autres mères de notre communauté à faire de même. Aujourd'hui marque le début du voyage de notre famille vers devenir plus forte et plus activement impliquée dans les projets de développement communautaire."`,
      impact: "Prête à lancer des entreprises communautaires",
      category: "upendo",
      videoThumbnail: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450"
    },
    {
      id: 2,
      name: "Jean-Baptiste Mukendi",
      role: "Leader Jeunesse & Éducateur",
      location: "Goma, Nord-Kivu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      story: `"En tant que jeune homme dans notre communauté, je me sens plein d'espoir concernant les possibilités qui nous attendent. Les programmes Akili de Jamaa United m'ouvrent les yeux sur des possibilités de leadership que je n'avais jamais imaginé être à ma portée.\n\nGrâce à leur formation à venir, j'espère développer des compétences en résolution de conflits et en organisation communautaire. Mon rêve est de coordonner des programmes jeunesse dans plusieurs quartiers, aidant d'autres jeunes à découvrir leur potentiel et à contribuer au changement positif dans nos communautés."`,
      impact: "Se préparant à former de jeunes leaders",
      category: "akili",
      videoThumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450"
    },
    {
      id: 3,
      name: "Grace Nyiramana",
      role: "Défenseure de la Santé Communautaire",
      location: "Goma, Nord-Kivu",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      story: `"Quand je vois les défis de santé dans notre communauté, je réalise combien de potentiel nous avons pour faire une différence. L'approche Matendo de Jamaa United m'inspire à rêver d'agir de manières que je n'avais jamais pensé possibles.\n\nJ'envisage d'organiser des ateliers d'éducation sanitaire et de créer un réseau de bénévoles de santé communautaire. Nous prévoyons d'établir des comités de santé dans plusieurs quartiers, avec l'objectif d'améliorer significativement les résultats de santé maternelle dans notre région."`,
      impact: "Planifiant des initiatives de santé maternelle",
      category: "matendo",
      videoThumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPlaying) {
        setCurrentStory((prev) => (prev + 1) % stories?.length);
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [isPlaying, stories?.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories?.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories?.length) % stories?.length);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'upendo': return 'from-primary to-primary/70';
      case 'akili': return 'from-secondary to-secondary/70';
      case 'matendo': return 'from-accent to-accent/70';
      default: return 'from-muted to-muted/70';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'upendo': return 'Heart';
      case 'akili': return 'Brain';
      case 'matendo': return 'Zap';
      default: return 'User';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full px-6 py-3 text-secondary text-sm font-medium mb-4 border border-secondary/20">
            <Icon name="MessageCircle" size={16} />
            <span>Voix de la Communauté</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            Histoires d'Espoir et de Potentiel
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            De vraies familles, de vrais rêves. Découvrez les espoirs et aspirations des membres de la communauté alors que nous commençons notre voyage ensemble.
          </p>
        </div>

        {/* Story Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl shadow-lg overflow-hidden border border-primary/10">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Story Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-background to-muted/10">
                {/* Category Badge */}
                <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${getCategoryColor(stories?.[currentStory]?.category)} text-white rounded-full px-4 py-2 text-sm font-medium mb-6 w-fit shadow-md`}>
                  <Icon name={getCategoryIcon(stories?.[currentStory]?.category)} size={16} />
                  <span className="capitalize">{stories?.[currentStory]?.category}</span>
                </div>

                {/* Story Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {stories?.[currentStory]?.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">{stories?.[currentStory]?.role}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="MapPin" size={14} className="mr-1 text-accent" />
                    {stories?.[currentStory]?.location}
                  </div>
                </div>

                {/* Story Content */}
                <blockquote className="text-foreground leading-relaxed mb-6 whitespace-pre-line italic border-l-4 border-primary pl-4 bg-primary/5 py-4 rounded-r-lg">
                  {stories?.[currentStory]?.story}
                </blockquote>

                {/* Impact Highlight */}
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-4 mb-6 border border-accent/20">
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-accent">
                      Objectif d'Impact Futur:
                    </span>
                  </div>
                  <p className="text-foreground font-medium mt-1">
                    {stories?.[currentStory]?.impact}
                  </p>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button
                      onClick={prevStory}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-primary hover:text-primary transition-all duration-300 border border-primary/20 hover:border-primary/30"
                    >
                      <Icon name="ChevronLeft" size={16} />
                    </button>
                    <button
                      onClick={nextStory}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-primary hover:text-primary transition-all duration-300 border border-primary/20 hover:border-primary/30"
                    >
                      <Icon name="ChevronRight" size={16} />
                    </button>
                  </div>

                  <div className="flex space-x-2">
                    {stories?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStory(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentStory 
                            ? 'bg-gradient-to-r from-primary to-secondary w-8' :'bg-muted hover:bg-primary/30 w-2'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative">
                {/* Profile Image */}
                <div className="relative h-64 lg:h-full min-h-[500px] overflow-hidden">
                  <Image
                    src={stories?.[currentStory]?.image}
                    alt={stories?.[currentStory]?.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(stories?.[currentStory]?.category)} opacity-20`}></div>
                </div>

                {/* Video Thumbnail Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg border-2 border-primary/20"
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={28} />
                  </button>
                </div>

                {/* Story Counter */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm font-medium shadow-md">
                  {currentStory + 1} / {stories?.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            variant="default"
            size="lg"
            className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-secondary/20"
          >
            <Icon name="BookOpen" size={20} className="mr-2" />
            Partagez Votre Histoire
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityStories;