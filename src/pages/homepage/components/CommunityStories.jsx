import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const STORIES = [
  {
    id: 1,
    name: 'Marie Uwimana',
    role: 'Mère & Leader Communautaire',
    focus: 'Upendo — amour vécu',
    highlight: 'Transforme son groupe familial en un cercle d’écoute hebdomadaire.',
    quote:
      '« Nous apprenons à donner la parole à chaque membre de la famille. Les tensions diminuent et l’entraide devient naturelle. »'
  },
  {
    id: 2,
    name: 'Jean-Baptiste Mukendi',
    role: 'Leader Jeunesse & Éducateur',
    focus: 'Akili — compétences partagées',
    highlight:
      'Prépare un atelier mobile pour initier les jeunes du quartier à la médiation communautaire.',
    quote:
      '« Grâce aux outils Akili, je peux guider d’autres jeunes à résoudre les conflits sans violence. »'
  },
  {
    id: 3,
    name: 'Grace Nyiramana',
    role: 'Défenseure de la Santé Communautaire',
    focus: 'Matendo — actions concrètes',
    highlight:
      'Met en place des mini-cliniques itinérantes pour suivre la santé maternelle.',
    quote:
      '« Nous avançons petit à petit, mais chaque visite renforce la confiance entre voisins. »'
  }
];

const getInitials = (name = '') =>
  name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

const CommunityStories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary rounded-full px-5 py-2 text-sm font-medium mb-4">
            <Icon name="MessageCircle" size={16} />
            <span>Voix de la communauté</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Trois fenêtres sur notre impact
          </h2>
          <p className="text-muted-foreground text-lg">
            Des témoignages ultra-concis pour sentir comment Upendo, Akili et Matendo prennent vie, sans surcharger la page.
          </p>
        </div>

        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-card rounded-2xl border border-primary/10 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-primary/20 bg-primary/5 text-primary font-semibold flex items-center justify-center">
                  {getInitials(story.name)}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-primary font-semibold">{story.focus}</p>
                  <h3 className="text-lg font-heading font-bold text-foreground">{story.name}</h3>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </div>
              </div>

              <blockquote className="text-base text-foreground leading-relaxed">
                {story.quote}
              </blockquote>

              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Icon name="Sparkles" size={16} className="text-accent mt-1" />
                <p>{story.highlight}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/10 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm tracking-wide uppercase text-secondary font-semibold">
              Espace libre & simple
            </p>
            <p className="text-lg text-foreground font-medium">
              Une seule phrase suffit pour montrer votre initiative : nous vous aidons à la rendre visible.
            </p>
          </div>
          <Button
            variant="default"
            size="lg"
            className="bg-secondary text-white hover:bg-secondary/90"
          >
            <Icon name="BookOpen" size={18} className="mr-2" />
            Partagez votre histoire
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityStories;