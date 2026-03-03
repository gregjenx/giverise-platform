import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        earth: "#1a1a0e",
        stone: "#8a8272",
        forest: {
          DEFAULT: "#2d4a3e",
          deep: "#0f1a15",
          canopy: "#3d6b5a",
          light: "#4d8870",
        },
        clay: {
          DEFAULT: "#c4713b",
          dark: "#a85e2d",
          amber: "#d4943a",
        },
        bone: {
          DEFAULT: "#faf7f2",
          cream: "#f5f0e8",
          sand: "#e8dcc8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
