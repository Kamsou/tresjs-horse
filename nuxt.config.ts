// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt 3 + TresJS starter",
      meta: [
        {
          name: "description",
          content:
            "Starter template for Nuxt 3 + TresJS created by Francesco Michelini",
        },
      ],
    },
  },

  modules: ["@nuxt/devtools", "@tresjs/nuxt"],
});
