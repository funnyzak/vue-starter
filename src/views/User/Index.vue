<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from '@/hooks/web/useI18n';
import { clearAuth } from '@/utils/auth';
import { resetRouterLeaveRemain } from '@/router';
const { t } = useI18n();

const { push } = useRouter();
</script>
<template>
  <section class="flex mt-10 text-center space-y-2 space-x-2 flex-col">
    <div class="mx-auto">这里是用户中心。</div>
    <button
      @click="
        () => {
          push({ name: 'UserPost' });
        }
      "
      >{{ t('router.post') }}</button
    >
    <button
      @click="
        () => {
          push({ name: 'HomeIndex' });
        }
      "
      >{{ t('common.back') }}</button
    >
    <button
      @click="
        () => {
          clearAuth();
          resetRouterLeaveRemain();
          push({ name: 'HomeIndex' });
        }
      "
      >{{ t('common.logout') }}</button
    >
  </section>
</template>
