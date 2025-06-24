export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/icon", "@nuxt/fonts"],

  css: ["~/assets/css/tailwind.css"],

  fonts: {
    families: [
      // Fonte para títulos
      {
        name: "Lancelot",
        provider: "google",
        weights: ["400"], // Lancelot geralmente só tem o peso 400
      },
      // Fonte para o corpo do texto
      {
        name: "Lexend",
        provider: "google",
        weights: ["400", "500", "600", "700"],
      },
    ],
  },
});
