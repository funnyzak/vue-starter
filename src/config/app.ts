import { useCache } from '@/hooks/web/useCache';
const { wsCache } = useCache();

export interface AppState {
  appName: string;
  isDark: boolean;
  pageLoading: boolean;
}

export const appModules: AppState = {
  appName: 'Vite Vue Starter',
  pageLoading: false,
  isDark: wsCache.get('isDark') || false // 是否是暗黑模式
};
