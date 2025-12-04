import React from 'react';
import Icon from '../../../components/AppIcon';

const CARDS = [
  {
    title: 'Vision',
    text:
      'Rester proches de 15 familles, documenter ce qui marche et partager uniquement ce qui tient sur le terrain.',
    icon: 'Eye',
    chip: {
      bg: 'bg-primary/10',
      text: 'text-primary'
    }
  },
  {
    title: 'Mission',
    text:
      'Upendo, Akili et Matendo : trois piliers appliqués chaque semaine, carnet ouvert et voix des familles en premier.',
    icon: 'Target',
    chip: {
      bg: 'bg-secondary/10',
      text: 'text-secondary'
    }
  }
];

const VALUES = [
  {
    title: 'Familles limitées',
    description: '15 familles maximum pour rester joignables et honnêtes.',
    icon: 'Users'
  },
  {
    title: 'Outils courts',
    description: 'Chaque ressource tient sur une page et un mémo audio.',
    icon: 'FileText'
  },
  {
    title: 'Notes partagées',
    description: 'Succès comme blocages sont consignés dès la séance.',
    icon: 'ClipboardCheck'
  }
];

const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Vision & Mission</p>
          <h2 className="mt-3 text-3xl font-heading font-bold text-foreground">Notre boussole</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Deux phrases qui nous servent de filtre avant chaque réunion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {CARDS.map((card) => (
            <div key={card.title} className="rounded-2xl border border-border bg-card/70 p-6">
              <div className={`flex h-11 w-11 items-center justify-center rounded-full ${card.chip.bg}`}>
                <Icon name={card.icon} size={20} className={card.chip.text} />
              </div>
              <h3 className="mt-4 text-xl font-heading font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-muted/30 p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Notre manière de faire</p>
              <h3 className="mt-2 text-2xl font-heading font-bold text-foreground">Trois réflexes simples</h3>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                  <Icon name={value.icon} size={16} className="text-primary" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-foreground">{value.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;