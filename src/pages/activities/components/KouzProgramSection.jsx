import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const KouzProgramSection = ({ onJoinKouz }) => {
  const kouzData = {
    title: 'Programme Kouz (Cousin & Cousin)',
    subtitle: 'Un programme unique de mentorat familial qui connecte les générations',
    description:
      `Le programme Kouz crée des liens durables entre les membres de la famille élargie, favorisant l'échange de connaissances, d'expériences et de soutien mutuel. À travers des activités structurées et des rencontres régulières, nous renforçons les liens familiaux et communautaires.`,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      {
        icon: 'Users',
        title: 'Mentorat Intergénérationnel',
        description: 'Connexion entre jeunes et aînés pour partager sagesse et expérience'
      },
      {
        icon: 'Heart',
        title: 'Soutien Familial',
        description: 'Renforcement des liens familiaux à travers des activités communes'
      },
      {
        icon: 'BookOpen',
        title: 'Échange de Connaissances',
        description: 'Partage de compétences traditionnelles et modernes'
      },
      {
        icon: 'Calendar',
        title: 'Rencontres Régulières',
        description: 'Événements mensuels pour maintenir les connexions'
      }
    ],
    stats: [
      {
        number: '150+',
        label: 'Familles Connectées'
      },
      {
        number: '300+',
        label: 'Participants Actifs'
      },
      {
        number: '24',
        label: 'Événements par An'
      },
      {
        number: '95%',
        label: 'Taux de Satisfaction'
      }
    ]
  };

  return (
    <section className="py-16 bg-gradient-trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
            <Icon name="Users" size={32} className="text-secondary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {kouzData?.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {kouzData?.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-elevated">
              <Image
                src={kouzData?.image}
                alt="Kouz Program"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-lg shadow-elevated p-6 border border-border">
              <div className="grid grid-cols-2 gap-4">
                {kouzData?.stats?.slice(0, 2)?.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat?.number}</div>
                    <div className="text-xs text-muted-foreground">{stat?.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {kouzData?.description}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {kouzData?.features?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={feature?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature?.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={onJoinKouz}
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-secondary hover:bg-secondary/90"
              >
                Rejoindre Kouz
              </Button>

              <Button variant="outline" size="lg" iconName="Info" iconPosition="left">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          {kouzData?.stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat?.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KouzProgramSection;