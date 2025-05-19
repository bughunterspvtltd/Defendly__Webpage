/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': {
          800: '#1A2D52',
          900: '#001F3F',
        },
        'primary-blue': '#1D66F8',
        'accent-purple': '#00457F ',
        'text-gray': '#D8D8D8',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #001F3F 0%, #1A2D52 100%)',
        'cta-gradient': 'linear-gradient(90deg, #1D66F8 0%, #A136E7 100%)',
        'button-gradient': 'linear-gradient(90deg, #1D66F8, #A136E7)',
      },
      boxShadow: {
        'glow': '0 0 25px rgba(29, 102, 248, 0.5)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.2), 0 0 10px rgba(29, 102, 248, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};