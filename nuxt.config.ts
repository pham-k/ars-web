export default defineNuxtConfig({
  devServer: {
    port: 4000,
  },
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        'data-theme': 'light',
      }
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    // 'assets/stylesheet/bulma/bulma.css',
    'assets/stylesheet/index.css'
  ],
  icon: {
    mode: 'svg',
    cssLayer: 'base',
    size: '16px'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  vite: {
    plugins: [],
  },

  modules: ['@nuxt/icon'],
})