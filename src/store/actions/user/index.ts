import { login } from '@/apis/user'
import { ILoginReq } from '@/apis/types/user'
import { Dispatch } from 'redux'
import user from './actionType'

export default user

export const userLogin = (params: ILoginReq) => (
  async (dispatch: Dispatch) => {
    try {
      let { data } = await login(params)
      if (data.data.token) {
        dispatch({
          type: user.SET_TOKEN,
          payload: {
            token: data.data.token
          }
        })
      } else {
        dispatch({
          type: user.LOGIN_FAILED
        })
      }
    } catch {
      dispatch({
        type: user.LOGIN_FAILED
      })
    }
    
  }
)