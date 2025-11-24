import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProgramCard = ({ program, onRegister }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'bg-success text-success-foreground';
      case 'waitlist':
        return 'bg-warning text-warning-foreground';
      case 'closed':
        return 'bg-error text-error-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'open':
        return 'Ouvert';
      case 'waitlist':
        return 'Liste d\'attente';
      case 'closed':
        return 'Fermé';
      default:
        return 'Inconnu';
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-soft hover:shadow-elevated transition-smooth overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={program?.image}
          alt={program?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(program?.status)}`}>
            {getStatusText(program?.status)}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="Calendar" size={16} className="text-primary" />
            <span className="font-medium text-foreground">{program?.duration}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-smooth">
            {program?.title}
          </h3>
          <div className="flex items-center space-x-1 text-warning">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < program?.rating ? "fill-current" : ""}
              />
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {program?.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-sm text-foreground">
              {program?.participants} participants
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Icon name="MapPin" size={16} className="text-primary" />
            <span className="text-sm text-foreground">{program?.location}</span>
          </div>

          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={16} className="text-primary" />
            <span className="text-sm text-foreground">{program?.schedule}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-primary">
            {program?.price === 'free' ? 'Gratuit' : program?.price}
          </div>
          
          <Button
            variant={program?.status === 'open' ? 'default' : program?.status === 'waitlist' ? 'outline' : 'ghost'}
            size="sm"
            disabled={program?.status === 'closed'}
            onClick={() => onRegister(program)}
            iconName={program?.status === 'waitlist' ? 'Clock' : 'ArrowRight'}
            iconPosition="right"
          >
            {program?.status === 'open'
              ? 'S\'inscrire'
              : program?.status === 'waitlist'
              ? 'Rejoindre la liste'
              : 'Fermé'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;