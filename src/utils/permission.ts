import { RoutesConfig } from '@/router/types'

type AR = Array<RoutesConfig>
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
 export function hasPermission(roles: Array<string>, route: RoutesConfig): boolean {
  if (route.roles) {
    return roles.some(role => route.roles?.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
 export function filterAsyncRoutes(routes: AR, roles: Array<string>): AR {
  const res: AR = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}