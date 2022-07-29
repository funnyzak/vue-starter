import { Layout } from '@/utils/routerHelper';
import { useI18n } from '@/hooks/web/useI18n';
const { t } = useI18n();

const userRouter: AppRouteRecordRaw[] = [
  {
    path: '/user',
    component: Layout,
    name: 'User',
    redirect: '/user/message',
    meta: {},
    children: [
      {
        path: 'message',
        component: () => import('@/views/User/Message.vue'),
        name: 'UserMessage',
        meta: {
          title: t('router.userMessage'),
          permissions: { list: ['user.message'] }
        }
      }
    ]
  }
];

export default userRouter;
