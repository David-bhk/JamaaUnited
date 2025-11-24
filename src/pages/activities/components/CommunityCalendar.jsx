import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityCalendar = ({ onEventRegister }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');

  const events = [
    {
      id: 1,
  title: 'Atelier Parentalité Positive',
      date: '2025-01-15',
      time: '14:00',
      duration: '2h',
      location: 'Centre Communautaire Goma',
      type: 'workshop',
      spots: 25,
      registered: 18,
  description: 'Apprenez des techniques de parentalité bienveillante pour renforcer les liens familiaux.',
      facilitator: 'Dr. Marie Uwimana'
    },
    {
      id: 2,
  title: 'Collecte de Fonds Communautaire',
      date: '2025-01-20',
      time: '10:00',
      duration: '4h',
      location: 'Parc Central Goma',
      type: 'fundraising',
      spots: 100,
      registered: 67,
  description: 'Événement festif pour soutenir nos initiatives communautaires.',
      facilitator: 'Équipe Jamaa United'
    },
    {
      id: 3,
  title: 'Formation Leadership Jeunes',
      date: '2025-01-25',
      time: '09:00',
      duration: '6h',
      location: 'Université de Goma',
      type: 'training',
      spots: 30,
      registered: 30,
  description: 'Programme intensif de développement du leadership pour les jeunes.',
      facilitator: 'Jean-Baptiste Mukendi'
    },
    {
      id: 4,
  title: 'Réunion Mensuelle Kouz',
      date: '2025-02-01',
      time: '16:00',
      duration: '3h',
      location: 'Salle Communautaire',
      type: 'meeting',
      spots: 50,
      registered: 42,
  description: 'Rencontre mensuelle des participants au programme Kouz.',
      facilitator: 'Coordinateurs Kouz'
    }
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'workshop':
        return 'bg-primary text-primary-foreground';
      case 'fundraising':
        return 'bg-secondary text-secondary-foreground';
      case 'training':
        return 'bg-accent text-accent-foreground';
      case 'meeting':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getEventTypeLabel = (type) => {
    switch (type) {
      case 'workshop':
        return 'Atelier';
      case 'fundraising':
        return 'Collecte';
      case 'training':
        return 'Formation';
      case 'meeting':
        return 'Réunion';
      default:
        return 'Événement';
    }
  };

  const getAvailabilityStatus = (event) => {
    const available = event?.spots - event?.registered;
    if (available === 0) return 'full';
    if (available <= 5) return 'limited';
    return 'available';
  };

  const getAvailabilityColor = (status) => {
    switch (status) {
      case 'full':
        return 'text-error';
      case 'limited':
        return 'text-warning';
      case 'available':
        return 'text-success';
      default:
        return 'text-muted-foreground';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Calendrier Communautaire
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos prochains événements et activités communautaires.
          </p>
        </div>

        {/* Calendar Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'month' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('month')}
            >
              Mois
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              Liste
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
              Exporter
            </Button>
            <Button variant="outline" size="sm" iconName="Bell" iconPosition="left">
              Notifications
            </Button>
          </div>
        </div>

        {/* Events List */}
        <div className="grid gap-6">
          {events?.map((event) => {
            const availabilityStatus = getAvailabilityStatus(event);
            const available = event?.spots - event?.registered;

            return (
              <div
                key={event?.id}
                className="bg-card rounded-lg shadow-soft hover:shadow-elevated transition-smooth border border-border overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Event Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event?.type)}`}>
                          {getEventTypeLabel(event?.type)}
                        </span>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="Calendar" size={16} />
                          <span>{formatDate(event?.date)}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {event?.title}
                      </h3>

                      <p className="text-muted-foreground mb-4">
                        {event?.description}
                      </p>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={16} className="text-primary" />
                          <span className="text-foreground">
                            {event?.time} ({event?.duration})
                          </span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Icon name="MapPin" size={16} className="text-primary" />
                          <span className="text-foreground">{event?.location}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Icon name="User" size={16} className="text-primary" />
                          <span className="text-foreground">{event?.facilitator}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Icon name="Users" size={16} className="text-primary" />
                          <span className={getAvailabilityColor(availabilityStatus)}>
                            {available > 0
                              ? `${available} places disponibles`
                              : 'Complet'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Registration Section */}
                    <div className="flex flex-col items-end space-y-3">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {event?.registered}/{event?.spots}
                        </div>
                        <div className="text-xs text-muted-foreground">Inscrits</div>
                      </div>

                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all duration-500"
                          style={{ width: `${(event?.registered / event?.spots) * 100}%` }}
                        />
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          variant={availabilityStatus === 'full' ? 'ghost' : 'default'}
                          size="sm"
                          disabled={availabilityStatus === 'full'}
                          onClick={() => onEventRegister(event)}
                          iconName={availabilityStatus === 'full' ? 'X' : 'Calendar'}
                          iconPosition="left"
                        >
                          {availabilityStatus === 'full' ? 'Complet' : 'S\'inscrire'}
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          iconName="Share"
                        >
                          Partager
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="ChevronDown"
            iconPosition="right"
          >
            Voir plus d'événements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityCalendar;