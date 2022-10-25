<script setup lang="ts">
// import { useRouter } from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue'

import { computed } from 'vue'
import { useLocaleStoreWithOut } from '@/store/modules/locale'
import { useUserStore } from '@/store/modules/user'

import { useAppStore } from '@/store/modules/app'
import { useLocale, useI18n } from '@/hooks'
import { useMouse, useCounter } from '@vueuse/core'

// const { push } = useRouter();

const { x, y } = useMouse()
const { count, inc, dec } = useCounter()

const appStore = useAppStore()
const userStore = useUserStore()
const localeStore = useLocaleStoreWithOut()
const { t } = useI18n()
const { changeLocale } = useLocale()

const appName = computed(() => appStore.getAppName)
const userInfo = computed(() => userStore.getUserInfo)
</script>

<template>
  <div class="container mx-auto flex flex-col w-80% items-center pt-15 space-y-3 text-center">
    <dl class="inline-grid grid-rows-1 grid-cols-3 mx-auto">
      <dt>{{ t('common.locale') }}</dt>
      <dd
        v-for="(localMap, idx) in localeStore.getLocaleMaps"
        :key="idx"
        :style="{
          color: localeStore.getCurrentLocale.lang === localMap.lang ? 'blue' : 'black'
        }"
        class="pr-2"
        @click="
          () => {
            changeLocale(localMap.lang)
            return undefined
          }
        "
      >
        {{ localMap.name }}
      </dd>
    </dl>
    <div class="flex sm:flex-row <sm:flex-col <sm:space-y-10 mx-auto sm:space-x-10">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="w-30" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="w-30" alt="Vue logo" />
      </a>
    </div>
    <div class="text-center">Mouse: {{ x }} x {{ y }}</div>
    <div class="border-blue-200">
      Counter: {{ count }}
      <a
        @click="
          () => {
            inc()
            return undefined
          }
        "
        style="margin-right: 10px"
        >+</a
      >
      <a
        @click="
          () => {
            dec()
            return undefined
          }
        "
        >-</a
      >
    </div>
    <div>
      权限例子：<router-link :to="{ path: '/user/home' }">进入用户中心 {{ userInfo.user.nickname }}</router-link>
    </div>
  </div>
  <div class="text-center mt-10 space-y-4">
    <HelloWorld :msg="appName" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
