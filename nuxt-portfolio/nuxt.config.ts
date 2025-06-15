export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/content",
  ],

  css: ["~/assets/css/tailwind.css"],

  fonts: {
    families: [
      {
        name: "Space Grotesk",
        provider: "google",
        weights: ["400", "500", "600", "700"],
      },
      {
        name: "Noto Sans",
        provider: "google",
        weights: ["400", "500", "700", "900"],
      },
    ],
  },
});
