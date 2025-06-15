/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0A0F29',
        accent: '#00FFF7',
        secondary: '#DAD6F5',
        'accent-dark': '#00D6D0',
        'primary-light': '#1A1F39',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Neue Montreal', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-glow': 'linear-gradient(135deg, #00FFF7 0%, #DAD6F5 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 