import { useCache } from '@/hooks/web/useCache'
const { wsCache } = useCache()

export interface LocaleState {
  currentLocale: {
    lang: LocaleType;
  };
  localeMaps: LocaleMap[];
}

export interface LocaleMap {
  lang: LocaleType;
  name?: string;
}

export const localeModules: LocaleState = {
  currentLocale: {
    lang: wsCache.get('lang') || 'zh-CN'
  },

  // 多语言
  localeMaps: [
    {
      lang: 'zh-CN',
      name: '简体中文'
    },
    {
      lang: 'en',
      name: 'English'
    }
  ]
}
