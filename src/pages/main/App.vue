<script setup lang="ts">
import { computed } from 'vue';
import { useLocaleStoreWithOut } from '@/store/modules/locale';
import { useAppStore } from '@/store/modules/app';
import { useI18n } from '@/hooks/web/useI18n';
import { useLocale } from '@/hooks/web/useLocale';
import { useMouse, useCounter } from '@vueuse/core';

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from 'components/HelloWorld.vue';

const { x, y } = useMouse();
const { count, inc, dec } = useCounter();

const appStore = useAppStore();
const localeStore = useLocaleStoreWithOut();
const { t } = useI18n();
const { changeLocale } = useLocale();

const appName = computed(() => appStore.getAppName);
</script>

<template>
  <div>
    <dl>
      <dt style="display: inline">{{ t('common.locale') }}</dt>
      <dd
        v-for="(localMap, idx) in localeStore.getLocaleMaps"
        :key="idx"
        :style="{
          cursor: 'pointer',
          display: 'inline',
          color: localeStore.getCurrentLocale.lang === localMap.lang ? 'blue' : 'black'
        }"
        @click="changeLocale(localMap.lang)"
      >
        {{ localMap.name }}
      </dd>
    </dl>

    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div>Mouse: {{ x }} x {{ y }}</div>
    <div>
      Counter: {{ count }}
      <a @click="inc()" style="margin-right: 10px">+</a>
      <a @click="dec()">-</a>
    </div>
  </div>
  <HelloWorld :msg="appName" />
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
