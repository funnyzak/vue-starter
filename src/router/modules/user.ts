import { Layout } from '@/utils/routerHelper';
import { useI18n } from '@/hooks/web/useI18n';
const { t } = useI18n();

const userRouter: AppRouteRecordRaw[] = [
  {
    path: '/user',
    component: Layout,
    name: 'User',
    redirect: '/user/home',
    meta: {},
    icon: undefined,
    children: [
      {
        path: 'home',
        component: () => import('@/views/User/Index.vue'),
        name: 'UserHome',
        meta: {
          noCache: false,
          title: t('router.userMessage'),
          permissions: { list: ['user.home'] }
        }
      },
      {
        path: 'post',
        component: () => import('@/views/User/Post.vue'),
        name: 'UserPost',
        keepAlive: true,
        meta: {
          noCache: false,
          title: t('router.userPost'),
          permissions: { list: ['user.home'] }
        }
      },
      {
        path: 'post2',
        component: () => import('@/views/User/Post.vue'),
        name: 'UserPost2',
        keepAlive: true,
        meta: {
          noCache: false,
          title: t('router.userPost'),
          permissions: { list: ['user.post'] }
        }
      }
    ]
  }
];

export default userRouter;
