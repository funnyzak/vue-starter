import type { App } from 'vue';
import { getAccessToken, getPermissionList } from '@/utils/auth';
import type { RouteRecordRaw } from 'vue-router';
import remainingRouter from './remaining';
import { useTitle } from '@/hooks/web/useTitle';
import { useNProgress } from '@/hooks/web/useNProgress';
import { usePageLoading } from '@/hooks/web/usePageLoading';
import { createRouter, createWebHashHistory } from 'vue-router';
import { usePermissionStoreWithOut } from '@/store/modules/permission';
import { allModulesRoutes } from './modules';

const permissionStore = usePermissionStoreWithOut();

const { start, done } = useNProgress();

const { loadStart, loadDone } = usePageLoading();

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: remainingRouter as RouteRecordRaw[], // 默认加载其他路由
  scrollBehavior: () => ({ left: 0, top: 0 })
});

// 路由不重定向白名单，不需要登陆即可访问
const whiteList = ['/login', '/home'];

// 路由加载前
router.beforeEach(async (to, from, next) => {
  start();
  loadStart();

  if (getAccessToken()) {
    // 如果用户登陆
    // if logined
    if (to.path === '/login') {
      // if login page, then redirect to home page
      next({ path: '/' });
    } else {
      if (permissionStore.getIsAddRouters) {
        next();
        return;
      }

      await permissionStore.generateRoutes(getPermissionList());

      permissionStore.getAddRouters.forEach((route) => {
        router.addRoute(route as unknown as RouteRecordRaw); // 动态添加可访问路由表
      });
      const redirectPath = from.query.redirect || to.path;
      const redirect = decodeURIComponent(redirectPath as string);
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
      permissionStore.setIsAddRouters(true);
      next(nextData);
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 如果白名单则放行
      next();
    } else {
      // 如果非白名单则统一重定向到登陆页
      next(`/login?redirect=${to.path}`);
    }
  }
});

router.afterEach((to) => {
  useTitle(to?.meta?.title as string);
  done(); // 结束Progress
  loadDone();
});

// 移除非白名单路由
export const resetRouterLeaveWhiteList = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', 'Home'];
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
};

// 只留其他路由
export const resetRouterLeaveRemain = (): void => {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    console.log(name);
    if (name && allModulesRoutes.map((v) => v.name).includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
};

// 设置路由
export const setupRouter = (app: App<Element>) => {
  app.use(router);
};

export default router;
