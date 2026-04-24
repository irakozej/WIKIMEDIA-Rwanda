import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          50: "#faf8f4",
          100: "#f3efe6",
          200: "#e3dcc9",
          300: "#cfc4a5",
          400: "#a89a74",
          500: "#7a6d4e",
          600: "#4d4330",
          700: "#2f2a1f",
          800: "#1c1913",
          900: "#0d0b08",
        },
        clay: {
          50: "#fdf6f1",
          100: "#fbe9dd",
          200: "#f5cdb3",
          300: "#eca880",
          400: "#e17b4e",
          500: "#c2410c",
          600: "#9a3308",
          700: "#742706",
          800: "#4f1a04",
          900: "#2b0e02",
        },
        amber: {
          500: "#d97706",
          600: "#b45309",
        },
        forest: {
          500: "#15803d",
          600: "#166534",
        },
        wiki: {
          50: "#e6f0f5",
          100: "#cce1ea",
          500: "#006699",
          600: "#005580",
          700: "#004466",
        },
        paper: "#faf6ee",
        parchment: "#f3ecd8",
        bark: "#2a1f14",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>\")",
        "grid-light": "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        "brutal": "6px 6px 0 0 rgba(28,25,19,1)",
        "brutal-sm": "3px 3px 0 0 rgba(28,25,19,1)",
        "brutal-clay": "6px 6px 0 0 rgba(194,65,12,1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-pan": {
          "0%, 100%": { transform: "scale(1.05) translate(0,0)" },
          "50%": { transform: "scale(1.12) translate(-2%, -2%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 0.8s ease-out both",
        "slow-pan": "slow-pan 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
