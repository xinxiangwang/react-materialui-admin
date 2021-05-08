import request from '../../utils/request'
import { AxiosPromise } from 'axios'
import { ILoginReq, ILoginRes } from '../types/user'


export function login(data: ILoginReq): AxiosPromise<BaseResponse<ILoginRes>> {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}