<template>
  <v-footer class="text-center d-flex flex-column flex-grow-0">
    <div>
      <v-btn
        v-for="btn in btnSocials"
        :key="btn.id"
        :href="btn.href"
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
import { Contacts } from '~/types/Contacts';

const btnSocials: Contacts = [
  {
    href: 'https://t.me/aanar1k',
    icon: '$telegram'
  },

  {
    href: 'https://github.com/Anarik39',
    icon: 'mdi-github'
  },

  {
    href: 'mailto:aanar1k14@gmail.com',
    icon: 'mdi-mail'
  }
];
</script>
