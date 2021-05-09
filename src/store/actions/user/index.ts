import user from './actionType'
import { IUser } from '@/store/types/user'

export default user

export const login = (token: string): IAction<IUser> => (
  { type: user.SET_TOKEN, payload: { token } }
)