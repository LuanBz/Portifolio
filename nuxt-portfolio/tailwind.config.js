/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lancelot", ...defaultTheme.fontFamily.serif],
        sans: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Nova paleta de cores baseada no seu código
        background: "#E6E2D8", // Cor de fundo principal
        "background-alt": "#242422", // Fundo da seção de projetos
        primary: "#504C24", // Cor do texto principal
        "primary-muted": "#645F27", // Cor de texto mais suave
        accent: "#504C24", // Cor para o '</>' e outros detalhes
        "hero-border": "rgba(80, 76, 36, 0.4)", // Borda da caixa hero
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
