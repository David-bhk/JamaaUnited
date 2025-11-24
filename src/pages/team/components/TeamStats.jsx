import React from 'react';
import Icon from '../../../components/AppIcon';

const TeamStats = ({ currentLanguage }) => {
  const stats = [
    {
      icon: "Users",
      value: "12",
      label: {
        en: "Team Members",
        fr: "Membres de l\'Équipe"
      },
      description: {
        en: "Dedicated professionals",
        fr: "Professionnels dévoués"
      }
    },
    {
      icon: "Award",
      value: "25+",
      label: {
        en: "Years Combined Experience",
        fr: "Années d\'Expérience Combinée"
      },
      description: {
        en: "In community development",
        fr: "En développement communautaire"
      }
    },
    {
      icon: "Globe",
      value: "7",
      label: {
        en: "Intervention Domains",
        fr: "Domaines d\'Intervention"
      },
      description: {
        en: "Areas of expertise",
        fr: "Domaines d\'expertise"
      }
    },
    {
      icon: "Heart",
      value: "1000+",
      label: {
        en: "Families Served",
        fr: "Familles Servies"
      },
      description: {
        en: "Through our programs",
        fr: "À travers nos programmes"
      }
    }
  ];

  return (
    <div className="bg-gradient-trust rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
          {currentLanguage === 'en' ? 'Our Impact in Numbers' : 'Notre Impact en Chiffres'}
        </h2>
        <p className="text-muted-foreground">
          {currentLanguage === 'en' ?'Building stronger communities through dedicated leadership' :'Construire des communautés plus fortes grâce à un leadership dévoué'
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Icon name={stat?.icon} size={24} className="text-primary" />
            </div>
            <div className="text-3xl font-heading font-bold text-foreground mb-1">
              {stat?.value}
            </div>
            <div className="text-sm font-medium text-foreground mb-1">
              {currentLanguage === 'en' ? stat?.label?.en : stat?.label?.fr}
            </div>
            <div className="text-xs text-muted-foreground">
              {currentLanguage === 'en' ? stat?.description?.en : stat?.description?.fr}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamStats;