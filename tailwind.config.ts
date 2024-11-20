import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#fb471f",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "border-width": "border-width 3s infinite alternate",
      },
      keyframes: {
        "border-width": {
          from: {
            width: "10px",
            opacity: "0",
          },
          to: {
            width: "100px",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
