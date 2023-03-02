<template>
  <v-card-text class="mt-2 text-amber flex-grow-0">
    <v-btn
      v-for="(item, index) in iconsSkills"
      :key="item + index"
      variant="text"
      density="compact"
      icon
      class="justify-start px-md-4"
    >
      <v-icon :color="item.color">
        {{ item.icon }}
      </v-icon>

      <v-tooltip
        activator="parent"
        location="bottom"
      >
        {{ item.text }}
      </v-tooltip>
    </v-btn>

    <v-menu open-on-hover>
      <template #activator="{ props }">
        <div class="mt-2">
          <v-btn
            class="px-0 px-md-4"
            variant="plain"
            v-bind="props"
          >
            Связаться со мной
          </v-btn>
        </div>
      </template>

      <v-list>
        <v-tooltip
          v-for="(item, index) in items"
          :key="index"
          :text="item.textForTooltip"
          close-on-content-click
        >
          <template #activator="{ props }">
            <v-list-item
              :href="item.href"
              target="_blank"
              v-bind="props"
            >
              <template #prepend>
                <v-icon :icon="item.icon" />
              </template>

              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-tooltip>
      </v-list>
    </v-menu>
  </v-card-text>
</template>

<script setup lang="ts">
import { Skill } from '~/types/Skill';

const iconsSkills: Skill[] = [
  {
    icon: 'mdi-language-javascript',
    text: 'JavaScript',
    color: 'amber'
  },
  {
    icon: 'mdi-language-typescript',
    text: 'TypeScript',
    color: 'blue-darken-1'
  },
  {
    icon: 'mdi-vuejs',
    text: 'Vuejs',
    color: 'green'
  },
  {
    icon: 'mdi-nuxt',
    text: 'Nuxt',
    color: 'green'
  },
  {
    icon: 'mdi-api',
    text: 'API',
    color: 'white'
  },
  {
    icon: 'mdi-git',
    text: 'Git',
    color: 'orange'
  },
  {
    icon: 'mdi-sass',
    text: 'Sass',
    color: 'purple-lighten-3'
  }
];

const items = [
  {
    title: 'Telegram',
    href: 'https://t.me/aanar1k',
    icon: '$telegram',
    textForTooltip: 'aanar1k'
  },

  {
    title: 'Github',
    href: 'https://github.com/Anarik39',
    icon: 'mdi-github',
    textForTooltip: 'Anarik39'
  },

  {
    title: 'E-mail',
    href: 'mailto:aanar1k14@gmail.com',
    icon: 'mdi-mail',
    textForTooltip: 'aanar1k14@gmail.com'
  }
];
</script>
