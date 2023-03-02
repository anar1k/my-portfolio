<template>
  <v-card
    color="#512DA8"
    theme="dark"
    class="py-4 py-md-0"
  >
    <div class="d-flex justify-space-between flex-column flex-md-row">
      <div class="d-flex justify-center flex-column py-md-4">
        <v-card-title class="text-h5 text-md-h3 mt-md-4">
          Frontend-разработчик
        </v-card-title>

        <v-card-subtitle class="text-caption text-md-subtitle-1">
          AAnarik (Гений, миллиардер, плейбой, филантроп)
        </v-card-subtitle>

        <main-card-text />

        <v-card-actions class="mt-md-2 mt-md-6">
          <v-btn
            to="/about"
            class="ms-md-2 align-self-end"
            size="large"
            color="amber"
            variant="outlined"
            block
          >
            <span class="pr-4">Узнать больше</span>
            <v-icon>mdi-cursor-default-click</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <v-img
        class="my-3 my-md-0 ml-md-10 order-first order-md-0 align-self-center"
        src="/img/avatar.jpg"
        width="250px"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import MainCardText from '~/components/MainBlockCard/MainCardText.vue';
</script>
