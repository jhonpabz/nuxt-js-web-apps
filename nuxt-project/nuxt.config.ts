import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    /* "@": resolve(__dirname, "/"),
    "@store": resolve(__dirname, "store"),
    "@assets": resolve(__dirname, "assets"), */
    assets: "<rootDir>/assets",
    store: "<rootDir>/store",
  },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
