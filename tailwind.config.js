/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* =======================================================================
         COLORS
         All colors reference CSS variables from index.css for easy theming.
         ======================================================================= */
      colors: {
        // Brand
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
        },

        // Backgrounds
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          inverse: 'var(--color-bg-inverse)',
        },

        // Text
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
        },

        // Borders
        border: {
          DEFAULT: 'var(--color-border-default)',
          subtle: 'var(--color-border-subtle)',
          strong: 'var(--color-border-strong)',
        },

        // Buttons
        btn: {
          'primary-bg': 'var(--color-btn-primary-bg)',
          'primary-bg-hover': 'var(--color-btn-primary-bg-hover)',
          'primary-text': 'var(--color-btn-primary-text)',
          'secondary-bg': 'var(--color-btn-secondary-bg)',
          'secondary-bg-hover': 'var(--color-btn-secondary-bg-hover)',
          'secondary-text': 'var(--color-btn-secondary-text)',
        },

        // Availability Badge
        badge: {
          'available-bg': 'var(--color-badge-available-bg)',
          'available-text': 'var(--color-badge-available-text)',
          'available-dot': 'var(--color-badge-available-dot)',
        },

        // Mockup/Frames
        mockup: {
          frame: 'var(--color-mockup-frame)',
          bezel: 'var(--color-mockup-bezel)',
          accent: 'var(--color-mockup-accent)',
        },

        // Tooltip
        tooltip: {
          bg: 'var(--color-tooltip-bg)',
          text: 'var(--color-tooltip-text)',
        },

        // Form Inputs
        input: {
          bg: 'var(--color-input-bg)',
          border: 'var(--color-input-border)',
          'border-focus': 'var(--color-input-border-focus)',
          text: 'var(--color-input-text)',
          placeholder: 'var(--color-input-placeholder)',
        },

        // Cards
        card: {
          bg: 'var(--color-card-bg)',
          border: 'var(--color-card-border)',
          'border-hover': 'var(--color-card-border-hover)',
        },

        // Navigation
        nav: {
          bg: 'var(--color-nav-bg)',
          border: 'var(--color-nav-border)',
          hover: 'var(--color-nav-hover)',
        },

        // Polaroid
        polaroid: {
          bg: 'var(--color-polaroid-bg)',
        },

        // Semantic Colors (for direct use)
        success: {
          DEFAULT: 'var(--color-success)',
          light: 'var(--color-success-light)',
          dark: 'var(--color-success-dark)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          light: 'var(--color-warning-light)',
          dark: 'var(--color-warning-dark)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          light: 'var(--color-error-light)',
          dark: 'var(--color-error-dark)',
        },
      },

      /* =======================================================================
         TYPOGRAPHY
         ======================================================================= */
      fontFamily: {
        sans: ['var(--font-family-sans)'],
      },
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
      },
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },
      lineHeight: {
        tight: 'var(--line-height-tight)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
      },

      /* =======================================================================
         BORDER RADIUS
         ======================================================================= */
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
        custom: 'var(--radius-custom)',
      },

      /* =======================================================================
         SHADOWS
         ======================================================================= */
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },

      /* =======================================================================
         TRANSITIONS
         ======================================================================= */
      transitionDuration: {
        fast: 'var(--transition-fast)',
        normal: 'var(--transition-normal)',
        slow: 'var(--transition-slow)',
        slower: 'var(--transition-slower)',
      },

      /* =======================================================================
         CUSTOM VALUES
         ======================================================================= */
      maxWidth: {
        hero: '510px',
      },
    },
  },
  plugins: [],
}
