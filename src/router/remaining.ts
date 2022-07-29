import { Layout } from '@/utils/routerHelper';
import { useI18n } from '@/hooks/web/useI18n';
const { t } = useI18n();

// 此路由不需要权限

const remainingRouter: AppRouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {}
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'Home',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/Home/Index.vue'),
        name: 'Index',
        meta: {
          title: t('router.home'),
          noCache: true
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      title: t('router.login')
    }
  },
  {
    path: '/403',
    component: () => import('@/views/Error/403.vue'),
    name: 'NoAccess',
    meta: {
      title: '403'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFound',
    meta: {
      title: '404'
    }
  },
  {
    path: '/500',
    component: () => import('@/views/Error/500.vue'),
    name: 'Error',
    meta: {
      title: '500'
    }
  }
];

export default remainingRouter;
