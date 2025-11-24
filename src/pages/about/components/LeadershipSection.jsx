import React from 'react';
import Icon from '../../../components/AppIcon';

const LeadershipSection = () => {
  const content = {
    sectionTitle: "Philosophie de Leadership",
    subtitle: "Guidés par la Sagesse, Motivés par l'Objectif",
    description: "Notre approche de leadership combine la sagesse communautaire traditionnelle avec l'innovation sociale moderne, créant un modèle unique qui honore l'héritage culturel tout en conduisant un changement progressiste.",
    philosophy: {
      title: "Nos Principes de Leadership",
      principles: [
        {
          title: "Leadership de Service",
          description: "Nous dirigeons en servant nos communautés d'abord, plaçant leurs besoins et aspirations au centre de tout ce que nous faisons."
        },
        {
          title: "Prise de Décision Collaborative",
          description: "Chaque décision majeure implique la contribution de la communauté, s'assurant que nos programmes reflètent vraiment les besoins et valeurs de ceux que nous servons."
        },
        {
          title: "Apprentissage Continu",
          description: "Nous restons étudiants de nos communautés, apprenant et adaptant constamment nos approches basées sur les retours et résultats."
        },
        {
          title: "Responsabilité Transparente",
          description: "Nous maintenons une communication ouverte sur nos succès, défis, et l'impact de notre travail sur les communautés que nous servons."
        }
      ]
    },
    approach: {
      title: "Notre Approche du Changement",
      description: "Nous croyons que le changement durable se produit de l'intérieur des communautés, non imposé de l'extérieur. Notre rôle est de faciliter, soutenir, et amplifier la force et sagesse inhérentes qui existent déjà dans chaque famille et communauté.",
      elements: [
        {
          title: "Solutions Dirigées par la Communauté",
          description: "Nous travaillons avec les communautés pour identifier leurs propres solutions, fournissant des ressources et du soutien plutôt que des programmes prescriptifs.",
          icon: "Users"
        },
        {
          title: "Intégration Culturelle",
          description: "Nos programmes honorent et s'appuient sur les forces culturelles existantes tout en introduisant des innovations bénéfiques.",
          icon: "Globe"
        },
        {
          title: "Impact Durable",
          description: "Nous nous concentrons sur la construction de capacités locales et de leadership pour assurer que notre impact continue longtemps après notre implication directe.",
          icon: "Repeat"
        },
        {
          title: "Pratique Basée sur les Preuves",
          description: "Toutes nos interventions sont fondées sur la recherche et continuellement évaluées pour l'efficacité et le bénéfice communautaire.",
          icon: "BarChart3"
        }
      ]
    },
    recognition: {
      title: "Reconnaissance et Partenariats",
      items: [
        {
          title: "Prix de Leadership Communautaire",
          organization: "Conseil de Développement de Goma",
          year: "2023",
          description: "Reconnu pour une contribution exceptionnelle au renforcement familial et communautaire dans la région."
        },
        {
          title: "Innovation en Travail Social",
          organization: "Ministère des Affaires Sociales RDC",
          year: "2022",
          description: "Reconnu pour des approches innovantes aux programmes de soutien familial basés sur la communauté."
        },
        {
          title: "Excellence en Partenariat",
          organization: "Réseau Régional des ONG",
          year: "2023",
          description: "Honoré pour l'approche collaborative et la construction efficace de partenariats avec les organisations locales."
        }
      ]
    },
    cta: {
      title: "Rejoignez-nous pour Construire des Communautés Plus Fortes",
      description: "Ensemble, nous pouvons créer un changement positif durable qui commence avec les familles et s'étend à des communautés entières.",
      contact: "Nous Contacter",
      programs: "Voir Nos Programmes"
    }
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            {content.sectionTitle}
          </h2>
          <h3 className="text-xl lg:text-2xl font-accent font-semibold text-primary mb-6">
            {content.subtitle}
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Leadership Philosophy */}
        <div className="mb-20">
          <div className="bg-card rounded-2xl shadow-elevated p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-8 text-center">
              {content.philosophy.title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {content.philosophy.principles.map((principle, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {principle.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Approach to Change */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              {content.approach.title}
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {content.approach.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.approach.elements.map((element, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-soft hover:shadow-elevated transition-smooth group">
                <div className="text-center space-y-3">
                  <h4 className="text-lg font-heading font-semibold text-foreground">
                    {element.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {element.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition & Partnerships */}
        <div className="bg-card rounded-2xl shadow-elevated p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-8 text-center">
            {content.recognition.title}
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {content.recognition.items.map((item, index) => (
              <div key={index} className="space-y-4 p-6 bg-gradient-warm rounded-xl">
                <div>
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm font-medium text-primary">
                      {item.organization}
                    </span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl shadow-elevated text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              {content.cta.title}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {content.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-background text-primary font-semibold rounded-lg hover:bg-muted transition-smooth shadow-soft"
              >
                {content.cta.contact}
              </a>
              <a
                href="/activities"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-background text-background font-semibold rounded-lg hover:bg-background hover:text-primary transition-smooth"
              >
                {content.cta.programs}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;