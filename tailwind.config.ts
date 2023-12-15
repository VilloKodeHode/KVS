import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "KVS-primary": "#223d56",
        "KVS-secondary": "#fad138",
        "KVS-gray": "#444444",
        "KVS-green": "#757f3f",
        "KVS-lightGreen": "#bdcf46",
      },
      fontFamily: {},
      keyframes: {
        slideInRight: {
          "0%": { translate: "-100%", opacity: "0%", display: "hidden" },
          "100%": { translate: "-0%", opacity: "100%", display: "block" },
        },
        slideInLeft: {
          "0%": { translate: "100%", opacity: "0%", display: "hidden" },
          "100%": { translate: "0%", opacity: "100%", display: "block" },
        },
      },
      animation: {
        slideInRight: "slideInRight 1.5s ease-in-out",
        slideInLeft: "slideInLeft 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
