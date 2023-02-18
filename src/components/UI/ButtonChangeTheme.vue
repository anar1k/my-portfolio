<template>
  <v-btn @click="setTheme()">
    {{ settingsStore.theme }}
  </v-btn>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
import { useAppSettingsStore } from '~/stores/appSettings';
import { Theme } from '~/types/Settings';

const settingsStore = useAppSettingsStore();
const globalTheme = useTheme();

const setTheme = (payload?:Theme) => {
  let theme:Theme;

  if (!payload) {
    theme = settingsStore.theme === 'light' ? 'dark' : 'light';
  } else {
    theme = payload;
  }

  settingsStore.setTheme(theme);
  globalTheme.global.name.value = theme;
};

const sessionTheme = JSON.parse(sessionStorage.getItem('app-settings')!)?.theme;

if (sessionTheme) {
  setTheme(sessionTheme);
} else {
  setTheme(settingsStore.theme);
}

/* const theme = { theme: 'dark' };
sessionStorage.setItem('app-settings', JSON.stringify(theme)); */

</script>

<style scoped>

</style>
