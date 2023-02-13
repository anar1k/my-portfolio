<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon />

      <v-toolbar-title>Application</v-toolbar-title>

      <v-row>
        <v-col>
          <NuxtLink to="/about">
            about
          </NuxtLink>
        </v-col>
        <v-col>
          <NuxtLink to="/products">
            products
          </NuxtLink>
        </v-col>
        <v-col>
          <NuxtLink to="/products/123">
            product
          </NuxtLink>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        />
      </div>

      <div>
        {{ new Date().getFullYear() }} — <strong>Anarik</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
const icons:string[] = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram'
];
</script>
