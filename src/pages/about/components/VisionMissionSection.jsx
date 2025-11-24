import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VisionMissionSection = () => {

  const content = {
    sectionTitle: "Notre Vision et Mission",
    visionTitle: "Vision",
    visionText: `Un monde où chaque famille sert de catalyseur pour une transformation sociétale positive, enracinée dans l'amour, guidée par la sagesse, et exprimée par des actions significatives. Nous envisageons des communautés où la force des liens familiaux crée des ondulations de changement qui s'étendent bien au-delà des foyers individuels.`,
    missionTitle: "Mission",
    missionText: `Renforcer les familles et les communautés en République Démocratique du Congo à travers des programmes de soutien complets qui incarnent nos trois piliers : Upendo (Amour), Akili (Intelligence), et Matendo (Actions). Nous travaillons à construire des ponts entre les valeurs communautaires traditionnelles et l'innovation sociale moderne.`,
    coreValues: "Valeurs Fondamentales",
    description: "Ces principes fondamentaux guident chaque aspect de notre travail et définissent qui nous sommes en tant qu'organisation.",
    values: [
      {
        title: "Approche Centrée sur la Famille",
        description: "Nous croyons que les familles fortes sont le fondement de communautés prospères et de changements sociaux durables."
      },
      {
        title: "Respect Culturel", 
        description: "Nous honorons les traditions locales tout en promouvant des valeurs progressistes qui renforcent les liens familiaux et communautaires."
      },
      {
        title: "Partenariat Collaboratif",
        description: "Nous travaillons aux côtés des communautés en tant que partenaires, pas en tant qu'agents externes, favorisant l'appropriation locale et la durabilité."
      },
      {
        title: "Impact Basé sur les Preuves",
        description: "Nos programmes sont fondés sur la recherche et continuellement évalués pour assurer des résultats significatifs et mesurables."
      }
    ]
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            {content.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-trust to-blue-600 flex items-center justify-center shadow-soft">
                <Icon name="Eye" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                {content.visionTitle}
              </h3>
            </div>
            
            <div className="bg-gradient-trust p-8 rounded-2xl shadow-soft">
              <p className="text-lg text-foreground leading-relaxed">
                {content.visionText}
              </p>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden shadow-elevated">
              <Image
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600&h=400&fit=crop"
                alt="Community vision - families working together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-sky-500 flex items-center justify-center shadow-soft">
                <Icon name="Target" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                {content.missionTitle}
              </h3>
            </div>
            
            <div className="bg-gradient-warm p-8 rounded-2xl shadow-soft">
              <p className="text-lg text-foreground leading-relaxed">
                {content.missionText}
              </p>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden shadow-elevated">
              <Image
                src="https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=600&h=400&fit=crop"
                alt="Mission in action - community development programs"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              {content.coreValues}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {content.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-smooth group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                    <Icon 
                      name={index === 0 ? "Home" : index === 1 ? "Globe" : index === 2 ? "Handshake" : "BarChart3"} 
                      size={20} 
                      className="text-white" 
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;