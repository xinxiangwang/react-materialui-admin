import { RoutesConfig } from '../router'
const routesFlat = (routes: Array<RoutesConfig>) => {
  const result: Array<RoutesConfig> = []
  let pathJoin = (path: string) => path.startsWith('/') ? '' : '/'

  routes.forEach(route => {
    const map = (child: RoutesConfig, routePath: string = '', roles: typeof route.roles = undefined) => {
      let path = routePath + pathJoin(child.path) + child.path
      if (child.roles) {
        if (roles) {
          roles = child.roles.concat(roles)
        } else {
          roles = child.roles
        }
      }
      result.push({
        ...child,
        children: undefined,
        path,
        roles
      })
      child.children?.forEach(chl => map(chl, path, roles))
    }
    map(route)
  })
  return result
}
export default routesFlat
