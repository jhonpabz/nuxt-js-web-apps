// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "JHONSHOPPE",
      meta: [{ name: "description", content: "Nuxt 3 Ecommerce" }],
      link: [
        {
          rel: "stylesheet",
          href: " https://fonts.googleapis.com/icon?family=Material+icons",
        },
      ],
    },
  },
});
