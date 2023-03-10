import { defineStore, acceptHMRUpdate } from 'pinia';
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { IProject } from '~/types/Project';

interface IDataFetch extends ParsedContent {
  projects: IProject[]
}

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<IProject[]>([]);

  const fetchProjects = async () => {
    const { data } = await useAsyncData('projects',
      () => queryContent<IDataFetch>('projects').only('projects').findOne()
    );

    projects.value = data.value?.projects || [];
  };

  const getProject = (id?: string): IProject | undefined => {
    if (!id || isNaN(Number(id))) {
      return undefined;
    }

    return projects.value.find((item) => item.id === +id)!;
  };

  return { projects, fetchProjects, getProject };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectsStore, import.meta.hot));
}
