import userRouters from './user';

const routerMap: {
  [key: string]: AppRouteRecordRaw[];
} = {
  user: userRouters
};

export default routerMap;
