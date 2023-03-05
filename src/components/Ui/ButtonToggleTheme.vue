<template>
  <v-btn
    variant="text"
    :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
    @click="setTheme()"
  />
</template>

<script setup lang="ts">
import { useAppSettingsStore } from '~/stores/appSettings';
const settingsStore = useAppSettingsStore();

const { setTheme } = settingsStore;

const theme = computed(() => settingsStore.theme);
</script>
