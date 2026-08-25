import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Official Blue Angel brand palette (Brand Guide_vCurrent)
        cream: "#F6F1E9", // warm off-white page background
        sand: "#EFE7DA", // slightly deeper warm tone for alternating sections
        navy: {
          DEFAULT: "#063862", // primary brand navy
          900: "#04263F",
          800: "#063862",
          700: "#0B4E82",
          600: "#12669F",
        },
        azure: {
          DEFAULT: "#3773A5", // brand medium blue (accent5)
          light: "#5B93BF",
          dark: "#2C5D86",
        },
        gold: "#BA832F", // brand gold (accent3)
        teal: "#3D7A6E", // brand teal (accent2)
        slate: "#354450", // brand slate (accent6)
        ink: "#263D4F", // body text
        muted: "#5B6B7C", // secondary text
      },
      fontFamily: {
        serif: ['"Cormorant"', "Georgia", "serif"],
        sans: ['"Montserrat"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(14, 42, 71, 0.18)",
        card: "0 2px 24px -8px rgba(14, 42, 71, 0.15)",
      },
      keyframes: {
        // Transform-only on purpose: we never animate opacity, so content can
        // never be left invisible if the animation doesn't run/complete on a
        // client-side route change. It's a subtle upward settle, nothing more.
        "fade-up": {
          "0%": { transform: "translateY(14px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
