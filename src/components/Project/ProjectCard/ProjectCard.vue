<template>
  <div class="project text-center">
    <div
      v-if="projectItem.title"
      class="text-h4 text-md-h3 mb-4 text-primary"
    >
      Проект «{{ projectItem.title }}»
    </div>

    <div
      v-if="projectItem.shortlyText"
      class="text-subtitle-1 mb-2"
    >
      {{ projectItem.shortlyText }}
    </div>

    <div
      v-if="projectItem.skills?.length"
      class="mb-2"
    >
      <v-chip
        v-for="item in projectItem.skills"
        :key="item.id"
        class="ma-2 ml-0"
        :color="item.color"
        :prepend-icon="item.icon"
      >
        {{ item.text }}
      </v-chip>
    </div>

    <v-row
      v-if="projectItem.link || projectItem.img"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="6"
      >
        <v-btn
          v-if="projectItem.link"
          block
          append-icon="mdi-transfer-right"
          class="mb-4"
          :href="projectItem.link"
          target="_blank"
        >
          Перейти на {{ projectItem.title }}
        </v-btn>

        <nuxt-img
          v-if="projectItem.img"
          class="project__img rounded w-100"
          :src="projectItem.img"
          alt="photo"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { IProject } from '~/types/Project';

interface IProps {
  projectItem?: IProject
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.project__img {
  object-fit: cover;
}
</style>
