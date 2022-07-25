import { createApp } from 'vue';

// 引入全局样式
import './style.css';

import App from './App.vue';

// 引入状态管理
import { setupStore } from '@/store';

// 创建实例
const setupAll = async () => {
  const app = createApp(App);

  setupStore(app);

  app.mount('#app');
};

setupAll();
