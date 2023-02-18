import { defineStore, acceptHMRUpdate } from 'pinia';
import { Theme } from '~/types/Settings';

export const useAppSettingsStore = defineStore('app-settings', {
  state: () => ({
    theme: 'dark' as Theme
  }),

  actions: {
    setTheme (payload:Theme = 'light') {
      this.theme = payload;
    }
  },

  persist: {
    storage: persistedState.sessionStorage
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppSettingsStore, import.meta.hot));
}
