<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from '@/hooks/web/useI18n';
import { clearAuth } from '@/utils/auth';
const { t } = useI18n();

const { push } = useRouter();
</script>
<template>
  <section class="mt-10 text-center space-y-2 space-x-2">
    <div class="mx-auto">这里是用户中心。</div>
    <button
      @click="
        () => {
          push('/');
        }
      "
      >{{ t('common.back') }}</button
    >
    <button
      class="underline-blue-500"
      @click="
        () => {
          clearAuth();
          push('/');
        }
      "
      >{{ t('common.logout') }}</button
    >
  </section>
</template>
