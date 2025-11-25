import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HERO_METRICS = [
  {
    label: 'Familles accompagnées',
    details: 'Publication après la première cohorte 2025'
  },
  {
    label: 'Communautés partenaires',
    details: 'Cartographie en cours avec les leaders locaux'
  },
  {
    label: "Domaines d'impact actifs",
    details: 'Activation progressive prévue Q2 2025'
  },
  {
    label: "Années d'activité",
    details: 'Le mouvement démarre cette année'
  }
];

const HeroSection = () => {
  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-slate-950 text-white">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" aria-hidden></div>

      {/* Accent glows */}
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute top-24 left-0 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" />
      </div>

      {/* Subtle noise grid */}
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden
        style={{ backgroundImage: 'radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 45%)' }}
      ></div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md">
                <Icon name="Activity" size={16} className="text-accent" />
                <span>Lancement Jamaa United • 2025</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight text-white drop-shadow-[0_5px_35px_rgba(0,0,0,0.55)]">
              Construire des familles fortes avant de publier les chiffres
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl font-body leading-relaxed">
              Jamaa United démarre son parcours en posant les bases : aligner les familles, cartographier les besoins et co-créer les domaines Upendo, Akili, Matendo avec les leaders de Goma. Les indicateurs seront rendus publics dès la première cohorte.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                variant="default"
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 border border-accent/20"
              >
                <Icon name="Users" size={20} className="mr-2" />
                Rejoindre la liste d'attente
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/70"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Être informé du lancement
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md"
                >
                  <p className="text-xs uppercase tracking-wide text-white/70 mb-2">
                    {metric.label}
                  </p>
                  <p className="text-base font-semibold leading-snug text-white">
                    {metric.details}
                  </p>
                  <span className="mt-3 inline-flex items-center text-[11px] uppercase tracking-widest text-white/60">
                    <Icon name="Clock" size={12} className="mr-1" />
                    Mise à jour après la phase pilote
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
