import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import ProgramCard from './components/ProgramCard';
import CharitableInitiativeCard from './components/CharitableInitiativeCard';
import KouzProgramSection from './components/KouzProgramSection';
import CommunityCalendar from './components/CommunityCalendar';
import RegistrationModal from './components/RegistrationModal';

const Activities = () => {
  const [activeTab, setActiveTab] = useState('programs');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Mock data for formation programs
  const formationPrograms = [
    {
      id: 1,
      title: 'Leadership familial express',
      description: '8 semaines pour réapprendre à se parler sans détour.',
      duration: '8 semaines',
      participants: '12',
      location: 'Centre Communautaire Goma',
      schedule: 'Samedi 14h-17h',
      price: 'free',
      status: 'open',
      rating: 5,
      category: 'leadership'
    },
    {
      id: 2,
      title: 'Parenting minimaliste',
      description: '6 rencontres pour poser trois règles claires à la maison.',
      duration: '6 semaines',
      participants: '10',
      location: 'Salle Communautaire',
      schedule: 'Mercredi 18h-20h',
      price: 'free',
      status: 'waitlist',
      rating: 4,
      category: 'parenting'
    }
  ];

  // Mock data for charitable initiatives
  const charitableInitiatives = [
    {
      id: 1,
      title: 'Kit école tranquille',
      description: '50 élèves reçoivent un pack simple cahiers + uniforme.',
      goal: 8000,
      raised: 6400,
      supporters: 56,
      endDate: '2025-02-28'
    },
    {
      id: 2,
      title: 'Potager quartier pilote',
      description: 'Un seul bloc urbain teste l\'autosuffisance en légumes.',
      goal: 5000,
      raised: 3100,
      supporters: 34,
      endDate: '2025-03-20'
    }
  ];

  const tabs = [
    {
      id: 'programs',
  label: 'Programmes de Formation',
      icon: 'BookOpen'
    },
    {
      id: 'initiatives',
  label: 'Initiatives Caritatives',
      icon: 'Heart'
    },
    {
      id: 'kouz',
  label: 'Programme Kouz',
      icon: 'Users'
    },
    {
      id: 'calendar',
  label: 'Calendrier',
      icon: 'Calendar'
    }
  ];

  const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'parenting', label: 'Parentalité' },
  { id: 'business', label: 'Entrepreneuriat' },
  { id: 'finance', label: 'Finance' }
  ];

  const handleProgramRegister = (program) => {
    setSelectedProgram(program);
    setIsRegistrationModalOpen(true);
  };

  const handleInitiativeParticipate = (initiative, type) => {
    console.log(`Participating in ${initiative?.title} as ${type}`);
    // Handle participation logic here
  };

  const handleKouzJoin = () => {
    console.log('Joining Kouz program');
    // Handle Kouz program join logic here
  };

  const handleEventRegister = (event) => {
    console.log('Registering for event:', event?.title);
    // Handle event registration logic here
  };

  const handleRegistrationSubmit = async (registrationData) => {
    console.log('Registration submitted:', registrationData);
    // Handle registration submission logic here
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  const filteredPrograms = formationPrograms?.filter(program => {
    const matchesSearch = program?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         program?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    const matchesCategory = filterCategory === 'all' || program?.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-warm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 shadow-soft">
              <Icon name="Activity" size={40} className="text-primary-foreground" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Nos Activités
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Un aperçu court : deux formations, quelques initiatives, un calendrier vivant. Rien de plus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                Explorer les Programmes
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Voir le Calendrier
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-1 overflow-x-auto">
              {tabs?.map((tab) => (
                <Button
                  key={tab?.id}
                  variant={activeTab === tab?.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveTab(tab?.id)}
                  iconName={tab?.icon}
                  iconPosition="left"
                  className="whitespace-nowrap"
                >
                  {tab?.label}
                </Button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e?.target?.value)}
                  className="pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Training Programs */}
        {activeTab === 'programs' && (
          <div>
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
              <div className="flex flex-wrap gap-2">
                {categories?.map((category) => (
                  <Button
                    key={category?.id}
                    variant={filterCategory === category?.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterCategory(category?.id)}
                  >
                    {category?.label}
                  </Button>
                ))}
              </div>

              <div className="text-sm text-muted-foreground">
                {filteredPrograms?.length} programmes trouvés
              </div>
            </div>

            {/* Programs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms?.map((program) => (
                <ProgramCard
                  key={program?.id}
                  program={program}
                  onRegister={handleProgramRegister}
                />
              ))}
            </div>

            {filteredPrograms?.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Aucun programme trouvé</h3>
                <p className="text-muted-foreground">Essayez de modifier vos critères de recherche.</p>
              </div>
            )}
          </div>
        )}

        {/* Charitable Initiatives */}
        {activeTab === 'initiatives' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Initiatives Caritatives</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Rejoignez-nous dans nos efforts pour créer un impact positif durable dans notre communauté.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {charitableInitiatives?.map((initiative) => (
                <CharitableInitiativeCard
                  key={initiative?.id}
                  initiative={initiative}
                  onParticipate={handleInitiativeParticipate}
                />
              ))}
            </div>
          </div>
        )}

        {/* Kouz Program */}
        {activeTab === 'kouz' && (
          <KouzProgramSection onJoinKouz={handleKouzJoin} />
        )}

        {/* Community Calendar */}
        {activeTab === 'calendar' && (
          <CommunityCalendar onEventRegister={handleEventRegister} />
        )}
      </div>
      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        program={selectedProgram}
        onSubmit={handleRegistrationSubmit}
      />
    </div>
  );
};

export default Activities;