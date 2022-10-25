<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from '@/hooks/web/useI18n'
import { clearAuth } from '@/utils/auth'
import { resetRouterLeaveRemain } from '@/router'
import { useUserStore } from '@/store/modules/user'
const { t } = useI18n()

const userStore = useUserStore()
const { push } = useRouter()
</script>
<template>
  <section class="flex mt-10 text-center space-y-2 space-x-2 flex-col">
    <div class="mx-auto">这里是用户中心。</div>
    <button
      @click="
        () => {
          push({ name: 'UserPost' })
          return undefined
        }
      "
      >{{ t('router.post') }}</button
    >
    <button
      @click="
        () => {
          push({ name: 'UserPost2' })
          return undefined
        }
      "
      >文章2</button
    >
    <button
      @click="
        () => {
          push({ name: 'HomeIndex' })
          return undefined
        }
      "
      >{{ t('common.back') }}</button
    >
    <button
      @click="
        () => {
          clearAuth()
          resetRouterLeaveRemain()
          userStore.resetState()
          push({ name: 'HomeIndex' })
          return undefined
        }
      "
      >{{ t('common.logout') }}</button
    >
  </section>
</template>
