import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const DomainModal = ({ domain, isOpen, onClose }) => {
  if (!isOpen || !domain) return null;

  const handleDownloadCaseStudy = () => {
    // Mock download functionality
    console.log(`Downloading case study for ${domain?.title}`);
  };

  const handleShare = (platform) => {
    // Mock share functionality
    console.log(`Sharing ${domain?.title} on ${platform}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-lg shadow-elevated max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <div className="h-64 overflow-hidden rounded-t-lg">
            <Image
              src={domain?.image}
              alt={domain?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-foreground hover:bg-white"
          >
            <Icon name="X" size={20} />
          </Button>

          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-white font-heading font-bold text-2xl mb-2">
              {domain?.title}
            </h2>
            <p className="text-white/90 text-lg">
              {domain?.subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                {domain?.familiesServed}
              </div>
              <div className="text-sm text-muted-foreground">
                Familles accompagnées
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-secondary mb-1">
                {domain?.communitiesReached}
              </div>
              <div className="text-sm text-muted-foreground">
                Communautés
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-success mb-1">
                {domain?.impactScore}%
              </div>
              <div className="text-sm text-muted-foreground">
                Taux de réussite
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              À propos de ce domaine
            </h3>
            <p className="text-foreground leading-relaxed">
              {domain?.fullDescription}
            </p>
          </div>

          {/* Key Programs */}
          <div className="mb-8">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              Programmes phares
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {domain?.programs?.map((program, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm mb-1">
                      {program?.name}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {program?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
            <Button
              variant="default"
              onClick={handleDownloadCaseStudy}
              iconName="Download"
              iconPosition="left"
              className="flex-1"
            >
              Télécharger l'étude de cas
            </Button>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare('facebook')}
                title="Share on Facebook"
              >
                <Icon name="Facebook" size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare('twitter')}
                title="Share on Twitter"
              >
                <Icon name="Twitter" size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare('linkedin')}
                title="Share on LinkedIn"
              >
                <Icon name="Linkedin" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainModal;