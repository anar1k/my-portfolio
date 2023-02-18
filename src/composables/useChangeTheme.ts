import { useTheme } from 'vuetify';
import { storeToRefs } from 'pinia';
import { useAppSettingsStore } from '~/stores/appSettings';

export const useChangeTheme = () => {
  const settingsStore = useAppSettingsStore();
  const globalTheme = useTheme();

  const { theme } = storeToRefs(settingsStore);

  const setTheme = (payload?: string) => {
    let currentTheme:string;

    if (!payload) {
      currentTheme = theme.value === 'light' ? 'dark' : 'light';
    } else {
      currentTheme = payload;
    }

    globalTheme.global.name.value = currentTheme;
    settingsStore.setTheme(currentTheme);
  };

  const fetchTheme = () => {
    const sessionTheme:string = JSON.parse(localStorage.getItem('app-settings')!)?.theme;

    if (sessionTheme) {
      setTheme(sessionTheme);
    } else {
      setTheme(globalTheme.global.name.value);
    }
  };

  return { setTheme, theme, fetchTheme };
};
