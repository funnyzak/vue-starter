import { getPermissionList } from './auth'

/**
 * 判断用户对某个资源是否有权限
 * @param permissionValue 要判断的功能权限
 * @param userPermissions 所拥有的功能权限
 */
export default function checkPermission(permissionValue?: PermissionLogic, permissionList?: string[]) {
  /**
   * 不需要权限
   */
  if (!permissionValue) {
    console.log('no need permission')
    return true
  }

  // 如果未传权限列表则使用缓存的权限列表
  if (!permissionList) {
    permissionList = getPermissionList()
  }

  const { logic, list: permissions } = permissionValue

  if (logic === 'OR' || !logic) {
    return permissions.some((permission) => {
      return permissionList!.includes(permission)
    })
  } else if (logic === 'AND') {
    return permissions.every((permission) => {
      return permissionList!.includes(permission)
    })
  } else {
    console.error(`need permissions! Like v-permission="['user.home']"`)
    return false
  }
}
