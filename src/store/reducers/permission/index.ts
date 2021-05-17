import permission from '../../actions/permission/actionType'
import { asyncRoutes } from '@/router'
import { ISetRouteAction } from '../../types/permission'
import { RoutesConfig } from '@/router/types'
import { hasPermission, filterAsyncRoutes } from '@/utils/permission'

type AR = Array<RoutesConfig>

const initState: AR = []

export default (state: AR = initState, action: IAction<ISetRouteAction>): AR => {
  switch(action.type) {
    case permission.GENERATE_ROUTES:
      const roles = action.payload
      let accessedRoutes: AR = []
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      return accessedRoutes
    default:
      return state
  }
}