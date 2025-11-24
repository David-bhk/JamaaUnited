import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  // Mock coordinates for Goma, DRC
  const latitude = -1.6792;
  const longitude = 29.2228;
  
  return (
    <div className="bg-card rounded-lg shadow-soft overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2 flex items-center">
          <Icon name="MapPin" size={20} className="mr-2 text-primary" />
          Notre Emplacement
        </h3>
        <p className="text-muted-foreground">
          Visitez-nous dans notre centre communautaire au cœur de Goma, où les familles et les communautés se rassemblent.
        </p>
      </div>
      
      <div className="relative h-96 bg-muted">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Localisation du bureau Jamaa United"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`}
          className="border-0"
        />
        
        {/* Overlay with location details */}
        <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-elevated">
          <div className="flex items-start space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white flex-shrink-0">
              <Icon name="MapPin" size={16} />
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-heading font-semibold text-foreground text-sm">
                  Centre communautaire Jamaa United
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Avenue de la Paix, Quartier Himbi<br />
                  Goma, Nord-Kivu, RDC
              </p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="text-xs text-primary hover:underline flex items-center">
                  <Icon name="Navigation" size={12} className="mr-1" />
                  Itinéraire
                </button>
                <button className="text-xs text-primary hover:underline flex items-center">
                  <Icon name="Phone" size={12} className="mr-1" />
                  Appeler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Location Features */}
      <div className="p-6 bg-muted/30">
        <h4 className="font-heading font-semibold text-foreground mb-3">
          Caractéristiques du Lieu
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Parking
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Accessibility" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Accessible
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Wifi" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              WiFi Gratuit
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Coffee" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Rafraîchissements
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;