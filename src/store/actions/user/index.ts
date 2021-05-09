import user from './actionType'
import { IUser, IUserBaseInfo } from '@/store/types/user'

export default user

export const login = (token: string): IAction<IUser> => (
  { type: user.SET_TOKEN, payload: { token } }
)

export const getInfo = (data: IUserBaseInfo): IAction<IUserBaseInfo> => (
  { type: user.SET_INFO, payload: data }
)