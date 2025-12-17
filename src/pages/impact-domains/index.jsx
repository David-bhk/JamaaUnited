import React, { useMemo, useState } from 'react';
import DomainCard from './components/DomainCard';
import FilterBar from './components/FilterBar';
import ImpactMetrics from './components/ImpactMetrics';
import TestimonialCard from './components/TestimonialCard';
import DomainModal from './components/DomainModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const HERO_HIGHLIGHTS = [
  { id: 1, icon: 'Users', label: 'Objectif 2025', value: '10 familles' },
  { id: 2, icon: 'Target', label: 'Objectif 2030', value: '1M familles' }
];

const IMPACT_DOMAINS = [
  {
    id: 1,
    title: 'Éducation et formation',
    subtitle: 'Première école de la vie',
    description: 'Accompagner les familles dans l\'éducation et le développement des compétences.',
    fullDescription: 'La famille est la première école où l\'on apprend l\'amour, le respect, le travail et la responsabilité.',
    category: 'education',
    familiesServed: 10,
    communitiesReached: 2,
    impactScore: 90,
    programs: [
      { name: 'Mentorat familial', description: 'Accompagnement personnalisé' },
      { name: 'Formation leadership', description: 'Développer les compétences' }
    ]
  },
  {
    id: 2,
    title: 'Santé et nutrition',
    subtitle: 'Bien-être familial',
    description: 'Promouvoir la santé et une bonne nutrition au sein des familles.',
    fullDescription: 'Des familles en bonne santé construisent des communautés résilientes.',
    category: 'health',
    familiesServed: 15,
    communitiesReached: 3,
    impactScore: 88,
    programs: [
      { name: 'Sensibilisation santé', description: 'Prévention et éducation' },
      { name: 'Nutrition familiale', description: 'Alimentation équilibrée' }
    ]
  },
  {
    id: 3,
    title: 'Entrepreneuriat et leadership',
    subtitle: 'Autonomisation économique',
    description: 'Développer l\'esprit d\'entreprise et le leadership familial.',
    fullDescription: 'Rendre les familles actrices de leur propre développement économique.',
    category: 'economic',
    familiesServed: 20,
    communitiesReached: 4,
    impactScore: 85,
    programs: [
      { name: 'Micro-entreprises', description: 'Lancer son activité' },
      { name: 'Leadership familial', description: 'Gestion et planification' }
    ]
  },
  {
    id: 4,
    title: 'Cohésion sociale et paix',
    subtitle: 'Vivre ensemble',
    description: 'Renforcer l\'unité et la paix au sein des communautés.',
    fullDescription: 'Bâtir des ponts entre familles pour une cohabitation harmonieuse.',
    category: 'peace',
    familiesServed: 25,
    communitiesReached: 5,
    impactScore: 92,
    programs: [
      { name: 'Médiation familiale', description: 'Résolution des conflits' },
      { name: 'Cercles de paix', description: 'Dialogue intercommunautaire' }
    ]
  },
  {
    id: 5,
    title: 'Protection et genre',
    subtitle: 'Lutte contre les VBG',
    description: 'Protéger les familles et lutter contre les violences basées sur le genre.',
    fullDescription: 'Chaque membre de la famille mérite protection et respect.',
    category: 'protection',
    familiesServed: 12,
    communitiesReached: 3,
    impactScore: 87,
    programs: [
      { name: 'Sensibilisation VBG', description: 'Prévention et signalement' },
      { name: 'Accompagnement', description: 'Soutien aux victimes' }
    ]
  },
  {
    id: 6,
    title: 'Environnement et climat',
    subtitle: 'Développement durable',
    description: 'Sensibiliser les familles à la protection de l\'environnement.',
    fullDescription: 'Des actions concrètes pour un avenir durable.',
    category: 'environment',
    familiesServed: 18,
    communitiesReached: 4,
    impactScore: 80,
    programs: [
      { name: 'Reboisement', description: 'Planter pour demain' },
      { name: 'Éco-gestes', description: 'Pratiques durables au quotidien' }
    ]
  },
  {
    id: 7,
    title: 'Eau, hygiène et assainissement',
    subtitle: 'WASH',
    description: 'Améliorer l\'accès à l\'eau potable et aux infrastructures sanitaires.',
    fullDescription: 'L\'eau propre et l\'hygiène sont essentielles à la santé familiale.',
    category: 'wash',
    familiesServed: 22,
    communitiesReached: 5,
    impactScore: 86,
    programs: [
      { name: 'Points d\'eau', description: 'Accès à l\'eau potable' },
      { name: 'Hygiène familiale', description: 'Bonnes pratiques' }
    ]
  },
  {
    id: 8,
    title: 'Urgences humanitaires',
    subtitle: 'Assistance sociale',
    description: 'Répondre aux urgences et apporter une assistance aux familles vulnérables.',
    fullDescription: 'Solidarité et entraide face aux crises.',
    category: 'humanitarian',
    familiesServed: 30,
    communitiesReached: 6,
    impactScore: 89,
    programs: [
      { name: 'Aide d\'urgence', description: 'Réponse rapide' },
      { name: 'Réhabilitation', description: 'Accompagnement post-crise' }
    ]
  },
  {
    id: 9,
    title: 'Renforcement familial',
    subtitle: 'Cellule de base',
    description: 'Renforcer la structure et les liens familiaux.',
    fullDescription: 'La famille est la cellule de base de toute société.',
    category: 'family',
    familiesServed: 10,
    communitiesReached: 2,
    impactScore: 95,
    programs: [
      { name: 'Cercles familiaux', description: 'Dialogue et écoute' },
      { name: 'Cohabitation', description: 'Vivre ensemble' }
    ]
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Famille Mukamana',
    location: 'Goma',
    domain: 'Renforcement familial',
    quote:
      "Depuis que nous avons rejoint Jamaa United, notre famille a retrouvé l'unité et la paix.",
    date: 'Décembre 2024',
    impact: 'Cohésion renforcée'
  },
  {
    id: 2,
    name: 'Famille Uwimana',
    location: 'Goma',
    domain: 'Éducation',
    quote:
      "Nos enfants ont maintenant accès à un meilleur accompagnement scolaire.",
    date: 'Décembre 2024',
    impact: 'Formation continue'
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
      <main className="pt-16 pb-20">
        <section className="bg-gradient-warm text-foreground pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/80 mb-4">
              Domaines d’intervention
            </p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              9 domaines pour transformer les communautés
            </h1>
            <p className="text-base text-primary-foreground/90 max-w-2xl mx-auto">
              De l'éducation aux urgences humanitaires, nous intervenons là où les familles ont besoin de soutien.
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
