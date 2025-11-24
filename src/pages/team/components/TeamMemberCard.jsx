import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamMemberCard = ({ member, currentLanguage }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-card rounded-lg shadow-soft hover:shadow-elevated transition-smooth overflow-hidden group">
      {/* Member Photo */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member?.photo}
          alt={member?.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
      {/* Member Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
              {member?.name}
            </h3>
            <p className="text-primary font-medium mb-2">
              {currentLanguage === 'en' ? member?.position?.en : member?.position?.fr}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {member?.expertise?.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                >
                  {currentLanguage === 'en' ? skill?.en : skill?.fr}
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-2">
            {member?.socialLinks?.map((link, index) => (
              <a
                key={index}
                href={link?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-smooth"
              >
                <Icon name={link?.platform} size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bio Preview */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {currentLanguage === 'en' ? member?.bio?.en : member?.bio?.fr}
        </p>

        {/* Credentials */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Award" size={16} className="text-accent" />
            <span className="text-sm font-medium text-foreground">
              {currentLanguage === 'en' ? 'Credentials' : 'Qualifications'}
            </span>
          </div>
          <div className="space-y-1">
            {member?.credentials?.slice(0, 2)?.map((credential, index) => (
              <p key={index} className="text-xs text-muted-foreground">
                • {currentLanguage === 'en' ? credential?.en : credential?.fr}
              </p>
            ))}
            {member?.credentials?.length > 2 && !isExpanded && (
              <p className="text-xs text-primary">
                +{member?.credentials?.length - 2} {currentLanguage === 'en' ? 'more' : 'de plus'}
              </p>
            )}
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-4 border-t border-border pt-4">
            {/* Full Bio */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">
                {currentLanguage === 'en' ? 'About' : 'À Propos'}
              </h4>
              <p className="text-sm text-muted-foreground">
                {currentLanguage === 'en' ? member?.fullBio?.en : member?.fullBio?.fr}
              </p>
            </div>

            {/* All Credentials */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">
                {currentLanguage === 'en' ? 'All Credentials' : 'Toutes les Qualifications'}
              </h4>
              <div className="space-y-1">
                {member?.credentials?.map((credential, index) => (
                  <p key={index} className="text-xs text-muted-foreground">
                    • {currentLanguage === 'en' ? credential?.en : credential?.fr}
                  </p>
                ))}
              </div>
            </div>

            {/* Recognition */}
            {member?.recognition && member?.recognition?.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">
                  {currentLanguage === 'en' ? 'Recognition' : 'Reconnaissance'}
                </h4>
                <div className="space-y-1">
                  {member?.recognition?.map((item, index) => (
                    <p key={index} className="text-xs text-muted-foreground">
                      • {currentLanguage === 'en' ? item?.en : item?.fr}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpanded}
          className="w-full mt-4 text-primary hover:bg-primary/10"
        >
          <Icon 
            name={isExpanded ? "ChevronUp" : "ChevronDown"} 
            size={16} 
            className="mr-2" 
          />
          {isExpanded 
            ? (currentLanguage === 'en' ? 'Show Less' : 'Voir Moins')
            : (currentLanguage === 'en' ? 'Learn More' : 'En Savoir Plus')
          }
        </Button>
      </div>
    </div>
  );
};

export default TeamMemberCard;