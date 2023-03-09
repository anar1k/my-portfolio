<template>
  <div>
    <ui-breadcrumbs
      :items="itemsForBreadcrumbs"
      class="mb-4"
    />

    <project-card :project-item="project" />
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from '~/stores/projects';
import UiBreadcrumbs from '~/components/Ui/UiBreadcrumbs.vue';
import ProjectCard from '~/components/Project/ProjectCard.vue';

interface RouteParams {
  id?: string;
}

const { id }: RouteParams = useRoute().params;
const { fetchProjects, getProject } = useProjectsStore();

await fetchProjects();

const project = getProject(id);

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true });
}

useHead({ title: `Проект: ${project?.title}` || 'Проект' });

const itemsForBreadcrumbs = [
  {
    title: 'обо мне',
    to: '/about'
  },
  {
    title: 'проекты',
    to: '/projects'
  },
  {
    title: project.title
  }
];
</script>
