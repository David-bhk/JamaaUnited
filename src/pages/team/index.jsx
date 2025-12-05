import React, { useState, useEffect } from 'react';
import TeamHero from './components/TeamHero';
import TeamStats from './components/TeamStats';
import TeamFilter from './components/TeamFilter';
import TeamMemberCard from './components/TeamMemberCard';
import JoinTeamCTA from './components/JoinTeamCTA';
import Icon from '../../components/AppIcon';

const Team = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock team data - Updated with Black community leaders and improved images
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Marie Kabila",
      position: {
        en: "Executive Director & Founder",
        fr: "Directrice Exécutive et Fondatrice"
      },
      category: "leadership",
      photo: "https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: {
        en: "Dr. Marie Kabila is a visionary leader with a passion for community development and family strengthening initiatives across the Democratic Republic of Congo.",
        fr: "Dr. Marie Kabila est une leader visionnaire avec une passion pour le développement communautaire et les initiatives de renforcement familial à travers la République Démocratique du Congo."
      },
      fullBio: {
        en: `Dr. Marie Kabila is founding Jamaa United with the belief that strong families are the foundation of thriving communities. Her background in social work, combined with her deep understanding of Congolese culture, is shaping the organization's unique approach to community development.\n\nBorn and raised in Goma, Dr. Kabila has witnessed firsthand the challenges facing families in her community. This experience fuels her passion for creating sustainable solutions that honor traditional values while embracing positive change. She is building Jamaa United from the ground up as a force for community transformation.`,
        fr: `Dr. Marie Kabila fonde Jamaa United avec la conviction que des familles fortes sont la fondation de communautés prospères. Son background en travail social, combiné à sa compréhension profonde de la culture congolaise, façonne l'approche unique de l'organisation au développement communautaire.\n\nNée et élevée à Goma, Dr. Kabila a été témoin de première main des défis auxquels font face les familles de sa communauté. Cette expérience alimente sa passion pour créer des solutions durables qui honorent les valeurs traditionnelles tout en embrassant le changement positif.`
      },
      expertise: [
        { en: "Community Development", fr: "Développement Communautaire" },
        { en: "Family Systems", fr: "Systèmes Familiaux" },
        { en: "Social Work", fr: "Travail Social" },
        { en: "Leadership", fr: "Leadership" }
      ],
      credentials: [
        { en: "PhD in Social Work, University of Kinshasa", fr: "Doctorat en Travail Social, Université de Kinshasa" },
        { en: "Master's in Community Development, University of Cape Town", fr: "Maîtrise en Développement Communautaire, Université du Cap" },
        { en: "Certified Family Therapist", fr: "Thérapeute Familiale Certifiée" },
        { en: "0+ years in community leadership (starting now)", fr: "0+ années en leadership communautaire (commence maintenant)" }
      ],
      recognition: [
        { en: "Ready to build community impact", fr: "Prête à construire un impact communautaire" },
        { en: "Preparing to speak at development conferences", fr: "Se préparant à parler lors de conférences de développement" }
      ],
      socialLinks: [
        { platform: "Linkedin", url: "#" },
        { platform: "Twitter", url: "#" },
        { platform: "Mail", url: "#" }
      ]
    },
    {
      id: 2,
      name: "Jean-Baptiste Mukendi",
      position: {
        en: "Program Director",fr: "Directeur de Programme"
      },
      category: "leadership",photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: {
        en: "Jean-Baptiste brings enthusiasm for program management and community engagement, ready to specialize in youth development and family strengthening initiatives.",fr: "Jean-Baptiste apporte de l'enthousiasme pour la gestion de programmes et l'engagement communautaire, prêt à se spécialiser dans le développement des jeunes et les initiatives de renforcement familial."
      },
      fullBio: {
        en: `Jean-Baptiste Mukendi is dedicating his career to empowering communities through innovative programming and strategic partnerships. His approach will combine traditional community organizing with modern project management methodologies, creating sustainable impact across multiple intervention domains.\n\nWith a background in education and community development, Jean-Baptiste is ready to lead initiatives that will directly benefit families in the Goma region. His expertise in stakeholder engagement and program evaluation will ensure that Jamaa United's interventions are both effective and culturally appropriate.`,
        fr: `Jean-Baptiste Mukendi dédie sa carrière à l'autonomisation des communautés à travers une programmation innovante et des partenariats stratégiques. Son approche combinera l'organisation communautaire traditionnelle avec des méthodologies modernes de gestion de projet, créant un impact durable à travers plusieurs domaines d'intervention.`
      },
      expertise: [
        { en: "Program Management", fr: "Gestion de Programme" },
        { en: "Youth Development", fr: "Développement des Jeunes" },
        { en: "Community Engagement", fr: "Engagement Communautaire" },
        { en: "Strategic Planning", fr: "Planification Stratégique" }
      ],
      credentials: [
        { en: "Master\'s in Development Studies", fr: "Maîtrise en Études de Développement" },
        { en: "Project Management Professional (PMP)", fr: "Professionnel en Gestion de Projet (PMP)" },
        { en: "0+ years in program leadership (ready to start)", fr: "0+ années en leadership de programme (prêt à commencer)" }
      ],
      recognition: [
        { en: "Preparing for program innovation excellence", fr: "Se préparant pour l\'excellence en innovation de programme" }
      ],
      socialLinks: [
        { platform: "Linkedin", url: "#" },
        { platform: "Mail", url: "#" }
      ]
    },
    {
      id: 3,
      name: "Grace Mwangi",
      position: {
        en: "Community Outreach Coordinator",
        fr: "Coordinatrice de Sensibilisation Communautaire"
      },
      category: "community",
      photo: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: {
        en: "Grace is passionate about building bridges between communities and creating inclusive spaces where every family will feel valued and supported.",
        fr: "Grace est passionnée par la construction de ponts entre les communautés et la création d'espaces inclusifs où chaque famille se sentira valorisée et soutenue."
      },
      fullBio: {
        en: `Grace Mwangi will serve as the vital link between Jamaa United and the communities we plan to serve. Her natural ability to connect with people from all walks of life will make her an invaluable asset in building trust and fostering meaningful relationships.\n\nWith experience in grassroots organizing and community mobilization, Grace will ensure that our programs are truly community-driven and responsive to local needs. Her work will be instrumental in expanding our reach and deepening our impact across diverse neighborhoods in Goma.`,
        fr: `Grace Mwangi servira de lien vital entre Jamaa United et les communautés que nous prévoyons de servir. Sa capacité naturelle à se connecter avec des gens de tous horizons en fera un atout inestimable pour construire la confiance et favoriser des relations significatives.`
      },
      expertise: [
        { en: "Community Mobilization", fr: "Mobilisation Communautaire" },
        { en: "Stakeholder Engagement", fr: "Engagement des Parties Prenantes" },
        { en: "Cultural Competency", fr: "Compétence Culturelle" },
        { en: "Conflict Resolution", fr: "Résolution de Conflits" }
      ],
      credentials: [
        { en: "Bachelor\'s in Social Sciences", fr: "Licence en Sciences Sociales" },
        { en: "Community Organizing Certificate", fr: "Certificat d'Organisation Communautaire" },
        { en: "0+ years in community work (beginning journey)", fr: "0+ années en travail communautaire (commence le parcours)" }
      ],
      recognition: [
        { en: "Ready to become a Community Champion", fr: "Prête à devenir une Championne Communautaire" }
      ],
      socialLinks: [
        { platform: "Linkedin", url: "#" },
        { platform: "Facebook", url: "#" },
        { platform: "Mail", url: "#" }
      ]
    },
    {
      id: 4,
      name: "Dr. Samuel Nkomo",
      position: {
        en: "Family Wellness Specialist",fr: "Spécialiste du Bien-être Familial"
      },
      category: "program",photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: {
        en: "Dr. Nkomo will specialize in family therapy and wellness programs, ready to help families navigate challenges and build stronger, healthier relationships.",fr: "Dr. Nkomo se spécialisera en thérapie familiale et programmes de bien-être, prêt à aider les familles à naviguer les défis et construire des relations plus fortes et plus saines."
      },
      fullBio: {
        en: `Dr. Samuel Nkomo brings a unique blend of clinical expertise and cultural sensitivity to his future work with families. His holistic approach to family wellness will incorporate traditional healing practices with evidence-based therapeutic interventions.\n\nAs a licensed family therapist and wellness coach, Dr. Nkomo is developing innovative programs that will address the complex needs of families facing various challenges. His work will be particularly impactful in helping families heal from trauma while building resilience for the future.`,
        fr: `Dr. Samuel Nkomo apporte un mélange unique d'expertise clinique et de sensibilité culturelle à son futur travail avec les familles. Son approche holistique du bien-être familial incorporera des pratiques de guérison traditionnelles avec des interventions thérapeutiques basées sur des preuves.`
      },
      expertise: [
        { en: "Family Therapy", fr: "Thérapie Familiale" },
        { en: "Trauma Recovery", fr: "Récupération de Traumatisme" },
        { en: "Wellness Coaching", fr: "Coaching de Bien-être" },
        { en: "Mental Health", fr: "Santé Mentale" }
      ],
      credentials: [
        { en: "PhD in Clinical Psychology", fr: "Doctorat en Psychologie Clinique" },
        { en: "Licensed Family Therapist", fr: "Thérapeute Familial Licencié" },
        { en: "Certified Wellness Coach", fr: "Coach de Bien-être Certifié" },
        { en: "0+ years in family therapy (launching practice)", fr: "0+ années en thérapie familiale (lancement de la pratique)" }
      ],
      recognition: [
        { en: "Preparing for excellence in family therapy", fr: "Se préparant pour l\'excellence en thérapie familiale" }
      ],
      socialLinks: [
        { platform: "Linkedin", url: "#" },
        { platform: "Mail", url: "#" }
      ]
    },
    {
      id: 5,
      name: "Fatima Al-Rashid",
      position: {
        en: "Youth Program Coordinator",
        fr: "Coordinatrice de Programme Jeunesse"
      },
      category: "program",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: {
        en: "Fatima is dedicated to empowering young people through education, mentorship, and leadership development programs that will prepare them for bright futures.",
        fr: "Fatima se consacre à l'autonomisation des jeunes à travers l'éducation, le mentorat et les programmes de développement du leadership qui les prépareront à des avenirs brillants."
      },
      fullBio: {
        en: `Fatima Al-Rashid is passionate about unlocking the potential of young people in her community. Her innovative approach to youth development will combine traditional mentorship with modern skill-building techniques, creating comprehensive programs that address both personal and professional growth.\n\nWith a background in education and youth psychology, Fatima is ready to design and implement programs that will reach young people across the community. Her work will focus on building confidence, developing leadership skills, and creating pathways to economic opportunity.`,
        fr: `Fatima Al-Rashid est passionnée par le déblocage du potentiel des jeunes de sa communauté. Son approche innovante du développement des jeunes combinera le mentorat traditionnel avec des techniques modernes de développement de compétences.`
      },
      expertise: [
        { en: "Youth Development", fr: "Développement des Jeunes" },
        { en: "Leadership Training", fr: "Formation en Leadership" },
        { en: "Educational Programming", fr: "Programmation Éducative" },
        { en: "Mentorship", fr: "Mentorat" }
      ],
      credentials: [
        { en: "Master\'s in Education", fr: "Maîtrise en Éducation" },
        { en: "Youth Development Specialist Certificate", fr: "Certificat de Spécialiste en Développement des Jeunes" },
        { en: "0+ years in youth programming (ready to launch)", fr: "0+ années en programmation jeunesse (prête à lancer)" }
      ],
      recognition: [
        { en: "Future Youth Advocate of the Year", fr: "Future Défenseure des Jeunes de l\'Année" }
      ],
      socialLinks: [
        { platform: "Linkedin", url: "#" },
        { platform: "Instagram", url: "#" },
        { platform: "Mail", url: "#" }
      ]
    },
    {
      id: 6,
      name: "Prof. Emmanuel Kasongo",
      position: {
        en: "Senior Advisor",
        fr: "Conseiller Principal"
      },
      category: "advisory",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: {
        en: "Professor Kasongo brings decades of academic and practical experience in community development, ready to serve as a strategic advisor to our leadership team.",
        fr: "Le Professeur Kasongo apporte des décennies d'expérience académique et pratique en développement communautaire, prêt à servir comme conseiller stratégique à notre équipe de direction."
      },
      fullBio: {
        en: `Professor Emmanuel Kasongo is a distinguished academic and practitioner whose work has shaped community development approaches across Central Africa. His research on family-centered development models has been widely published and implemented by organizations throughout the region.\n\nAs a Senior Advisor to Jamaa United, Professor Kasongo will provide strategic guidance on program design, evaluation methodologies, and partnership development. His extensive network and deep understanding of regional dynamics will be invaluable in expanding our impact and influence.`,
        fr: `Le Professeur Emmanuel Kasongo est un académicien et praticien distingué dont le travail a façonné les approches de développement communautaire à travers l'Afrique Centrale.`
      },
      expertise: [
        { en: "Community Development Theory", fr: "Théorie du Développement Communautaire" },
        { en: "Research & Evaluation", fr: "Recherche et Évaluation" },
        { en: "Strategic Planning", fr: "Planification Stratégique" },
        { en: "Academic Leadership", fr: "Leadership Académique" }
      ],
      credentials: [
        { en: "PhD in Development Studies", fr: "Doctorat en Études de Développement" },
        { en: "Professor at University of Goma", fr: "Professeur à l\'Université de Goma" },
        { en: "25+ years in academia", fr: "25+ années en académie" },
        { en: "Author of 15+ research papers", fr: "Auteur de 15+ articles de recherche" }
      ],
      recognition: [
        { en: "Preparing for Lifetime Achievement in Community Development", fr: "Se préparant pour une Réalisation de Toute une Vie en Développement Communautaire" },
        { en: "Distinguished Professor Award", fr: "Prix de Professeur Distingué" }
      ],
      socialLinks: [
        { platform: "Linkedin", url: "#" },
        { platform: "Mail", url: "#" }
      ]
    }
  ];

  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers?.filter(member => member?.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <TeamHero currentLanguage={currentLanguage} />
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <TeamStats currentLanguage={currentLanguage} />
          </div>
        </section>

        {/* Team Members Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                {currentLanguage === 'en' ? 'Meet Our Team' : 'Rencontrez Notre Équipe'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {currentLanguage === 'en' ?'Each member of our team brings unique expertise, passion, and dedication to strengthening families and building resilient communities.' :'Chaque membre de notre équipe apporte une expertise, une passion et un dévouement uniques pour renforcer les familles et construire des communautés résilientes.'
                }
              </p>
            </div>

            {/* Filter */}
            <TeamFilter
              currentLanguage={currentLanguage}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers?.map((member) => (
                <TeamMemberCard
                  key={member?.id}
                  member={member}
                  currentLanguage={currentLanguage}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredMembers?.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Users" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {currentLanguage === 'en' ? 'No team members found' : 'Aucun membre d\'équipe trouvé'}
                </h3>
                <p className="text-muted-foreground">
                  {currentLanguage === 'en' ?'Try selecting a different filter to see more team members.' :'Essayez de sélectionner un filtre différent pour voir plus de membres d\'équipe.'
                  }
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <JoinTeamCTA currentLanguage={currentLanguage} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;