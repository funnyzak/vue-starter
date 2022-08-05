<script setup lang="ts">
import { getUser } from '@/utils/auth';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();

// 读取本地用户缓存到store
const user = getUser();
if (user) {
  userStore.setUserInfo(user);
}
</script>
<template>
  <RouterView />
</template>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}

html,
body {
  padding: 0 !important;
  margin: 0;
  #app {
    .size;
  }
}
</style>
