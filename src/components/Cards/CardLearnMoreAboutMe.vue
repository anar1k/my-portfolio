<template>
  <v-card
    color="#512DA8"
    theme="dark"
    class="py-4 py-md-0"
  >
    <div class="d-flex justify-space-between flex-column flex-md-row">
      <div class="d-flex justify-center flex-column flex-grow-1 py-md-4">
        <v-card-title class="text-h5 text-md-h3">
          Frontend-разработчик
        </v-card-title>

        <v-card-subtitle class="text-caption text-md-subtitle-1">
          AAnarik (Гений, миллиардер, плейбой, филантроп)
        </v-card-subtitle>

        <v-card-text class="mt-2 text-amber flex-grow-0">
          <v-btn
            v-for="(item, index) in iconsSkills"
            :key="item + index"
            variant="text"
            density="compact"
            icon
            class="px-4"
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
        </v-card-text>

        <v-card-actions class="mt-md-2 mt-md-6 order-1">
          <v-btn
            to="/about"
            class="ms-md-2 align-self-end"
            size="large"
            color="amber"
            variant="outlined"
            block
          >
            <span class="pr-4">Узнать больше</span>
            <v-icon>mdi-cursor-default-click</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <v-img
        class="my-3 my-md-0 ml-md-10 order-first order-md-0 align-self-center"
        src="/img/avatar.jpg"
        width="250px"
      />
    </div>
  </v-card>
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
</script>
