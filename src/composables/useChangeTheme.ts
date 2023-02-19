import { useTheme } from 'vuetify';
import { storeToRefs } from 'pinia';
import { useCookie } from '#app';
import { useAppSettingsStore } from '~/stores/appSettings';
import { SettingsState } from '~/types/Settings';

export const useChangeTheme = () => {
  const settingsStore = useAppSettingsStore();
  const globalTheme = useTheme();
  const { theme } = storeToRefs(settingsStore);

  const setTheme = (payload?: string) => {
    let currentTheme: string;

    if (!payload) {
      currentTheme = theme.value === 'light' ? 'dark' : 'light';
    } else {
      currentTheme = payload;
    }

    globalTheme.global.name.value = currentTheme;
    settingsStore.setTheme(currentTheme);
  };

  const fetchTheme = () => {
    const appSettingsCookie = useCookie<SettingsState>('app-settings',
      {
        default: () => ({ theme: globalTheme.global.name.value }),
        watch: false
      }).value;

    const themeInCookie = appSettingsCookie?.theme;

    if (themeInCookie) {
      setTheme(themeInCookie);
    } else {
      setTheme(globalTheme.global.name.value);
    }
  };

  return { setTheme, theme, fetchTheme };
};
