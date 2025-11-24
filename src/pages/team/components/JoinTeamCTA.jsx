import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const JoinTeamCTA = ({ currentLanguage }) => {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>
                  {currentLanguage === 'en' ? 'Join Our Mission' : 'Rejoignez Notre Mission'}
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
                {currentLanguage === 'en' ?'Ready to Make a Difference?' :'Prêt à Faire la Différence?'
                }
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                {currentLanguage === 'en' ? `We're always looking for passionate individuals who share our vision of strengthening families and building resilient communities. Whether you're a seasoned professional or just starting your journey, there's a place for you in our family.`
                  : `Nous recherchons toujours des personnes passionnées qui partagent notre vision de renforcer les familles et de construire des communautés résilientes. Que vous soyez un professionnel expérimenté ou que vous commenciez votre parcours, il y a une place pour vous dans notre famille.`
                }
              </p>
            </div>

            {/* Opportunities */}
            <div className="space-y-3">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {currentLanguage === 'en' ? 'Current Opportunities:' : 'Opportunités Actuelles:'}
              </h3>
              
              <div className="space-y-2">
                {[
                  {
                    en: "Community Development Coordinator",
                    fr: "Coordinateur de Développement Communautaire"
                  },
                  {
                    en: "Family Support Specialist",
                    fr: "Spécialiste du Soutien Familial"
                  },
                  {
                    en: "Youth Program Facilitator",
                    fr: "Facilitateur de Programme Jeunesse"
                  }
                ]?.map((opportunity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <span className="text-sm text-muted-foreground">
                      {currentLanguage === 'en' ? opportunity?.en : opportunity?.fr}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-elevated transition-smooth"
              >
                <Icon name="Send" size={16} className="mr-2" />
                {currentLanguage === 'en' ? 'Apply Now' : 'Postuler Maintenant'}
              </Button>
              
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Icon name="Download" size={16} className="mr-2" />
                {currentLanguage === 'en' ? 'Download Brochure' : 'Télécharger la Brochure'}
              </Button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="h-64 lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Join our team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Floating Quote */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-xs shadow-soft">
            <div className="flex items-start space-x-2">
              <Icon name="Quote" size={16} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground italic">
                  {currentLanguage === 'en'
                    ? "Working with Jamaa United has been the most fulfilling experience of my career." :"Travailler avec Jamaa United a été l'expérience la plus enrichissante de ma carrière."
                  }
                </p>
                <p className="text-xs font-medium text-foreground mt-1">
                  - {currentLanguage === 'en' ? 'Team Member' : 'Membre de l\'Équipe'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeamCTA;