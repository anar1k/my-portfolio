<template>
  <v-card
    :to="`/project/${cardItem?.id}`"
    class="project-card"
  >
    <nuxt-img
      alt="photo"
      class="project-card__img w-100"
      height="200"
      :src="cardItem?.img"
    />

    <v-card-title class="text-md-h5 pt-4 text-primary">
      {{ cardItem?.title }}
    </v-card-title>

    <v-card-text class="text-body-2 text-md-body-1">
      {{ cardItem?.shortlyText }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { IProject } from '~/types/Project';

interface IProps {
  cardItem: IProject
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.project-card__img {
  object-fit: cover;
}
</style>
