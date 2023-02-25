<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    height="100vh"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
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
  </v-parallax>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'index'
});
</script>
