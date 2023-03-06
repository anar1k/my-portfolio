import { defineStore, acceptHMRUpdate } from 'pinia';
import { useContactsStore } from '~/stores/contacts';
import { useThemeStore } from '~/stores/theme';

export const useDefaultAppStore = defineStore('default-layout', () => {
  const fetchLayout = () => {
    const { fetchTheme } = useThemeStore();

    fetchTheme();

    const { fetchContacts } = useContactsStore();

    fetchContacts();
  };

  return { fetchLayout };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDefaultAppStore, import.meta.hot));
}
