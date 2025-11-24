import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactMetrics = () => {
  const metrics = [
    {
      id: 1,
      value: "2,847",
      label: 'Familles accompagnées',
      icon: 'Users',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 2,
      value: "156",
      label: 'Communautés touchées',
      icon: 'MapPin',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      id: 3,
      value: "89%",
      label: 'Taux de réussite',
      icon: 'TrendingUp',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      id: 4,
      value: "7",
      label: 'Domaines actifs',
      icon: 'Target',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <div className="bg-gradient-warm rounded-lg p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
          Notre impact en un coup d'œil
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Nous suivons des indicateurs précis pour mesurer la progression de chaque domaine et ajuster nos priorités sur le terrain.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics?.map((metric) => (
          <div key={metric?.id} className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${metric?.bgColor} mb-4`}>
              <Icon name={metric?.icon} size={24} className={metric?.color} />
            </div>
            <div className="text-3xl font-heading font-bold text-foreground mb-2">
              {metric?.value}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              {metric?.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactMetrics;