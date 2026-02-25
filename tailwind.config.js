/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#771953",
          light: "#9a246d",
          dark: "#420b30",
          darker: "#220e1b"
        },
        cream: {
          DEFAULT: "#f4e7df",
          light: "#faf6f3",
          dark: "#ebe0d8"
        },
        neutral: {
          50: "#f4e7df",
          100: "#ebe0d8",
          200: "#d4c4b8",
          300: "#b8a090",
          400: "#8c7565",
          500: "#6b5a4d",
          600: "#554838",
          700: "#420b30",
          800: "#2d1622",
          900: "#220e1b"
        }
      },
      fontFamily: {
        sans: ["BrandoArabic", "sans-serif"],
        brando: ["BrandoArabic", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["2.75rem", { lineHeight: "1.2" }],
        "display": ["2.25rem", { lineHeight: "1.25" }],
        "section": ["1.75rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        "body": ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5" }],
        "overline": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.12em" }]
      },
      /* Matches @font-face weights: 100→ExtraLight, 200→ExtraLight, 300→Light, 400→Regular, 500→Text, 600→Bold, 700→Bold, 800→Bold, 900→Black */
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
        text: "350"
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        "section": "5rem",
        "section-lg": "6.25rem"
      },
      boxShadow: {
        soft: "0 4px 20px rgba(34, 14, 27, 0.06)",
        card: "0 12px 40px rgba(34, 14, 27, 0.08)",
        "card-hover": "0 20px 50px rgba(34, 14, 27, 0.12)",
        glow: "0 0 40px rgba(119, 25, 83, 0.15)"
      },
      borderRadius: {
        "brand": "0.75rem",
        "brand-lg": "1rem",
        "brand-xl": "1.25rem",
        "brand-2xl": "1.5rem",
        "brand-full": "9999px"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem"
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px"
        }
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms"
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #771953 0%, #420b30 100%)",
        "gradient-cream": "linear-gradient(180deg, #faf6f3 0%, #f4e7df 100%)",
        "hero-pattern": "url('../assets/images/hero-pattern.png')",
        "hero-pattern-fallback": "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0v60M0 30h60' stroke='%23f4e7df' stroke-width='0.4' fill='none' opacity='0.15'/%3E%3C/svg%3E\")"
      },
      backgroundSize: {
        "pattern": "60px 60px",
        "pattern-lg": "180px"
      }
    }
  },
  plugins: []
};
