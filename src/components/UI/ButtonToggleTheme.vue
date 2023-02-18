<template>
  <v-btn
    icon
    @click="setTheme()"
  >
    <v-icon>{{ theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useChangeTheme } from '~/composables/useChangeTheme';

const { setTheme, theme } = useChangeTheme();
</script>
