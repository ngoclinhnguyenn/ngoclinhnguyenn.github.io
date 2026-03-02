// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          soft: 'var(--accent-soft)',
        },
        pastel: {
          rose: 'var(--pastel-rose)',
          sky: 'var(--pastel-sky)',
          mint: 'var(--pastel-mint)',
          peach: 'var(--pastel-peach)',
          lilac: 'var(--pastel-lilac)',
          butter: 'var(--pastel-butter)',
        },
        border: {
          DEFAULT: 'var(--border)',
          hover: 'var(--border-hover)',
        },
        glass: {
          bg: 'var(--glass-bg)',
          border: 'var(--glass-border)',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Outfit"', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.25rem' }],   // was 0.75rem
        'sm': ['1rem', { lineHeight: '1.5rem' }],        // was 0.875rem
        'base': ['1.125rem', { lineHeight: '1.75rem' }], // was 1rem
        'lg': ['1.25rem', { lineHeight: '1.75rem' }],    // was 1.125rem
        'xl': ['1.5rem', { lineHeight: '2rem' }],        // was 1.25rem
        '2xl': ['1.875rem', { lineHeight: '2.25rem' }],  // was 1.5rem
        '3xl': ['2.25rem', { lineHeight: '2.5rem' }],    // was 1.875rem
        '4xl': ['3rem', { lineHeight: '1.1' }],          // was 2.25rem
        '5xl': ['3.75rem', { lineHeight: '1.1' }],       // was 3rem
        '6xl': ['4.5rem', { lineHeight: '1.1' }],        // was 3.75rem
        '7xl': ['6rem', { lineHeight: '1.1' }],          // was 4.5rem
        '8xl': ['8rem', { lineHeight: '1.1' }],          // was 6rem
      },
      maxWidth: {
        reading: '720px',
        wide: '1100px',
      },
      borderRadius: {
        card: '14px',
        pill: '999px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        'glow-accent': '0 0 24px rgba(180, 138, 245, 0.25)',
        'glow-soft': '0 0 40px rgba(180, 138, 245, 0.12)',
      },
    },
  },
  plugins: [],
};
