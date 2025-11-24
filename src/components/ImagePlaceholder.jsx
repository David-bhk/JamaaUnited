import React from 'react';
import Icon from './AppIcon';

const ImagePlaceholder = ({ width, height, className = '', text = 'Image à venir' }) => {
  // Using the logo colors from our theme
  return (
    <div 
      className={`relative flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden ${className}`}
      style={{ width: width || '100%', height: height || '300px' }}
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-primary rounded-full w-full h-full"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft">
            <Icon name="Image" size={32} className="text-white" />
          </div>
        </div>
        <p className="text-muted-foreground font-medium">{text}</p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;