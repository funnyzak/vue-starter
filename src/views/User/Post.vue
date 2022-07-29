<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from '@/hooks/web/useI18n';
import { getPosts } from '@/api/demo';
import { PostVO } from '@/api/demo/types';
import { ref } from 'vue';
const { t } = useI18n();

const { back } = useRouter();
let postList = ref<PostVO[]>([]);

function loadPosts() {
  getPosts().then((res) => {
    postList.value = res;
  });
}
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
    </div>

    <ul>
      <li v-for="(item, idx) in postList" :key="idx">
        {{ item.title }}
      </li>
    </ul>
  </section>
</template>
