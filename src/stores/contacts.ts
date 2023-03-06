import { defineStore, acceptHMRUpdate } from 'pinia';
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { IContact } from '~/types/Contacts';

export const useContactsStore = defineStore('contacts', () => {
  const contacts = ref<IContact[]>([]);

  const fetchContacts = async () => {
    interface Data extends ParsedContent {
      contacts: IContact[]
    }

    const { data } = await useAsyncData('contacts', () => queryContent<Data>('/contacts').findOne());

    contacts.value = data.value?.contacts || [];
  };

  return { contacts, fetchContacts };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useContactsStore, import.meta.hot));
}
