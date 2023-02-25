import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { md3 } from 'vuetify/blueprints';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    display: {
      mobileBreakpoint: 'md'
    },

    blueprint: md3,
    ssr: true,
    components,
    directives,

    theme: {
      defaultTheme: 'dark'
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
