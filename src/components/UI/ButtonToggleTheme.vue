<template>
  <v-btn
    :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
    @click="setTheme()"
  />
</template>

<script setup lang="ts">
import { useChangeTheme } from '~/composables/useChangeTheme';

const { setTheme } = useChangeTheme();

const theme = computed(() => useChangeTheme().theme.value);
</script>
