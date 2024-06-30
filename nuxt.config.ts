// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue', "@nuxt/icon"],
css: ['~/assets/css/main.css',
  'primevue/resources/themes/aura-light-green/theme.css',
  'primeicons/primeicons.css'
],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
});