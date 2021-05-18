import { RoutesConfig } from '../router/types'

/**
 * 路由配置扁平化
 * @param {RoutesConfig} routes 嵌套路由配置
 * @param {(route: RoutesConfig) => T} callBack
 * @returns {RoutesConfig} 一维数组路由
 */
const routesFlat = <T = void>(routes: Array<RoutesConfig>, callBack: (route: RoutesConfig) => T) => {
  const result: Array<RoutesConfig> = []
  let pathJoin = (path: string) => path.startsWith('/') ? '' : '/'

  routes.forEach(route => {
    const map = (child: RoutesConfig, routePath: string = '') => {
      let path = routePath + pathJoin(child.path) + child.path
      let newRoute = {
        ...child,
        children: undefined,
        path
      }
      callBack(newRoute)
      result.push(newRoute)
      child.children?.forEach(chl => map(chl, path))
    }
    map(route)
  })
  
  return result
}
export default routesFlat



