import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xs": "320px",
        "2xs": "375px",
        xs: "425px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "#E9E9E9",
        darkgray: "#6B7177",
        lightblack: "#222222",
        primary: "#1F4B3F",
        secondary: "#5BBB7B",
        lightgreen: "#EEF8F2",
      },
      boxShadow: {
        grayshadow: "1px 6px 20px 0px #E9E9E98C",
        grayshadow2: "0px 4px 32px 0px #E9E9E9BF",
        grayshadow3: "0.63px 3.75px 12.5px 0px #E9E9E98C",
      },
      backgroundImage: {
        "btn-gradient":
          "linear-gradient(46.39deg, #FF7F02 15.25%, #FFC400 72.33%)",
      },
    },
  },
  plugins: [],
};
export default config;
