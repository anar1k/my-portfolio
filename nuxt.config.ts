import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    '@/assets/styles/main.scss',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    plugins: [
      eslintPlugin()
    ]
  },

  srcDir: 'src/',
  ssr: false,

  modules: [
    '@pinia-plugin-persistedstate/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore']
        ]
      }
    ]
  ]
});
