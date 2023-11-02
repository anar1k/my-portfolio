import { defineStore, acceptHMRUpdate } from 'pinia';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import type { IInfoAboutYourSelf } from '~/types/InfoAboutYourSelf';

interface IDataFetch extends ParsedContent {
    infoAboutYourSelf: IInfoAboutYourSelf[]
}

export const useInfoMeStore = defineStore('info-me', () => {
  const infoAboutYourself = ref<IInfoAboutYourSelf[]>([]);

  const fetchInfoMe = async () => {
    const { data } = await useAsyncData('info',
      () => queryContent<IDataFetch>('info').only('infoAboutYourSelf').findOne()
    );

    infoAboutYourself.value = data.value?.infoAboutYourSelf || [];
  };

  return { infoAboutYourself, fetchInfoMe };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useInfoMeStore, import.meta.hot));
}
