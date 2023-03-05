import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdi, aliases } from 'vuetify/iconsets/mdi';
import { md3 } from 'vuetify/blueprints';
import { aliases as customAliases, customSVGs } from '~/iconsets/customSVGs';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    display: {
      mobileBreakpoint: 'md'
    },

    blueprint: md3,
    ssr: true,
    components,
    directives,

    icons: {
      defaultSet: 'mdi',

      aliases: {
        ...aliases,
        ...customAliases
      },

      sets: {
        mdi,
        custom: customSVGs
      }
    },

    theme: {
      defaultTheme: 'dark'
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
