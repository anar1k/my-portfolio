import eslintPlugin from 'vite-plugin-eslint';
import vuetify from 'vite-plugin-vuetify';
import type { InlineConfig } from 'vite';

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
    'vuetify/styles',
    '@/assets/styles/index.scss'
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
    '@nuxt/content',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],

  image: {
    provider: 'netlify'
  },

  devtools: {
    enabled: true
  }
});
