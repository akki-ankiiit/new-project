import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        golf: {
          green: '#0F3D2E',
          'green-deep': '#0A2E23',
          gold: '#BFA67A',
          dark: '#0B0F0E',
          surface: '#F3EBDD',
          'text-primary': '#EDEDED',
          'text-secondary': '#A8B0AD',
          'glass-bg': 'rgba(255,255,255,0.06)',
          'glass-border': 'rgba(255,255,255,0.1)',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      backdropBlur: {
        xs: '4px',
        glass: '16px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
