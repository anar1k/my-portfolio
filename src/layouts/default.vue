<template>
  <v-app>
    <NuxtLoadingIndicator />

    <header-default />

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
</script>

<style scoped lang="scss">

</style>
