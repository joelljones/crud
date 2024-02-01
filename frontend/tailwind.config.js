/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-light': '#3a3b3c',
        'gray-med': '#242526',
        'gray-dark': '#18191a',
        'gray-light-txt': '#e4e6eb',
        'gray-med-txt': '#b0b3b8',
        'gray-light-hvr': '#4e4f50',
      },
    },
  },
  plugins: [],
};
