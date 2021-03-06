import { user } from '../../actions'
import { IUser } from '../../types/user'
import { getToken } from '@/utils/auth'

const initUserState: IUser = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

export default (state: IUser = initUserState, action: IAction<IUser>): IUser => {
  switch(action.type) {
    case user.SET_TOKEN:
      return {
        ...initUserState,
        token: action.payload.token
      }
    case user.SET_INTRODUCTION:
      return {
        ...initUserState,
        introduction: action.payload.introduction
      }
    case user.SET_NAME:
      return {
        ...initUserState,
        name: action.payload.name
      }
    case user.SET_AVATAR:
      return {
        ...initUserState,
        avatar: action.payload.avatar
      }
    case user.SET_ROLES:
      return {
        ...initUserState,
        roles: action.payload.roles
      }
    case user.SET_INFO:
      return {
        ...action.payload
      }
    case user.LOGIN_FAILED, user.LOG_OUT:
      return {
        token: '',
        name: '',
        avatar: '',
        introduction: '',
        roles: []
      }
    default:
      return state
  }
}