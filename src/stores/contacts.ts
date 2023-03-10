import { defineStore, acceptHMRUpdate } from 'pinia';
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { IContact } from '~/types/Contact';

interface IDataFetch extends ParsedContent {
  contacts: IContact[]
}

export const useContactsStore = defineStore('contacts', () => {
  const contacts = ref<IContact[]>([]);

  const fetchContacts = async () => {
    const { data } = await useAsyncData('contacts',
      () => queryContent<IDataFetch>('contacts').only('contacts').findOne()
    );

    contacts.value = data.value?.contacts || [];
  };

  return { contacts, fetchContacts };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useContactsStore, import.meta.hot));
}
