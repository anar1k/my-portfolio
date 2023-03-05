<template>
  <v-row class="hobby-information">
    <v-col
      cols="12"
      md="6"
    >
      <div class="text-h4 mb-2">
        Немного о себе:
      </div>

      <ol class="hobby-information__list">
        <li
          v-for="(item, index) in listInfoYourself"
          :key="index"
          class="mb-1 text-body-1"
        >
          <span>{{ item.text }}</span>

          <template v-if="typeof item.icon === 'string'">
            <v-icon
              :icon="item.icon"
              :color="item.colorForIcon"
              class="ml-2"
            />
          </template>

          <template v-else>
            <v-icon
              v-for="(icon, indexIcon) in item.icon"
              :key="icon + indexIcon"
              :icon="icon"
              :color="item.colorForIcon"
              class="ml-2"
            />
          </template>
        </li>
      </ol>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <div class="text-h4 mb-2">
        Навыки:
      </div>

      <div>
        <v-chip
          v-for="(item, index) in skills"
          :key="item.text + index"
          class="ma-2 ml-0"
          :color="item.color"
          :prepend-icon="item.icon"
        >
          {{ item.text }}
        </v-chip>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { Skills } from '~/types/Skills';
import { InfoAboutYourSelf } from '~/types/InfoAboutYourSelf';

const listInfoYourself: InfoAboutYourSelf[] = [
  {
    text: 'Люблю поиграть в компьютерные игры',
    icon: 'mdi-controller',
    colorForIcon: 'deep-purple'
  },
  {
    text: 'Прохожу курсы английского языка (очно)',
    icon: 'mdi-translate',
    colorForIcon: 'orange'
  },
  {
    text: 'Открыт к диалогу, умею работать в команде',
    icon: 'mdi-handshake',
    colorForIcon: 'red'
  },
  {
    text: 'Работоспособный, ответственный, целеустремленный, дотошный в работе (люблю все доводить до идеала)',
    icon: 'mdi-account-details',
    colorForIcon: 'cyan'
  },
  {
    text: 'С самого начала пишу проекты на фреймворке Vue.js',
    icon: 'mdi-vuejs',
    colorForIcon: 'green'
  },
  {
    text: 'Не люблю проекты с JQuery и React',
    icon: ['mdi-jquery', 'mdi-react'],
    colorForIcon: 'blue'
  }
];

const skills: Skills = [
  {
    icon: 'mdi-language-html5',
    text: 'HTML',
    color: 'red-darken-1'
  },

  {
    icon: 'mdi-language-css3',
    text: 'CSS',
    color: 'blue-lighten-1'
  },

  {
    icon: 'mdi-sass',
    text: 'Sass',
    color: 'purple-lighten-3'
  },

  {
    icon: 'mdi-language-javascript',
    text: 'JavaScript',
    color: 'amber'
  },

  {
    icon: 'mdi-language-typescript',
    text: 'TypeScript',
    color: 'blue-lighten-2'
  },

  {
    icon: 'mdi-git',
    text: 'Git',
    color: 'orange'
  },

  {
    icon: 'mdi-api',
    text: 'API',
    color: 'red'
  },

  {
    icon: 'mdi-vuejs',
    text: 'Vue.js',
    color: 'green'
  },

  {
    icon: 'mdi-nuxt',
    text: 'Nuxt',
    color: 'green'
  },

  {
    icon: 'mdi-vuetify',
    text: 'Vuetify',
    color: 'blue-darken-1'
  },

  {
    text: 'Quasar',
    color: 'blue-accent-1'
  },

  {
    text: 'Element UI',
    color: 'blue'
  },

  {
    text: 'Vite',
    color: 'deep-purple-lighten-2'
  },

  {
    icon: 'mdi-webpack',
    text: 'Webpack',
    color: 'blue-darken-2'
  },

  {
    text: 'Webstorm',
    color: 'light-green-darken-1'
  },

  {
    icon: 'mdi-microsoft-visual-studio-code',
    text: 'VS Code',
    color: 'blue-darken-3'
  },

  {
    text: 'Figma',
    color: 'purple'
  },

  {
    icon: 'mdi-npm',
    text: 'npm',
    color: 'red'
  },

  {
    text: 'Yarn',
    color: 'blue-grey-lighten-1'
  }
];
</script>

<style scoped lang="scss">
.hobby-information__list {
  list-style-position: inside;
}
</style>
