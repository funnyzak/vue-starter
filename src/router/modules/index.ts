// 业务路由集合
import userRouters from './user'

const routeMap: {
  [key: string]: AppRouteRecordRaw[]
} = {
  user: userRouters
}

export const allModulesRoutes = userRouters

export default routeMap
