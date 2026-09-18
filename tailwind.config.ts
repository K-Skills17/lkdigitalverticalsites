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
        navy: {
          DEFAULT: "#122D4A",
          light:   "#1a3d63",
          dark:    "#0d2038",
        },
        orange: {
          brand:   "#DC6D25",
          dark:    "#c05d1c",
          light:   "#e8804d",
        },
        "off-white": "#F8F9FA",
        "brand-gray": {
          DEFAULT: "#64748B",
          light:   "#94a3b8",
        },
        accent: {
          DEFAULT: "var(--accent)",
          dark:    "var(--accent-dark)",
          light:   "var(--accent-light)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          light:   "var(--primary-light)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted:      "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border:     "var(--border)",
        card:       "var(--card)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem,5vw,4.5rem)",   { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem,4vw,3.5rem)",     { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem,3vw,2.5rem)",   { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.25rem,2vw,1.75rem)", { lineHeight: "1.3",  letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "72rem",
        narrow:  "56rem",
        prose:   "42rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
