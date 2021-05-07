import request from '../../utils/request'
import { AxiosPromise } from 'axios'
import { ILoginReq, ILoginRes } from '../types/user'

export function login(data: ILoginReq): AxiosPromise<ILoginRes> {
  return request({
    url: '/asdasd',
    method: 'POST',
    data
  })
}