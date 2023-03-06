<template>
  <v-btn
    variant="text"
    :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
    @click="setTheme()"
  />
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/theme';
const settingsStore = useThemeStore();

const { setTheme } = settingsStore;

const theme = computed(() => settingsStore.theme);
</script>
