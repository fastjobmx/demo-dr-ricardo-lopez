import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", md: "2rem", lg: "3rem" }, screens: { "2xl": "1320px" } },
    extend: {
      colors: {
        petrol: { DEFAULT: "#173D3A", deep: "#0F2B29", soft: "#24524E" },
        ivory: "#FAF8F4",
        sand: { DEFAULT: "#E9DED0", light: "#F2EBE1" },
        champagne: { DEFAULT: "#B99B75", dark: "#8E7352" },
        slate: { DEFAULT: "#596867" },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      letterSpacing: { eyebrow: "0.24em" },
      maxWidth: { prose2: "38rem" },
    },
  },
  plugins: [],
} satisfies Config;
