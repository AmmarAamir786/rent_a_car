import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "myblack": "#484848",
        "mywhite": "#ffffff",
        "secondarywhite": "#D6D6D6",
        "primaryblue": "#1572D3",
        "secondaryblue": "#1572D3",
        "headingblack": "#242424",
        "secondaryblack": "#B6B6B6",
      }
    },
  },
  plugins: [],
};
export default config;
