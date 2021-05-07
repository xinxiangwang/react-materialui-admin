import { Action } from 'redux'
import { user } from '../../actions'

interface IUser {
  token: string
  name: string
  avatar: string
  introduction: string
  roles: Array<string>
}

interface IAction extends Action<symbol> {
  payload: IUser
}

const initUserState: IUser = {
  token: '',
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

export default (state: IUser = initUserState, action: IAction): IUser => {
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
    default:
      return state
  }
}