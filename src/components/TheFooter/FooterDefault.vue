<template>
  <v-footer class="text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="btn in btnSocials"
        :key="btn.id"
        :href="btn.link"
        class="mx-4"
        :icon="btn.icon"
        target="_blank"
        variant="text"
      />
    </div>

    <v-divider class="w-100 my-3" />

    <div>
      {{ new Date().getFullYear() }} — <strong>Anarik</strong>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { Social } from '~/types/Social';

interface ButtonItem extends Social{
  id: number
}

const btnSocials: ButtonItem[] = [
  {
    id: 1,
    icon: 'mdi-facebook',
    link: ''
  },
  {
    id: 2,
    icon: 'mdi-twitter',
    link: ''
  },
  {
    id: 3,
    icon: 'mdi-linkedin',
    link: ''
  },
  {
    id: 4,
    icon: 'mdi-instagram',
    link: 'https://www.instagram.com/'
  }
];
</script>
