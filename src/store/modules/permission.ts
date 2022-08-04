import { allModulesRoutes } from '@/router/modules';
import remainingRouter from '@/router/remaining';
import { generateRoutes } from '@/utils/routerHelper';
import { cloneDeep } from 'lodash-es';
import { defineStore } from 'pinia';
import { store } from '../index';

export interface PermissionState {
  routers: AppRouteRecordRaw[];
  addRouters: AppRouteRecordRaw[];
  isAddRouters: boolean;
}

export const usePermissionStore = defineStore({
  id: 'permission',
  state: (): PermissionState => ({
    routers: [],
    addRouters: [],
    isAddRouters: false
  }),
  persist: {
    enabled: true,
    strategies: []
  },
  getters: {
    getRouters(): AppRouteRecordRaw[] {
      return this.routers;
    },
    getAddRouters(): AppRouteRecordRaw[] {
      return cloneDeep(this.addRouters);
    },
    getIsAddRouters(): boolean {
      return this.isAddRouters;
    }
  },
  actions: {
    generateRoutes(userPermissions: string[]): Promise<unknown> {
      return new Promise<void>((resolve) => {
        let routerMap: AppRouteRecordRaw[] = [];

        routerMap = generateRoutes(allModulesRoutes, userPermissions);
        // 动态路由，404一定要放到最后面
        this.addRouters = routerMap.concat([
          {
            path: '/:path(.*)*',
            redirect: '/404',
            name: '404Page',
            meta: {
              hidden: true,
              breadcrumb: false
            }
          }
        ]);
        // 渲染菜单的所有路由
        this.routers = cloneDeep(remainingRouter).concat(routerMap);
        resolve();
      });
    },
    setIsAddRouters(state: boolean): void {
      this.isAddRouters = state;
    }
  }
});

export const usePermissionStoreWithOut = () => {
  return usePermissionStore(store);
};
