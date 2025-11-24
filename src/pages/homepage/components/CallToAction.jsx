import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const actionCards = [
    {
      id: 'volunteer',
      icon: 'Users',
      title: 'Devenir Bénévole',
      description: 'Rejoignez notre communauté d\'agents de changement et aidez à renforcer les familles de votre quartier.',
      action: 'Nous Rejoindre',
      color: 'from-primary to-secondary',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-primary',
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      id: 'partner',
      icon: 'Handshake',
      title: 'Partenariat',
      description: 'Collaborez avec nous pour amplifier l\'impact et créer un développement communautaire durable.',
      action: 'Partenaire',
      color: 'from-secondary to-sky-500',
      bgColor: 'bg-sky-50',
      iconColor: 'text-secondary',
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      id: 'support',
      icon: 'Heart',
      title: 'Soutenir Notre Mission',
      description: 'Votre contribution nous aide à atteindre plus de familles et à créer un changement positif durable.',
      action: 'Faire un Don',
      color: 'from-sky-500 to-cyan-500',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-sky-600',
      image: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-action/10 rounded-full px-4 py-2 text-action text-sm font-medium mb-4">
            <Icon name="Sparkles" size={16} />
            <span>S'Impliquer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Rejoignez le Mouvement
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chaque communauté forte commence par des individus qui choisissent d'agir. Découvrez comment vous pouvez faire partie de la construction de familles et de communautés plus fortes.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actionCards?.map((card, index) => (
            <div
              key={card?.id}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={card?.image}
                  alt={card?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${card?.color} opacity-70`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 ${card?.bgColor} rounded-xl flex items-center justify-center`}>
                    <Icon name={card?.icon} size={24} className={card?.iconColor} />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {card?.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {card?.description}
                </p>
                <Button
                  variant="default"
                  className={`w-full bg-gradient-to-r ${card?.color} hover:opacity-90 text-white shadow-soft hover:shadow-elevated transition-all duration-300`}
                >
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  {card?.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elevated max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Mail" size={20} className="text-primary" />
                <span className="text-primary font-medium">
                  Restez Connecté
                </span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                Recevez les Actualités et Histoires de la Communauté
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Rejoignez notre newsletter pour recevoir des histoires inspirantes, des mises à jour de programmes et des opportunités de vous impliquer dans le développement communautaire.
              </p>

              {/* Newsletter Form */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Entrez votre adresse email"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-elevated transition-all duration-300 px-8"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  S'abonner
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-3">
                Nous respectons votre vie privée. Désabonnez-vous à tout moment.
              </p>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Community newsletter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-action rounded-full flex items-center justify-center text-white shadow-elevated animate-bounce">
                <Icon name="Bell" size={24} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-success rounded-full flex items-center justify-center text-white shadow-elevated">
                <Icon name="Check" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} />
              <span>+243 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} />
              <span>contact@jamaaunited.org</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={16} />
              <span>Goma, Nord-Kivu, DRC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;