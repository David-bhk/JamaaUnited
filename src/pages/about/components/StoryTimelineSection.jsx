import React from 'react';
import Icon from '../../../components/AppIcon';

const TIMELINE = [
  {
    year: 'Étape 1',
    title: 'Identification',
    summary: 'Recenser et organiser les familles.',
    notes: [
      'Toucher le problème par sa racine',
      'Première école de la vie'
    ]
  },
  {
    year: 'Étape 2',
    title: 'Cohabitation',
    summary: 'Renforcer l\'unité et la paix.',
    notes: [
      'Source naturelle de solidarité',
      'Le lien familial est indissociable'
    ]
  },
  {
    year: 'Étape 3',
    title: 'Développement',
    summary: 'Lancer des initiatives collectives.',
    notes: [
      'Éducation, entrepreneuriat, santé, paix',
      'Chaque famille est une brique'
    ]
  }
];

const StoryTimelineSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Nexus social en 3 étapes</h2>
          <p className="text-base text-muted-foreground">
            Notre approche à trois dimensions pour transformer les communautés.
          </p>
        </div>

        <div className="space-y-6">
          {TIMELINE.map((step, index) => (
            <div key={step.year} className="rounded-2xl border border-border bg-card/70 p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-primary/80">{step.year}</span>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Icon name="Circle" size={10} className="text-primary" />
                  Étape {index + 1}
                </div>
              </div>
              <h3 className="mt-3 text-xl font-heading font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {step.notes.map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="mt-1 text-accent" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryTimelineSection;