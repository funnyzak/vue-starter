import { UserInfoVO } from '@/api/login/types';
import { defineStore } from 'pinia';
import { store } from '../index';

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
    getUserInfo(): UserInfoVO {
      return this;
    }
  },
  actions: {
    setUserInfo(userInfo: UserInfoVO) {
      this.resetState();

      this.permissions = userInfo.permissions;
      this.roles = userInfo.roles;
      this.user = userInfo.user;
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
