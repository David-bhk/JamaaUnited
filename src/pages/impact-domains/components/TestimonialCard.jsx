import React from 'react';
import Icon from '../../../components/AppIcon';

const getInitials = (name = '') =>
  name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-card rounded-lg shadow-soft p-6 h-full">
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-semibold">
          {getInitials(testimonial?.name)}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-heading font-semibold text-foreground text-sm">
            {testimonial?.name}
          </h4>
          <p className="text-muted-foreground text-xs">
            {testimonial?.location} • {testimonial?.domain}
          </p>
        </div>
        <div className="flex-shrink-0">
          <Icon name="Quote" size={20} className="text-primary/30" />
        </div>
      </div>
      <blockquote className="text-foreground text-sm leading-relaxed mb-4">
        "{testimonial?.quote}"
      </blockquote>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-1">
          <Icon name="Calendar" size={14} />
          <span>{testimonial?.date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Heart" size={14} className="text-error" />
          <span>{testimonial?.impact}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;