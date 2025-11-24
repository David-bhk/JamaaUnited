/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core System Colors */
        background: 'var(--color-background)', /* white */
        foreground: 'var(--color-foreground)', /* slate-800 */
        border: 'var(--color-border)', /* gray-200 */
        input: 'var(--color-input)', /* gray-50 */
        ring: 'var(--color-ring)', /* blue-600 */
        
        /* Card & Surface Colors */
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)' /* slate-800 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)' /* slate-800 */
        },
        surface: 'var(--color-surface)', /* gray-50 */
        
        /* Muted Colors */
        muted: {
          DEFAULT: 'var(--color-muted)', /* gray-50 */
          foreground: 'var(--color-muted-foreground)' /* gray-500 */
        },
        
        /* Brand Primary Colors */
        primary: {
          DEFAULT: 'var(--color-primary)', /* blue-600 */
          foreground: 'var(--color-primary-foreground)' /* white */
        },
        
        /* Brand Secondary Colors */
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* pink-700 */
          foreground: 'var(--color-secondary-foreground)' /* white */
        },
        
        /* Accent Colors */
        accent: {
          DEFAULT: 'var(--color-accent)', /* orange-500 */
          foreground: 'var(--color-accent-foreground)' /* white */
        },
        
        /* State Colors */
        success: {
          DEFAULT: 'var(--color-success)', /* green-600 */
          foreground: 'var(--color-success-foreground)' /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* yellow-500 */
          foreground: 'var(--color-warning-foreground)' /* black */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-600 */
          foreground: 'var(--color-error-foreground)' /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-600 */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        
        /* Additional Brand Colors */
        trust: {
          DEFAULT: 'var(--color-trust)', /* sky-300 */
          foreground: 'var(--color-trust-foreground)' /* slate-800 */
        },
        hope: {
          DEFAULT: 'var(--color-hope)', /* green-300 */
          foreground: 'var(--color-hope-foreground)' /* slate-800 */
        },
        energy: {
          DEFAULT: 'var(--color-energy)', /* yellow-400 */
          foreground: 'var(--color-energy-foreground)' /* slate-800 */
        },
        action: {
          DEFAULT: 'var(--color-action)', /* orange-400 */
          foreground: 'var(--color-action-foreground)' /* white */
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'soft': '8px',
        'card': '12px',
        'button': '6px',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'elevated': '0 10px 25px rgba(0, 0, 0, 0.15)',
        'warm': '0 8px 25px rgba(135, 206, 235, 0.15)',
        'glow': '0 0 20px rgba(46, 134, 171, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}