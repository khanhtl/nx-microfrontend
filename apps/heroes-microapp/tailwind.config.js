const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    darkMode: true,
    extend: {
      colors: {
        primary: '#E4B363',
        'primary-brighter': '#e09b28',
        secondary: '#074F57',
        cordovan: '#c45663',
        'dark-bg': '#242424',
      },
    },
  },
  plugins: [],
};
