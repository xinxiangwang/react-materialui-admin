import { login } from '@/apis/user'
import { ILoginReq } from '@/apis/user/user.type'
import { Dispatch } from 'redux'
export default {
  SET_TOKEN: Symbol(),
  SET_INTRODUCTION: Symbol(),
  SET_NAME: Symbol(),
  SET_AVATAR: Symbol(),
  SET_ROLES: Symbol()
}

export const userLogin = (params: ILoginReq) => (
  async (dispatch: Dispatch) => {
    let ret = await login(params)
    if (ret.data.token)
    ret.data.token
  }
)