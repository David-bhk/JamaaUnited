import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Comment puis-je m'impliquer dans les programmes de Jamaa United?",
      answer: `Il existe de nombreuses façons de s'impliquer dans nos programmes communautaires. Vous pouvez faire du bénévolat pour nos initiatives de renforcement familial, participer à nos ateliers éducatifs, rejoindre nos événements communautaires, ou devenir facilitateur de programme. Contactez-nous pour discuter des opportunités qui correspondent le mieux à vos intérêts et votre disponibilité.`
    },
    {
      question: "Quels services Jamaa United fournit-elle aux familles?",
      answer: `Nous fournissons des services complets de soutien familial incluant des ateliers parentaux, des programmes de développement des jeunes, une formation en littératie financière, l'éducation sanitaire, le soutien à la résolution de conflits, et le développement du leadership communautaire. Tous nos services sont conçus pour renforcer les liens familiaux et construire des communautés résilientes.`
    },
    {
      question: "Comment les organisations peuvent-elles s'associer avec Jamaa United?",
      answer: `Nous accueillons les partenariats avec les organisations qui partagent notre vision de renforcement des familles et des communautés. Les opportunités de partenariat incluent la collaboration de programmes, le partage de ressources, les événements conjoints, les échanges de renforcement des capacités, et les initiatives de plaidoyer. Veuillez contacter notre équipe de partenariats pour explorer les possibilités de collaboration.`
    },
    {
      question: "Qu'est-ce que le programme 'Kouz' (Cousin & Cousin)?",
      answer: `Le programme 'Kouz' est notre initiative spéciale de mentorat qui associe des membres expérimentés de la communauté avec des familles ou des individus cherchant des conseils et du soutien. Ce programme incarne notre philosophie de soutien familial élargi, créant des connexions significatives qui favorisent la croissance personnelle et la résilience communautaire.`
    },
    {
      question: "Comment mesurez-vous l'impact de vos programmes?",
      answer: `Nous utilisons un cadre complet de mesure d'impact qui suit à la fois les métriques quantitatives (familles servies, programmes complétés, taux de participation communautaire) et les résultats qualitatifs (améliorations des relations familiales, cohésion communautaire, histoires d'autonomisation individuelle). Nous publions régulièrement des rapports d'impact et partageons des histoires de succès avec notre communauté.`
    },
    {
      question: "Puis-je planifier une visite à votre centre communautaire?",
      answer: `Absolument! Nous accueillons les visiteurs dans notre centre communautaire. Vous pouvez planifier une visite pour en apprendre davantage sur nos programmes, rencontrer notre équipe, et voir nos installations. Veuillez nous contacter à l'avance pour organiser un moment convenable pour votre visite et vous assurer que quelqu'un soit disponible pour vous faire une visite appropriée.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-card rounded-lg shadow-soft p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
          Questions Fréquemment Posées
        </h3>
        <p className="text-muted-foreground">
          Trouvez des réponses aux questions courantes sur nos programmes et services.
        </p>
      </div>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left bg-muted/30 hover:bg-muted/50 transition-smooth flex items-center justify-between"
            >
              <span className="font-medium text-foreground pr-4">
                {faq?.question}
              </span>
              <Icon 
                name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                className="text-muted-foreground flex-shrink-0 transition-smooth"
              />
            </button>
            
            <div className={`transition-all duration-300 ease-smooth ${
              openIndex === index 
                ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
            } overflow-hidden`}>
              <div className="px-6 py-4 bg-card">
                <p className="text-muted-foreground leading-relaxed">
                  {faq?.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg text-center">
        <h4 className="font-heading font-semibold text-foreground mb-2">
          Vous avez encore des questions?
        </h4>
        <p className="text-muted-foreground mb-4">
          Notre équipe est là pour vous aider. Contactez-nous directement pour une assistance personnalisée.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-smooth">
            <Icon name="Phone" size={16} />
            <span>Appelez-Nous</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-smooth">
            <Icon name="Mail" size={16} />
            <span>Envoyez un Email</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;