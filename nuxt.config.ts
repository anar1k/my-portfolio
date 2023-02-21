import eslintPlugin from 'vite-plugin-eslint';
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  app: {
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

  dir: {
    public: '../public'
  },

  build: {
    transpile: ['vuetify']
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/styles/main.scss'
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
