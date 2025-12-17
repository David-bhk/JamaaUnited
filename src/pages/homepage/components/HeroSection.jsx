import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HERO_HIGHLIGHTS = [
  'La famille est la cellule de base de toute société',
  'Si la famille va bien, la société ira aussi mieux'
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
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white/80 hover:bg-white/10"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Parler avec Jamaa
              </Button>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight text-white drop-shadow-[0_5px_35px_rgba(0,0,0,0.55)]">
              Construire une communauté unie où les familles sont les piliers de la paix et du développement
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl font-body leading-relaxed">
              Jamaa United met la famille au cœur du développement social en la rendant actrice du changement. Upendo – Akili – Matendo.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/90 hover:text-white"
              >
                <Icon name="ArrowRight" size={16} className="mr-2" />
                Rejoindre la vision
              </Button>
              <span className="text-xs uppercase tracking-widest text-white/60">Devenir acteur du changement</span>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-l border-white/15 pl-6 text-white/85">
              {HERO_HIGHLIGHTS.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="mt-1 text-accent" />
                  <p className="text-base leading-snug">{highlight}</p>
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
