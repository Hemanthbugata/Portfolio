/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(${name}) / <alpha-value>)`

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: v('--p-50'),
          100: v('--p-100'),
          200: v('--p-200'),
          300: v('--p-300'),
          400: v('--p-400'),
          500: v('--p-500'),
          600: v('--p-600'),
          700: v('--p-700'),
          800: v('--p-800'),
          900: v('--p-900'),
        },
        accent: {
          300: v('--a-300'),
          400: v('--a-400'),
          500: v('--a-500'),
          600: v('--a-600'),
        },
        page: v('--c-page'),
        elevated: v('--c-elevated'),
        heading: v('--c-heading'),
        body: v('--c-body'),
        muted: v('--c-muted'),
        line: v('--c-line'),
        'on-primary': v('--c-on-primary'),
        surface: {
          950: '#040810',
          900: '#080e1a',
          800: '#0d1524',
          700: '#131d30',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'spin-slower': 'spin 40s linear infinite reverse',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgb(var(--p-500) / 0.45)',
        'glow-lg': '0 0 80px -20px rgb(var(--p-500) / 0.55)',
        card: '0 20px 50px -20px rgb(var(--c-shadow) / 0.45)',
      },
    },
  },
  plugins: [],
}
