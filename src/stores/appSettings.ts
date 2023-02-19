import { defineStore, acceptHMRUpdate } from 'pinia';
import { SettingsState } from '~/types/Settings';

export const useAppSettingsStore = defineStore('app-settings', () => {
  const state = reactive<SettingsState>({
    theme: ''
  });

  const setTheme = (payload = 'light') => {
    state.theme = payload;
  };

  return { ...toRefs(state), setTheme };
},
{
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict'
    })
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppSettingsStore, import.meta.hot));
}
