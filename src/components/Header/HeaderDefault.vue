<template>
  <v-app-bar>
    <v-toolbar-title>
      <NuxtLink to="/">
        AnarikDev
      </NuxtLink>
    </v-toolbar-title>

    <template #append>
      <NuxtLink to="/about">
        about
      </NuxtLink>

      <NuxtLink to="/products">
        products
      </NuxtLink>

      <NuxtLink to="/product/123">
        product
      </NuxtLink>

      <v-divider
        class="mx-3"
        inset
        vertical
      />

      <button-change-theme />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import ButtonChangeTheme from '~/components/UI/ButtonChangeTheme.vue';
</script>

<style scoped lang="scss">
.router-link-active {
  font-weight: bold;
  color: green;
}
</style>
