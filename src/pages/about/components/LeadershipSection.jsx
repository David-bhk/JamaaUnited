import React from 'react';
import Icon from '../../../components/AppIcon';

const PRINCIPLES = [
  {
    title: 'Servir avant de publier',
    detail: 'Nous vérifions chaque outil sur le terrain avant de le documenter pour d’autres.',
    icon: 'Heart'
  },
  {
    title: 'Décider avec les familles',
    detail: 'Chaque ajustement part des retours WhatsApp et carnets partagés par les familles.',
    icon: 'Users'
  },
  {
    title: 'Dire ce qui bloque',
    detail: 'Nos rapports internes listent autant les impasses que les avancées.',
    icon: 'AlertTriangle'
  }
];

const LEADER_PRACTICES = [
  {
    label: '01',
    title: 'Cercle restreint',
    detail: 'Les facilitateurs accompagnent au maximum trois familles.'
  },
  {
    label: '02',
    title: 'Feedback brut',
    detail: 'Chaque séance se termine par deux phrases : “à garder / à revoir”.'
  },
  {
    label: '03',
    title: 'Transparence logistique',
    detail: 'Budget, présence et décisions sont récapitulés dans une note partagée.'
  }
];

const LeadershipSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-heading font-bold text-foreground">Comment nous menons Jamaa</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Pas de grands titres : juste trois principes et des pratiques concrètes pour rester honnêtes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <Icon name={principle.icon} size={18} className="text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{principle.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Discipline quotidienne
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {LEADER_PRACTICES.map((practice) => (
              <div key={practice.label} className="rounded-2xl border border-dashed border-border p-5">
                <div className="text-xs font-medium uppercase tracking-widest text-primary/80">
                  {practice.label}
                </div>
                <h4 className="mt-2 text-lg font-heading font-semibold text-foreground">
                  {practice.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">{practice.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card/80 p-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Ce que nous demandons</p>
          <p className="mt-3 text-base text-foreground">
            Si vous souhaitez rejoindre l’équipe, prévoyez de documenter vos essais, même imparfaits, et d’être disponible pour un débrief hebdomadaire de 20 minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;