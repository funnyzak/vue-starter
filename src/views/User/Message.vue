<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from '@/hooks/web/useI18n';
const { t } = useI18n();

const { push } = useRouter();
</script>
<template>
  <section>
    <div>Hello, Friend 😄！</div>
    <button
      @click="
        () => {
          push('/');
        }
      "
      >{{ t('common.back') }}</button
    >
  </section>
</template>
