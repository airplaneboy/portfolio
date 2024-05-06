import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        display: ['var(--font-display)', ...fontFamily.sans],
        primary: ['var(--font-primary)', ...fontFamily.mono],
      },

      boxShadow: {
        minecraft: '-2px -4px 0px 0px #0006 inset, 2px 2px 0px 0px #FFF7 inset',
        boundless:
          'inset 1px 2px 3px 0px rgba(31, 31, 31, 1), inset -1px -2px 3px 0px rgba(20, 20, 20, 1), 0px 0px 0px 2px rgb(15, 15, 15)',
        boundless2: '0 0 0 2px #0f0f0f,inset 1px 2px 2px #3339,inset 0 -2px 1px #1e1e1e,1px 1px 6px 2px #0f0f0f80',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
