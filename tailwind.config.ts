import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#d7e6c3',
          100: '#bdd69b',
          400: '#7bae37',
          900: '#3d571b',
          950: '#24292f',
        },
      },
    },
  },
};

export default config;
