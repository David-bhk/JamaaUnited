import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const DomainCard = ({ domain, onViewDetails }) => {
  return (
    <div className="bg-card rounded-lg shadow-soft hover:shadow-elevated transition-smooth overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={domain?.image}
          alt={domain?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-foreground">
            {domain?.familiesServed} familles
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-heading font-semibold text-lg mb-1">
            {domain?.title}
          </h3>
          <p className="text-white/90 text-sm line-clamp-2">
            {domain?.subtitle}
          </p>
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