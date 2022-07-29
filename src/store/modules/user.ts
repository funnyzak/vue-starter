import { useCache } from '@/hooks/web/useCache';
import { defineStore } from 'pinia';
import { store } from '../index';

const { wsCache } = useCache();

interface UserInfoVO {
  permissions: string[];
  roles: string[];
  user: {
    avatar?: string;
    id: number;
    nickname: string;
  };
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserInfoVO => ({
    permissions: [],
    roles: [],
    user: {
      id: 0,
      avatar: '',
      nickname: ''
    }
  }),
  persist: {
    enabled: true
  },
  getters: {
    getUserInfo() {
      return this;
    }
  },
  actions: {
    setUserInfo(userInfo: UserInfoVO) {
      this.resetState();

      this.permissions = userInfo.permissions;
      this.roles = userInfo.roles;
      this.user = userInfo.user;

      wsCache.set('user', userInfo);
    },
    resetState() {
      this.permissions = [];
      this.roles = [];
      this.user = {
        id: 0,
        avatar: '',
        nickname: ''
      };
    }
  }
});

export const useUserStoreWithOut = () => {
  return useUserStore(store);
};
