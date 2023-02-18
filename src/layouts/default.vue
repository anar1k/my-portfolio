<template>
  <v-app id="inspire">
    <header-default />

    <v-main>
      <slot />
    </v-main>

    <footer-default />
  </v-app>
</template>

<script setup lang="ts">
import { useChangeTheme } from '~/composables/useChangeTheme';

const { fetchTheme } = useChangeTheme();

onMounted(() => {
  fetchTheme();
});
</script>

<style scoped lang="scss">

</style>
