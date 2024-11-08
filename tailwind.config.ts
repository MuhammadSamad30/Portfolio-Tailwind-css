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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        colorCycle: {
          '0%': { background: '#ff7e5f' },
          '25%': { background: '#feb47b' },
          '50%': { background: '#6a11cb' },
          '75%': { background: '#00c6ff' },
          '100%': { background: '#43cea2' },
        },
      },
      animation: {
        colorCycle: 'colorCycle 6s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
