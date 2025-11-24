import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const RegistrationModal = ({ isOpen, onClose, program, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    motivation: '',
    emergencyContact: '',
    emergencyPhone: '',
    hasTransportation: false,
    needsChildcare: false,
    agreeToTerms: false,
    subscribeNewsletter: true
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 3;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.firstName?.trim()) {
        newErrors.firstName = 'Prénom requis';
      }
      if (!formData?.lastName?.trim()) {
        newErrors.lastName = 'Nom requis';
      }
      if (!formData?.email?.trim()) {
        newErrors.email = 'Email requis';
      } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
        newErrors.email = 'Email invalide';
      }
      if (!formData?.phone?.trim()) {
        newErrors.phone = 'Téléphone requis';
      }
    }

    if (step === 2) {
      if (!formData?.motivation?.trim()) {
        newErrors.motivation = 'Motivation requise';
      }
      if (!formData?.emergencyContact?.trim()) {
        newErrors.emergencyContact = 'Contact d\'urgence requis';
      }
      if (!formData?.emergencyPhone?.trim()) {
        newErrors.emergencyPhone = 'Téléphone d\'urgence requis';
      }
    }

    if (step === 3) {
      if (!formData?.agreeToTerms) {
        newErrors.agreeToTerms = 'Vous devez accepter les conditions';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    
    try {
      await onSubmit({
        ...formData,
        programId: program?.id,
        registrationDate: new Date()?.toISOString()
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        experience: '',
        motivation: '',
        emergencyContact: '',
        emergencyPhone: '',
        hasTransportation: false,
        needsChildcare: false,
        agreeToTerms: false,
        subscribeNewsletter: true
      });
      setCurrentStep(1);
      onClose();
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !program) return null;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Informations Personnelles
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Prénom"
                type="text"
                value={formData?.firstName}
                onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                error={errors?.firstName}
                required
              />
              
              <Input
                label="Nom"
                type="text"
                value={formData?.lastName}
                onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                error={errors?.lastName}
                required
              />
            </div>
            <Input
              label="Adresse Email"
              type="email"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              error={errors?.email}
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Téléphone"
                type="tel"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                error={errors?.phone}
                required
              />
              
              <Input
                label="Âge"
                type="number"
                value={formData?.age}
                onChange={(e) => handleInputChange('age', e?.target?.value)}
                min="16"
                max="100"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Informations Complémentaires
            </h3>
            <Input
              label="Expérience Pertinente"
              type="text"
              value={formData?.experience}
              onChange={(e) => handleInputChange('experience', e?.target?.value)}
              description="Décrivez brièvement votre expérience"
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Motivation *
              </label>
              <textarea
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows={4}
                value={formData?.motivation}
                onChange={(e) => handleInputChange('motivation', e?.target?.value)}
                placeholder="Pourquoi souhaitez-vous participer à ce programme?"
              />
              {errors?.motivation && (
                <p className="text-sm text-error">{errors?.motivation}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Contact d'Urgence"
                type="text"
                value={formData?.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e?.target?.value)}
                error={errors?.emergencyContact}
                required
              />
              
              <Input
                label="Téléphone d'Urgence"
                type="tel"
                value={formData?.emergencyPhone}
                onChange={(e) => handleInputChange('emergencyPhone', e?.target?.value)}
                error={errors?.emergencyPhone}
                required
              />
            </div>
            <div className="space-y-3">
              <Checkbox
                label="J'ai un moyen de transport"
                checked={formData?.hasTransportation}
                onChange={(e) => handleInputChange('hasTransportation', e?.target?.checked)}
              />
              
              <Checkbox
                label="J'ai besoin de garde d'enfants"
                checked={formData?.needsChildcare}
                onChange={(e) => handleInputChange('needsChildcare', e?.target?.checked)}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Confirmation</h3>
            {/* Program Summary */}
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">{program?.title}</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} />
                  <span>{program?.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>{program?.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>{program?.schedule}</span>
                </div>
              </div>
            </div>
            {/* Terms and Conditions */}
            <div className="space-y-3">
              <Checkbox
                label="J'accepte les conditions générales et la politique de confidentialité"
                checked={formData?.agreeToTerms}
                onChange={(e) => handleInputChange('agreeToTerms', e?.target?.checked)}
                error={errors?.agreeToTerms}
                required
              />

              <Checkbox
                label="Je souhaite recevoir la newsletter de Jamaa United"
                checked={formData?.subscribeNewsletter}
                onChange={(e) => handleInputChange('subscribeNewsletter', e?.target?.checked)}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-heading font-semibold text-foreground">
              Inscription au Programme
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {program?.title}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
          />
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Étape {currentStep} sur {totalSteps}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2 transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[60vh]">
          {renderStepContent()}
        </form>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Précédent
          </Button>

          <div className="flex space-x-3">
            <Button variant="ghost" onClick={onClose}>
              Annuler
            </Button>

            {currentStep < totalSteps ? (
              <Button
                variant="default"
                onClick={handleNext}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Suivant
              </Button>
            ) : (
              <Button
                variant="default"
                type="submit"
                loading={isSubmitting}
                iconName="Check"
                iconPosition="left"
              >
                Confirmer l'inscription
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;