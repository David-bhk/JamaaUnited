import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CATEGORY_STYLES = {
  leadership: {
    label: 'Leadership familial',
    gradient: 'from-primary/20 via-primary/10 to-primary/30',
    icon: 'Users'
  },
  parenting: {
    label: 'Parentalité',
    gradient: 'from-secondary/20 via-secondary/10 to-secondary/30',
    icon: 'Heart'
  },
  business: {
    label: 'Entrepreneuriat',
    gradient: 'from-accent/20 via-accent/10 to-accent/30',
    icon: 'Briefcase'
  },
  finance: {
    label: 'Finance familiale',
    gradient: 'from-emerald-200/50 via-emerald-100/40 to-emerald-200/30',
    icon: 'Wallet'
  },
  default: {
    label: 'Programme communautaire',
    gradient: 'from-muted/40 via-muted/30 to-muted/20',
    icon: 'Sparkles'
  }
};

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

  const categoryStyle = CATEGORY_STYLES[program?.category] ?? CATEGORY_STYLES.default;

  return (
    <div className="bg-card rounded-lg shadow-soft hover:shadow-elevated transition-smooth overflow-hidden">
      <div className={`bg-gradient-to-br ${categoryStyle.gradient} p-6 text-foreground/80 border-b border-border/60`}> 
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-foreground/70">
              <Icon name={categoryStyle.icon} size={16} />
              <span>{categoryStyle.label}</span>
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mt-3">
              {program?.title}
            </h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(program?.status)}`}>
            {getStatusText(program?.status)}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-primary" />
            <span>{program?.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-primary" />
            <span>{program?.schedule}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} className="text-primary" />
            <span>{program?.participants} participants</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} className="text-primary" />
            <span>{program?.location}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-lg font-heading font-semibold text-foreground">
            Ce que vous apprendrez
          </h4>
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

        <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
          {program?.description}
        </p>

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