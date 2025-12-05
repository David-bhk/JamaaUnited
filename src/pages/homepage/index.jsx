import React from 'react';
import PageTitle from '../../components/shared/PageTitle';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import ImpactMetrics from './components/ImpactMetrics';
import CommunityStories from './components/CommunityStories';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  const pageDescription = 'Construire des Communautés Plus Fortes par le Développement Centré sur la Famille';

  return (
    <div className="min-h-screen bg-background">
      <PageTitle 
        title="Accueil" 
        description={pageDescription}
      />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Three Pillars Section */}
        <PillarsSection />

        {/* Impact Metrics Section */}
        <ImpactMetrics />

        {/* Community Stories Section */}
        <CommunityStories />

        {/* Call to Action Section */}
        <CallToAction />
      </main>
    </div>
  );
};

export default Homepage;