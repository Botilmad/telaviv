/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#00548F',
        'primary-light': '#0099DC',
        secondary: '#FF671F',
        text: '#1E293B',
        background: '#F8FAFC',
      },
    },
  },
  plugins: [],
};