<template>
  <div>
    <ui-breadcrumbs :items="itemsForBreadcrumbs" />

    <div class="text-h4 text-md-h3 my-4 text-amber">
      Мои проекты
    </div>

    <v-row>
      <v-col
        v-for="item in cardItems"
        :key="item.id"
        cols="12"
        sm="6"
        md="4"
      >
        <projects-card
          :card-item="item"
          class="h-100"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import UiBreadcrumbs from '~/components/Ui/UiBreadcrumbs.vue';
import ProjectsCard from '~/components/Projects/ProjectsCard.vue';
import { useProjectsStore } from '~/stores/projects';

useHead({ title: 'Мои проекты' });

const itemsForBreadcrumbs = [
  {
    title: 'обо мне',
    to: '/about'
  },
  {
    title: 'проекты'
  }
];

const { fetchProjects } = useProjectsStore();

await fetchProjects();

const cardItems = computed(() => useProjectsStore().projects);
</script>
