import user from './actionType'
import { IUser } from '@/store/types/user'
import { removeToken } from '@/utils/auth'

export default user

export const login = (token: string): IAction<IUser> => {
  return { type: user.SET_TOKEN, payload: { token } }
}

export const setInfo = (data: IUser): IAction<IUser> => (
  { type: user.SET_INFO, payload: data }
)

export const logOut = () => {
  removeToken()
  return { type: user.LOG_OUT }
}
