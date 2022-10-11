<script setup lang="ts">
import { getPosts } from '@/api/demo';
import { PostVO } from '@/api/demo/types';
import { useI18n } from '@/hooks/web/useI18n';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
const { t } = useI18n();

defineOptions({
  // 定义组件名称
  name: 'UserPost',
  inheritAttrs: false
});

const { back } = useRouter();
let postList = ref<PostVO[]>([]);

function loadPosts() {
  getPosts().then((res) => {
    postList.value = res;
  });
  return undefined;
}

onBeforeMount(() => {
  loadPosts();
});
</script>
<template>
  <section class="mt-10 text-center space-y-2 space-x-2 flex-col">
    <div class="mx-auto"
      >这是文章中心。
      <button
        @click="
          () => {
            back();
            return undefined;
          }
        "
        >{{ t('common.back') }}</button
      >
    </div>
    <div class="flex-row space-x-5">
      <button @click="loadPosts">加载数据</button>
      <button
        @click="
          () => {
            postList = [];
            return undefined;
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
