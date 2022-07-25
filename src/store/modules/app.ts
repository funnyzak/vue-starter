import { defineStore } from 'pinia';
import { store } from '../index';
import { useCache } from '@/hooks/web/useCache';
import { appModules } from '@/config/app';
import type { AppState } from '@/config/app';
const { wsCache } = useCache();

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => appModules,
  persist: {
    enabled: true
  },
  getters: {
    getAppName(): string {
      return this.appName;
    },
    getIsDark(): boolean {
      return this.isDark;
    }
  },
  actions: {
    setAppName(appName: string) {
      this.appName = appName;
    },
    setLocale(isDark: boolean) {
      this.isDark = isDark;
      wsCache.set('isDark', this.isDark);
    }
  }
});

export const useAppStoreWithOut = () => {
  return useAppStore(store);
};
