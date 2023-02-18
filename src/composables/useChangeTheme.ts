import { useTheme } from 'vuetify';
import { storeToRefs } from 'pinia';
import { useAppSettingsStore } from '~/stores/appSettings';
import { Theme } from '~/types/Settings';

export const useChangeTheme = () => {
  const settingsStore = useAppSettingsStore();
  const globalTheme = useTheme();

  const { theme } = storeToRefs(settingsStore);

  const setTheme = (payload?: Theme) => {
    let currentTheme:Theme;

    if (!payload) {
      currentTheme = theme.value === 'light' ? 'dark' : 'light';
    } else {
      currentTheme = payload;
    }

    globalTheme.global.name.value = currentTheme;
    settingsStore.setTheme(currentTheme);
  };

  const fetchTheme = () => {
    const sessionTheme:Theme = JSON.parse(localStorage.getItem('app-settings')!)?.theme;

    if (sessionTheme) {
      setTheme(sessionTheme);
    } else {
      setTheme(theme.value);
    }
  };

  return { setTheme, theme, fetchTheme };
};
