import { defineStore, acceptHMRUpdate } from 'pinia';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export const useSkillsStore = defineStore('skills', () => {
  const getRequest = async <T>(path: string) => {
      type TDataFetch<T> = {
          [key in string]: T;
      }

      interface IDataFetch extends ParsedContent, TDataFetch<T> {}

      const { data, error } = await useAsyncData(path,
        () => queryContent<IDataFetch>(path).only(path).findOne()
      );

      return { data, error };
  };

  return { getRequest };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSkillsStore, import.meta.hot));
}
