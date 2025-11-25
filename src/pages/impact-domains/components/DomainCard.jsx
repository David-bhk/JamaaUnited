import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CATEGORY_STYLES = {
  family: { label: 'Famille', gradient: 'from-primary/20 via-primary/10 to-primary/30', icon: 'Home' },
  education: { label: 'Éducation', gradient: 'from-secondary/20 via-secondary/10 to-secondary/30', icon: 'BookOpen' },
  health: { label: 'Santé', gradient: 'from-rose-200/60 via-rose-100/40 to-rose-300/40', icon: 'HeartPulse' },
  economic: { label: 'Économie', gradient: 'from-emerald-200/60 via-emerald-100/40 to-emerald-300/40', icon: 'Coins' },
  leadership: { label: 'Leadership', gradient: 'from-indigo-200/60 via-indigo-100/40 to-indigo-300/40', icon: 'Award' },
  environment: { label: 'Environnement', gradient: 'from-lime-200/60 via-lime-100/40 to-lime-300/40', icon: 'Leaf' },
  peace: { label: 'Paix', gradient: 'from-amber-200/60 via-amber-100/40 to-amber-300/40', icon: 'Handshake' },
  default: { label: 'Programme', gradient: 'from-muted/40 via-muted/30 to-muted/20', icon: 'Sparkles' }
};

const DomainCard = ({ domain, onViewDetails }) => {
  const categoryStyle = CATEGORY_STYLES[domain?.category] ?? CATEGORY_STYLES.default;

  return (
    <div className="bg-card rounded-lg shadow-soft hover:shadow-elevated transition-smooth overflow-hidden">
      <div className={`bg-gradient-to-br ${categoryStyle.gradient} p-6 text-foreground border-b border-border/50`}>
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
              <Icon name={categoryStyle.icon} size={16} />
              <span>{categoryStyle.label}</span>
            </div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mt-3">
              {domain?.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
              {domain?.subtitle}
            </p>
          </div>
          <div className="bg-background/80 rounded-full px-3 py-1 text-xs font-medium text-foreground shadow-inner">
            {domain?.familiesServed} familles
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Users" size={16} />
            <span>{domain?.communitiesReached} communautés</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="TrendingUp" size={16} />
            <span>{domain?.impactScore}% d'impact</span>
          </div>
        </div>
        
        <p className="text-foreground text-sm mb-4 line-clamp-3">
          {domain?.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-success"></div>
            <span className="text-xs text-muted-foreground">Programme actif</span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(domain)}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={14}
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DomainCard;