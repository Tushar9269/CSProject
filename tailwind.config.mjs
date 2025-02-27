import { Didact_Gothic } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f13a01'
      },
      fontFamily: {
        cardo: ["Cardo", "serif"],
        Didact_Gothic: ["Didact Gothic", "sans-serif"]
      },
    },
  },
  plugins: [],
};
