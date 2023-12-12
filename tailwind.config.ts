import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'KVS-primary': '#223d56',
        'KVS-secondary': '#fad138',
        'KVS-gray': '#444444',
        'KVS-green': '#757f3f',
        'KVS-lightGreen': '#bdcf46',
      },
    },
  },
  plugins: [],
};

export default config;
