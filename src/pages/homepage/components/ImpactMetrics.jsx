import React from 'react';
import Icon from '../../../components/AppIcon';

const HIGHLIGHTS = [
  {
    id: 'families',
    icon: 'Users',
    value: '150+',
    label: 'Familles accompagnées',
    detail: 'Cercles de soutien, médiation et mentorat parental autour d\'Upendo.'
  },
  {
    id: 'communities',
    icon: 'MapPin',
    value: '12',
    label: 'Quartiers engagés',
    detail: 'Animations Akili sur la littéracie financière et le leadership local.'
  },
  {
    id: 'volunteers',
    icon: 'Heart',
    value: '80',
    label: 'Bénévoles actifs',
    detail: 'Brigades Matendo qui mènent les actions de terrain chaque semaine.'
  }
];

const ImpactMetrics = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium">
            <Icon name="TrendingUp" size={16} />
            <span>Impact en un coup d'œil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-4">
            Des chiffres simples, une mission claire
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Nous mesurons ce qui compte vraiment : les familles accompagnées, les communautés mobilisées et les bénévoles prêts à agir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div key={item.id} className="bg-card rounded-2xl p-6 shadow-soft border border-border/60">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Icon name={item.icon} size={22} />
              </div>
              <div className="text-4xl font-heading font-bold text-foreground mb-2">
                {item.value}
              </div>
              <h3 className="text-lg font-heading text-foreground mb-2">
                {item.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
