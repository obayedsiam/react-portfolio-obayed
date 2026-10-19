/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      colors: {
        brand: {
          cyan: '#38bdf8',
          emerald: '#10b981',
          purple: '#8b5cf6',
          amber: '#f59e0b',
        }
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

