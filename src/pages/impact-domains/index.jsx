import React, { useMemo, useState } from 'react';
import Header from '../../components/ui/Header';
import DomainCard from './components/DomainCard';
import FilterBar from './components/FilterBar';
import ImpactMetrics from './components/ImpactMetrics';
import TestimonialCard from './components/TestimonialCard';
import DomainModal from './components/DomainModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const HERO_HIGHLIGHTS = [
  { id: 1, icon: 'Users', label: 'Familles pilotes', value: '15' },
  { id: 2, icon: 'MapPin', label: 'Quartiers suivis', value: '4' }
];

const IMPACT_DOMAINS = [
  {
    id: 1,
    title: 'Renforcement familial',
    subtitle: 'Priorité aux conversations honnêtes',
    description: 'Petites médiations guidées pour calmer les tensions à la maison.',
    fullDescription: 'Nous réunissons 5 familles à la fois, documentons chaque progrès et partageons les outils utiles seulement après test.',
    category: 'family',
    familiesServed: 15,
    communitiesReached: 2,
    impactScore: 92,
    programs: [
      { name: 'Parole en famille', description: '30 minutes hebdo, carnet partagé' },
      { name: 'Cercles lumière', description: '2 animateurs, 6 familles, 4 rencontres' }
    ]
  },
  {
    id: 2,
    title: 'Éducation & jeunesse',
    subtitle: 'Alléger le parcours scolaire',
    description: 'Tutorat pair-à-pair et mini-bourses pour garder les jeunes en classe.',
    fullDescription: 'Nous finançons le strict nécessaire (frais, uniformes) et suivons les progrès via un groupe de mentors.',
    category: 'education',
    familiesServed: 25,
    communitiesReached: 3,
    impactScore: 88,
    programs: [
      { name: 'Bourses 1-2-3', description: 'Inscription, uniformes, carnet' },
      { name: 'Mentors pairs', description: 'Jeunes diplômés soutiennent 3 élèves chacun' }
    ]
  },
  {
    id: 3,
    title: 'Santé de proximité',
    subtitle: 'Soins essentiels, sans lourdeur',
    description: 'Visites mobiles qui couvrent vaccin, tension et écoute psychosociale.',
    fullDescription: 'Une équipe mixte passe chaque semaine, note les urgences et oriente vers les partenaires santé.',
    category: 'health',
    familiesServed: 32,
    communitiesReached: 4,
    impactScore: 85,
    programs: [
      { name: 'Clinique mobile', description: 'Matériel léger, suivi immédiat' },
      { name: 'Pause mentale', description: 'Espaces silencieux après la tournée médicale' }
    ]
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marie Mukamana',
    location: 'Goma',
    domain: 'Renforcement familial',
    quote:
      "Trois rencontres et nos repas sont redevenus paisibles.",
    date: 'Mars 2024',
    impact: 'Dialogue relancé'
  },
  {
    id: 2,
    name: 'Grace Uwimana',
    location: 'Butembo',
    domain: 'Éducation',
    quote:
      "La bourse couvre l'essentiel, on respire enfin.",
    date: 'Janvier 2024',
    impact: 'Frais réglés'
  }
];

const ImpactDomains = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);

  const filteredDomains = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return IMPACT_DOMAINS.filter((domain) => {
      const matchesCategory = activeFilter === 'all' || domain.category === activeFilter;
      const matchesTerm =
        !term ||
        domain.title.toLowerCase().includes(term) ||
        domain.subtitle.toLowerCase().includes(term) ||
        domain.description.toLowerCase().includes(term);

      return matchesCategory && matchesTerm;
    });
  }, [activeFilter, searchTerm]);

  const handleViewDetails = (domain) => {
    setSelectedDomain(domain);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDomain(null);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header variant="simple" />
      <main className="pb-20">
        <section className="bg-gradient-warm text-foreground pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/80 mb-4">
              Domaines d’intervention
            </p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              Là où Jamaa United transforme les communautés
            </h1>
            <p className="text-base text-primary-foreground/90 max-w-2xl mx-auto">
              Nous avançons sur trois domaines maximum à la fois pour rester précis et honnêtes dans nos suivis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {HERO_HIGHLIGHTS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur shadow-inner border border-white/20"
                >
                  <Icon name={item.icon} size={28} className="text-white mb-4" />
                  <div className="text-3xl font-heading font-bold text-white">{item.value}</div>
                  <p className="text-white/80 text-sm mt-2">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button size="lg" iconName="Heart" iconPosition="left">
                Soutenir une initiative
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white/60" iconName="Mail">
                Discuter avec l’équipe
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <ImpactMetrics />

          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDomains.map((domain) => (
              <DomainCard key={domain.id} domain={domain} onViewDetails={handleViewDetails} />
            ))}
          </div>

          {filteredDomains.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                Aucun domaine ne correspond à votre recherche pour le moment.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Essayez un autre mot-clé ou réinitialisez les filtres.
              </p>
            </div>
          )}
        </div>

        <section className="py-16 mt-12 bg-gradient-trust">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Voix du terrain</p>
              <h2 className="text-3xl font-heading font-bold mb-4">Histoires de transformation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Les familles, entrepreneurs et jeunes leaders racontent comment l’accompagnement de Jamaa United a changé
                leur horizon.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Icon name="Sparkles" size={18} className="mr-2" />
              Ensemble, on va plus loin
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">Prêts à déployer un nouveau programme ?</h2>
            <p className="text-base text-muted-foreground mb-8">
              Expliquez simplement votre besoin prioritaire et nous voyons si Jamaa peut y répondre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" iconName="MessageCircle" iconPosition="left">
                Planifier un échange
              </Button>
              <Button variant="outline" size="lg" iconName="FileText" iconPosition="left">
                Découvrir nos méthodologies
              </Button>
            </div>
          </div>
        </section>
      </main>

      <DomainModal domain={selectedDomain} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ImpactDomains;
