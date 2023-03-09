import { defineStore, acceptHMRUpdate } from 'pinia';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { ISkill } from '~/types/Skill';

interface DataFetch extends ParsedContent {
  skills: ISkill[]
}

export const useSkillsStore = defineStore('skills', () => {
  const allSkills = ref<ISkill[]>([]);

  const mainSkills = computed(() => allSkills.value.filter((item) => item.isMain));

  const fetchSkills = async () => {
    const { data } = await useAsyncData('skills',
      () => queryContent<DataFetch>('skills').only('skills').findOne()
    );

    allSkills.value = data.value?.skills || [];
  };

  return { allSkills, mainSkills, fetchSkills };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSkillsStore, import.meta.hot));
}
