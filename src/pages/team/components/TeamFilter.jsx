import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamFilter = ({ currentLanguage, activeFilter, onFilterChange }) => {
  const filters = [
    {
      id: 'all',
      label: {
        en: 'All Team',
        fr: 'Toute l\'Équipe'
      },
      icon: 'Users'
    },
    {
      id: 'leadership',
      label: {
        en: 'Leadership',
        fr: 'Direction'
      },
      icon: 'Crown'
    },
    {
      id: 'program',
      label: {
        en: 'Program Staff',
        fr: 'Personnel de Programme'
      },
      icon: 'Briefcase'
    },
    {
      id: 'community',
      label: {
        en: 'Community Liaisons',
        fr: 'Agents de Liaison'
      },
      icon: 'MessageCircle'
    },
    {
      id: 'advisory',
      label: {
        en: 'Advisory Board',
        fr: 'Conseil Consultatif'
      },
      icon: 'Shield'
    }
  ];

  return (
    <div className="bg-card rounded-lg p-6 shadow-soft">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Filter" size={20} className="text-primary" />
        <h3 className="text-lg font-heading font-semibold text-foreground">
          {currentLanguage === 'en' ? 'Filter by Role' : 'Filtrer par Rôle'}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {filters?.map((filter) => (
          <Button
            key={filter?.id}
            variant={activeFilter === filter?.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange(filter?.id)}
            className="transition-smooth"
          >
            <Icon 
              name={filter?.icon} 
              size={16} 
              className="mr-2" 
            />
            {currentLanguage === 'en' ? filter?.label?.en : filter?.label?.fr}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TeamFilter;