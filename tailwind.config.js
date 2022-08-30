/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '-4px 4px 40px 14px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
