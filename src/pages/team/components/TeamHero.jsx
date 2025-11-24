import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamHero = ({ currentLanguage }) => {
  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />
      
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
        {/* Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Heart" size={16} />
              <span>
                {currentLanguage === 'en' ? 'Meet Our Team' : 'Rencontrez Notre Équipe'}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              {currentLanguage === 'en' ?'The Hearts Behind Jamaa United' :'Les Cœurs Derrière Jamaa United'
              }
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {currentLanguage === 'en'
                ? `Our diverse team brings together the wisdom of elders and the energy of youth, combining deep cultural roots with global perspectives. Each member is dedicated to strengthening families and building resilient communities across the Democratic Republic of Congo.`
                : `Notre équipe diversifiée rassemble la sagesse des anciens et l'énergie de la jeunesse, combinant des racines culturelles profondes avec des perspectives mondiales. Chaque membre se consacre au renforcement des familles et à la construction de communautés résilientes à travers la République Démocratique du Congo.`
              }
            </p>
          </div>

          {/* Key Values */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <Icon name="Heart" size={24} className="text-secondary mx-auto mb-2" />
              <div className="text-sm font-medium text-foreground">Upendo</div>
              <div className="text-xs text-muted-foreground">
                {currentLanguage === 'en' ? 'Love' : 'Amour'}
              </div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <Icon name="Brain" size={24} className="text-primary mx-auto mb-2" />
              <div className="text-sm font-medium text-foreground">Akili</div>
              <div className="text-xs text-muted-foreground">
                {currentLanguage === 'en' ? 'Intelligence' : 'Intelligence'}
              </div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <Icon name="Zap" size={24} className="text-accent mx-auto mb-2" />
              <div className="text-sm font-medium text-foreground">Matendo</div>
              <div className="text-xs text-muted-foreground">
                {currentLanguage === 'en' ? 'Actions' : 'Actions'}
              </div>
            </div>
          </div>
        </div>

        {/* Team Photo */}
        <div className="relative">
          <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-elevated">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Jamaa United Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-elevated p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                <Icon name="Users" size={20} className="text-success" />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">12</div>
                <div className="text-xs text-muted-foreground">
                  {currentLanguage === 'en' ? 'Team Members' : 'Membres'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;