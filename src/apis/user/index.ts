import request from '../../utils/request'
import { ILoginReq, ILoginRes } from '../types/user'


export function login(data: ILoginReq) {
  return request.request<any, BaseResponse<ILoginRes>>({
    url: '/user/login',
    method: 'POST',
    data
  })
}