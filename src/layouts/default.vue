<template>
  <v-app>
    <NuxtLoadingIndicator />

    <header-default @open-drawer="test" />

    <v-main>
      <NuxtPage />
    </v-main>

    <footer-default />
  </v-app>
</template>

<script setup lang="ts">
import { useAppSettingsStore } from '~/stores/appSettings';

const appSettingsStore = useAppSettingsStore();
const { fetchTheme } = appSettingsStore;

fetchTheme();

const test = () => {
  console.log('123');
};
</script>
