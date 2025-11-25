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
  { id: 1, icon: 'Users', label: 'Familles accompagnées', value: '4 900+' },
  { id: 2, icon: 'MapPin', label: 'Communautés partenaires', value: '65' },
  { id: 3, icon: 'Target', label: "Domaines d’intervention", value: '7' }
];

const IMPACT_DOMAINS = [
  {
    id: 1,
    title: 'Renforcement familial',
    subtitle: 'Accompagner chaque foyer vers la stabilité et la réconciliation',
    description:
      "Ateliers, médiations et groupes de parole pour reconstruire la confiance, l'amour et la résilience au sein des familles.",
    fullDescription:
      "Nos médiateurs accompagnent les familles dans la reconstruction des liens brisés. Nous combinons médiation, accompagnement psychosocial et mentorat parental pour aider chaque membre à retrouver sa place et sa voix.",
    category: 'family',
    familiesServed: 847,
    communitiesReached: 45,
  impactScore: 92,
    programs: [
      {
        name: 'Parole en famille',
        description: 'Sessions guidées pour rouvrir le dialogue entre parents et enfants'
      },
      {
        name: 'Coaching parental',
        description: 'Outils pratiques pour gérer les conflits sans violence'
      },
      {
        name: 'Cercles de guérison',
        description: 'Espaces sécurisés pour libérer les traumatismes familiaux'
      }
    ]
  },
  {
    id: 2,
    title: 'Éducation et jeunesse',
    subtitle: 'Révéler le potentiel des jeunes par l’apprentissage et le mentorat',
    description:
      "Bourses, clubs d’apprentissage et formations aux métiers d’avenir pour ouvrir de vraies perspectives.",
    fullDescription:
      "Nous soutenons les élèves les plus vulnérables grâce aux frais scolaires, au tutorat communautaire et aux programmes d’orientation. Le programme Leadership Jeunesse forme des ambassadeurs capables d’inspirer leur génération.",
    category: 'education',
    familiesServed: 1243,
    communitiesReached: 67,
  impactScore: 88,
    programs: [
      {
        name: 'Bourses solidaires',
        description: 'Prise en charge complète des frais scolaires pour les élèves méritants'
      },
      {
        name: 'Académie des mentors',
        description: 'Accompagnement personnalisé par des modèles locaux inspirants'
      },
      {
        name: 'Ateliers Avenir',
        description: 'Découverte des métiers numériques et verts'
      }
    ]
  },
  {
    id: 3,
    title: 'Santé et bien-être',
    subtitle: 'Prévenir, soigner et sensibiliser pour des familles en bonne santé',
    description:
      "Cliniques mobiles, dépistages, suivi psychosocial et actions nutritionnelles pour toute la famille.",
    fullDescription:
      "Nos équipes mobiles sillonnent les quartiers pour offrir vaccinations, consultations prénatales et accompagnement santé mentale. Nous formons aussi des relais communautaires capables d’orienter rapidement les familles.",
    category: 'health',
    familiesServed: 2156,
    communitiesReached: 89,
  impactScore: 85,
    programs: [
      {
        name: 'Clinique mobile',
        description: 'Prise en charge médicale et pharmacie itinérante'
      },
      {
        name: 'Mères sereines',
        description: 'Préparation à l’accouchement et soutien post-natal'
      },
      {
        name: 'Bien-être mental',
        description: 'Groupes thérapeutiques et suivi individuel'
      }
    ]
  },
  {
    id: 4,
    title: 'Développement économique',
    subtitle: 'Créer des revenus durables et renforcer l’autonomie financière',
    description:
      "Microcrédits, incubateur d’idées et coopératives solidaires pour stabiliser les revenus des familles.",
    fullDescription:
      "Nous formons les entrepreneurs, finançons les premiers stocks et accompagnons les coopératives féminines. Chaque projet inclut une composante d’épargne et de protection sociale.",
    category: 'economic',
    familiesServed: 634,
    communitiesReached: 34,
  impactScore: 91,
    programs: [
      { name: 'Kits de démarrage', description: 'Capital de lancement pour les petites entreprises' },
      { name: 'Coopératives agro', description: 'Mutualisation des intrants et de la distribution' },
      { name: 'Parcours finance', description: 'Formation à la gestion et à l’épargne familiale' }
    ]
  },
  {
    id: 5,
    title: 'Leadership communautaire',
    subtitle: 'Faire émerger des leaders locaux porteurs de paix',
    description:
      'Formations, mentorat et laboratoires citoyens pour professionnaliser l’engagement communautaire.',
    fullDescription:
      "Nos parcours renforcent la confiance, la prise de parole et la gestion de projets sociaux. Les leaders formés deviennent médiateurs, élus locaux ou coordinateurs associatifs.",
    category: 'leadership',
    familiesServed: 423,
    communitiesReached: 28,
  impactScore: 94,
    programs: [
      { name: 'École du leadership', description: '12 semaines de coaching intensif' },
      { name: 'Ateliers plaidoyer', description: 'Stratégies pour défendre les droits locaux' },
      { name: 'Mentorat pair-à-pair', description: 'Réseau d’entraide entre leaders' }
    ]
  },
  {
    id: 6,
    title: 'Durabilité environnementale',
    subtitle: 'Protéger la terre qui nourrit nos familles',
    description:
      "Campagnes de reboisement, agriculture régénératrice et adaptation climatique auprès des paysans.",
    fullDescription:
      "Nous restaurons les écosystèmes autour des villages, diffusons les techniques agroécologiques et accompagnons les communes dans leurs plans climat.",
    category: 'environment',
    familiesServed: 756,
    communitiesReached: 52,
  impactScore: 87,
    programs: [
      { name: 'Brigades vertes', description: 'Plantations communautaires et suivi des arbres' },
      { name: 'Fermes écoles', description: 'Démonstrations d’agriculture durable' },
      { name: 'Alertes climat', description: 'Éducation populaire sur les risques climatiques' }
    ]
  },
  {
    id: 7,
    title: 'Paix et réconciliation',
    subtitle: 'Guérir les traumatismes et restaurer la confiance entre voisins',
    description:
      "Dialogues, médiations coutumières et soutien psychosocial pour prévenir les violences.",
    fullDescription:
      "Les cercles de vérité permettent d’exprimer les blessures du passé, tandis que nos médiateurs communautaires accompagnent les accords de paix locaux.",
    category: 'peace',
    familiesServed: 892,
    communitiesReached: 41,
  impactScore: 89,
    programs: [
      { name: 'Cercles de vérité', description: 'Rencontres sécurisées animées par nos médiateurs' },
      { name: 'Trauma care', description: 'Prise en charge des survivants et survivantes' },
      { name: 'Ambassadeurs de paix', description: 'Jeunes formés à la prévention des conflits' }
    ]
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marie Mukamana',
    location: 'Goma, Nord-Kivu',
    domain: 'Renforcement familial',
    quote:
      "Grâce aux séances d’écoute de Jamaa United, nous avons retrouvé le calme à la maison. Les enfants se sentent enfin entendus.",
    date: 'Mars 2024',
    impact: 'Famille réconciliée'
  },
  {
    id: 2,
    name: 'Jean-Baptiste Nzeyimana',
    location: 'Bukavu, Sud-Kivu',
    domain: 'Développement économique',
    quote:
      "Le microcrédit m’a permis d’ouvrir mon atelier de menuiserie. Aujourd’hui j’emploie trois jeunes du quartier.",
    date: 'Février 2024',
    impact: 'Entreprise lancée'
  },
  {
    id: 3,
    name: 'Grace Uwimana',
    location: 'Butembo, Nord-Kivu',
    domain: 'Éducation',
    quote:
      "Ma fille est entrée à l’université grâce à la bourse. Toute la famille croit de nouveau en l’avenir.",
    date: 'Janvier 2024',
    impact: 'Bourse universitaire'
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
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Chaque domaine concentre des équipes spécialisées, des bénévoles formés et un suivi rigoureux
              pour répondre aux besoins des familles avec dignité et efficacité.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
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
            <p className="text-lg text-muted-foreground mb-8">
              Parlez-nous de votre communauté, de vos besoins urgents ou de vos idées. Notre équipe programme co-construit
              des solutions sur mesure avec les acteurs locaux.
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
