import React from 'react';
import Icon from '../../../components/AppIcon';
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
      <div className="bg-gradient-to-br from-secondary/15 via-primary/10 to-accent/10 p-6 border-b border-border/50">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Initiative communautaire</p>
            <h3 className="text-2xl font-heading font-semibold text-foreground mt-2">
              {initiative?.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              {initiative?.description}
            </p>
          </div>
          <div className="flex items-center space-x-1 bg-primary/10 px-3 py-1 rounded-full text-primary text-xs font-medium">
            <Icon name="Users" size={14} />
            <span>{initiative?.supporters} soutiens</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-2">
            <span>Progrès</span>
            <span>{Math.round(getProgressPercentage())}%</span>
          </div>
          <div className="w-full bg-background/50 rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2 transition-all duration-500"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>
      </div>
        <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-lg font-heading font-semibold text-foreground">Objectifs financiers</h4>
          <Icon name="Heart" size={16} className="text-primary" />
        </div>

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