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
import { useChangeTheme } from '~/composables/useChangeTheme';
const { fetchTheme } = useChangeTheme();

fetchTheme();
</script>

<style scoped lang="scss">

</style>
