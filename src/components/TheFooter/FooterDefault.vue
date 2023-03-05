<template>
  <v-footer class="text-center d-flex flex-column">
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
    icon: 'mdi-facebook',
    href: ''
  },
  {
    icon: 'mdi-twitter',
    href: ''
  },
  {
    icon: 'mdi-linkedin',
    href: ''
  },
  {
    icon: 'mdi-instagram',
    href: 'https://www.instagram.com/'
  }
];
</script>
