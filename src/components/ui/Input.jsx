import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

const Input = forwardRef(({ 
  label,
  description,
  error,
  required,
  className,
  containerClassName,
  id,
  type = 'text',
  ...props
}, ref) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={cn('space-y-2', containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'text-sm font-medium text-foreground',
            error && 'text-error'
          )}
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}

      <div>
        <input
          id={inputId}
          ref={ref}
          type={type}
          className={cn(
            'w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:cursor-not-allowed disabled:opacity-60',
            error && 'border-error focus:ring-error',
            className
          )}
          {...props}
        />
      </div>

      {description && !error && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      {error && (
        <p className="text-sm text-error">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;