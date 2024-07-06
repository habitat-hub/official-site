import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#16161a",
        "light-dark": "#242629",
        light: "#dedede",
      },
      fontFamily: {
        caveat: ["var(--font-caveat)"],
      },
    },
  },
  plugins: [],
};
export default config;
