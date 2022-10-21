// 引入windi css
import '@/plugins/windi.css'

// 导入全局的svg图标
import '@/plugins/svgIcon'

// 引入全局样式
import '@/styles/index.less'

// 引入动画
import '@/plugins/animate.css'

import App from './App.vue'

// 引入状态管理
import { setupStore } from '@/store'

// 初始化多语言
import { setupI18n } from '@/plugins/vueI18n'

// 权限
import { setupAuth } from '@/directives'

// 路由
import { setupRouter } from '@/router'

import { createApp } from 'vue'

// 创建实例
const setupAll = async () => {
  const app = createApp(App)

  await setupI18n(app)

  setupStore(app)

  setupRouter(app)

  setupAuth(app)

  app.mount('#app')
}

setupAll()
