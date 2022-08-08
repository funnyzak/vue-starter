<script setup lang="ts">
import { getPosts } from '@/api/demo';
import { PostVO } from '@/api/demo/types';
import { useI18n } from '@/hooks/web/useI18n';
import { useCacheViewStore } from '@/store/modules/cacheView';
import { onBeforeMount, ref, unref } from 'vue';
import { useRouter } from 'vue-router';
const { t } = useI18n();

const cacheViewStore = useCacheViewStore();
const { back } = useRouter();
let postList = ref<PostVO[]>([]);

function loadPosts() {
  getPosts().then((res) => {
    postList.value = res;
  });
}

const { currentRoute } = useRouter();

onBeforeMount(() => {
  const { name, meta } = unref(currentRoute);
  if (name && !meta.noCache) {
    cacheViewStore.addView(unref(currentRoute));
  }
  loadPosts();
});
</script>
<template>
  <section class="mt-10 text-center space-y-2 space-x-2 flex-col">
    <div class="mx-auto"
      >这是文章中心。 <button @click="back">{{ t('common.back') }}</button>
    </div>
    <div class="flex-row space-x-5">
      <button @click="loadPosts">加载数据</button>
      <button
        @click="
          () => {
            postList = [];
          }
        "
        >清除数据</button
      >
      <input type="text" />
    </div>

    <ul>
      <li v-for="(item, idx) in postList" :key="idx">
        {{ item.title }}
      </li>
    </ul>
  </section>
</template>
