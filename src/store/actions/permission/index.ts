import { ISetRouteAction } from '@/store/types/permission'
import permission from './actionType'

export default permission

export const setRoutes = (data: ISetRouteAction): IAction<ISetRouteAction> => (
  { type: permission.GENERATE_ROUTES, payload: data }
)