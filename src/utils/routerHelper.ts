import { isString, isUrl } from '@/utils/is';
import type { RouteLocationNormalized, RouteMeta, RouteRecordNormalized } from 'vue-router';
import checkPermission from './permission';

const modules = import.meta.glob('../views/**/*.{vue,tsx}');

/* Layout */
export const Layout = () => import('@/layout/Layout.vue');

export const getParentLayout = () => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: 'ParentLayout'
      });
    });
};

// 按照路由中meta下的rank等级升序来排序路由
export function ascending(arr: any[]) {
  arr.forEach((v) => {
    if (v?.meta?.rank === null) v.meta.rank = undefined;
    if (v?.meta?.rank === 0) {
      if (v.name !== 'home' && v.path !== '/') {
        console.warn('rank only the home page can be 0');
      }
    }
  });
  return arr.sort((a: { meta: { rank: number } }, b: { meta: { rank: number } }) => {
    return a?.meta?.rank - b?.meta?.rank;
  });
}

export const getRawRoute = (route: RouteLocationNormalized): RouteLocationNormalized => {
  if (!route) return route;
  const { matched, ...opt } = route;
  return {
    ...opt,
    matched: (matched
      ? matched.map((item) => ({
          meta: item.meta,
          name: item.name,
          path: item.path
        }))
      : undefined) as RouteRecordNormalized[]
  };
};

// 路由生成
export const generateRoutes = (
  routes: AppRouteRecordRaw[],
  userPermissions?: string[]
): AppRouteRecordRaw[] => {
  const res: AppRouteRecordRaw[] = [];
  const modulesRoutesKeys = Object.keys(modules);

  for (const route of routes) {
    // 如果没有权限则忽略此路由
    if (!checkPermission((route.meta as RouteMeta)?.permissions, userPermissions)) {
      continue;
    }

    // 路由地址转首字母大写驼峰，作为路由名称，适配keepAlive
    let data: AppRouteRecordRaw = {
      ...route,
      name: route.name || toCamelCase(route.path, true),
      meta: {
        ...route.meta,
        title: route.meta?.title || route.name,
        icon: route.meta?.icon || route.icon
      }
    };

    // 目录
    if (route.children) {
      data.component = Layout;
      data.redirect = getRedirect(route.path, route.children);
      // 外链
    } else if (isUrl(route.path)) {
      data = {
        path: '/external-link',
        component: Layout,
        meta: {
          name: route.name
        },
        children: [data]
      } as AppRouteRecordRaw;
      // 菜单
    } else {
      if (route?.component && !isString(route.component)) {
        data.component = route.component;
      } else {
        // 对传component组件路径和不传做兼容（如果传component组件路径，那么path可以随便写，如果不传，component组件路径会根path保持一致）
        const index = route?.component
          ? modulesRoutesKeys.findIndex((ev) => ev.includes(route.component))
          : modulesRoutesKeys.findIndex((ev) => ev.includes(route.path));
        data.component = modules[modulesRoutesKeys[index]];
      }
    }
    if (route.children) {
      data.children = generateRoutes(route.children);
    }
    res.push(data);
  }
  return res;
};
export const getRedirect = (parentPath: string, children: AppRouteRecordRaw[]): string => {
  if (!children || children.length == 0) {
    return parentPath;
  }
  const path = generateRoutePath(parentPath, children[0].path);
  // 递归子节点
  if (children[0].children) return getRedirect(path, children[0].children);
  return path;
};
const generateRoutePath = (parentPath: string, path: string) => {
  if (parentPath.endsWith('/')) {
    parentPath = parentPath.slice(0, -1); // 移除默认的 /
  }
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  return parentPath + path;
};
export const pathResolve = (parentPath: string, path: string) => {
  if (isUrl(path)) return path;
  const childPath = path.startsWith('/') || !path ? path : `/${path}`;
  return `${parentPath}${childPath}`.replace(/\/\//g, '/');
};

function toCamelCase(str: string, upperCaseFirst: boolean) {
  str = (str || '').toLowerCase().replace(/-(.)/g, function (group1: string) {
    return group1.toUpperCase();
  });

  if (upperCaseFirst && str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
  }

  return str;
}
