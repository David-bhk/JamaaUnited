import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

  const departmentOptions = [
    { value: 'general', label: 'Demande Générale' },
    { value: 'programs', label: 'Programmes et Activités' },
    { value: 'partnerships', label: 'Partenariats' },
    { value: 'volunteer', label: 'Opportunités de Bénévolat' },
    { value: 'media', label: 'Médias et Presse' },
    { value: 'support', label: 'Support Technique' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Priorité Faible' },
    { value: 'medium', label: 'Priorité Moyenne' },
    { value: 'high', label: 'Priorité Élevée' },
    { value: 'urgent', label: 'Urgent' }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  if (submitSuccess) {
    return (
      <div className="bg-card rounded-lg shadow-soft p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-success/10">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
        </div>
        <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
          Message Envoyé avec Succès!
        </h3>
        <p className="text-muted-foreground mb-6">
          Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setSubmitSuccess(false)}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Envoyer un Autre Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg shadow-soft p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
          Envoyez-nous un Message
        </h3>
        <p className="text-muted-foreground">
          Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Prénom"
            type="text"
            placeholder="Entrez votre prénom"
            {...register('firstName', { 
              required: 'Le prénom est requis' 
            })}
            error={errors?.firstName?.message}
            required
          />
          
          <Input
            label="Nom de Famille"
            type="text"
            placeholder="Entrez votre nom de famille"
            {...register('lastName', { 
              required: 'Le nom de famille est requis' 
            })}
            error={errors?.lastName?.message}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Adresse Email"
            type="email"
            placeholder="votre.email@exemple.com"
            {...register('email', { 
              required: 'L\'email est requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresse email invalide'
              }
            })}
            error={errors?.email?.message}
            required
          />
          
          <Input
            label="Numéro de Téléphone"
            type="tel"
            placeholder="+243 XXX XXX XXX"
            {...register('phone')}
            error={errors?.phone?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Département"
            placeholder="Sélectionner le département"
            options={departmentOptions}
            {...register('department', { 
              required: 'Veuillez sélectionner un département'
            })}
            error={errors?.department?.message}
            required
          />
          
          <Select
            label="Niveau de Priorité"
            placeholder="Sélectionner la priorité"
            options={priorityOptions}
            {...register('priority')}
            error={errors?.priority?.message}
          />
        </div>

        <Input
          label="Sujet"
          type="text"
          placeholder="Brève description de votre demande"
          {...register('subject', { 
            required: 'Le sujet est requis',
            minLength: {
              value: 5,
              message: 'Le sujet doit contenir au moins 5 caractères'
            }
          })}
          error={errors?.subject?.message}
          required
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message
            <span className="text-error ml-1">*</span>
          </label>
          <textarea
            rows={6}
            placeholder="Veuillez fournir des détails sur votre demande, y compris toute question spécifique ou information qui nous aiderait à mieux vous assister."
            className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            {...register('message', { 
              required: 'Le message est requis',
              minLength: {
                value: 20,
                message: 'Le message doit contenir au moins 20 caractères'
              }
            })}
          />
          {errors?.message && (
            <p className="mt-1 text-sm text-error">{errors?.message?.message}</p>
          )}
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="consent"
            className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded"
            {...register('consent', { 
              required: 'Veuillez accepter notre politique de confidentialité' 
            })}
          />
          <label htmlFor="consent" className="text-sm text-muted-foreground">
            J'accepte la politique de confidentialité et consens au traitement de mes données personnelles dans le but de répondre à ma demande.
            {errors?.consent && (
              <span className="block text-error mt-1">{errors?.consent?.message}</span>
            )}
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="flex-1 bg-primary hover:bg-primary/90"
          >
            {isSubmitting 
              ? 'Envoi en cours...'
              : 'Envoyer le Message'
            }
          </Button>
          
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => reset()}
            iconName="RotateCcw"
            iconPosition="left"
            className="flex-1 sm:flex-none"
          >
            Réinitialiser
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;