import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ms: "320px",

        mm: "375px",

        ml: "425px",

        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
      colors: {
        "KVS-primary": "#223d56",
        "KVS-secondary": "#fad138",
        "KVS-white": "#e5ecf2",
        "KVS-black": "#020c17",
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
        slideOutRight: {
          "0%": { translate: "-0%", opacity: "100%", display: "block" },
          "100%": { translate: "-100%", opacity: "0%", display: "hidden" },
        },
        slideInLeft: {
          "0%": { translate: "100%", opacity: "0%", display: "hidden" },
          "100%": { translate: "0%", opacity: "100%", display: "block" },
        },
        slideOutLeft: {
          "0%": { translate: "0%", opacity: "100%", display: "block" },
          "100%": { translate: "100%", opacity: "0%", display: "hidden" },
        },
        slideUp: {
          "0%": { transform: "translateY(0%)", opacity: "100%" },
          "100%": { translate: "translateY(100%)", opacity: "0%" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0%" },
          "100%": { translate: "translateY(0%)", opacity: "100%" },
        },
        appear: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        
      },
      animation: {
        slideInRight: "slideInRight 1.5s ease-in-out",
        slideInLeft: "slideInLeft 1.5s ease-in-out",
        slideInFromTop: "slideDown 0.5s ease-in-out",
        slideInFromBottom: "slideUp 0.5s ease-in-out forwards",
        appear: "appear 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
