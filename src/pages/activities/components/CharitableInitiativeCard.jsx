import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CharitableInitiativeCard = ({ initiative, onParticipate }) => {
  const getProgressPercentage = () => {
    return Math.min((initiative?.raised / initiative?.goal) * 100, 100);
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <div className="bg-card rounded-lg shadow-soft hover:shadow-elevated transition-smooth overflow-hidden">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={initiative?.image}
          alt={initiative?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-background/95 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">Progrès</span>
              <span className="text-xs font-medium text-foreground">
                {Math.round(getProgressPercentage())}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary rounded-full h-2 transition-all duration-500"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-heading font-semibold text-foreground">
            {initiative?.title}
          </h3>
          <div className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded-full">
            <Icon name="Heart" size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary">{initiative?.supporters}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {initiative?.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Collecté</span>
            <span className="text-sm font-semibold text-foreground">
              {formatAmount(initiative?.raised)}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Objectif</span>
            <span className="text-sm font-semibold text-primary">
              {formatAmount(initiative?.goal)}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Icon name="Calendar" size={16} className="text-primary" />
            <span className="text-sm text-foreground">Se termine le {initiative?.endDate}</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button
            variant="default"
            size="sm"
            onClick={() => onParticipate(initiative, 'donate')}
            iconName="Heart"
            iconPosition="left"
            className="flex-1"
          >
            Faire un don
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => onParticipate(initiative, 'volunteer')}
            iconName="Users"
            iconPosition="left"
            className="flex-1"
          >
            Bénévolat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharitableInitiativeCard;