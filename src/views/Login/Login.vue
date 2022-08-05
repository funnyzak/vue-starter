<script setup lang="ts">
import { useI18n } from '@/hooks/web/useI18n';
import { useAppStore } from '@/store/modules/app';
import { usePermissionStore } from '@/store/modules/permission';
import { useUserStore } from '@/store/modules/user';
import { setToken, setUser } from '@/utils/auth';
import { ref, watch } from 'vue';
import type { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const appStore = useAppStore();
const userStore = useUserStore();
const permissionStore = usePermissionStore();

const redirect = ref<string>('');

const { currentRoute, addRoute, push, back } = useRouter();

const userToken = {
  id: 1,
  accessToken: 'accessToken7',
  refreshToken: 'refreshToken7',
  userId: 1,
  userType: 1,
  clientId: '7',
  expiresTime: new Date().getTime() + 3600
};

const userInfo = {
  user: {
    id: 1,
    nickname: 'leon'
  },
  permissions: ['user.home'],
  roles: []
};

// 登录
const handleLogin = async () => {
  userStore.setUserInfo(userInfo);
  setUser(userInfo);

  // 设置登陆token
  setToken(userToken);

  await permissionStore.generateRoutes(userInfo.permissions);

  permissionStore.getAddRouters.forEach((route) => {
    addRoute(route as RouteRecordRaw); // 动态添加可访问路由表
  });

  permissionStore.setIsAddRouters(true);

  // 跳转到授权页
  push({ name: 'UserMessage' });
};

watch(
  () => currentRoute.value,
  (route: RouteLocationNormalizedLoaded) => {
    redirect.value = route?.query?.redirect as string;
  },
  {
    immediate: true
  }
);
</script>
<template>
  <div class="text-center mt-30">
    <div>{{ appStore.getAppName }}</div>
    你还没有登陆哦，现在
    <button class="btn" @click="handleLogin">{{ t('common.login') }}</button
    >？

    <button class="btn" @click="back">{{ t('common.back') }}</button>
  </div>
</template>
