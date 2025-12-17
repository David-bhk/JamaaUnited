import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HERO_CARD = [
  { icon: 'Heart', label: 'Upendo', detail: 'Union et vivre ensemble' },
  { icon: 'Brain', label: 'Akili', detail: 'Réflexion, planification et sagesse' },
  { icon: 'Zap', label: 'Matendo', detail: 'Idées concrètes à impact positif' }
];

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-900" aria-hidden></div>
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -top-12 right-8 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute top-24 left-4 h-52 w-52 rounded-full bg-secondary/25 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
              À propos
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight">
              Initiative communautaire pour un développement social basé sur la famille
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl">
              La famille est la cellule de base de toute société. Jamaa United est né pour répondre à ce défi en mettant la famille au centre du développement social et économique de nos communautés.
            </p>

            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                size="sm"
                className="w-fit border-white/30 text-white hover:bg-white/10"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                Écrire à l'équipe
              </Button>
              <span className="text-xs uppercase tracking-widest text-white/60">
                réponse sous 48h • pas de newsletter
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {HERO_CARD.map((card) => (
                <div key={card.label} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Icon name={card.icon} size={16} className="text-accent" />
                  </div>
                  <p className="text-sm font-semibold">{card.label}</p>
                  <p className="text-xs text-white/70">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://placehold.co/600x700/1e293b/ffffff?text=Jamaa+United"
                alt="Famille réunie"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-sm uppercase tracking-wider text-white/70">Plan de croissance 2025–2030</p>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                <span>10 → 1M familles</span>
                <span className="text-white/60">•</span>
                <span>9 domaines</span>
                <span className="text-white/60">•</span>
                <span>3 piliers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;