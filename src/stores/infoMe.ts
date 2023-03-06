import { defineStore, acceptHMRUpdate } from 'pinia';
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { IInfoAboutYourSelf } from '~/types/InfoAboutYourSelf';

interface DataFetch extends ParsedContent {
    infoAboutYourSelf: IInfoAboutYourSelf[]
}

export const useInfoMeStore = defineStore('info-me', () => {
  const infoAboutYourself = ref<IInfoAboutYourSelf[]>([]);

  const fetchInfoMe = async () => {
    const { data } = await useAsyncData('info',
      () => queryContent<DataFetch>('info').only('infoAboutYourSelf').findOne()
    );

    infoAboutYourself.value = data.value?.infoAboutYourSelf || [];
  };

  return { infoAboutYourself, fetchInfoMe };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useInfoMeStore, import.meta.hot));
}
