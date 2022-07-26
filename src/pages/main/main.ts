import { createApp } from 'vue';

// 引入全局样式
import './style.css';

import App from './App.vue';

// 引入状态管理
import { setupStore } from '@/store';

// 初始化多语言
import { setupI18n } from '@/plugins/vueI18n';

// 权限
import { setupAuth } from '@/directives';

// 创建实例
const setupAll = async () => {
  const app = createApp(App);

  await setupI18n(app);

  setupAuth(app);

  setupStore(app);

  app.mount('#app');
};

setupAll();
