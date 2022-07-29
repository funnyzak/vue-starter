<script setup lang="ts">
import { setToken } from '@/utils/auth';

import { useI18n } from '@/hooks/web/useI18n';
import { useAppStore } from '@/store/modules/app';
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';

const { push } = useRouter();

const { t } = useI18n();
const appStore = useAppStore();
const userStore = useUserStore();

const userToken = {
  id: 1,
  accessToken: 'accessToken7',
  refreshToken: 'refreshToken7',
  userId: 1,
  userType: 1,
  clientId: '7',
  expiresTime: new Date().getTime() + 3600
};

// 登录
const handleLogin = async () => {
  userStore.setUserInfo({
    user: {
      id: 1,
      nickname: 'leon'
    },
    permissions: ['user.message'],
    roles: []
  });

  // 设置登陆token
  setToken(userToken);

  // 跳转到授权页
  push({ name: 'UserMessage' });
};
</script>
<template>
  <div>
    <div>{{ appStore.getAppName }}</div>
    <button @click="handleLogin">{{ t('common.login') }}</button>
  </div>
</template>
