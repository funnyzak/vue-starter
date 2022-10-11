import { defineStore } from 'pinia';
import { store } from '../index';
import { useCache } from '@/hooks/web/useCache';
import { LocaleMap, localeModules } from '@/config/locale';
import type { LocaleState } from '@/config/locale';

const { wsCache } = useCache();

export const useLocaleStore = defineStore({
  id: 'locales',
  state: (): LocaleState => localeModules,
  persist: {
    enabled: true
  },
  getters: {
    getLocaleMaps(): LocaleMap[] {
      return this.localeMaps;
    },
    getCurrentLocale(): LocaleMap {
      return this.localeMaps.find((item) => item.lang === this.currentLocale.lang) || this.localeMaps[0];
    }
  },
  actions: {
    setCurrentLocale(localeMap: LocaleMap) {
      this.currentLocale.lang = localeMap?.lang;
      wsCache.set('lang', localeMap?.lang);
    }
  }
});

export const useLocaleStoreWithOut = () => {
  return useLocaleStore(store);
};
