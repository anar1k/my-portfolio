import { defineStore, acceptHMRUpdate } from 'pinia';
import { useTheme } from 'vuetify';
import { useCookie } from '#app';
import { SettingsState } from '~/types/Settings';

export const useAppSettingsStore = defineStore('app-settings', () => {
  const globalTheme = useTheme();

  const state: SettingsState = reactive({
    theme: ''
  });

  const setTheme = (payload:string) => {
    let currentTheme: string;

    if (!payload) {
      currentTheme = state.theme === 'light' ? 'dark' : 'light';
    } else {
      currentTheme = payload;
    }

    globalTheme.global.name.value = currentTheme;
    state.theme = currentTheme;
  };

  const fetchTheme = () => {
    const appSettingsCookie = useCookie<SettingsState>('app-settings',
      {
        default: () => ({ theme: globalTheme.global.name.value }),
        watch: false
      }).value;

    const themeInCookie:string = appSettingsCookie?.theme;

    if (themeInCookie) {
      setTheme(themeInCookie);
    } else {
      setTheme(globalTheme.global.name.value);
    }
  };

  return { ...toRefs(state), setTheme, fetchTheme };
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
