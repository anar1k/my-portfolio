<template>
  <v-app-bar>
    <v-toolbar-title>
      <NuxtLink to="/">
        AnarikDev
      </NuxtLink>
    </v-toolbar-title>

    <template #append>
      <v-btn to="/about">
        about
        <!--        <NuxtLink to="/about">
          about
        </NuxtLink>-->
      </v-btn>

      <a href="/products">test link</a>

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

      <button-toggle-theme />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import ButtonToggleTheme from '~/components/UI/ButtonToggleTheme.vue';
</script>

<style scoped lang="scss">
.router-link-active {
  font-weight: bold;
  color: green;
}
</style>
