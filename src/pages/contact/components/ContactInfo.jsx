import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'MapPin',
      title: 'Visitez Notre Bureau',
      details: [
        'Avenue de la Paix, Quartier Himbi',
        'Goma, Nord-Kivu',
        'République Démocratique du Congo'
      ],
      action: 'Obtenir l\'itinéraire',
      color: 'text-primary',
      badge: 'from-primary/10 to-secondary/10'
    },
    {
      icon: 'Phone',
      title: 'Appelez-Nous',
      details: [
        '+243 970 123 456',
        '+243 811 234 567',
        'Lun-Ven : 08h00 - 17h00'
      ],
      action: 'Appeler Maintenant',
      color: 'text-secondary',
      badge: 'from-secondary/10 to-sky-100'
    },
    {
      icon: 'Mail',
      title: 'Envoyez-nous un Email',
      details: [
        'info@jamaaunited.org',
        'partnerships@jamaaunited.org',
        'programs@jamaaunited.org'
      ],
      action: 'Envoyer un Email',
      color: 'text-sky-600',
      badge: 'from-sky-100 to-cyan-100'
    },
    {
      icon: 'MessageCircle',
      title: 'Chat en Direct',
      details: [
        'Disponible pendant les heures d\'ouverture',
        'Réponses instantanées',
        'Support communautaire'
      ],
      action: 'Commencer le Chat',
      color: 'text-indigo-500',
      badge: 'from-indigo-50 to-primary/10'
    }
  ];

  const socialLinks = [
    { icon: 'Facebook', name: 'Facebook', url: '#', color: 'hover:text-primary' },
    { icon: 'Twitter', name: 'Twitter', url: '#', color: 'hover:text-primary' },
    { icon: 'Instagram', name: 'Instagram', url: '#', color: 'hover:text-primary' },
    { icon: 'Linkedin', name: 'LinkedIn', url: '#', color: 'hover:text-primary' },
    { icon: 'Youtube', name: 'YouTube', url: '#', color: 'hover:text-secondary' }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactMethods?.map((method, index) => (
          <div key={index} className="bg-card rounded-lg shadow-soft p-6 hover:shadow-elevated transition-smooth">
            <div className="flex items-start space-x-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${method?.badge}`}>
                <Icon name={method?.icon} size={24} className={method?.color} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {method?.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {method?.details?.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
                <button className={`text-sm font-medium ${method?.color} hover:underline transition-smooth`}>
                  {method?.action}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Office Hours */}
      <div className="bg-card rounded-lg shadow-soft p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Clock" size={20} className="mr-2 text-primary" />
          Heures d'Ouverture
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Lundi - Vendredi
              </span>
              <span className="font-medium text-foreground">08h00 - 17h00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Samedi
              </span>
              <span className="font-medium text-foreground">09h00 - 14h00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Dimanche
              </span>
              <span className="font-medium text-foreground">
                Fermé
              </span>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">
              Contact d'Urgence
            </p>
            <p className="font-medium text-foreground">+243 970 123 456</p>
            <p className="text-xs text-muted-foreground mt-1">
              Disponible 24h/24 pour les urgences
            </p>
          </div>
        </div>
      </div>
      {/* Social Media */}
      <div className="bg-card rounded-lg shadow-soft p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Share2" size={20} className="mr-2 text-primary" />
          Suivez-Nous
        </h3>
        <p className="text-muted-foreground mb-4">
          Restez connecté avec notre communauté et obtenez les dernières mises à jour sur nos programmes et activités.
        </p>
        <div className="flex flex-wrap gap-3">
          {socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social?.url}
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground transition-smooth ${social?.color}`}
              title={social?.name}
            >
              <Icon name={social?.icon} size={20} />
            </a>
          ))}
        </div>
      </div>
      {/* Quick Actions */}
  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
          Actions Rapides
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg shadow-soft hover:shadow-elevated transition-smooth">
            <Icon name="Calendar" size={20} className="text-primary" />
            <span className="font-medium text-foreground">
              Planifier une Réunion
            </span>
          </button>
          <button className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg shadow-soft hover:shadow-elevated transition-smooth">
            <Icon name="Download" size={20} className="text-secondary" />
            <span className="font-medium text-foreground">
              Télécharger la Brochure
            </span>
          </button>
          <button className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg shadow-soft hover:shadow-elevated transition-smooth">
            <Icon name="Users" size={20} className="text-primary" />
            <span className="font-medium text-foreground">
              Rejoindre la Communauté
            </span>
          </button>
          <button className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg shadow-soft hover:shadow-elevated transition-smooth">
            <Icon name="Heart" size={20} className="text-secondary" />
            <span className="font-medium text-foreground">
              Faire du Bénévolat
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;