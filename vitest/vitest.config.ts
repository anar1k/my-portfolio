import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => ['nuxt-img'].includes(tag)
        }
      }
    }),
    vuetify({ autoImport: true })
  ],

  test: {
    environment: 'jsdom',

    deps: {
      inline: ['vuetify']
    },

    globals: true
  }
});
