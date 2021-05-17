import { IUser } from './user'
import { IPermissionState } from './permission'

export interface IState {
  user: IUser
  permission: IPermissionState
}