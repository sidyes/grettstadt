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
        primary: '#1a202c', // Dunkles Grau für Headlines
        secondary: '#4a5568', // Mittelgrau für Sub-Headlines und Texte
        accent: '#2b6cb0', // Seriöses Blau für Akzente, Buttons, Links
        background: '#f7fafc', // Sehr helles Grau für Hintergrund
        border: '#e2e8f0', // Hellgrau für Ränder
        light: '#edf2f7', // Sehr helles Grau für zusätzliche Akzente
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Moderne, gut lesbare Schriftart
        serif: ['Merriweather', 'serif'], // Optional für klassischere Elemente
      },
      fontSize: {
        base: '16px', // Standardgröße für Fließtext
        lg: '18px',  // Leicht größere Schrift für bessere Lesbarkeit
        xl: '20px',  // Für wichtige Absätze
        '2xl': '24px', // Sub-Headlines
        '3xl': '30px', // Haupt-Headlines
        '4xl': '36px', // Für besonders wichtige Headlines
      },
      spacing: {
        'section': '4rem', // Abstände zwischen den Sektionen
        'paragraph': '1.5rem', // Abstand zwischen den Absätzen
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
