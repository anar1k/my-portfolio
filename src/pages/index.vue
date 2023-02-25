<template>
  <div>
    <video
      v-lazy-load
      muted
      autoplay
      loop
      preload="auto"
      data-poster="/img/starry-sky.png"
      style="position: fixed;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
          "
    >
      <source
        data-src="/video/starry-sky.mp4"
        type="video/mp4"
      >
    </video>

    <div
      class="d-flex flex-column justify-center align-center text-white"
      style="height: 100vh"
    >
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
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'index'
});
</script>

<style lang="scss">
html {
  overflow: hidden;
}
</style>
