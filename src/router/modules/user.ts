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
        name: 'UserMessage',
        meta: {
          title: t('router.userMessage'),
          permissions: { list: ['user.home'] }
        }
      }
    ]
  }
];

export default userRouter;
