<template>
  <div class="d-flex flex-column fill-height justify-center align-center text-white">
    <background-with-stars />

    <v-card
      color="#512DA8"
      theme="dark"
      class="px-2 py-4"
    >
      <div class="d-flex justify-space-between flex-column flex-md-row">
        <div class="d-flex justify-center flex-column flex-grow-1">
          <v-card-title class="text-h5 text-md-h3">
            Frontend разработчик
          </v-card-title>

          <v-card-text class="mt-2 text-amber flex-grow-0">
            <span>Навыки:</span>

            <v-icon
              v-for="(icon, index) in iconsSkills"
              :key="icon + index"
            >
              {{ icon }}
            </v-icon>
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

        <v-avatar
          class="ma-3 order-first order-md-0"
          size="300"
          rounded="0"
        >
          <v-img src="/img/avatar.jpg" />
        </v-avatar>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import BackgroundWithStars from '~/components/UI/BackgroundWithStars.vue';

definePageMeta({
  layout: 'index'
});

const iconsSkills: string[] = [
  'mdi-language-javascript',
  'mdi-language-typescript',
  'mdi-vuejs',
  'mdi-nuxt',
  'mdi-api',
  'mdi-git',
  'mdi-sass'
];
</script>
