<script setup lang="ts">
import { useCacheViewStore } from '@/store/modules/cacheView'
import { computed } from 'vue'

const cacheViewStore = useCacheViewStore()

const getCaches = computed((): string[] => {
  return cacheViewStore.getCachedViews
})
</script>

<template>
  <section :class="['w-[100%] h-[100%] bg-[var(--bg-color)]']">
    <router-view>
      <template #default="{ Component, route }">
        <keep-alive :include="getCaches">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </template>
    </router-view>
  </section>
</template>
