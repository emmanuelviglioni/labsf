import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary-white": '#FAFAF5',
        "primary-red": '#F8B5B5',
        "primary-yellow": '#F8EAB5',
        "primary-green": '#CFF8B5',
        "secondary-green": '#426B1F',
        "primary-gray": '#8F8F8F',
      },
      textColor:{
        "primary-green": '#426B1F',
        "primary-gray": '#8F8F8F',
      },
      fontFamily: {
        "serif": ["Newsreader", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
