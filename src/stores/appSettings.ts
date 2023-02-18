import { defineStore, acceptHMRUpdate } from 'pinia';
import { SettingsState, Theme } from '~/types/Settings';

export const useAppSettingsStore = defineStore('app-settings', {
  state: ():SettingsState => ({
    theme: 'light'
  }),

  actions: {
    setTheme (payload:Theme = 'light') {
      this.theme = payload;
    }
  },

  persist: {
    storage: persistedState.localStorage
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppSettingsStore, import.meta.hot));
}
