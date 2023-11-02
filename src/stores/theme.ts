import { defineStore, acceptHMRUpdate } from 'pinia';
import { useTheme } from 'vuetify';
import { useCookie } from '#app';

export const useThemeStore = defineStore('theme', () => {
  const globalTheme = useTheme();

  const theme = ref<string>('');

  const setTheme = (payload?: string) => {
    let currentTheme: string;

    if (!payload) {
      currentTheme = theme.value === 'light' ? 'dark' : 'light';
    } else {
      currentTheme = payload;
    }

    globalTheme.global.name.value = currentTheme;
    theme.value = currentTheme;
  };

  const fetchTheme = () => {
    const appSettingsCookie = useCookie<{theme: string}>('theme',
      {
        default: () => ({ theme: globalTheme.global.name.value }),
        watch: false
      }).value;

    const themeInCookie:string = appSettingsCookie.theme ?? '';

    if (themeInCookie) {
      setTheme(themeInCookie);
    } else {
      setTheme(globalTheme.global.name.value);
    }
  };

  return { theme, setTheme, fetchTheme };
},
{
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict'
    })
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot));
}
