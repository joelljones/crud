/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#18191a',
        'gray-med': '#242526',
        'gray-light': '#3a3b3c',
        'gray-light-hover': '#4e4f50',
      },
    },
  },
  plugins: [],
};
