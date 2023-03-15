import eslintPlugin from 'vite-plugin-eslint';
import vuetify from 'vite-plugin-vuetify';
import { InlineConfig } from 'vite';

export default defineNuxtConfig({
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
      title: 'aanar1k',

      meta: [
        { name: 'description', content: 'Все о Frontend-разработчике Анарике' }
      ],

      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ],

      htmlAttrs: {
        lang: 'ru'
      }
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

  typescript: {
    strict: true
  },

  test: true,

  vite: {
    plugins: [
      eslintPlugin()
    ],

    ssr: { noExternal: ['vuetify'] }
  },

  hooks: {
    'vite:extendConfig': (config: InlineConfig) => {
      config.plugins!.push(
        vuetify()
      );
    }
  },

  modules: [
    '@nuxt/image-edge',
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
  ],

  image: {
    provider: 'netlify'
  }
});
