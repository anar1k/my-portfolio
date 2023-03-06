import eslintPlugin from 'vite-plugin-eslint';
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  typescript: {
    strict: true
  },

  /* ssr: false, */

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },

    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    },

    head: {
      title: 'AAnarik Dev',

      meta: [
        { name: 'description', content: 'Все о Frontend-разработчике Анарике' }
      ],

      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },

  srcDir: 'src/',

  build: {
    transpile: ['vuetify']
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/styles/app.scss'
  ],

  vite: {
    plugins: [
      eslintPlugin()
    ],

    ssr: { noExternal: ['vuetify'] }
  },

  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(
        vuetify()
      );
    }
  },

  modules: [
    '@nuxt/content',
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
