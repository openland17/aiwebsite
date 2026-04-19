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
        "background-secondary": "#fafafa",
        "background-tertiary": "#f5f5f5",
        foreground: "#0a0a0a",
        "foreground-muted": "#525252",
        "foreground-dim": "#737373",
        accent: "#2563eb",
        "accent-glow": "rgba(37, 99, 235, 0.12)",
        border: "rgba(0, 0, 0, 0.08)",
        "border-hover": "rgba(0, 0, 0, 0.16)",
        "card-bg": "rgba(0, 0, 0, 0.02)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "fade-in-down": "fade-in-down 0.5s ease-out forwards",
        "live-pulse": "live-pulse 1.4s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "live-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
