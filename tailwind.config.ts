import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: "#1a202c",
        secondary: "#4a5568",
        accent: "#2b6cb0",
        background: "#f7fafc",
        border: "#e2e8f0",
        light: "#edf2f7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
      },
      spacing: {
        section: "4rem",
        paragraph: "1.5rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
