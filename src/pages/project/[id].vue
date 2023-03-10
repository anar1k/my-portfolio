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
import { IProject } from '~/types/Project';

interface IRouteParams {
  id?: string;
}

const { id }: IRouteParams = useRoute().params;
const { fetchProjects, getProject } = useProjectsStore();

await fetchProjects();

const project: IProject | undefined = getProject(id);

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
