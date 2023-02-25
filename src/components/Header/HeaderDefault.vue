<template>
  <v-app-bar :elevation="4">
    <v-container>
      <nav class="d-flex align-center">
        <v-toolbar-title>
          <v-btn
            variant="text"
            to="/"
          >
            <v-img
              src="/img/logo.png"
              width="30px"
              class="mr-2"
            />

            <span>AAnar1k</span>
          </v-btn>
        </v-toolbar-title>

        <v-spacer />

        <v-btn
          to="/about"
          variant="text"
        >
          Обо мне
        </v-btn>

        <v-btn
          to="/products"
          variant="text"
        >
          Продукты
        </v-btn>

        <v-divider
          class="mx-2"
          inset
          vertical
        />

        <button-toggle-theme variant="text" />

        <v-app-bar-nav-icon
          v-if="false"
          @click="emit('open-drawer')"
        >
          <v-icon size="x-large">
            mdi-menu
          </v-icon>
        </v-app-bar-nav-icon>
      </nav>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import ButtonToggleTheme from '~/components/UI/ButtonToggleTheme.vue';

const emit = defineEmits<{(e: 'open-drawer'): void}>();
</script>
