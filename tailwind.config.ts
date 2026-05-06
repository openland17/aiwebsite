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
        background: "#ffffff",
        "background-muted": "#f7f7f5",
        ink: "#111418",
        "ink-muted": "#5b6470",
        "ink-dim": "#8a939e",
        rule: "#e4e7eb",
        "rule-strong": "#c8ccd2",
        navy: "#1f3b5b",
        "navy-hover": "#15293f",
        orange: "#c7541f",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Helvetica", "Arial", "system-ui", "sans-serif"],
      },
      fontSize: {
        body: ["1.0625rem", { lineHeight: "1.65" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
      },
    },
  },
  plugins: [],
};
export default config;
