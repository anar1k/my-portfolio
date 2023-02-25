<template>
  <div class="d-flex flex-column fill-height justify-center align-center text-white">
    <background-with-waves />

    <v-card class="bg-pink">
      <h1 class="text-h4 font-weight-thin mb-4">
        Vuetify
      </h1>
      <h4 class="subheading">
        приложение
      </h4>
      <v-btn to="/about">
        Начать знакомство
      </v-btn>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import BackgroundWithWaves from '~/components/UI/BackgroundWithWaves.vue';

definePageMeta({
  layout: 'index'
});

const display = useDisplay();

const mobile = computed(() => display.mobile.value);

watch(mobile, (newV, old) => {
  console.log(newV, old);
});
</script>

<style lang="scss">
html {
  overflow: hidden;
}
</style>
