<template>
  <v-app>
    <NuxtLoadingIndicator />

    <header-default v-if="mobile" />

    <v-bottom-navigation
      v-else
      :elevation="2"
      grow
    >
      <v-btn value="recent">
        <v-icon>mdi-history</v-icon>

        Recent
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-heart</v-icon>

        Favorites
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-map-marker</v-icon>

        Nearby
      </v-btn>
    </v-bottom-navigation>

    <v-main>
      <NuxtPage />
    </v-main>

    <footer-default />
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useAppSettingsStore } from '~/stores/appSettings';

const appSettingsStore = useAppSettingsStore();
const { fetchTheme } = appSettingsStore;

fetchTheme();

const { mobile } = useDisplay();
</script>

<style scoped lang="scss">

</style>
