<template>
  <v-footer class="text-center d-flex flex-column flex-grow-0">
    <div>
      <v-btn
        v-for="btn in btnContacts"
        :key="btn.id"
        :href="btn.href"
        class="mx-4"
        :aria-label="btn.title"
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
import { useContactsStore } from '~/stores/contacts';

const btnContacts = computed(() => useContactsStore().contacts);
</script>
